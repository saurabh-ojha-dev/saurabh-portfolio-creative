import AnimatedText from '@/components/AnimatedText';
import { GithubIcon } from '@/components/Icons';
import Layout from '@/components/Layout';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import aptifyImg from '../../public/images/projects/Aptify.png';
import readImg from '../../public/images/projects/Read-project.jpg';
import workriseImg from '../../public/images/projects/workrise.png';
import airkritImg from '../../public/images/projects/airkrit.png';
import corritImg from '../../public/images/projects/Corrit-Dashboard.png';
import ostiumImg from '../../public/images/projects/ostium-project.png';
import dochemoImg from '../../public/images/projects/dochemo.png';
import stackbloomImg from '../../public/images/projects/Stackbloom.png';
import webrecruitmentImg from '../../public/images/projects/webrecruitment.png';

import { motion } from 'framer-motion';

const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, img, link }) => {
  return (
    <article className="w-full flex items-center justify-between relative rounded-br-2xl rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]" />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto aspect-video object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        />
      </Link>

      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-primary font-medium text-xl dark:text-primaryDark xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light lg:text-3xl md:text-2xl sm:text-xl xs:text-lg">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light md:text-sm sm:text-xs">
          {summary}
        </p>
        <div className="mt-2 flex items-center">
          {/* <Link href={github} target="_blank" className="w-10">
            <GithubIcon />
          </Link> */}
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark sm:px-4 sm:text-base xs:text-sm xs:px-3 xs:p-1.5"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, type, img, link }) => {
  return (
    <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light xs:p-4">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]" />
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto aspect-video object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>

      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base sm:text-sm">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl md:text-xl sm:text-lg">
            {title}
          </h2>
        </Link>

        <div className="w-full mt-2 flex items-center justify-between">
          <Link
            href={link}
            target="_blank"
            className="text-lg font-semibold underline md:text-base sm:text-sm"
          >
            Visit
          </Link>
          {/* <Link href={github} target="_blank" className="w-8 md:w-6">
            <GithubIcon />
          </Link> */}
        </div>
      </div>
    </article>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title>Saurabh Ojha | Projects Page</title>
        <meta name="description" content="Browse my projects" />
      </Head>
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Innovation Distinguishes Leaders From Followers!"
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />

          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                title="Aptify - AI Platform for Datacenter Operations"
                img={aptifyImg}
                summary="Developed Aptify, an agentic AI platform for datacenter operations using natural language processing and collaborative AI agents. Built custom agents from SOPs/MOPs for operational efficiency, automating audits, compliance, and fast-tracking onboarding with DCIM systems for real-time insights, predictive maintenance, and contract/RFP automation achieving 99.999% uptime."
                link="https://app.apti-fy.ai/"
                github="https://github.com/saurabh-ojha-dev"
                type="Featured Project"
              />
            </div>

            {/* <div className="col-span-6 sm:col-span-12">
              <Project
                title="READ - STIX Cybersecurity Platformda"
                img={readImg}
                link="https://www.elemendar.ai/read"
                github="https://github.com/saurabh-ojha-dev"
                type="Full Stack Project"
              />
            </div> */}
            {/* <div className="col-span-6 sm:col-span-12">
              <Project
                title="WorkRise - Freelance Platform"
                img={workriseImg}
                link="https://work-rise.vercel.app/"
                github="https://github.com/saurabh-ojha-dev"
                type="Full Stack Project"
              />
            </div> */}

            <div className="col-span-12">
              <FeaturedProject
                title="READ - Converting STIX to Advanced Models"
                img={readImg}
                summary="Developed READ, a cybersecurity threat intelligence platform using React, Node.js, and GraphDB to convert STIX 2.1 data into advanced models with D3.js visualizations and REST APIs with Docker. Designed and deployed a scalable data processing pipeline incorporating REST APIs, Docker for containerization, and Elasticsearch for analytics, automating report generation and real-time threat intelligence to streamline cybersecurity operations."
                link="https://www.elemendar.ai/read"
                github="https://github.com/saurabh-ojha-dev"
                type="Featured Project"
              />
            </div>

            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Airkrit - Clean Landing Page"
                img={airkritImg}
                link="http://www.airkrit.com/"
                github="https://github.com/saurabh-ojha-dev"
                type="Frontend Project"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="WebRecruitment Portal"
                img={webrecruitmentImg}
                link="https://webrecruitment.mooo.com/"
                github="https://github.com/saurabh-ojha-dev"
                type="Full Stack Project"
              />
            </div>

            <div className="col-span-12">
              <FeaturedProject
                title="WorkRise - Platform for Freelance Services"
                img={workriseImg}
                summary="WorkRise is a cutting-edge freelance platform designed to streamline the process of connecting freelancers with clients. Leveraging modern technologies and Stripe Gateway integration, engineered and deployed WorkRise, a full-stack freelance platform integrating the Stripe API for payment processing and implementing secure JWT-based authentication using Next.js, Express.js, and PostgreSQL/Prisma stack."
                link="https://work-rise.vercel.app/"
                // github="https://github.com/saurabh-ojha-dev"
                type="Featured Project"
              />
            </div>

            <div className="col-span-6 sm:col-span-12">
              <Project
                title="CorrIt Admin - Rental Platform"
                img={corritImg}
                link="https://rental.corritelectric.com/admin/auth/login"
                // github="https://github.com/saurabh-ojha-dev"
                type="Admin Dashboard"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Ostium Frontend"
                img={ostiumImg}
                link="https://ostium-frontend.vercel.app/"
                // github="https://github.com/saurabh-ojha-dev"
                type="Frontend Project"
              />
            </div>

            <div className="col-span-6 sm:col-span-12">
              <Project
                title="DoChomoEo - Healthcare Platform"
                img={dochemoImg}
                link="https://dochomoeo.com/"
                // github="https://github.com/saurabh-ojha-dev"
                type="Full Stack Project"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="StackBloom - Portfolio & Case Studies"
                img={stackbloomImg}
                link="https://www.stackbloom.in"
                // github="https://github.com/saurabh-ojha-dev"
                type="Portfolio Website"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
