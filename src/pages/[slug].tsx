import { useRouter } from 'next/router';

import attendees from '../../attendees.json';

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
  const router = useRouter();

  if (router.isFallback) {
    // Alternatively, you can create a loading component here.
    return <div>Loading...</div>;
  }

  return (
    <div
      className="relative h-screen bg-cover"
      style={{
        backgroundImage: `url('/assets/${postData.slug}.jpg')`,
        backgroundPosition: 'center',
      }}
    >
      <div className="bg-opacity-50/50 flex items-center justify-between bg-black p-4 text-white">
        <div>
          <i className="fas fa-ellipsis-h"></i>
        </div>
        <div>Genie Friends</div>
        <div>
          <i className="fas fa-search"></i>
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-20 p-10 text-center text-white">
        <div className=" mb-10 text-2xl font-bold">
          WELCOME, {postData.name.toUpperCase().split(' ')[0]}
        </div>

        <div className="mx-4 ">
          <p className="mb-6">{postData.linkedin_summary_gpt4}</p>
        </div>

        <button className="mx-auto mt-4 max-w-xs rounded-lg bg-white px-14 py-3 font-bold text-black">
          ENTER THE WORLD
        </button>
      </div>
    </div>
  );
}

// ...getStaticPaths and getStaticProps remain the same...
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
