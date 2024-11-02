import { useEffect, useState, useCallback } from 'react';

const usePlayerLog = () => {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const uploadFile = useCallback((file: File) => {
    setSelectedFile(file);
  }, []);


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

        // * Acquire confirmed IDs from the log file
        const confirmedRegex = /AchievementManager \| <b>Achievement_ReadAllLogs<\/b> :: Initialized Data\. Logs Read: (\d+) \/ 188 \| IDs: \[([^\]]*)\]/;
        const confirmedMatch = fileContent.match(confirmedRegex);
        const confirmedIDList = confirmedMatch ? confirmedMatch[2].split(', ').map(id => parseInt(id.trim())) : [];

        // * Acquire unconfirmed IDs from the log file
        const unconfirmedRegex = /AchievementManager \| <b>Achievement_ReadAllLogs<\/b> :: Read New Log: \[(\d+)\] \| \d+ \/ \d+/g;
        const unconfirmedMatch = Array.from(fileContent.matchAll(unconfirmedRegex)); 
        const unconfirmedIDsList = unconfirmedMatch.map(match => parseInt(match[1]));

        setErrorMessage(null);

        sessionStorage.setItem('confirmedLogs', JSON.stringify(confirmedIDList));
        sessionStorage.setItem('unconfirmedLogs', JSON.stringify(unconfirmedIDsList));
        sessionStorage.setItem('logsRead', JSON.stringify(confirmedIDList.length + unconfirmedIDsList.length));
      } catch (error) {
        setErrorMessage('Failed to process the log file.');
        alert(errorMessage);
      }
    };

    processFile();
  }, [selectedFile]);


  return { uploadFile };
}

export default usePlayerLog;