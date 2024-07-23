"use client";
import { Button } from "@nextui-org/react";
import PageNotFoundIllustration from "../components/assets/illustrations/page-not-found-illustration";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";

export default function NotFound() {
  return (
    <div>
      <div className="items-center flex flex-col pt-[150px]">
        <div>
          <h2 className="font-bold text-center py-4 text-[20px]">
            Sorry, Page Not Found!
          </h2>

          <h2 className="text-[15px] dark:text-gray-300 light:text-black">
            Sorry, we couldn’t find the page you’re looking for. Perhaps you’ve
            mistyped the URL? Be sure to check your spelling.
          </h2>
        </div>

        <Fade
          direction={"up"}
          delay={200}
          cascade
          damping={1e-1}
          triggerOnce={true}
        >
          <PageNotFoundIllustration
            sx={{
              height: 260,
              my: { xs: 5, sm: 10 },
            }}
          />
          <Button variant="bordered">
            <Link href="/">Go to Home</Link>
          </Button>
        </Fade>
      </div>
    </div>
  );
}
