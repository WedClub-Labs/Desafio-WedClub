import Link from "next/link";
import React from "react";

function AppBar() {
  return (
    <div className="fixed top-0 left-0 h-16 bg-primary-500 w-full shadow-md text-white py-2 px-4">
      <Link href="/">
        <a className="text-4xl">WebClub</a>
      </Link>
    </div>
  );
}

export default AppBar;
