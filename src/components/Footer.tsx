export default function Footer() {
  return (
    <footer className="w-full px-4 py-8 text-center text-sm">
      <div>
        You think the data is wrong? File an issue{" "}
        <a
          href={"https://github.com/cuvar/days-since-js-framework/issues"}
          className="text-blue-800 hover:underline"
          target="_blank"
          rel="noreferrer noopenener"
        >
          here
        </a>
        !
      </div>
    </footer>
  );
}
