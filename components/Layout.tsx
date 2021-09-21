import React from "react";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="py-6 px-10">
      <div className="m-auto max-w-3xl">{children}</div>
    </div>
  );
}

export default Layout;
