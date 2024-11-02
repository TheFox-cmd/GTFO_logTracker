type Log = {
  expedition: string;
  zone: number;
  id: number;
  name: string;
  title?: string;
  placement: "Main" | "Secondary" | "Overload";
  note?: string;
  objective?: string[];
};

type RundownLogs = Record<string, Log[]>;

type RundownProps = {
  currentRundown: number;
  logData: Log[];
};

export type { Log, RundownLogs, RundownProps };
