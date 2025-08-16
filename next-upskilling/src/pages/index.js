import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import { useRouter } from "next/router";
import { Button } from "@/Atoms/button";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  const route = useRouter();

  const handleStaffNav = () => {
    route.push("/staff");
  };
  const handleRegister = () => {
    route.push("/register");
  };

  return (
    <div
      className={`${geistSans.className} ${geistMono.className} font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20`}
    >
      <p>this is home page for application....</p>
      <div className="flex flex-col gap-3">
        <Button
          style={
            "bg-blue-500 py-2 px-3 hover:bg-blue-600 focus:ring-blue-400 rounded-lg cursor-pointer "
          }
          evnt={handleStaffNav}
        >
          Go to Staff{" "}
        </Button>
        <Button
          style={
            "bg-blue-500 py-2 px-3 hover:bg-blue-600 focus:ring-blue-400 rounded-lg cursor-pointer "
          }
          evnt={handleRegister}
        >
          Go to register{" "}
        </Button>
      </div>
    </div>
  );
}
