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
          'border-b shadow-lg top-0 flex p-0 transition-all justify-center md:p-2 md:w-auto lg:p-2 ',
          scrolled && 'border-b shadow-md', // Responsive padding for large screens
        )}
      >
        <animated.div
          style={animation}
          className="flex text-[12px] lg:text-[18px]"
        >
          <div className="flex md:justify-center">
            <Link
              className="flex hover:bg-[#dcd7d7] gap-2 rounded-lg w-36 text-center justify-center items-center "
              href="/Products"
            >
              <Image
                className="flex"
                src="/assets/icons/products.svg"
                alt="icon1"
                width={25}
                height={5}
              />
              Products
            </Link>
            <Link
              className="flex hover:bg-[#dcd7d7] p-4 w-36 gap-2 rounded-lg text-center justify-center items-center"
              href="/About-us"
            >
              <Image
                className="flex"
                src="/assets/icons/about.svg"
                alt="icon1"
                width={25}
                height={5}
              />
              About us
            </Link>
            <Link
              className="flex hover:bg-[#dcd7d7] p-4 w-40 gap-2 rounded-lg text-center justify-center items-center"
              href="/Contact-us"
            >
              <Image
                className="flex"
                src="/assets/icons/contact.svg"
                alt="icon1"
                width={25}
                height={5}
              />
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
