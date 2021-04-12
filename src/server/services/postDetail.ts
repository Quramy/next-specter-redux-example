import { Service, Request, Response } from "@specter/specter";
import { postDataList } from "../data/posts";
import { PostDetail } from "../../models/post";
import { NotFoundError } from "../../models/errors";

type RequestHeader = {};
type ResponseHeader = {};
type Query = { readonly id: string };
type RequestBody = {};
type ResponseBody = PostDetail | NotFoundError;

export class PostDetailService extends Service {
  async read(req: Request<RequestHeader, Query, RequestBody>) {
    const id = req.query.id;
    const item = postDataList.find(item => item.id === id);
    if (!item) {
      const res = new Response<ResponseHeader, ResponseBody>({}, { kind: "notFound", message: "not found" });
      res.setStatus(404);
      return res;
    }
    const res = new Response<ResponseHeader, ResponseBody>({}, item);
    return res;
  }
}
