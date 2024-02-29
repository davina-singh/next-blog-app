import { sql } from "@vercel/postgres";

export default async function PostPage({ params }) {
  const post = (
    await sql`
  SELECT * FROM posts WHERE post_id = ${params.id}`
  ).rows[0];
  const category = (
    await sql`SELECT category FROM categories WHERE category_id = ${post.category_id}`
  ).rows[0];

  return (
    <div>
      <h1> This is one post from the page</h1>
      <p>{post.title}</p>
      <p>{post.content}</p>
      <p>{category.category}</p>
    </div>
  );
}
