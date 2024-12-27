"use client";

import WatchTransition from "../../components/WatchTransition";
import { useRouter } from "next/navigation";

export default function SecondPage() {
  const router = useRouter();

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-white">
      <h2 className="text-2xl font-semibold mb-4">Apple Watch Series 10</h2>
      <div className="relative w-1/3 mb-4">
        <WatchTransition size="small" />
      </div>
      <p className="text-lg text-center mb-6">
        46mm Jet Black Aluminum Case with Black Solo Loop <br />
        <strong>From $429</strong>
      </p>
      <button
        onClick={() => router.push("/")}
        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-500"
      >
        Back to Home
      </button>
    </div>
  );
}
