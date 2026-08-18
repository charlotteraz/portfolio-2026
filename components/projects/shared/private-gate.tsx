"use client";

import { useState, type FormEvent, type ReactNode } from "react";

const ACCESS_CODE = "709870";

export function PrivateGate({ active, children }: { active?: boolean; children: ReactNode }) {
  const [unlocked, setUnlocked] = useState(false);
  const [code, setCode] = useState("");
  const [error, setError] = useState(false);

  if (!active || unlocked) return <>{children}</>;

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (code === ACCESS_CODE) {
      setUnlocked(true);
    } else {
      setError(true);
    }
  }

  return (
    <div className="relative w-full">
      <div aria-hidden className="pointer-events-none max-h-[70vh] select-none overflow-hidden blur-md">
        {children}
      </div>

      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-6">
        <form
          onSubmit={handleSubmit}
          className="flex w-full max-w-[360px] flex-col gap-4 rounded-[20px] bg-white p-8 shadow-[0px_20px_60px_-12px_rgba(0,0,0,0.35)]"
        >
          <div className="flex flex-col gap-1">
            <p className="font-sofia text-[18px] font-bold text-black">This project is private</p>
            <p className="font-sofia text-[14px] font-light leading-5 text-[#757575]">
              Enter the access code to view this case study.
            </p>
          </div>
          <input
            type="text"
            inputMode="numeric"
            value={code}
            onChange={(e) => {
              setCode(e.target.value);
              setError(false);
            }}
            autoFocus
            placeholder="Access code"
            className="w-full rounded-[10px] border border-[#e0e0e0] px-4 py-2.5 font-sofia text-[15px] text-black outline-none focus:border-black"
          />
          {error && <p className="font-sofia text-[13px] text-red-500">Incorrect code — try again.</p>}
          <button
            type="submit"
            className="w-full rounded-[10px] bg-black py-2.5 font-sofia text-[15px] font-medium text-white transition-opacity hover:opacity-80"
          >
            Unlock
          </button>
        </form>
      </div>
    </div>
  );
}
