"use client";

import { useFormStatus } from "react-dom";

export default function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <>
      <button
        className="border-2 bg-gray-200 m-2 p-1"
        disabled={pending}
        type="submit"
      >
        {pending ? "Adding..." : "Add"}
      </button>
    </>
  );
}
