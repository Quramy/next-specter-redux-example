import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      Hello Next.js and Redux example.
      <div>
        <p>Select the following links:</p>
        <Link href="/posts" passHref>
          <a>Posts</a>
        </Link>
      </div>
    </div>
  );
}
