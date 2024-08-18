import { type HistoryData } from "~/server/types";
import ListPage from "./List";

type Props = {
  runtimes: HistoryData[];
};

export default function RuntimesPage(props: Props) {
  return (
    <ListPage
      data={props.runtimes}
      title={"Runtimes"}
      firstCol={"Runtime"}
    ></ListPage>
  );
}
