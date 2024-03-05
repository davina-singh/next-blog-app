import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import { SignInButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs";

export default function Nav() {
  const { userId } = auth();
  return (
    <nav>
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
        <li className="flex-end">
          {userId ? <UserButton /> : <SignInButton />}
        </li>
      </ul>
    </nav>
  );
}
