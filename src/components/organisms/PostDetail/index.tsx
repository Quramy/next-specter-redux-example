
import React  from "react";
import { useSelector, useDispatch } from "react-redux";
import Presentation, { Props } from "./presentation";
import { fetchPosts } from "../../../redux/modules/resources/posts";

const useStateAndProps = () => {
  const postDetail = useSelector(state => state.resources.postDetail.data);
  const props: Props = {
    postDetail,
  }
  return props;
};

const Container = () => {
  const props = useStateAndProps();
  return <Presentation {...props} />
}

export default Container;
