import Link from "next/link";
import { Button } from "@/components/Button/button";

import React from "react";

export default function NotFound() {
  return (
    <main className="errorMain">
      <h1 className="errorTitle">Not Found</h1>
      <p className="errorSentence">Could not find requested resource</p>
      <Button asChild className="active:bg-green-600">
        <Link className="errorSentence" href="/">
          Return Home
        </Link>
      </Button>
    </main>
  );
}
