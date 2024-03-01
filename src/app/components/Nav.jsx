import Link from "next/link";

export default function Nav() {
  return (
    <div>
      <ul className="flex flex-row p-3 text-decoration-line: underline font-bold text-base">
        <li className="m-4">
          <Link href="/">Home</Link>
        </li>
        <li className="m-4">
          <Link href="/posts">View all posts</Link>
        </li>
        <li className="m-4">
          <Link href="/posts/new">Add a new post</Link>
        </li>
      </ul>
    </div>
  );
}

{
  /* <nav className="flex text-decoration-line: underline">
<Link className="pr-10" href="/posts/new">
  Add a new post
</Link>
<Link className="pr-10" href="/posts">
  View all posts
</Link>
</nav> */
}
