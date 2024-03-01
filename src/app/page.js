import Image from "next/image";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <h1 className="font-bold text-xl">Welcome to my Blog where you can:</h1>
      <ul>
        <li className="m-10">
          &#8226; make a new blog post - add a title and content
        </li>
        <li className="m-10">&#8226; add a category to your blog post</li>
        <li className="m-10">
          &#8226; view all blog posts, with their category and content
        </li>
        {/* <li>sort all blog posts</li>
        <li>view blog posts in a particular category</li> */}
        <li>
          &#8226; add a comment to a blog post and view it alongside other
          comments
        </li>
        {/* <li>delete a blog post or comment</li>
        <li>update a blog post or comment</li> */}
      </ul>
    </main>
  );
}
