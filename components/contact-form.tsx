"use client";

import { z } from "zod";
import { createForm } from "@/lib";
import type { FormEvent } from "react";

const UserSchema = z.object({
  first_name: z.string().min(1, 'First name is required'),
  middle_name: z.string().optional(),
  last_name: z.string().min(1, 'Last name is required'),
  email: z.string().email('Invalid email address'),
  phone_number: z.string().regex(/^[0-9]{10}$/, 'Invalid phone number'),
  messages: z.string().optional(),
});

export default function ContactForm() {
  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
  
    const formData = new FormData(event.target as HTMLFormElement);
    const data = Object.fromEntries(formData.entries());
  
    try {
      const parsedData = UserSchema.parse(data);
      await createForm(parsedData)
      // Submit the data to your API or perform other actions
    } catch (error) {
      if (error instanceof z.ZodError) {
        console.log(error.issues);
        // Display the validation errors to the user
      } else {
        console.error(error);
      }
    }
  }
  return (
    <form onSubmit={handleSubmit} className="flex flex-col p-[20px] pt-0">
      <div className="flex flex-col md:flex-row justify-between items-center p-[10px] gap-y-2 md:gap-y-0 gap-x-0 md:gap-x-2">
        <input
          className="w-full md:w-[280px] h-[50px] shadow-md border-none rounded-[5px] outline-none bg-white dark:bg-[#E0E0E0] indent-[10px]"
          id="first_name"
          name="first_name"
          type="text"
          placeholder="First Name"
        />
        <input
          className="w-full md:w-[280px] h-[50px] shadow-md border-none rounded-[5px] outline-none bg-white dark:bg-[#E0E0E0] indent-[10px]"
          id="middle_name"
          name="middle_name"
          type="text"
          placeholder="Middle Name"
        />
        <input
          className="w-full md:w-[280px] h-[50px] shadow-md border-none rounded-[5px] outline-none bg-white dark:bg-[#E0E0E0] indent-[10px]"
          id="last_name"
          name="last_name"
          type="text"
          placeholder="Last Name"
        />
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center p-[10px] gap-y-2 md:gap-y-0 gap-x-0 md:gap-x-2">
        <input
          className="w-full md:w-[280px] h-[50px] shadow-md border-none rounded-[5px] outline-none bg-white dark:bg-[#E0E0E0] indent-[10px]"
          id="email"
          name="email"
          type="email"
          placeholder="Email"
        />
        <input
          className="w-full md:w-[280px] h-[50px] shadow-md border-none rounded-[5px] outline-none bg-white dark:bg-[#E0E0E0] indent-[10px]"
          id="phone_number"
          name="phone_number"
          type="tel"
          placeholder="Phone Number"
        />
        <span className="w-full md:w-[260px] h-[50px] shadow-md border-none outline-none rounded-[5px] bg-white dark:bg-[#E0E0E0] p-[5px]">
          <input
            className="w-[210px] h-[30px] md:h-[25px] shadow-none border-none rounded-bl-[0] rounded-br-[0] outline-none bg-white dark:bg-[#E0E0E0] indent-[10px]"
            id="input_file"
            name="input_file"
            type="file"
            placeholder="Attach any file"
          />
          <b className="pl-[5px] dark:text-[#E0E0E0]">Attach any file</b>
        </span>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center p-[10px] gap-x-0 md:gap-x-2">
        <textarea
          className="w-full md:w-full h-[50px] pt-[10px] pl-[10px] shadow-md border-none rounded-[5px] outline-none bg-white dark:bg-[#E0E0E0] indent-[0px]"
          id="messages"
          name="messages"
          placeholder="Your Message"
        ></textarea>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center p-[10px] gap-x-0 md:gap-x-2">
        <input
          className="w-full md:w-[280px] h-[50px] shadow-md border-none rounded-[5px] outline-none bg-white dark:bg-[#E0E0E0] indent-[10px]"
          type="submit"
          value="Send"
        />
      </div>
    </form>
  );
}
