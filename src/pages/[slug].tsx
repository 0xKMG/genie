import attendees from '../../attendees.json';
import Layout from '../layout/Layout';

type Params = {
  params: {
    slug: string;
  };
};

interface PostProps {
  postData: {
    team: string;
    name: string;
    linkedin: string;
    attended_event: string;
    linkedin_summary_gpt4: string;
    linkedin_career_highlight_gpt4: string;
    two_word_summary: string;
    slug: string;
  };
}
export default function Post({ postData }: PostProps) {
  return (
    <Layout>
      <div className="flex flex-col items-center space-y-4 p-4 font-serif md:space-y-8 ">
        <div>
          <img
            src="/assets/logo.png"
            alt="Company Logo"
            className="center h-auto w-20" // or any other size you prefer
          />
        </div>
        {/* Profile Picture */}
        <div className="relative h-32 w-32 overflow-hidden rounded-full md:h-48 md:w-48">
          <img
            src={`/assets/${postData.slug}.jpg`} // Change this based on your setup
            alt={postData.name}
            className="absolute left-0 top-0 h-full w-full object-cover"
          />
        </div>
        <h1 className="text-2xl font-semibold md:text-4xl">{postData.name}</h1>
        <p className="md:text-md text-sm text-gray-600">
          {postData.two_word_summary}
        </p>

        <a
          href={postData.linkedin}
          className="flex items-center space-x-2 text-gray-700 hover:text-gray-700"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-linkedin"
            viewBox="0 0 16 16"
          >
            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
          </svg>
        </a>
        <div className="w-full space-y-2 md:space-y-4">
          {/* <p>
            <span className="font-semibold">Team:</span> {postData.team}
          </p> */}
          <p>{postData.linkedin_summary_gpt4}</p>
        </div>
      </div>
    </Layout>
  );
}

function getAllPostIds() {
  return attendees.map((attendee) => {
    return {
      params: {
        slug: attendee.slug,
      },
    };
  });
}
export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: Params) {
  const postData = attendees.find((attendee) => attendee.slug === params.slug);

  // Ensure you have a fallback if postData is not found, or ensure every slug has corresponding data
  if (!postData) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      postData,
    },
  };
}
