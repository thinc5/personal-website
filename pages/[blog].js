import fs from "fs";
import path from "path";

import React from "react";
import Head from "next/head";
import marked from "marked";
import matter from "gray-matter";

function BlogPost(metadata, html) {
  return (
    <div>
        <Head>
          <title>{metadata.title}</title>
          <meta title="description" content={metadata.description} />
        </Head>
        <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
};

// Create all of our paths at build time.
export const getStaticPaths = async () => {
  // Read all the blogposts in the blog-posts directory.
  const files = fs.readdirSync("blog-posts");
  const paths = files.map((filename) => {
      return {
        params: {
          slug: filename.replace(".md", "")
        }
    }
  });
  return {
    paths,
    fallback: false
  };
};

// Get all of the data to be rendered in the blog posts.
export const getStaticProps = async ({ params: { slug } }) => {
  const markdownWithMetadata = fs
    .readFileSync(path.join("posts", slug + ".md"))
    .toString();

  // Parse metadata.
  const parsedMarkdown = matter(markdownWithMetadata);
  // Parse markdown and generate html.
  const html = marked(parsedMarkdown.content);

  return {
    props: {
      metadata: parsedMarkdown.data,
      html
    }
  };
};

export default BlogPost;
