import { useEffect, useState } from 'react';

const usePlayerLog = () => {
  const [logsRead, setLogsRead] = useState<number>(0);
  const [confirmedIDs, setConfirmedIDs] = useState<number[]>([]);
  const [unconfirmedIDs, setUnconfirmedIDs] = useState<number[]>([]);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  function uploadFile(file: File) {
    setSelectedFile(file);
  }

  useEffect(() => {
    if (!selectedFile) return;

    const readFileAsText = (file: File): Promise<string> => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsText(file);

        reader.onload = () => resolve(reader.result as string);
        reader.onerror = () => reject('Error reading file.');
      });
    };

    const processFile = async () => {
      try {
        const fileContent = await readFileAsText(selectedFile);

        const confirmedRegex = /AchievementManager \| <b>Achievement_ReadAllLogs<\/b> :: Initialized Data\. Logs Read: (\d+) \/ 188 \| IDs: \[([^\]]*)\]/;
        const confirmedMatch = fileContent.match(confirmedRegex);
        const confirmedIDList = confirmedMatch ? confirmedMatch[1].split(',').map(id => parseInt(id.trim())) : [];

        const unconfirmedRegex = /AchievementManager \| <b>Achievement_ReadAllLogs<\/b> :: Read New Log: \[(\d+)\] \| \d+ \/ \d+/g;
        const unconfirmedMatch = Array.from(fileContent.matchAll(unconfirmedRegex)); 
        const unconfirmedIDsList = unconfirmedMatch.map(match => parseInt(match[1]));

        setConfirmedIDs(confirmedIDList);
        setUnconfirmedIDs(unconfirmedIDsList);
        setLogsRead(confirmedIDList.length + unconfirmedIDsList.length);
        setErrorMessage(null);
      } catch (error) {
        setErrorMessage('Failed to process the log file.');
        alert(errorMessage);
      }
    };

    processFile();
  }, [selectedFile]);

  return { logsRead, confirmedIDs, unconfirmedIDs, uploadFile };
}

export default usePlayerLog;