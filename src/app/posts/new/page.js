import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import SubmitButton from "@/app/components/SubmitButton";

export default function NewPostPage() {
  async function handleNewPost(formData) {
    "use server"; // makes the function run on the server
    // get the form data from the formData object next provides
    const title = formData.get("title");
    const content = formData.get("content");
    const postCategory_id = formData.get("categories.category_id");
    // insert data into postgres
    await sql`INSERT INTO posts (title, content, category_id) VALUES (${title}, ${content}, ${postCategory_id})`;
    // tell next to go an revalidate so that this path has the correct content
    revalidatePath("/posts");
    // redirect into the path after submitting
    redirect("/posts");
  }

  return (
    <div>
      <h1>This is the page where you can create a new blog post</h1>
      <h2>Give it a title, add some content and chose a category</h2>
      <form action={handleNewPost}>
        <label htmlFor="title">Title</label>
        <input id="title" name="title" type="text" placeholder="title" />
        <label htmlFor="content">Content</label>
        <textarea id="content" name="content" placeholder="content" />
        <label htmlFor="category">Category</label>
        <select
          id="category"
          name="categories.category_id"
          placeholder="category"
        >
          <option value="1">Travel</option>
          <option value="2">Food</option>
          <option value="3">Movies</option>
        </select>
        <SubmitButton />
      </form>
    </div>
  );
}

// {
//   bookTitle: "Ready Player One";
// }
