
import { CalendarDemo } from "@/component/CalendarDemo";
import About from "@/component/home/About";
import Banner from "@/component/home/Banner";

import Service from "./service/page";
import Testimonials from "@/component/home/Testimonials";

export default function Home() {
  return (
    <main>
      {/*  Banner Section */}
      <Banner></Banner>

      {/*  About Section */}
      <About></About>

      {/*  Services Section */}
      <Service></Service>

      {/*  Testimonials */}
      <Testimonials></Testimonials>
    </main>
  );
}
