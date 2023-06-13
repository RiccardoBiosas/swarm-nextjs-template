import { useState } from "react";
import { storageService } from "@/services/StorageService";

interface DownloadDataReturn {
  isLoading: boolean;
  error: Error | null;
  data: string | null;
  downloadData: (reference: string) => Promise<void>;
}

export const useSwarmDataDownload = (): DownloadDataReturn => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);
  const [data, setData] = useState<string | null>(null);

  const downloadData = async (reference: string) => {
    setIsLoading(true);
    setError(null);

    try {
      const data = await storageService.downloadData(reference)
      setData(data);
    } catch (e) {
      setError(e as Error);
    }

    setIsLoading(false);
  };

  return { isLoading, error, data, downloadData };
};
