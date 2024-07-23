"use client";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp";

import { Input } from "@nextui-org/react";
import { EyeFilledIcon } from "./EyeFilledIcon";
import { EyeSlashFilledIcon } from "./EyeSlashFilledIcon";
import Link from "next/link";
import { Button } from "@nextui-org/react";
import { useState } from "react";
import SentIcon from "../../../components/assets/icons/sent-icon";
import { ChevBackIcon } from "./ChevBackIcon";

export default function NewPasswordView() {
  const [loading, setLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [otp, setOtp] = useState("");

  const handleVerify = (value) => {
    if (otp.length === 5) {
      setOtp(value);
      return setLoading(!loading);
    }
    setOtp(value);
  };

  const toggleVisibility = () => setIsVisible(!isVisible);
  return (
    <div className="h-full w-full pt-[120px]">
      <div className="items-center flex-col">
        <div>
          <SentIcon sx={{ height: 96 }} />
        </div>

        <div className="place-items-center grid mt-5 gap-y-4 ">
          <h2 className="font-extrabold text-[30px]">
            Request sent successfully!
          </h2>

          <h2 className="dark:text-gray-400 text-center md:max-w-[400px] xxs:max-w-[85%] text-[14px]">
            We&apos;ve sent a 6-digit confirmation email to your email.
            <br />
            Please enter the code in below box to verify your email.
          </h2>
        </div>

        <div className="grid gap-2 place-items-center mt-10">
          {/* input  */}
          <div className="grid place-items-center gap-y-2">
            <InputOTP
              maxLength={6}
              value={otp}
              onChange={(value) => handleVerify(value)}
            >
              <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
              </InputOTPGroup>
              <InputOTPSeparator />
              <InputOTPGroup>
                <InputOTPSlot index={3} />
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
              </InputOTPGroup>
            </InputOTP>

            {/* password  */}
            <div>
              <Input
                label="Password"
                variant="bordered"
                placeholder="Enter your New Password"
                endContent={
                  <button
                    className="focus:outline-none"
                    type="button"
                    onClick={toggleVisibility}
                  >
                    {isVisible ? (
                      <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                    ) : (
                      <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                    )}
                  </button>
                }
                type={isVisible ? "text" : "password"}
                className="xxs:w-[350px] md:w-[400px] mt-[15px]"
              />
              <Input
                label="Password"
                variant="bordered"
                placeholder="Confirm new password"
                endContent={
                  <button
                    className="focus:outline-none"
                    type="button"
                    onClick={toggleVisibility}
                  >
                    {isVisible ? (
                      <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                    ) : (
                      <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                    )}
                  </button>
                }
                type={isVisible ? "text" : "password"}
                className="xxs:w-[350px] md:w-[400px] mt-[15px]"
              />
            </div>
          </div>
          <Button
            onClick={() => setLoading(!loading)}
            isLoading={loading}
            color="primary"
            spinner={
              <svg
                className="animate-spin h-5 w-5 text-current"
                fill="none"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  fill="currentColor"
                />
              </svg>
            }
            variant="shadow"
            fullWidth
            className="xxs:w-[350px] md:w-[400px] mt-[15px]"
          >
            {loading ? "Updating Password" : "Update Password"}
          </Button>

          <div>
            <h3 className="mt-1 text-[15px]">
              Don’t have a code?
              <a className="text-green-500 ml-1 font-bold cursor-pointer underline text-[16px]">
                Resend code
              </a>
            </h3>
          </div>

          {/* return to signin */}
          <Link
            href="/auth/login"
            className="flex space-x-1 mt-3 items-center "
          >
            <ChevBackIcon />

            <h2 className="font-semibold underline">Return to sign in</h2>
          </Link>
        </div>
      </div>
    </div>
  );
}
