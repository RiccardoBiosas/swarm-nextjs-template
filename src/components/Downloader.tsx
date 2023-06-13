"use client";
import React, { useState } from "react";
import { Input, Button } from "antd";
import { useSwarmDataDownload } from "@/hooks/useSwarmDataDownload";

export const Downloader: React.FC = () => {
  const [reference, setReference] = useState("");
  const { isLoading, error, data, downloadData } = useSwarmDataDownload();

  const handleDownload = async () => {
    await downloadData(reference);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setReference(event.target.value);
  };

  return (
    <div className="m-4 flex justify-center items-center flex-col">
      <h1 className="text-lg text-center text-gray-700 mb-4">
        Download Data from Swarm
      </h1>
      <Input
        className="mb-4"
        placeholder="Enter reference"
        value={reference}
        onChange={handleChange}
        disabled={isLoading}
      />
      <Button className="mb-4" onClick={handleDownload} disabled={isLoading}>
        {isLoading ? "Loading..." : "Download"}
      </Button>
      {error && <p className="text-sm text-red-500">Error: {error.message}</p>}
      {data && (
        <p className="text-sm text-center text-gray-500">
          Downloaded data: {data}
        </p>
      )}
    </div>
  );
};
