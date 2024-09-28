"use client";

import { useRef } from "react";
import type { FormEvent } from "react";

export default function ContactForm() {
  const first_name = useRef<HTMLInputElement>(null),
    middle_name = useRef<HTMLInputElement>(null),
    last_name = useRef<HTMLInputElement>(null),
    email = useRef<HTMLInputElement>(null),
    phone_number = useRef<HTMLInputElement>(null),
    input_file = useRef<HTMLInputElement>(null),
    input_message = useRef<HTMLTextAreaElement>(null);

  function validate(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (first_name?.current?.value?.length! <= 0) {
      alert("Fill the first name");
      return false;
    }
    if (middle_name?.current?.value?.length! <= 0) {
      alert("Fill the middle name");
      return false;
    }
    if (last_name?.current?.value?.length! <= 0) {
      alert("Fill the last name");
      return false;
    }
    if (email?.current?.value.length! <= 0) {
      alert("Fill the email name");
      return false;
    }
    if (input_message?.current?.value.length! <= 0) {
      alert("Fill your message");
      return false;
    }
  }

  return (
    <form onSubmit={validate} className="flex flex-col p-[20px] pt-0">
      <div className="flex flex-col md:flex-row justify-between items-center p-[10px] gap-y-2 md:gap-y-0 gap-x-0 md:gap-x-2">
        <input
          className="w-full md:w-[280px] h-[50px] shadow-md border-none rounded-[5px] outline-none bg-white dark:bg-[#E0E0E0] indent-[10px]"
          ref={first_name}
          id="first_name"
          name="first_name"
          type="text"
          placeholder="First Name"
        />
        <input
          className="w-full md:w-[280px] h-[50px] shadow-md border-none rounded-[5px] outline-none bg-white dark:bg-[#E0E0E0] indent-[10px]"
          ref={middle_name}
          id="middle_name"
          name="middle_name"
          type="text"
          placeholder="Middle Name"
        />
        <input
          className="w-full md:w-[280px] h-[50px] shadow-md border-none rounded-[5px] outline-none bg-white dark:bg-[#E0E0E0] indent-[10px]"
          ref={last_name}
          id="last_name"
          name="last_name"
          type="text"
          placeholder="Last Name"
        />
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center p-[10px] gap-y-2 md:gap-y-0 gap-x-0 md:gap-x-2">
        <input
          className="w-full md:w-[280px] h-[50px] shadow-md border-none rounded-[5px] outline-none bg-white dark:bg-[#E0E0E0] indent-[10px]"
          ref={email}
          id="email"
          name="email"
          type="email"
          placeholder="Email"
        />
        <input
          className="w-full md:w-[280px] h-[50px] shadow-md border-none rounded-[5px] outline-none bg-white dark:bg-[#E0E0E0] indent-[10px]"
          ref={phone_number}
          id="phone_number"
          name="phone_number"
          type="tel"
          placeholder="Phone Number"
        />
        <span className="w-full md:w-[260px] h-[50px] shadow-md border-none outline-none rounded-[5px] bg-white dark:bg-[#E0E0E0] p-[5px]">
          <input
            className="w-[210px] h-[30px] md:h-[25px] shadow-none border-none rounded-bl-[0] rounded-br-[0] outline-none bg-white dark:bg-[#E0E0E0] indent-[10px]"
            ref={input_file}
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
          ref={input_message}
          id="input_message"
          name="input_message"
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
