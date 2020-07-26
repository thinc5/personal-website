import fs from "fs";
import path from "path";

import marked from "marked";
import matter from "gray-matter";

import Head from "next/head";
import { GetStaticProps, GetStaticPaths } from "next";


import { HomeButton } from "../../components/HomeButton";
import { HeaderLinks } from "../../components/HeaderLinks";

export const BlogPost = ({ metadata, html }) => {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta title="description" content={metadata.description} />
      </Head>
      <header>
        <HeaderLinks />
      </header>
      <main>
        <h2>{metadata.title}</h2>
        <p>Created: {metadata["creation-date"]}</p>
        <p>
          {metadata["creation-date"] !== metadata["edit-date"]
            ? "Edited: " + metadata["edit-date"]
            : ""}
        </p>
        <div dangerouslySetInnerHTML={{ __html: html }} />
        <HomeButton />
      </main>
    </>
  );
};

// Create all of our paths at build time.
export const getStaticPaths: GetStaticPaths = async () => {
  // Read all the blog posts in the blog-posts directory.
  let files = fs.readdirSync("blog-posts");
  // Filter out hidden files and files that don't end with ".md".
  files = files.filter((filename) => {
    return (
      filename[0] !== "." && filename.substr(filename.length - 3, 3) === ".md"
    );
  });

  const paths = files.map((filename) => {
    return {
      params: {
        blog: filename.replace(".md", ""),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

// Get all of the data to be rendered in the blog posts.
export const getStaticProps: GetStaticProps = async ({ params: { blog } }) => {
  const filepath = path.join("blog-posts", blog + ".md");
  const rawPost = fs.readFileSync(filepath, "utf-8");

  // Parse metadata.
  const parsedMarkdown = matter(rawPost);

  // Parse markdown and generate html.
  const html = marked(parsedMarkdown.content);

  return {
    props: {
      metadata: parsedMarkdown.data,
      html: html,
    },
  };
};

export default BlogPost;
