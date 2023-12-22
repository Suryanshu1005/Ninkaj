'use client';

import Link from 'next/link';
import { cn } from '@/lib/utils';
import { useScrollTop } from '@/hooks/useScrollTop';
import Image from 'next/image';

import { useEffect, useState } from 'react';
import { useSpring, animated } from 'react-spring';

import { Input } from '@/components/ui/input';

const Navbar = () => {
  const [loaded, setLoaded] = useState(false);
  const scrolled = useScrollTop();

  useEffect(() => {
    // Set loaded to true after a delay to trigger the animation
    const timeoutId = setTimeout(() => {
      setLoaded(true);
    }, 200); // You can adjust the delay as needed

    return () => clearTimeout(timeoutId);
  }, []);

  const animation = useSpring({
    opacity: loaded ? 1 : 0,
    transform: loaded ? 'translateX(0)' : 'translateX(100%)',
  });

  return (
    <>
      <div
        className={cn(
          'border-b shadow-lg top-0 flex p-3 transition-all justify-center',
          scrolled && 'border-b shadow-md', // Responsive padding for large screens
        )}
      >
        <animated.div style={animation} className="flex">
          <div className="flex gap-5 md:justify-center lg:text-[18px]">
            <Link
              className="flex hover:bg-[#be7e7e] rounded-lg w-36 text-center justify-center items-center "
              href="/Products"
            >
              Products
            </Link>
            <Link
              className="flex hover:bg-slate-400 p-4 w-36 rounded-lg text-center justify-center items-center"
              href="/About-us"
            >
              About us
            </Link>
            <Link
              className="flex hover:bg-slate-400 p-4 w-36 rounded-lg text-center justify-center items-center"
              href="/Contact-us"
            >
              Contact us
            </Link>
          </div>
        </animated.div>
        <div className="flex gap-5 lg:justify-end">
          {/* <Image
            // className="flex mr-6 lg:justify-end"
            src="/assets/search.svg"
            alt="search"
            width={30}
            height={30}
          /> */}
        </div>
      </div>
    </>
  );
};

export default Navbar;
