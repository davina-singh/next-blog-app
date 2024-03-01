import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import SubmitButton from "@/app/components/SubmitButton";

export default async function PostPage({ params }) {
  // displays information related to specific post id from posts table
  const post = (
    await sql`
  SELECT * FROM posts WHERE post_id = ${params.id}`
  ).rows[0];
  // displays the category related to the post
  const category = (
    await sql`SELECT category FROM categories WHERE category_id = ${post.category_id}`
  ).rows[0];
  const postComments = (
    await sql`SELECT comment FROM comments WHERE post_id = ${params.id}`
  ).rows;

  // function to handle inserting and displaying comments on a post (linked to posts.post_id
  async function handleComment(formData) {
    "use server";
    const comment = formData.get("comments.comment");
    await sql`INSERT INTO comments (post_id, comment) VALUES (${params.id}, ${comment})`;
    revalidatePath(`/posts/${params.id}]`);
    // redirect(`/posts/${params.id}`);
  }

  return (
    <div className="min-h-screen flex flex-col items-center">
      <h1 className="text-xl m-5">
        This page displays your chosen blog post to read and comment on
      </h1>
      <div className="m-7 border-4 w-1/2 flex flex-col items-center">
        <p className="font-bold">{post.title}</p>
        <p className="italic">{post.content}</p>
        <p>{category.category}</p>

        <h4 className="text-base m-5">Comments:</h4>
        {postComments.map((postComment) => (
          <div key={postComment.comment_id}>
            <p>{postComment.comment}</p>
          </div>
        ))}

        <form action={handleComment}>
          <label className="text-lg m-5" htmlFor="comment">
            Add a comment:
          </label>
          <textarea
            className="border p-1"
            id="comment"
            name="comments.comment"
            placeholder="Add a comment here.."
          />
          <SubmitButton />
        </form>
      </div>
    </div>
  );
}
