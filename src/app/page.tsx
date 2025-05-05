import Image from 'next/image';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';
import Typewriter from '@/components/Typewriter';

export default function Home() {
  const currentYear = new Date().getFullYear();
  const workStartYear = 2021;
  const workExperienceYears = currentYear - workStartYear;

  return (
    <div className="min-h-screen">
      <div id="navbar">
        <div className="flex flex-row p-2 mt-2 mb-6 justify-center items-center gap-2 md:gap-6">
          <div>home</div>
          <div>about</div>
          <div>contact</div>
          <div>info</div>
        </div>
      </div>

      <div className="flex flex-col justify-center md:flex-row md:items-center px-4 md:px-8 md:mx-auto max-w-4xl">
        <div
          id="profile"
          className="px-4 flex flex-col flex-grow gap-2 items-center md:min-w-[200px]"
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
          {/* <p className="text-sm leading-none">Software Engineer</p> */}
          <div className="w-full text-center break-words">
            <Typewriter />
          </div>
        </div>

        <hr className="my-3 border-t-2 border-gray-300 w-1/4 md:hidden mx-auto rounded-md" />
        <div className="hidden md:inline-block w-[8px] h-24 bg-gray-300 mx-4"></div>

        <div className="px-5 md:p-4">
          <p className="mb-4">
            Hey 👋 I'm Karim, a Software Engineer in New York City with{' '}
            {workExperienceYears} years of experience in software development.
            Feel free to explore my work and get in touch if you have any
            questions or just want to say hi!
          </p>

          <Link href="/projects">
            <button
              type="button"
              className="flex flex-row items-center cursor-pointer gap-1 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Explore my work <ArrowTopRightOnSquareIcon className="w-4" />
            </button>
          </Link>
        </div>
      </div>

      {/* achievements at job (smart buy image) */}
      {/* achievements at scool (deans list all semesters, 3.9 GPA, TTP ) */}

      <div></div>
    </div>
  );
}
