"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ipInfoService } from "@/services/ip-info-service";
import IPResult from "./IPResult";
import Loader from "@/components/custom/Loader";
import { X } from "lucide-react";

export default function TagsInputBox() {
  const [ip, setIp] = useState<string>("");
  const [data, setData] = useState<any | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [showIPResult, setShowIPResult] = useState<boolean>(false);

  const getAllIPInfo = async () => {
    setLoading(true);
    setError(null);

    try {
      const result = await ipInfoService(ip);
      if (result) {
        setData(result);
        setShowIPResult(true);
      } else {
        setError("Failed to fetch data. Please check the IP.");
        setTimeout(() => setError(null), 3000);
      }
    } catch (err: any) {
      setError(err.message || "An unexpected error occurred.");
      setTimeout(() => setError(null), 3000);
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    setShowIPResult(false);
  };

  return (
    <>
      <div className="flex max-w-4xl md:flex-row flex-col px-5 md:px-0 items-center md:space-x-2">
        <Input
          type="text"
          className="w-full"
          value={ip}
          onChange={(e: any) => setIp(e.target.value)}
          placeholder="Enter IP address..."
        />
        {!loading && (
          <Button
            type="submit"
            className={`dark:text-white w-full flex md:w-auto ${
              loading ? "loader" : ""
            }`}
            onClick={getAllIPInfo}
            disabled={!ip}
          >
            GET TAGS
          </Button>
        )}
        {loading && <Loader />}
      </div>
      {error && (
        <div className="text-red-500 mt-2 text-sm font-semibold">{error}</div>
      )}
      {data && showIPResult && (
        <div className="relative mt-4">
          <button
            className="absolute -top-5 -right-[-17%] p-2 text-red-500 text-3xl"
            onClick={handleClose}
          >
            <X size={20} >
                clear
                </X> {/* Lucide cross icon */}
          </button>
          <IPResult data={data} />
        </div>
      )}
    </>
  );
}
