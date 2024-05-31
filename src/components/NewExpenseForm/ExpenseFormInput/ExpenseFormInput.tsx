"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dispatch, SetStateAction } from "react";

type FormInputProps = {
  label: string;
  value?: string;
  disabled?: boolean;
  setValue?: Dispatch<SetStateAction<number>>;
};

export default function FormInput({
  label,
  value,
  disabled,
  setValue,
}: FormInputProps) {
  return (
    <div className="flex flex-col gap-2 capitalize">
      <Label htmlFor={label}>{label}</Label>
      <Input
        type="text"
        disabled={disabled}
        id={label}
        value={value}
        onChange={(e) => setValue?.(Number(e.target.value))}
      />
    </div>
  );
}
