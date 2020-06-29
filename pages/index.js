import fs from "fs";

import Head from "next/head";
import Link from "next/link";

export default function Home({ blogPosts }) {
  return (
    <>
      <Head>
        <title>thinc5</title>
        <meta property="og:title" content="Page Title" key="title" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className="title">Welcome to Tom's personal website!</h1>
        <br />
        <Link key={"resume"} href="/resume">
          <h3>Resume</h3>
        </Link>
        <br />
        <h3>Posts</h3>
        {blogPosts.map((post) => {
          return (
            <Link
              key={post}
              href="/blog-posts/[blog]"
              as={"/blog-posts/" + post}
            >
              <a>{post}</a>
            </Link>
          );
        })}
      </main>
    </>
  );
}

export const getStaticProps = async () => {
  const blogPosts = fs
    .readdirSync("blog-posts")
    .filter((filename) => {
      return filename[0] !== ".";
    })
    .map((filename) => filename.replace(".md", ""));
  return {
    props: {
      blogPosts: blogPosts,
    },
  };
};
