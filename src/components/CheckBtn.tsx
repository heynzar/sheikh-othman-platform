"use client";
import { Check } from "lucide-react";
import { useState } from "react";

function CheckBtn({ isChecked }: { isChecked: boolean }) {
  const [Checked, SetChecked] = useState(isChecked);
  return (
    <div
      onClick={() => {
        SetChecked(!Checked);
      }}
      className={`flex justify-center items-center min-w-6 min-h-6 rounded-lg mt-2 ${
        Checked ? "bg-yellow-500" : "bg-red-50"
      } `}
    >
      {Checked ? <Check className="size-5 text-neutral-800" /> : ""}
    </div>
  );
}

export default CheckBtn;
