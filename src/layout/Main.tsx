import { type ReactNode } from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex flex-row w-full justify-between p-5">
      <Link href={"/"} className="pb-2 border-b-2">
        Musaj
      </Link>
      <Link href={"/music"} className="pb-2">
        🎧?
      </Link>
    </div>
  )
}

const Main = ({ children, title }: { children: ReactNode, title?: string }) => {
  return (
    <main className="
      min-h-screen
      sm:flex
      sm:flex-col
      items-center
      justify-center
      bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-gray-900 via-gray-800 to-gray-900
      text-white
    ">
      <Navbar />
      <div className="flex-1 mt-12 sm:min-w-[65ch]">
        <div className="text-[2rem] font-semibold sm:px-12 px-2">
          {title}
        </div>
        <div className="sm:px-24 pb-24 px-4">
          {children}
        </div>
      </div>
    </main>
  )
}

export default Main;