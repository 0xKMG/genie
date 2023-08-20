import Layout from '../layout/Layout';

interface PostProps {
  postData: {
    title: string;
    id: number | string; // depending on what type your id is
    date: string; // or Date if you're using Date objects
  };
}

export default function Post({ postData }: PostProps) {
  return (
    <Layout>
      {postData.title}
      <br />
      {postData.id}
      <br />
      {postData.date}
    </Layout>
  );
}

function getAllPostIds() {
  const names = [
    'karin_chan',
    'eric_san',
    'michael_yau',
    'winson_cheng',
    'wesley_chan',
    'karen_tsoi',
    'katherina_nguyen',
    'ricky_chan',
    'wright_chin',
    'corliss_lam',
    'kk_chan',
    'anna_khomenko',
    'kit_tang',
    'tom_mong',
    'bryan_lam',
    'ben_ng',
    'thomas',
    'suresh_thapa',
    'christine_he',
    'lentz_chun',
    'edmond_fung',
    'stephen_yin_sik_go',
    'wilson_yeh',
    'ka_pui_ng',
    'lok_yeung',
    'madina_jamolova',
    'lawrence_wong',
    'lester_mok',
    'jason',
    'keith_engine',
    'bennett_chan',
    'franka_robin_z',
    'michael_chik',
    'muhammad_saad_shahid_anwel',
    'felix_wong',
    'francis_tse',
    'ying_hong',
    'felix_yu',
  ];

  return names.map((name) => {
    return {
      params: {
        slug: name,
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

export async function getStaticProps() {
  const postData = 'placeholder';
  return {
    props: {
      postData,
    },
  };
}
