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
    <div className="min-h-screen flex flex-col items-center">
      <h1 className="text-xl m-5">
        This is the page where you can create a new blog post
      </h1>
      <h2 className="text-lg m-5">
        Give it a title, add some content and chose a category
      </h2>
      <div className="m-7 border-4 w-1/2 flex flex-col items-center pt-5">
        <form action={handleNewPost}>
          <label className="m-2 text-base" htmlFor="title">
            Title
          </label>
          <input
            className="border-2 p-1"
            id="title"
            name="title"
            type="text"
            placeholder="write title here..."
          />
          <label className="m-2 text-base" htmlFor="content">
            Content
          </label>
          <textarea
            className="border-2 p-1"
            id="content"
            name="content"
            placeholder="write content here..."
          />
          <label className="m-2 text-base" htmlFor="category">
            Category
          </label>
          <select
            className="border-2 p-1"
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
    </div>
  );
}

// {
//   bookTitle: "Ready Player One";
// }
