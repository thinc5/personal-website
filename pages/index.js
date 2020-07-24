import fs from "fs";
import path from "path";

import Head from "next/head";
import Link from "next/link";

import matter from "gray-matter";
import { Fragment } from "react";

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
          <a>Resume</a>
        </Link>
        <br />
        <h3>Posts</h3>
        {blogPosts.map((post) => {
          return (
            <>
              <Link
                key={post.path}
                href="/blog-posts/[blog]"
                as={"/blog-posts/" + post.path}
              >
                <a>{post.name}</a>
              </Link>
              <br />
            </>
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
      return (
        filename[0] !== "." && filename.substr(filename.length - 3, 3) === ".md"
      );
    })
    .map((filename) => filename.replace(".md", ""))
    .map((post) => {
      const filepath = path.join("blog-posts", post + ".md");
      const rawPost = fs.readFileSync(filepath, "utf-8");
      const markdown = matter(rawPost);
      return {
        path: post,
        name: markdown.data["creation-date"] + " " + markdown.data["title"],
        creation_date: markdown.data["creation-date"],
      };
    })
    // Sort by creation date.
    .sort((a, b) => {
      // Reverse the order so we can sort from year to day.
      a = a.creation_date.split("/").reverse().join("/");
      b = b.creation_date.split("/").reverse().join("/");
      return a < b ? 1 : -1;
    });

  return {
    props: {
      blogPosts: blogPosts,
    },
  };
};
