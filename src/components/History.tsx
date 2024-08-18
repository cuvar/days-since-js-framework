"use client";

import { type HistoryData } from "~/server/types";
import ListPage from "./List";

type Props = {
  frameworks: HistoryData[];
};

export default function HistoryPage(props: Props) {
  return (
    <ListPage
      data={props.frameworks}
      title={"History"}
      firstCol={"Framework"}
    ></ListPage>
  );
}
