import AnimatedText from '@/components/AnimatedText';
import Layout from '@/components/Layout';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React, { useRef } from 'react';
import { motion, useMotionValue } from 'framer-motion';
import article1 from '../../public/images/articles/pagination component in reactjs.jpg';
import article2 from '../../public/images/articles/create loading screen in react js.jpg';
import article3 from '../../public/images/articles/form validation in reactjs using custom react hook.png';
import article4 from '../../public/images/articles/smooth scrolling in reactjs.png';
import article5 from '../../public/images/articles/create modal component in react using react portals.png';
import article6 from '../../public/images/articles/todo list app built using react redux and framer motion.png';
import article7 from '../../public/images/articles/What is Redux with easy explanation.png';
import article8 from '../../public/images/articles/What is higher order component in React.jpg';

const FramerImage = motion(Image);

const MovingImg = ({ title, img, link }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = useRef(null);

  function handleMouse(event) {
    imgRef.current.style.display = 'inline-block';
    x.set(event.pageX);
    y.set(-10);
  }

  function handleMouseLeave(event) {
    imgRef.current.style.display = 'none';
    x.set(0);
    y.set(0);
  }

  return (
    <Link
      href={link}
      target="_blank"
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
    >
      <h2 className="capitalize text-xl font-semibold hover:underline">
        {title}
      </h2>
      <FramerImage
        style={{ x: x, y: y }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.2 } }}
        ref={imgRef}
        src={img}
        alt={title}
        className="z-10 w-96 h-auto hidden absolute rounded-lg md:!hidden"
        priority
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </Link>
  );
};

const Article = ({ img, title, date, link }) => {
  return (
    <motion.li
      initial={{ y: 200 }}
      whileInView={{ y: 0, transition: { duration: 0.5, ease: 'easeInOut' } }}
      viewport={{ once: true }}
      className="relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light text-dark first:mt-0 border border-solid border-dark border-r-4 border-b-4 dark:border-light dark:bg-dark dark:text-light sm:flex-col"
    >
      <MovingImg title={title} img={img} link={link} />
      <span className="text-primary font-semibold pl-4 dark:text-primaryDark sm:self-start sm:pl-0 xs:text-sm">
        {date}
      </span>
    </motion.li>
  );
};

const FeaturedArticle = ({ img, title, time, summary, link }) => {
  return (
    <li className="relative col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl dark:bg-dark dark:border-light">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl" />
      <Link
        href={link}
        target="_blank"
        className="w-full inline-block cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        />
      </Link>
      <Link href={link} target="_blank">
        <h2 className="capitalize text-2xl font-bold my-2 mt-4 hover:underline xs:text-lg">
          {title}
        </h2>
      </Link>
      <p className="text-sm mb-2">{summary}</p>
      <span className="text-primary font-semibold dark:text-primaryDark">
        {time}
      </span>
    </li>
  );
};

const articles = () => {
  return (
    <>
      <Head>
        <title>Saurabh Ojha | Case Studies & Articles</title>
        <meta name="description" content="Browse my case studies and technical articles" />
      </Head>
      <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Words Can Change The World!"
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <ul className="grid grid-cols-2 gap-16 lg:gap-8 md:grid-cols-1 md:gap-y-16">
            <FeaturedArticle
              title="Go-Gro Admin - E-commerce Management System"
              summary="Deep dive into building a comprehensive admin dashboard for managing e-commerce operations. Learn about product management, inventory tracking, order processing, and analytics implementation using React and Node.js."
              time="Case Study"
              link="https://www.stackbloom.in/case-studies/go-gro-admin"
              img={article1}
            />

            <FeaturedArticle
              title="READ - Cybersecurity Threat Intelligence Platform"
              summary="Explore how we built a scalable cybersecurity platform converting STIX 2.1 data into advanced models using React, Node.js, and GraphDB. Learn about D3.js visualizations, REST API design, and real-time threat intelligence processing."
              time="Case Study"
              link="https://www.stackbloom.in/case-studies/read"
              img={article2}
            />
          </ul>
          <h2 className="font-bold text-4xl w-full text-center my-16 mt-32">
            All Case Studies & Articles
          </h2>
          <ul>
            <Article
              title="Go-Gro - Complete E-commerce Platform Development"
              date="Project Showcase"
              link="https://www.stackbloom.in/case-studies/go-gro"
              img={article3}
            />
            <Article
              title="Building Aptify: AI-Driven Datacenter Operations Platform"
              date="Technical Deep Dive"
              link="https://app.apti-fy.ai/"
              img={article4}
            />
            <Article
              title="WorkRise: Full-Stack Freelance Platform with Stripe Integration"
              date="Development Journey"
              link="https://work-rise.vercel.app/"
              img={article5}
            />
            <Article
              title="Implementing Real-Time Threat Intelligence with GraphDB"
              date="Architecture Overview"
              link="https://www.elemendar.ai/read"
              img={article6}
            />
            <Article
              title="Building Scalable Admin Dashboards with React and Node.js"
              date="Best Practices"
              link="https://rental.corritelectric.com/admin/auth/login"
              img={article7}
            />
            <Article
              title="Microservices Architecture: From Monolith to Distributed Systems"
              date="Technical Article"
              link="https://github.com/saurabh-ojha-dev"
              img={article8}
            />
            <Article
              title="Modern Frontend Development: Next.js, Zustand, and Tailwind CSS"
              date="Development Guide"
              link="https://www.stackbloom.in"
              img={article1}
            />
            <Article
              title="Implementing CI/CD Pipelines for Full-Stack Applications"
              date="DevOps Guide"
              link="https://github.com/saurabh-ojha-dev"
              img={article2}
            />
          </ul>
        </Layout>
      </main>
    </>
  );
};

export default articles;
