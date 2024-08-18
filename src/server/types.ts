export type CounterData = {
  framework: FrameworkData;
  count: number;
};

export type FrameworkData = {
  id: number;
  name: string;
  link: string | null;
  releaseLink: string | null;
  date: Date;
};

export type HistoryData = CounterData & {
  date: string;
};
