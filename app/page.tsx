import Footer from '@/components/customUI/footer';
import HeroSection from '@/components/customUI/hero';
import Navbar from '@/components/customUI/navbar';

const Home = () => {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
      </main>
      <div className="flex flex-col mt-24">
        <Footer />
      </div>
    </>
  );
};

export default Home;
