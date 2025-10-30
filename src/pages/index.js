import Head from 'next/head';
import Image from 'next/image';
import Layout from '@/components/Layout';
import profilePic from '../../public/images/profile/developer-pic-1.png';
import AnimatedText from '@/components/AnimatedText';
import Link from 'next/link';
import { LinkArrow } from '@/components/Icons';
import HireMe from '@/components/HireMe';
import lightBulb from '../../public/images/svgs/miscellaneous_icons_1.svg';

export default function Home() {
  return (
    <>
      <Head>
        <title>Saurabh Ojha - Full Stack Web Developer</title>
        <meta
          name="description"
          content="Full Stack Web Developer specializing in React.js, Next.js, Node.js, and cloud technologies"
        />
      </Head>
      <main className="flex items-center text-dark w-full min-h-screen dark:text-light">
        <Layout className="pt-0 md:pt-16 sm:pt-8">
          <div className="flex items-center justify-between w-full lg:flex-col">
            <div className="w-1/2 lg:w-full lg:mb-6">
              <Image
                src={profilePic}
                alt="Saurabh Ojha"
                className="w-full h-auto"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
              />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center">
              <AnimatedText
                text="Turning Vision Into Reality With Code And Design."
                className="!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl xs:!text-2xl"
              />
              <p className="my-4 text-base font-medium md:text-sm sm:text-xs xs:text-xs">
                As a passionate Full Stack Web Developer with 3+ years of experience,
                I specialize in creating dynamic and responsive web applications. I excel in both
                front-end and back-end development with strong problem-solving skills and commitment
                to staying current with industry trends.
              </p>
              <div className="flex items-center self-start mt-2 lg:self-center sm:flex-col sm:gap-2">
                <Link
                  href="/My-Resume.pdf"
                  target={'_blank'}
                  className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light md:p-2 md:px-4 md:text-base sm:w-full sm:justify-center"
                  download={true}
                >
                  Resume <LinkArrow className={'w-6 ml-1 sm:w-4'} />
                </Link>
                <Link
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=sourabhojha12@gmail.com"
                  target={'_blank'}
                  className="ml-4 text-lg font-medium capitalize text-dark underline dark:text-light md:text-base sm:ml-0 sm:text-base"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>

        <HireMe />
        <div className="absolute right-8 bottom-8 inline-block w-24 md:hidden">
          <Image src={lightBulb} alt="Saurabh Ojha" className="w-full h-auto" />
        </div>
      </main>
    </>
  );
}
