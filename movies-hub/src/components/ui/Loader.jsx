import { Loader2 } from "lucide-react";

export const Loader = ({ loaderMessage }) => {
  return (
    <div className="flex gap-2 justify-center">
      <span className="text-gray-400">{loaderMessage}</span>
      <Loader2 className="animate-spin w-5 h-5 text-gray-400" />
    </div>
  );
};
