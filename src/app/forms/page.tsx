
"use client";
import dynamic from "next/dynamic";
import { useState, Suspense } from "react";

const PlayerRegistrationForm = dynamic(() => import("./PlayerRegistrationForm"), { ssr: false });

export default function FormsPage() {
  const [success, setSuccess] = useState(false);

  return (
    <div className="max-w-2xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-4">Player Registration</h1>
      {success ? (
        <div className="bg-green-100 text-green-800 p-4 rounded mb-4">Registration successful!</div>
      ) : (
        <Suspense fallback={<div>Loading form...</div>}>
          <PlayerRegistrationForm onSuccess={() => setSuccess(true)} />
        </Suspense>
      )}
    </div>
  );
}
