"use client";
import { Label } from "@/components/ui/label";
import { PasswordIcon } from "../../../components/assets/icons";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Button } from "@nextui-org/react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ForgotPasswordView() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleForgotPassword = async () => {
    try {
      setLoading(!loading);

      setTimeout(() => {
        router.push("/auth/new-password");
      }, 5000);
    } catch (error) {}
  };

  return (
    <div className="h-full w-full pt-[170px]">
      <div className="items-center flex-col">
        <div>
          <PasswordIcon sx={{ height: 96 }} />
        </div>

        <div className="place-items-center grid mt-5 gap-y-4 ">
          <h2 className="font-extrabold text-[30px]">Forgot your password?</h2>

          <h2 className="dark:text-gray-400 text-center md:max-w-[400px] xxs:max-w-[85%]">
            Please enter the email address associated with your account and We
            will email you a link to reset your password.
          </h2>
        </div>

        <div className="grid gap-2 place-items-center mt-10">
          {/* input  */}
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              required
              className="xxs:w-[350px] md:w-[400px]"
            />
          </div>
          <Button
            onClick={() => handleForgotPassword()}
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
            {loading ? "Sending Request" : "Send Request"}
          </Button>

          {/* return to signin */}
          <Link
            href="/auth/login"
            className="flex space-x-1 mt-3 items-center "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
            <h2 className="font-semibold underline">Return to sign in</h2>
          </Link>
        </div>
      </div>
    </div>
  );
}
