import Posts from "../components/organisms/Posts";
import { fetchPosts } from "../redux/modules/resources/posts";
import { serverSideSteps } from "../redux/next-integration/serverSideSteps";

const Page = () => {
  return <Posts />;
};

export default Page;

export const getServerSideProps = serverSideSteps(fetchPosts)("posts");
