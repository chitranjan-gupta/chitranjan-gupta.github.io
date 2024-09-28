"use client";

import { useEffect, useState } from "react";

export default function DateTime({ datetime }: { datetime: Date }) {
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    const dateoptions: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    const datelocale = new Intl.DateTimeFormat("en-IN", dateoptions);
    const timeoptions: Intl.DateTimeFormatOptions = {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    };
    const timelocale = new Intl.DateTimeFormat("en-IN", timeoptions);
    setDate(datelocale.format(datetime));
    setTime(timelocale.format(datetime));
  }, [setTime, setDate, datetime]);

  return (
    <time dateTime={date} className="flex flex-col">
      <span className="text-gray-500" title="Date on which blog was created">
        {date}
      </span>
      <span className="text-gray-500" title="Time at which blog was created">
        {time}
      </span>
    </time>
  );
}
