import Specter from "@specter/specter";

import { PostsService } from "./posts";
import { PostDetailService } from "./postDetail";

export function registerServices() {
  Specter.registerService(new PostDetailService("post", {}));
  Specter.registerService(new PostsService("posts", {}));
}
