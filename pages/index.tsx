import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { Footer } from '../components/Footer/Footer';
import { HeaderMenu } from '../components/HeaderMenu/HeaderMenu';
import { Welcome } from '../components/Welcome/Welcome';

export default function HomePage() {
  return (
    <>
      <HeaderMenu />
      <Welcome />
      <ColorSchemeToggle />
      <Footer />
    </>
  );
}
