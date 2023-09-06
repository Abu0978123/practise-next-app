import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

export default function about({ posts }) {
  const router = useRouter();
  function handleChange() {
    router.push("/");
  }
  return (
    <div>
      <h1>this is about section</h1>
      <button onClick={handleChange}>click me to visit Home page</button>
      <h1>so here is the titles</h1>
      <ul>
        {posts.map((data, index) => {
          return (
            <Link href={`/post/${data.id}`}>
             
              <li key={index}>{data.title}</li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await data.json();
  // console.log(posts)
  return {
    props: {
      posts,
    },
  };
}
