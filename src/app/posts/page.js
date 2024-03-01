import { sql } from "@vercel/postgres";
import Link from "next/link";

export default async function PostsPage() {
  const posts =
    await sql`SELECT posts.post_id, posts.title, posts.content, categories.category FROM posts JOIN categories ON posts.category_id = categories.category_id;`;
  return (
    <div className="min-h-screen">
      <h1 className="text-xl m-5">
        This is the page where you can view all blog posts by their title
      </h1>
      <h2 className="text-lg m-5">
        if you click on <u>Read more...</u> it will take you to the content of
        that post
      </h2>
      {/* <h3>you can also filter to view blog posts of a particular category</h3>
      <h4>and sort by ascending or descending order</h4> */}
      <ul className="flex flex-wrap">
        {posts.rows.map((post) => (
          <li className="m-7 border-4 w-96 " key={post.id}>
            <h5 className="font-bold">{post.title}</h5>
            <Link
              className="text-decoration-line: underline"
              href={`/posts/${post.post_id}`}
            >
              Read more...
            </Link>
            <p>{post.category}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
