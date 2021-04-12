import { Service } from "@specter/specter";
import { Request, Response } from "@specter/client";
import { PostSummary } from "../../models/post";
import { postDataList } from "../data/posts";

type RequestHeader = {};
type ResponseHeader = {};
type Query = {};
type RequestBody = {};
type ResponseBody = { items: readonly PostSummary[] };

export class PostsService extends Service {
  async read(req: Request<RequestHeader, Query, RequestBody>) {
    console.log("hello");
    const res = new Response<ResponseHeader, ResponseBody>(
      {},
      {
        items: postDataList.map(({ id, title }) => ({ id, title }))
      }
    );
    return res;
  }
}
