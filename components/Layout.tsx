import React from "react";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="box-border py-6 px-10 min-h-screen">
      <div className="m-auto max-w-3xl">{children}</div>
    </div>
  );
}

export default Layout;
