"use client";
import Link from "next/link";
import React from "react";

export default function Home() {
  const [authURL, setAuthURL] = React.useState('') 

  React.useEffect(() => {
    fetch('/api/auth/authURL',{method: 'POST'})
      .then((res) => res.json())
      .then((data) => {
        setAuthURL(data);
      })
  }, []);

  return (
    <div>
      <p className="pb-6 pt-4 text-lg">The sample app demonstrates how to authenticate with <span className="font-bold">IBM Security Verify</span> 
        <br />using authorization code grant type with (PKCE).
      </p>
      <p className="mb-5 text-lg">Click the login button to start the authentication process.</p>
      {authURL && (
        <Link className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded" href={authURL}>Login</Link>
      )}
    </div>
  );
}
