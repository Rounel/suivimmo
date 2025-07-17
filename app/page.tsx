import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="w-screen h-screen flex justify-center items-center">
        <Link href={'/properties'} className="bg-gradient-to-bl from-indigo-900 to-violet-800 text-white rounded-2xl p-4 hover:bg-black transition-all">
          Go to my properties
        </Link>
      </div>
    </>
  );
}
