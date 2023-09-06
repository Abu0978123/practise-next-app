import React from "react";

export default function post({ data }) {
  return (
    <div>
      <h1>this is post data</h1>
      <h1>{data.title}</h1>
      <p>{data.body}</p>
    </div>
  );
}

export async function getStaticPaths() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();

  const paths = posts.map((post) => {
    return {
      params: {
        id: post.id.toString(),
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );
  const data = await response.json();
  return {
    props: {
      data,
    },
  };
}
