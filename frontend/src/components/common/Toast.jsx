import React from "react";
import { useToast } from "../../context/ToastContext";
import { CheckCircle, XCircle, Info } from "lucide-react";

const Toast = () => {
  const { toast } = useToast();

  if (!toast) return null;

  const isSuccess = toast.type === "success";
  const isError = toast.type === "error";

  const Icon = isSuccess ? CheckCircle : isError ? XCircle : Info;

  return (
    <div className="fixed bottom-6 right-6 z-[9999]">
      <div
        className={`flex items-center gap-3 px-5 py-4 rounded-xl shadow-lg border 
        backdrop-blur-md transition-all duration-300 animate-slideIn
        ${
          isSuccess
            ? "bg-blue-500/15 border-blue-500/40 text-blue-200"
            : isError
            ? "bg-red-500/15 border-red-500/40 text-red-200"
            : "bg-slate-500/15 border-slate-500/40 text-slate-200"
        }`}
      >
        <Icon className="w-5 h-5" />
        <p className="text-sm font-medium">{toast.message}</p>
      </div>
    </div>
  );
};

export default Toast;
