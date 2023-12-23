import Image from 'next/image';
import { Poppins } from 'next/font/google';

import { cn } from '@/lib/utils';

const font = Poppins({
  subsets: ['latin'],
  weight: ['400', '600'],
});
export const Logo = () => {
  return (
    <div className="flex">
      {/* <div className="text-red-800 font-bold text-2xl pl-5"> */}
      <Image src="/assets/logo.png" alt="logo" width={200} height={50} />
      {/* </div> */}
    </div>
  );
};
