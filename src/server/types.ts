export type CounterData = {
  entity: EntityData;
  count: number;
};

export type EntityData = {
  id: number;
  name: string;
  link: string | null;
  releaseLink: string | null;
  date: Date;
};

export type HistoryData = CounterData & {
  date: string;
};

export type RuntimeData = {
  count: number | null;
  date: string;
  entity: Omit<EntityData, "date"> & { date: Date | null };
};
