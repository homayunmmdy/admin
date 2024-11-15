"use client";
import { Button } from "@/components";
import { useEffect } from "react";
import { IoReloadSharp } from "react-icons/io5";
type FallbackProps = {
  error: Error;
  resetErrorBoundary: () => void;
  retryCount: number;
  setRetryCount: React.Dispatch<React.SetStateAction<number>>;
};
const MAX_RETRY_COUNT = 5; // Set the maximum retries

export const FallbackUI: React.FC<FallbackProps> = ({
  error,
  resetErrorBoundary,
  retryCount,
  setRetryCount,
}) => {
  useEffect(() => {
    if (retryCount < MAX_RETRY_COUNT) {
      const timer = setTimeout(() => {
        setRetryCount((prev) => prev + 1); // Increment retry count
        resetErrorBoundary(); // Retry fetching data
      }, 5000);

      return () => clearTimeout(timer); // Cleanup timer on unmount
    }
  }, [retryCount, resetErrorBoundary, setRetryCount]);

  const canRetry = retryCount < MAX_RETRY_COUNT;

  return (
    <div className="flex min-h-screen flex-col items-center justify-center text-center">
      <h2 className="mb-4 text-lg font-semibold text-red-600">
        Oops! Something went wrong.
      </h2>
      <p className="mb-4 text-sm text-gray-600">{error.message}</p>
      {canRetry && (
        <>
          <Button
            type="button"
            color="btn-error"
            onClick={() => {
              setRetryCount((prev) => prev + 1); // Reset retry count
              resetErrorBoundary(); // Retry manually
            }}
          >
            <IoReloadSharp />
          </Button>
          <p className="mt-4 text-xs text-gray-500">
            Retrying automatically in {MAX_RETRY_COUNT} seconds... ({retryCount}
            /{MAX_RETRY_COUNT})
          </p>
        </>
      )}
    </div>
  );
};