import Link from "next/link";
import { PostSummary } from "../../../models/post";

export type Props = {
  posts: readonly PostSummary[] | null;
};

const Presentation =  ({ posts }: Props) => {
  if (!posts) return null;
  return (
    <div>
      <p>This is posts list page.</p>
      <ul>
        {posts.map(p => (
          <li key={p.id}>
            <Link passHref href={`/post/${p.id}`}>
            <a>
              {p.title}
            </a>
            </Link>
          </li>
        ))}
      </ul>
      <Link href="/" passHref>
        <a>
          Back to index page
        </a>
      </Link>
    </div>
  );
};

export default Presentation;
