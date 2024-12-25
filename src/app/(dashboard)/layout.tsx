import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <div className="h-screen flex">
        {/* Left Sidebar */}
        <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] 2xl:w-[14%] p-4">
          <Link href={"/"} className="flex items-center justify-center lg:justify-start gap-2 ">
            <Image className="dark:invert" src="/logo.jpg" alt="logo" width={32} height={32} priority/>
            <span className="hidden lg:block font-bold">Red Stone</span>
          </Link>
          <Menu/>
        </div>
        {/* Main Content */}
        <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] 2xl:w-[86%] bg-[#F7F8FA] overflow-scroll flex flex-col">
          <Navbar />
          {children}
        </div>
      </div>
    );
  }
  