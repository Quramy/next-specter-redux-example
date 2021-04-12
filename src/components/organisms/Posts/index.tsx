import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Presentation, { Props } from "./presentation";
import { fetchPosts } from "../../../redux/modules/resources/posts";

const useStateAndProps = () => {
  const posts = useSelector(state => state.resources.posts.data);
  const props: Props = {
    posts,
  }
  return props;
};

const Container = () => {
  const props = useStateAndProps();
  return <Presentation {...props} />
}

export default Container;
