import { Github, Linkedin, Mail, Phone } from "lucide-react";
import Link from "next/link";

const AboutMe = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-3xl bg-white shadow-xl rounded-lg overflow-hidden">
        <div className="px-4 py-5 sm:px-6">
          <h1 className="text-3xl font-bold leading-tight text-gray-900">
            Ayushman Mishra
          </h1>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">
            Student & Aspiring Developer
          </p>
        </div>
        <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
          <dl className="sm:divide-y sm:divide-gray-200">
            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">About me</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                I'm a passionate student with a love for coding and creating
                useful projects. My goal is to make a positive impact through
                technology.
              </dd>
            </div>
            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                Coding Journey
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                My love for coding started when I built my first "Hello, World!"
                program. Since then, I've been on an exciting journey of
                learning new languages, frameworks, and best practices. I'm
                particularly interested in web development and machine learning.
              </dd>
            </div>
            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                Connect with me
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                <div className="flex space-x-6">
                  <Link
                    href="https://github.com/CoderAyushman"
                    className="text-gray-400 hover:text-customGreen"
                  >
                    <span className="sr-only">GitHub</span>
                    <Github className="h-6 w-6" />
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/ayushman-mishra-0068b024a/"
                    className="text-gray-400 hover:text-customGreen"
                  >
                    <span className="sr-only">LinkedIn</span>
                    <Linkedin className="h-6 w-6" />
                  </Link>
                  <Link
                    href="mailto:mishraayushman361@gmail.com"
                    className="text-gray-400 hover:text-customGreen"
                  >
                    <span className="sr-only">Email</span>
                    <Mail className="h-6 w-6" />
                  </Link>
                </div>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
