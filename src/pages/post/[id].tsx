
import PostDetail from "../../components/organisms/PostDetail";
import { fetchPostDetail } from "../../redux/modules/resources/postDetail";
import { serverSideSteps } from "../../redux/next-integration/serverSideSteps";

const Page = () => {
  return <PostDetail />;
};

export default Page;

export const getServerSideProps = serverSideSteps(({ query }) => fetchPostDetail(query.id as string))("postDetail");
