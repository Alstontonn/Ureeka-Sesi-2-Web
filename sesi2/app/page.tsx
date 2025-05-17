import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/ui/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-gradient-to-r from-blue-400 to-indigo-500 text-white  font-[family-name:var(--font-geist-sans)]">
      <Navbar className="top-0" />

      <div className="flex items-center justify-center h-screen relative">
        <img
            src="/dev.png"
            alt="Developer Image"
            className="w-80 h-80"
          />
        <div className="text-center text-white z-10">
          <h1 className="text-5xl font-extrabold mb-4 animate__animated animate__fadeIn animate__delay-1s">
            Hello! <br /> I'm Jonathan Alston
          </h1>
          <p className="text-xl mb-6">
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
