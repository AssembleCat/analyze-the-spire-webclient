"use client";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();
  return (
    <header className="bg-gray-800 text-white py-8 px-6 flex justify-between items-center">
      <h1 className="text-2xl font-bold">Analyze the Spire</h1>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <button
              onClick={() => router.push("/")}
              className="hover:text-gray-300"
            >
              Predict
            </button>
          </li>
          <li>
            <button
              onClick={() => router.push("/post")}
              className="hover:text-gray-300"
            >
              Post
            </button>
          </li>
          <li>
            <button
              onClick={() => router.push("/stats")}
              className="hover:text-gray-300"
            >
              Stats
            </button>
          </li>
          <li>
            <button
              onClick={() => router.push("/tier")}
              className="hover:text-gray-300"
            >
              Tier
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
