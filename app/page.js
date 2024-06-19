import Navbar from './component/Navbar';
import Heropage from './component/Heropage';
import FourElements from './component/Options';
import Services from './component/Services';
import Footer from './component/Footer';
import ImageSlider from './component/ImageSlider';

export default function Home() {
  return (
    <div>
      <Navbar />
      <Heropage />
      <FourElements />
      <Services />
      <ImageSlider />
      <Footer />
    </div>
  );
}
