import Image from "next/image";
import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";

const font = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
});
export const Logo = () => {
  return (
    <div className="md:flex items-center gap-x-2 w-[25%] ">
      <div className="text-red-800 font-bold text-2xl pl-5">
        NINKAJ ELECTRONICS
      </div>
    </div>
  );
};
