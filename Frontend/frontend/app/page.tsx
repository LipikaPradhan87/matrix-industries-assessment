import Image from "next/image";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Framework from "./components/Framework";
import Testimonials from "./components/Testimonials";
import ContactForm from "./components/ContactForm";


export default function Home() {
  return (
    <div className="min-h-screen w-full bg-zinc-50 font-sans dark:bg-black">
      <main className="w-full flex-col py-3 bg-white dark:bg-black sm:items-start">
        <Hero />
        <Services />
        <Framework />
        <Testimonials />
        <ContactForm />
      </main>
    </div>
  );
}
