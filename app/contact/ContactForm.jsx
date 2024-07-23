import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@nextui-org/react";
import { Label } from "@radix-ui/react-label";

export default function ContactForm() {
  return (
    <div className="px-5 container">
      <div>
        <h2 className="text-[30px] font-semibold pt-5">
          Feel free to contact us.
          <br />
          We will be glad to hear from you.
        </h2>
      </div>
      <div className="flex xxs:flex-col md:flex-row w-full md:space-x-[50px] xxs:space-y-[50px] items-center">
        <div className="w-full">
          <div className="gap-y-4 grid">
            <div className="space-y-1">
              <Label className="font-bold">Name</Label>
              <Input fullWidth label="Name" />
            </div>

            <div className="space-y-1">
              <Label className="font-bold">Email</Label>
              <Input fullWidth label="Email" />
            </div>

            <div className="space-y-1">
              <Label className="font-bold">Subject</Label>
              <Input fullWidth label="Subject" />
            </div>

            <div className="space-y-1">
              <Label className="font-bold">Message</Label>
              <Textarea placeholder="Type your message here." />
            </div>
          </div>

          <div>
            <Button
              variant="shadow"
              color="primary"
              className=" p-2 my-4 font-bold text-[16px]"
              fullWidth
            >
              Submit Now
            </Button>
          </div>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d7960.005432842018!2d39.727593!3d-4.019839!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNMKwMDEnMTEuNCJTIDM5wrA0Myc0OC43IkU!5e0!3m2!1sen!2ske!4v1714130252042!5m2!1sen!2ske"
          width="1152"
          height="648"
          class="w-full h-[440px] border-0 relative top-[-40px]"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
