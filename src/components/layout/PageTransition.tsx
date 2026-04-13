import { ReactNode } from "react";

export default function PageTransition({ children }: { children: ReactNode }) {
  return (
    <div className="w-full h-full min-h-screen pt-20 page-enter">
      {children}
    </div>
  );
}
