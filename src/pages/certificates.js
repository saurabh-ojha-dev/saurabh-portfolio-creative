import AnimatedText from '@/components/AnimatedText';
import Layout from '@/components/Layout';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React, { useRef } from 'react';
import { motion, useMotionValue } from 'framer-motion';
import cert1 from '../../public/images/certificates/Mern Stack certificate.png';
import cert2 from '../../public/images/certificates/certificate.png';
import cert3 from '../../public/images/certificates/c++ certificate.jpeg';
import cert4 from '../../public/images/certificates/hackathon certificate.jpeg';
import cert5 from '../../public/images/certificates/Sparks Foundation Internship Certificate.jpeg';

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

const FeaturedArticle = ({ img, title, time, summary, link }) => {
  return (
    <li className="relative col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl dark:bg-dark dark:border-light sm:p-3">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl md:-right-2 sm:-right-1.5" />
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
        <h2 className="capitalize text-2xl font-bold my-2 mt-4 hover:underline md:text-xl sm:text-lg xs:text-base">
          {title}
        </h2>
      </Link>
      <p className="text-sm mb-2 xs:text-xs">{summary}</p>
      <span className="text-primary font-semibold dark:text-primaryDark sm:text-sm xs:text-xs">
        {time}
      </span>
    </li>
  );
};

const certificates = () => {
  return (
    <>
      <Head>
        <title>Saurabh Ojha | Certificates & Achievements</title>
        <meta name="description" content="Browse my professional certificates and achievements" />
      </Head>
      <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Continuous Learning & Growth!"
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <ul className="grid grid-cols-2 gap-16 lg:gap-8 md:grid-cols-1 md:gap-y-16">
            <FeaturedArticle
              title="MERN Stack Development Certificate"
              summary="Completed comprehensive MERN Stack development course covering MongoDB, Express.js, React.js, and Node.js. Mastered full-stack web development, RESTful APIs, authentication, and modern JavaScript practices."
              time="Professional Certificate"
              link="#"
              img={cert1}
            />

            <FeaturedArticle
              title="Full Stack Development Certification"
              summary="Achieved certification in full-stack web development, demonstrating proficiency in frontend and backend technologies, database management, and deployment strategies for modern web applications."
              time="Professional Certificate"
              link="#"
              img={cert2}
            />

            <FeaturedArticle
              title="C++ Programming Certificate"
              summary="Successfully completed C++ programming course, demonstrating strong understanding of object-oriented programming concepts, data structures, algorithms, and advanced C++ features for efficient software development."
              time="Programming Language"
              link="#"
              img={cert3}
            />

            <FeaturedArticle
              title="Hackathon Achievement Certificate"
              summary="Recognition for outstanding performance and innovative problem-solving in a competitive hackathon event. Demonstrated ability to work under pressure, collaborate effectively, and deliver creative technical solutions."
              time="Competition Winner"
              link="#"
              img={cert4}
            />

            <FeaturedArticle
              title="The Sparks Foundation Internship Certificate"
              summary="Completed successful internship at The Sparks Foundation, gaining hands-on experience in web development, software engineering practices, and collaborative project delivery in a professional environment."
              time="Internship"
              link="#"
              img={cert5}
            />
            
          </ul>
        </Layout>
      </main>
    </>
  );
};

export default certificates;
