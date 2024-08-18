import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex w-full justify-between">
      <div className="space-x-4 px-8 pt-8 text-left">
        <Link
          href={"/"}
          className="text-blue-800 hover:underline"
          rel="noreferrer noopenener"
        >
          Home
        </Link>
      </div>
      <div className="space-x-4 px-8 pt-8 text-right">
        <Link
          href={"/history"}
          className="text-blue-800 hover:underline"
          rel="noreferrer noopenener"
        >
          History
        </Link>
        <Link
          href={"/runtimes"}
          className="text-blue-800 hover:underline"
          rel="noreferrer noopenener"
        >
          Runtimes
        </Link>
        <Link
          href={"https://github.com/cuvar/days-since-js-framework"}
          className="text-blue-800 hover:underline"
          target="_blank"
          rel="noreferrer noopenener"
        >
          GitHub
        </Link>
      </div>
    </nav>
  );
}
