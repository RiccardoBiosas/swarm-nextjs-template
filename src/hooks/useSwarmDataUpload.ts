import { useState } from "react";
import { storageService } from "@/services/StorageService";

interface UploadDataReturn {
  isLoading: boolean;
  error: Error | null;
  reference: string | null;
  uploadData: (postageStampId: string, data: string) => Promise<void>;
}

export const useSwarmUploadData = (): UploadDataReturn => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);
  const [reference, setReference] = useState<string | null>(null);

  const uploadData = async (postageStampId: string, data: string) => {
    setIsLoading(true);
    setError(null);

    try {
      const reference = await storageService.uploadData(postageStampId, data)
      setReference(reference);
    } catch (e) {
      setError(e as Error);
    }

    setIsLoading(false);
  };

  return { isLoading, error, reference, uploadData };
};
