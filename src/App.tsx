import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Process } from './components/Process';
import { Inventory } from './components/Inventory';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-950">
      <Navbar />
      <Hero />
      <Services />
      <Process />
      <Inventory />
      <Footer />
    </div>
  );
}
