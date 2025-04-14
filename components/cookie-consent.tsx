"use client";

import { useState, useCallback, useEffect } from "react";
import Link from "next/link";

export function CookieConsentBanner() {
  const [showBanner, setShowBanner] = useState(true);
  const handleAccept = useCallback(() => {
    localStorage.setItem("cookieConsent", "true");
    setShowBanner(false);
  }, []);
  const handleReject = useCallback(() => {
    localStorage.setItem("cookieConsent", "false");
    setShowBanner(false);
  }, []);
  const checkCookieConsent = useCallback(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (consent) {
      setShowBanner(false);
    }
  }, []);
  useEffect(() => {
    checkCookieConsent();
  }, [checkCookieConsent]);
  return (
    <>
      {showBanner && (
        <div className="bg-[#333] text-[#fff] p-[15px] fixed bottom-0 left-0 w-full text-center text-[14px] z-[1000]">
          <p className="m-0">
            This website uses cookies to ensure you get the best experience on
            our website.
            <Link href="/cookiepolicy" className="text-[#ffd700]">
              Learn more
            </Link>
            .
            <button
              className="bg-[#ffd700] text-[#333] border-none ml-[10px] cursor-pointer"
              onClick={handleAccept}
            >
              Accept!
            </button>
            <button
              className="bg-[#ffd700] text-[#333] border-none ml-[10px] cursor-pointer"
              onClick={handleReject}
            >
              Reject!
            </button>
          </p>
        </div>
      )}
    </>
  );
}
