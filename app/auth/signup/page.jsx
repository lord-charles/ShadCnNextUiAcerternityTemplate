import Link from "next/link";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button, Image } from "@nextui-org/react";
import { Card } from "@/components/ui/card";

export default function RegisterForm() {
  return (
    <Card className="w-full h-screen lg:grid  lg:grid-cols-2 rounded-none transition-all duration-200">
      <div className="flex items-center justify-center  lg:pl-[300px]">
        <div className="mx-auto grid w-[350px] xxs:pt-[120px] md:pt-[180px] lg:mt-[-150px]">
          <div className="grid gap-2 text-center py-7">
            <h1 className="text-3xl font-bold">Sign Up</h1>
            <p className="text-balance text-muted-foreground">
              Enter your information to create an account
            </p>
          </div>

          <div className="grid gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="first-name">First name</Label>
                <Input id="first-name" placeholder="John" required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="last-name">Last name</Label>
                <Input id="last-name" placeholder="Doe" required />
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="john.doe@gmail.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" />
            </div>
            <Button
              type="submit"
              className="w-full"
              variant="shadow"
              color="primary"
            >
              Create an account
            </Button>
            <Button
              variant="bordered"
              className="w-full border-[1px]"
              color="primary"
            >
              Sign up with Google
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            Already have an account?{" "}
            <Link href="/auth/login" className="underline">
              Sign in
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden bg-muted lg:block">
        <Image
          src="/assets/images/register-img.png"
          alt="Image"
          width="1920"
          height="1080"
          className="h-screen w-full rounded-none object-cover "
        />
      </div>
    </Card>
  );
}
