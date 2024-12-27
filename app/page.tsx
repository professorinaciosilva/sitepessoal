import Carousel from './components/Carousel';
import SocialLinks from './components/SocialLinks';
import AboutSection from './components/AboutSection';
import TextTabs from './components/TextTabs';
import ContactSection from './components/ContactSection';

export default function HomePage() {
  return (
    <>
      <Carousel />
      <SocialLinks />
      <AboutSection />
      <TextTabs />
      <ContactSection />
    </>
  );
}
