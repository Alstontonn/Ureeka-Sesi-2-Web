import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/ui/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-gradient-to-r from-blue-400 to-indigo-500 text-white font-[family-name:var(--font-geist-sans)]">
      <Navbar className="top-0" />

      <div className="flex flex-col md:flex-row items-center justify-center h-screen relative px-4 sm:px-6 md:px-8">
        <div className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96">
          <Image
            src="/dev.png"
            alt="Developer Image"
            layout="responsive"
            width={384}
            height={384}
            className="rounded-full"
          />
        </div>
        <div className="text-center text-white z-10 mt-6 md:mt-0 md:ml-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 animate__animated animate__fadeIn animate__delay-1s">
            Hello! <br /> I'm Jonathan Alston
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-6">
            Full Stack Developer | Web Enthusiast | Problem Solver
          </p>

          <Button className="bg-indigo-600 hover:bg-indigo-700 py-2 px-6 rounded-full text-lg font-semibold transform transition-all hover:scale-105">
            <a href="/contact">Send Message</a>
          </Button>
        </div>
      </div>
    </div>
  );
}
