import React, { useState } from "react";

interface EndpointCardProps {
  method: string;
  path: string;
  description: string;
  curl: string;
  children?: React.ReactNode;
}

export default function EndpointCard({ method, path, description, curl, children }: EndpointCardProps) {
  const [expanded, setExpanded] = useState(false);
  const methodColors: Record<string, string> = {
    GET: "bg-blue-600",
    POST: "bg-blue-600",
    PUT: "bg-yellow-500",
    DELETE: "bg-red-600",
  };
  return (
    <div
      className={`bg-white rounded-lg shadow p-4 cursor-pointer transition-all duration-200 ${expanded ? "ring-2 ring-blue-400" : ""}`}
      onClick={() => setExpanded((e) => !e)}
      tabIndex={0}
      role="button"
      aria-expanded={expanded}
    >
      <div className="flex items-center gap-2 mb-2">
        <span className={`text-white text-xs font-bold px-2 py-1 rounded ${methodColors[method] || "bg-gray-500"}`}>{method}</span>
        <span className="font-mono text-sm text-black">{path}</span>
      </div>
      <div className="text-gray-700 text-sm mb-2">{description}</div>
      {children}
      {expanded && (
        <div className="mt-3">
          <div className="font-semibold mb-1">Exemplo de uso com <span className="font-mono">curl</span>:</div>
          <pre className="bg-[#151b26] text-white rounded p-3 text-xs overflow-x-auto select-all">
{curl}
          </pre>
        </div>
      )}
    </div>
  );
}
