"use client";
  
import React, { useEffect, useState } from "react";

export default function LayoutLoading() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoading = () => setLoading(false);

    const timer = setTimeout(handleLoading, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && (
        <div className="h-screen w-screen fixed top-0 left-0 z-[999999] bg-box3 flex items-center justify-center">
          <div id="wifi-loader">
            <svg className="circle-outer" viewBox="0 0 86 86">
              <circle className="back" cx="43" cy="43" r="40"></circle>
              <circle className="front" cx="43" cy="43" r="40"></circle>
              <circle className="new" cx="43" cy="43" r="40"></circle>
            </svg>
            <svg className="circle-middle" viewBox="0 0 60 60">
              <circle className="back" cx="30" cy="30" r="27"></circle>
              <circle className="front" cx="30" cy="30" r="27"></circle>
            </svg>
            <svg className="circle-inner" viewBox="0 0 34 34">
              <circle className="back" cx="17" cy="17" r="14"></circle>
              <circle className="front" cx="17" cy="17" r="14"></circle>
            </svg>
            <div className="text" data-text="Searching"></div>
          </div>
        </div>
      )}
    </>
  );
}
