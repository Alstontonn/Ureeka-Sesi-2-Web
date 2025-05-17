import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Navbar } from "@/components/ui/navbar";

export default function Contact() {
  return (
    <div className="bg-gradient-to-r from-blue-400 to-indigo-500 text-white font-[family-name:var(--font-geist-sans)]">
      <Navbar className="top-0 w-full sticky" />

      <div className="flex flex-col items-center justify-center h-screen py-16">
        <h1 className="text-5xl font-extrabold mb-4 text-center">Contact Me</h1>
        <p className="text-xl mb-8 text-center">
          I’m always open to new opportunities and collaborations. Feel free to drop me a message below!
        </p>

        <div className="w-full max-w-lg bg-white p-8 rounded-lg shadow-lg space-y-6">
          <div className="space-y-4">
            <div className="flex flex-col">
              <label htmlFor="name" className="text-lg text-gray-800">Your Name</label>
              <input
                type="text"
                id="name"
                placeholder="John Doe"
                className="p-3 mt-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="text-lg text-gray-800">Your Email</label>
              <input
                type="email"
                id="email"
                placeholder="you@example.com"
                className="p-3 mt-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="subject" className="text-lg text-gray-800">Subject</label>
              <input
                type="text"
                id="subject"
                placeholder="Subject of your message"
                className="p-3 mt-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="message" className="text-lg text-gray-800">Your Message</label>
              <textarea
                id="message"
                rows={5}
                placeholder="Type your message here..."
                className="p-3 mt-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>

          <Button className="w-full bg-indigo-600 hover:bg-indigo-700 py-3 px-6 rounded-lg text-white text-lg font-semibold transform transition-all hover:scale-105">
            Send Message
          </Button>
        </div>
      </div>

      <div className="bg-gray-100 py-16 text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Connect with Me</h2>
        <div className="flex justify-center gap-8 text-2xl text-gray-800">
          <a href="#" className="hover:text-indigo-600">LinkedIn</a>
          <a href="#" className="hover:text-indigo-600">GitHub</a>
          <a href="#" className="hover:text-indigo-600">Twitter</a>
        </div>
      </div>
    </div>
  );
}
