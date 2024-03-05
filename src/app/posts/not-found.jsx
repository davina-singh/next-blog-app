import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      Not Found
      <p>Could not find requested post</p>
      <Link href="/">Return to homepage</Link>
    </div>
  );
}
