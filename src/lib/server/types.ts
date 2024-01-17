export type CounterData = {
  framework: FrameworkData;
  count: number;
};

export type FrameworkData = {
  id: number;
  name: string;
  link: string;
  date: Date;
};
