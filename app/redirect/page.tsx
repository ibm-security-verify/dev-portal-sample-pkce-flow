// Redirect page
"use client";
import React, { useEffect } from "react";

type Props = {
  searchParams?: {
    code?: string;
  };
};

export default function Page(props: Props) {
  const ref = React.useRef(false);

  
  useEffect(() => {
    if(!ref.current) {
      ref.current = true;
      const code = props.searchParams?.code;
      const fetchAuth = async() => {
        const response = await fetch(`/api/auth?code=${code}`, { method: "GET" });
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
