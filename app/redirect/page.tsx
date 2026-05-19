// Redirect page
"use client";
import React, { useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";

function RedirectContent() {
  const ref = React.useRef(false);
  const searchParams = useSearchParams();

  
  useEffect(() => {
    if(!ref.current) {
      ref.current = true;
      const queryString = searchParams.toString();
      const fetchAuth = async() => {
        const response = await fetch(`/api/auth?${queryString}`, { method: "GET" });
        const data = await response.json();
        if (data.success) {
          window.location.href = "/dashboard";
        } else {
          window.location.href = "/";
        }
      }
      fetchAuth();
    }
  }, []);

  return(
  <div className="pt-12">
    <div className="animate-pulse flex space-x-4 ">
    <h1>Authorizing...</h1>
  </div>
    </div>
  );
}

export default function Page() {
  return (
    <Suspense fallback={<div className="pt-12"><div className="animate-pulse flex space-x-4"><h1>Loading...</h1></div></div>}>
      <RedirectContent />
    </Suspense>
  );
}
