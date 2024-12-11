"use client";

import { useTheme } from "next-themes";
import React from "react";
import { JsonView, allExpanded, darkStyles, defaultStyles } from "react-json-view-lite";
import "react-json-view-lite/dist/index.css";

const DomainResult = ({ data }: any) => {
  const { theme } = useTheme();

  return (
    <div className="border rounded-md p-4 max-w-[80%] shadow-md">
      <JsonView
        data={data}
        shouldExpandNode={allExpanded}
        style={{
          ...((theme === "dark" ? darkStyles : defaultStyles)),
        }}
      />
    </div>
  );
};

export default DomainResult;
