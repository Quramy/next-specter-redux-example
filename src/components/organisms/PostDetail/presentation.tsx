import React from "react";
import Link from "next/link";
import { PostDetail } from "../../../models/post";

export type Props = {
  postDetail: PostDetail | null;
};

const Presentation = ({ postDetail }: Props) =>
  postDetail && (
    <div>
      <h2>{postDetail.title}</h2>
      <p>{postDetail.body}</p>
      <Link href="/posts" passHref>
        <a>
          Back to posts list page
        </a>
      </Link>
    </div>
  );

export default Presentation;
