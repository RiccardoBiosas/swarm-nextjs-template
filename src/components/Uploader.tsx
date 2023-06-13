'use client'
import React, { useState } from "react";
import { Input, Button } from "antd";
import { useSwarmUploadData } from "@/hooks/useSwarmDataUpload";
import { config } from "@/constants/config";


export const Uploader: React.FC = () => {
  const [userData, setUserData] = useState("");
  const { isLoading, error, reference, uploadData } = useSwarmUploadData();

  const handleUpload = () => {
    uploadData(config.storage.defaultPostageStamp, userData);
  };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setUserData(event.target.value);
    };

    return (
      <div className="m-4 flex justify-center items-center flex-col">
        <h1 className="text-lg text-center text-gray-700 mb-4">
          Upload Data to Swarm
        </h1>
        <Input
          className="mb-4"
          placeholder="Enter reference"
          value={userData}
          onChange={handleChange}
          disabled={isLoading}
        />
        <Button className="mb-4" onClick={handleUpload} disabled={isLoading}>
          {isLoading ? "Loading..." : "Upload"}
        </Button>
        {error && (
          <p className="text-sm text-red-500">Error: {error.message}</p>
        )}
        {reference && (
          <p className="text-sm text-center text-gray-500">
            Uploaded data: {reference}
          </p>
        )}
      </div>
    );
};
