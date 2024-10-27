type Log = {
  "expedition": string,
  "zone": number,
  "id": number,
  "name": string,
  "note"?: string
}

type RundownLogs = Record<string, Log[]>;

type RundownProps = {
  currentRundown: number;
  logData: Log[];
}

export type { Log, RundownLogs, RundownProps };