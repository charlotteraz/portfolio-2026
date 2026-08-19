"use client";

import { useRouter } from "next/navigation";
import { useState, type FormEvent, type ReactNode } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const ACCESS_CODE = "709870";
const CONTACT_EMAIL = "charlottekyleraz@gmail.com";

export function PrivateGate({ active, children }: { active?: boolean; children: ReactNode }) {
  const router = useRouter();
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

  function close() {
    router.push("/work");
  }

  return (
    <div className="relative w-full">
      <div aria-hidden className="pointer-events-none max-h-[70vh] select-none overflow-hidden blur-md">
        {children}
      </div>

      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-6"
        onClick={(e) => {
          if (e.target === e.currentTarget) close();
        }}
      >
        <form
          onSubmit={handleSubmit}
          className="relative flex w-full max-w-[360px] flex-col gap-4 rounded-[20px] bg-white p-8 shadow-[0px_20px_60px_-12px_rgba(0,0,0,0.35)]"
        >
          <button
            type="button"
            onClick={close}
            aria-label="Close and return to work"
            className="absolute right-4 top-4 flex h-7 w-7 items-center justify-center rounded-full text-[#a8a8a8] transition-colors hover:bg-[#f2f2f2] hover:text-black"
          >
            <FontAwesomeIcon icon={faXmark} className="h-4 w-4" />
          </button>
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
            className="w-full rounded-[10px] bg-link py-2.5 font-sofia text-[15px] font-medium text-white transition-opacity hover:opacity-80"
          >
            Unlock
          </button>
          <p className="text-center font-sofia text-[13px] font-light text-[#757575]">
            Don't have the code?{" "}
            <a
              href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("Access code request")}`}
              className="font-medium text-link underline underline-offset-2 transition-opacity hover:opacity-80"
            >
              Email me
            </a>{" "}
            to request access.
          </p>
        </form>
      </div>
    </div>
  );
}
