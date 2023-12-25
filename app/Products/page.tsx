import Navbar from '@/components/customUI/navbar';
import Product1 from '@/components/customUI/product1';
import Product2 from '@/components/customUI/product2';
import { Separator } from '@/components/ui/separator';

const Product = () => {
  return (
    <>
      <div className="flex justify-center mt-20">
        <span className="font-montserrat text-4xl font-bold lg:text-6xl">
          OUR PRODUCTS
        </span>
      </div>
      <div className="grid col-span-1 place-content-center mt-10 lg:grid lg:grid-cols-2 lg:mt-0">
        <Product1 />
        <Separator className="grid border border-b-2 border-black/50 w-[70%] ml-14 mt-20 md:ml-28 lg:hidden" />
        <Product2 className="mt-20 lg:mt-24" />
      </div>
    </>
  );
};

export default Product;
