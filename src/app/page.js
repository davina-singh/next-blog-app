import Image from "next/image";

export default function HomePage() {
  return (
    <div>
      <h1>Welcome to my Blog where you can:</h1>
      <ul>
        <li>make a new blog post - with a title and content</li>
        <li>add a category to your blog post</li>
        <li>view all blog posts</li>
        <li>sort all blog posts</li>
        <li>view blog posts in a particular category</li>
        <li>add a comment to a blog post</li>
        <li>delete a blog post or comment</li>
        <li>update a blog post or comment</li>
      </ul>
    </div>
  );
}
