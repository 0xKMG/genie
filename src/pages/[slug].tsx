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
      <h1>{postData.name}</h1>
      <p>Team: {postData.team}</p>
      <p>Attended: {postData.attended_event}</p>
      <p>Summary: {postData.linkedin_summary_gpt4}</p>
      <p>Career Highlight: {postData.linkedin_career_highlight_gpt4}</p>
      <p>Description: {postData.two_word_summary}</p>
      <a href={postData.linkedin}>LinkedIn Profile</a>
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
