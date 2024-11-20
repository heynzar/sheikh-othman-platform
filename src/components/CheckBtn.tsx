"use client";
import { Check } from "lucide-react";

function CheckBtn({
  isChecked,
  onToggle,
}: {
  isChecked: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      onClick={onToggle}
      className={`flex justify-center items-center min-w-6 min-h-6 rounded-lg mt-2 ${
        isChecked ? "bg-yellow-500" : "bg-red-50"
      }`}
    >
      {isChecked ? <Check className="size-5 text-neutral-800" /> : ""}
    </div>
  );
}

export default CheckBtn;
