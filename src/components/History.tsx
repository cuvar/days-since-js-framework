import { type HistoryData } from "~/server/types";
import { formatDate } from "~/util/date";

type Props = {
  frameworks: HistoryData[];
};

export default function HistoryPage(props: Props) {
  return (
    <>
      <h1 className="text-2xl font-bold">History</h1>
      <div className="grid grid-cols-3 gap-x-2 gap-y-4 text-left text-sm sm:gap-x-4 sm:text-base">
        <div className="font-bold">Framework</div>
        <div className="font-bold">Release</div>
        <div className="text-center font-bold">Days</div>
        {props.frameworks.map((framework) => (
          <div key={framework.framework.id} className="contents">
            {framework.framework.link ? (
              <a
                href={framework.framework.link}
                className="text-blue-800 hover:underline"
                target="_blank"
                rel="noreferrer noopenener"
              >
                {framework.framework.name}
              </a>
            ) : (
              <div className="text-left">{framework.framework.name}</div>
            )}
            {framework.framework.releaseLink ? (
              <div>
                <a
                  href={framework.framework.releaseLink}
                  className="text-blue-800 hover:underline"
                  target="_blank"
                  rel="noreferrer noopenener"
                >
                  {formatDate(framework.framework.date)}
                </a>
              </div>
            ) : (
              <div>{formatDate(framework.framework.date)}</div>
            )}
            <div className="text-center">{framework.count}</div>
          </div>
        ))}
      </div>
    </>
  );
}
