import { type EntityData } from "~/server/types";

type Props = {
  count: number;
  date: string;
  framework: EntityData;
};

export default function Counter(props: Props) {
  const linkHref = props.framework.link ?? props.framework.releaseLink ?? "";

  return (
    <div className="mx-4 flex flex-col space-y-8 text-center text-xl">
      <p>It&apos;s been</p>
      <p className="text-9xl font-bold">{props.count}</p>
      <p>day(s) since the latest JavaScript framework.</p>
      <div className="flex w-full text-sm">
        <p className="w-full text-center">
          Last JS framework:
          <a
            href={linkHref}
            className="text-blue-800 hover:underline"
            target="_blank"
            rel="noreferrer noopenener"
          >
            {props.framework.name}
          </a>
          released on {props.date}
        </p>
      </div>
    </div>
  );
}
