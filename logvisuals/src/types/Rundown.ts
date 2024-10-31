type Log = {
  "expedition": string,
  "zone": number,
  "id": number,
  "name": string,
  "note"?: string,
  "objective"?: string[]
  "title"?: string
  "placement"?: "Main" | "Secondary" | "Overload"
}

type RundownLogs = Record<string, Log[]>;

type RundownProps = {
  currentRundown: number;
  logData: Log[];
}

export type { Log, RundownLogs, RundownProps };