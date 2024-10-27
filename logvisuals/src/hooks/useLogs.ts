import { useState, useEffect } from 'react';
import Log from '../types/Rundown';

const useLogs = () => {

  const [logData, setLogData] = useState<Log[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      const fetchLogs = async () => {
        const response = await fetch('logs.json');
        const data = await response.json();
        console.log(data)
        setLogData(data);
      };
      fetchLogs();
    } catch (err : any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  return {logData, loading, error};
}

export default useLogs;