
export type ReactSetState<T> = React.Dispatch<React.SetStateAction<T>>;

export type AcquiredLogsContextType = {
  logsRead: number;
  confirmedLogs: number[];
  unconfirmedLogs: number[];
};