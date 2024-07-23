import Link from "next/link";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button, Image } from "@nextui-org/react";
import { Card } from "@/components/ui/card";

export default function LoginForm() {
  return (
    <Card className="w-full h-[100vh] lg:grid  lg:grid-cols-2  rounded-none">
      <div className="flex items-center lg:pl-[300px] mx-[20px] xxs:pt-[150px] md:pt-[200px] lg:mt-[-150px]">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Login</h1>
            <p className="text-balance text-muted-foreground">
              Enter your email to login to your account
            </p>
          </div>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <Link
                  href="/auth/forgot-password"
                  className="ml-auto inline-block text-sm underline"
                >
                  Forgot your password?
                </Link>
              </div>
              <Input id="password" type="password" required />
            </div>
            <Button
              type="submit"
              className="w-full"
              variant="shadow"
              color="primary"
            >
              Login
            </Button>
            <Button
              variant="bordered"
              className="w-full border-[1px]"
              color="primary"
            >
              Login with Google
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{" "}
            <Link href="/auth/signup" className="underline">
              Sign up
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden bg-muted lg:block">
        <Image
          src="/assets/images/onboarding-img.png"
          alt="Image"
          width="1920"
          height="1080"
          className="h-screen w-full rounded-none object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </Card>
  );
}
