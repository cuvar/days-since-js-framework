export default function Navbar() {
  return (
    <nav className="flex w-full justify-between">
      <div className="space-x-4 px-8 pt-8 text-left">
        <a
          href={"/"}
          className="text-blue-800 hover:underline"
          rel="noreferrer noopenener"
        >
          Home
        </a>
      </div>
      <div className="space-x-4 px-8 pt-8 text-right">
        <a
          href={"/history"}
          className="text-blue-800 hover:underline"
          rel="noreferrer noopenener"
        >
          History
        </a>
        <a
          href={"https://github.com/cuvar/days-since-js-framework"}
          className="text-blue-800 hover:underline"
          target="_blank"
          rel="noreferrer noopenener"
        >
          GitHub
        </a>
      </div>
    </nav>
  );
}
