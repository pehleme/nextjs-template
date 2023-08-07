"use client";

import { Button } from "@mui/material";
import { signIn } from "next-auth/react";

export default function Home() {
  return (
    <a
      onClick={() => {
        signIn("azure-ad-b2c", { callbackUrl: "/" });
      }}
    >
      <Button></Button>
    </a>
  );
}
