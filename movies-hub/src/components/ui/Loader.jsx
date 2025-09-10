import { Loader2 } from "lucide-react";

export const Loader = ({ label }) => {
  return (
    <div className="flex gap-2">
      <span className="text-gray-400">{label}</span>
      <Loader2 className="animate-spin w-5 h-5 text-gray-400" />
    </div>
  );
};
