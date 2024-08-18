import { type HistoryData, type RuntimeData } from "~/server/types";
import { formatDate } from "~/util/date";

type Props = {
  data: HistoryData[] | RuntimeData[];
  title: string;
  firstCol: string;
};

export default function ListPage(props: Props) {
  console.log(props.data);
  return (
    <>
      <h1 className="text-2xl font-bold">{props.title}</h1>
      <div className="grid grid-cols-3 gap-x-2 gap-y-4 text-left text-sm sm:gap-x-4 sm:text-base">
        <div className="font-bold">{props.firstCol}</div>
        <div className="font-bold">Release</div>
        <div className="text-center font-bold">Days</div>
        {props.data.map((entity) => (
          <div key={entity.entity.id} className="contents">
            {entity.entity.link ? (
              <a
                href={entity.entity.link}
                className="text-blue-800 hover:underline"
                target="_blank"
                rel="noreferrer noopenener"
              >
                {entity.entity.name}
              </a>
            ) : (
              <div className="text-left">{entity.entity.name}</div>
            )}
            {entity.entity.releaseLink ? (
              <div>
                <a
                  href={entity.entity.releaseLink}
                  className="text-blue-800 hover:underline"
                  target="_blank"
                  rel="noreferrer noopenener"
                >
                  {formatDate(entity.entity.date)}
                </a>
              </div>
            ) : (
              <div>{formatDate(entity.entity.date)}</div>
            )}
            <div className="text-center">{entity.count ?? "-"}</div>
          </div>
        ))}
      </div>
    </>
  );
}
