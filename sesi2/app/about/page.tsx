import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Navbar } from "@/components/ui/navbar";

export default function About() {
  return (
    <div className="bg-gradient-to-r from-blue-400 to-indigo-500 text-white min-h-screen font-[family-name:var(--font-geist-sans)]">
      <Navbar className="top-0" />

      <div className="flex flex-col items-center justify-center h-screen relative text-center text-white z-10">
        <h1 className="text-5xl font-extrabold mb-4">About Me</h1>
        <p className="text-xl mb-8">
          I’m Jonathan Alston <br/> a passionate full-stack developer with a love for building web applications and solving real-world problems.
        </p>

        <div className="w-32 h-32 mb-4">
          <Image
            src="/dev.jpg" 
            alt="Jonathan Alston"
            className="rounded-full shadow-xl"
            width={128}
            height={128}
          />
        </div>
      </div>

      <div className="px-8 py-16 text-center bg-gray-100 text-gray-800">
        <h2 className="text-4xl font-bold mb-8">Skills & Technologies</h2>
        <div className="grid grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-lg shadow-lg hover:bg-indigo-100 transition-all">
            <h3 className="text-2xl font-semibold mb-4">JavaScript</h3>
            <p>Proficient in building dynamic web apps with JavaScript (React, Node.js, Express).</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg hover:bg-indigo-100 transition-all">
            <h3 className="text-2xl font-semibold mb-4">HTML & CSS</h3>
            <p>Expert in crafting responsive, mobile-first web pages with HTML5, CSS3, and Tailwind CSS.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg hover:bg-indigo-100 transition-all">
            <h3 className="text-2xl font-semibold mb-4">Database Management</h3>
            <p>Experience with databases such as MongoDB, PostgreSQL, and MySQL for storing and managing data.</p>
          </div>
        </div>
      </div>

      <div className="px-8 py-16 bg-gray-200 text-gray-800">
        <h2 className="text-4xl font-bold mb-8 text-center">My Experience</h2>
        <div className="space-y-8">
          <div className="flex justify-start items-center gap-4">
            <div className="w-16 h-16 bg-indigo-600 rounded-full flex justify-center items-center text-white font-bold">
              2023
            </div>
            <div>
              <h3 className="text-2xl font-semibold">Full Stack Developer at XYZ Corp</h3>
              <p>Worked on developing and deploying scalable web applications using React, Node.js, and MongoDB.</p>
            </div>
          </div>
          <div className="flex justify-start items-center gap-4">
            <div className="w-16 h-16 bg-indigo-600 rounded-full flex justify-center items-center text-white font-bold">
              2022
            </div>
            <div>
              <h3 className="text-2xl font-semibold">Junior Web Developer at ABC Ltd</h3>
              <p>Assisted in building front-end web applications using HTML, CSS, and JavaScript.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="px-8 py-16 bg-indigo-600 text-white text-center">
        <h2 className="text-4xl font-bold mb-4">Contact Me</h2>
        <p className="text-xl mb-8">I’m always open to new opportunities and collaborations. Let’s talk!</p>
        <Button className="bg-white text-indigo-600 py-2 px-6 rounded-full text-lg font-semibold">
          <a href="/contact">Send Message</a>
        </Button>
      </div>
    </div>
  );
}
