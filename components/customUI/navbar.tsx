'use client';

import Link from 'next/link';
import { cn } from '@/lib/utils';
import { useScrollTop } from '@/hooks/useScrollTop';
import Image from 'next/image';

import { useEffect, useState } from 'react';
import { useSpring, animated } from 'react-spring';

import { Input } from '@/components/ui/input';
import { Logo } from './logo';

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
          'border-b shadow-lg top-0 flex h-[38px] transition-all sticky bg-white z-[9999] justify-center md:p-2 md:h-[55px] md:w-auto lg:h-[70px] lg:p-1 ',
          scrolled && 'border-b shadow-md', // Responsive padding for large screens
        )}
      >
        {/* <Logo /> */}
        <animated.div
          style={animation}
          className="flex text-[10px] md:text-[14px] lg:text-[18px]"
        >
          <div className="flex md:justify-center">
            <Link
              className="flex p-2 gap-2 rounded-lg text-center justify-center items-center lg:w-36 md:hover:bg-[#dcd7d7] lg:hover:bg-[#dcd7d7]"
              href="/"
            >
              <Image
                className="flex"
                src="/assets/icons/home.svg"
                alt="icon1"
                width={20}
                height={10}
              />
              Home
            </Link>
            <Link
              className="flex gap-2 rounded-lg text-center justify-center items-center lg:w-36 md:hover:bg-[#dcd7d7] lg:hover:bg-[#dcd7d7]"
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
              className="flex p-4 gap-2 rounded-lg text-center justify-center items-center md:hover:bg-[#dcd7d7] lg:hover:bg-[#dcd7d7] lg:w-36 "
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
              className="flex gap-2 text-center rounded-lg justify-center items-center md:hover:bg-[#dcd7d7] lg:hover:bg-[#dcd7d7] lg:w-40"
              href="/Contact-us"
            >
              <Image
                className="flex"
                src="https://img.icons8.com/arcade/64/about-us-male.png"
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
