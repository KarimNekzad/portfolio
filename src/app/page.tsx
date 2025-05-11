'use client';

import Image from 'next/image';
import { ArrowDownIcon } from '@heroicons/react/24/solid';
import { EnvelopeIcon, PaperAirplaneIcon } from '@heroicons/react/24/outline';
import Typewriter from '@/components/Typewriter';

import dynamic from 'next/dynamic';

const GitHubCornersNoSSR = dynamic(() => import('@uiw/react-github-corners'), {
  ssr: false,
});

export default function Home() {
  const currentYear = new Date().getFullYear();
  const workStartYear = 2021;
  const workExperienceYears = currentYear - workStartYear;

  return (
    <div className="min-h-screen">
      <GitHubCornersNoSSR
        position="left"
        href="https://github.com/KarimNekzad/portfolio"
        bgColor="oklch(0.646 0.222 41.116)"
      />

      <div className="p-5 md:px-10 md:mx-auto max-w-4xl flex flex-col gap-4 md:gap-8">
        <div className="flex flex-col md:flex-row md:items-center">
          <div
            id="profile"
            className="flex flex-col justify-center gap-2 justify-start items-center md:min-w-[200px]"
          >
            <div className="w-24 h-24 overflow-hidden rounded-full shadow-md transition-transform hover:scale-105 hover:shadow-lg">
              <Image
                src="/images/profile.jpeg"
                alt="Profile picture"
                width={2231}
                height={2578}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-lg font-bold leading-none">Karim Nekzad</p>
            <div className="w-full text-center break-words">
              <Typewriter />
            </div>
          </div>

          <hr className="my-3 border-t-2 border-gray-300 w-2/4 md:hidden mx-auto rounded-md" />
          <div className="hidden md:inline-block w-[8px] h-24 bg-gray-300 mx-4"></div>

          <div className="md:p-4">
            <p className="mb-4">
              Hey 👋 I'm Karim, a Software Engineer in New York City with{' '}
              {workExperienceYears} years of experience in software development.
              Feel free to explore my work and get in touch if you have any
              questions or just want to say hi!
            </p>

            <div className="flex flex-row justify-center items-center md:justify-start">
              {/* <Link href="/projects"> */}
              <button
                type="button"
                className="flex flex-row items-center cursor-pointer gap-1 font-bold text-white bg-orange-600 hover:bg-orange-700 focus:ring-4 focus:ring-orange-300 rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-orange-600 dark:hover:bg-orange-600 focus:outline-none dark:focus:ring-orange-700"
              >
                Explore my work <ArrowDownIcon className="w-4" />
              </button>
              {/* </Link> */}
            </div>
          </div>
        </div>

        <div className="flex flex-col p-4 md:p-8 border-1 border-gray-300 rounded-lg shadow-sm">
          <div className="mb-2 flex flex-row items-center gap-1 leading-none">
            <EnvelopeIcon className="w-5 text-orange-600" /> Contact me
          </div>

          <form action="https://formspree.io/f/xgvkkned" method="POST">
            <div className="flex flex-col md:flex-row md:items-center md:gap-4">
              <div className="flex-1">
                <label
                  htmlFor="email"
                  className="w-max block text-sm/6 font-medium text-gray-900"
                >
                  Email address
                </label>
                <div className="my-2 ">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    autoComplete="email"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-orange-600 sm:text-sm/6"
                    required
                  />
                </div>
              </div>
              <div className="flex-2">
                <label
                  htmlFor="subject"
                  className="w-max block text-sm/6 font-medium text-gray-900"
                >
                  Subject
                </label>
                <div className="my-2">
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="e.g. Collaboration Opportunity"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-orange-600 sm:text-sm/6"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row md:items-end gap-4">
              <div className="flex-7">
                <label
                  htmlFor="message"
                  className="w-max block text-sm/6 font-medium text-gray-900 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Hi Karim, I'd love to discuss…"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-orange-600 sm:text-sm/6"
                  required
                />
              </div>

              <div className="flex-1">
                <button
                  type="submit"
                  className="flex flex-row items-center cursor-pointer gap-1 transition-transform font-bold text-white bg-orange-600 hover:bg-orange-700 focus:ring-4 focus:ring-orange-300 rounded-lg text-sm px-5 py-2.5 dark:bg-orange-600 dark:hover:bg-orange-600 focus:outline-none dark:focus:ring-orange-700"
                >
                  Send <PaperAirplaneIcon className="w-4" />
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
