"use client";

export default function ShareButton({
  title,
  text,
  url,
}: {
  title: string;
  text?: string;
  url?: string;
}) {
  async function handleClick() {
    const shareData = {
      title: title,
      url: window.location.href,
    };
    try {
      await navigator.share(shareData);
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <button
      title="Share"
      onClick={handleClick}
      className="flex flex-row items-center gap-x-2"
    >
      <span className="inline-block h-[20px] text-base">Share</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 -960 960 960"
        className="w-[20px] h-[20px] fill-[#5f6368] dark:fill-[#E0E0E0]"
      >
        <path d="M680-80q-50 0-85-35t-35-85q0-6 3-28L282-392q-16 15-37 23.5t-45 8.5q-50 0-85-35t-35-85q0-50 35-85t85-35q24 0 45 8.5t37 23.5l281-164q-2-7-2.5-13.5T560-760q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35q-24 0-45-8.5T598-672L317-508q2 7 2.5 13.5t.5 14.5q0 8-.5 14.5T317-452l281 164q16-15 37-23.5t45-8.5q50 0 85 35t35 85q0 50-35 85t-85 35Zm0-80q17 0 28.5-11.5T720-200q0-17-11.5-28.5T680-240q-17 0-28.5 11.5T640-200q0 17 11.5 28.5T680-160ZM200-440q17 0 28.5-11.5T240-480q0-17-11.5-28.5T200-520q-17 0-28.5 11.5T160-480q0 17 11.5 28.5T200-440Zm480-280q17 0 28.5-11.5T720-760q0-17-11.5-28.5T680-800q-17 0-28.5 11.5T640-760q0 17 11.5 28.5T680-720Zm0 520ZM200-480Zm480-280Z" />
      </svg>
    </button>
  );
}
