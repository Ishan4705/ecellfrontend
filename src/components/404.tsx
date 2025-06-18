"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] w-full">
      <h2 className="text-white text-3xl font-semibold mt-8 mb-2 text-center">Ooops!!!...Page not Found</h2>
      <h1 className="text-white text-[10rem] font-bold leading-none tracking-tight text-center mb-4">404</h1>
      <p className="text-white/90 text-lg text-center max-w-xl mb-10">
        The page you're looking for can't be found.<br />
        Double-check the URL and try again. Or click the button below.
      </p>
      <div className="flex gap-8">
        <Link href="/" className="bg-white text-[#0e1c3f] font-semibold px-8 py-3 rounded-full shadow transition hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white">Go Home</Link>
        <button
          onClick={() => router.back()}
          className="bg-white text-[#0e1c3f] font-semibold px-8 py-3 rounded-full shadow transition hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
        >
          Go Back
        </button>
      </div>
    </div>
  );
}
