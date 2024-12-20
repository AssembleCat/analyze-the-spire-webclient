"use client";
import { useRouter } from "next/navigation";

const navigation = {
  Predict: "/",
  Post: "/post",
  Stats: "/stats",
  Tier: "/tier",
};

export default function Header() {
  const router = useRouter();
  return (
    <header className="bg-gray-800 text-white py-6 px-6 flex justify-between items-center">
      <h1 className="ml-10 text-4xl font-bold">Analyze the Spire</h1>
      <nav>
        <ul className="mr-10 flex space-x-4">
          {Object.entries(navigation).map(([label, path]) => (
            <li key={label}>
              <button
                onClick={() => router.push(path)}
                className="hover:text-gray-400"
              >
                <h1 className="text-xl">{label}</h1>
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
