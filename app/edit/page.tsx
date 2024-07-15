"use client";
import MDEditor from "@uiw/react-md-editor";
import { useState } from "react";

const edit = () => {
  const [md, setMd] = useState<string | undefined>("# Hello World");

  return (
    <div className="w-full">
      <MDEditor height={700} value={md} onChange={setMd} minHeight={600} />
    </div>
  );
};

export default edit;
