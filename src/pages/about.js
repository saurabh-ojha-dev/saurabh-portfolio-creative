import AnimatedText from '@/components/AnimatedText';
import Layout from '@/components/Layout';
import Head from 'next/head';
import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import profilePic from '../../public/images/profile/pic.jpg';
import { useInView, useMotionValue, useSpring, motion } from 'framer-motion';
import Skills from '@/components/Skills';

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on('change', (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
};

const about = () => {
  return (
    <>
      <Head>
        <title>Saurabh Ojha | About Page</title>
        <meta name="description" content="Learn more about Saurabh Ojha - Full Stack Web Developer" />
      </Head>
      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Passion Fuels Purpose!"
            className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                Biography
              </h2>
              <p className="font-medium">
                Hi, I&apos;m Saurabh Ojha, a Full Stack Web Developer with a
                passion for creating dynamic and responsive web applications. With 3+ years of experience in the field, I am always looking for
                new and innovative ways to bring ideas to life through code.
              </p>

              <p className="my-4 font-medium">
                I excel in both front-end and back-end development, specializing in technologies like React.js, Next.js, Node.js, Express.js, and cloud platforms. My strong problem-solving skills and commitment to staying current with industry trends make me a valuable asset to any development team.
              </p>

              <p className="font-medium">
                Whether I&apos;m working on a full-stack application, developing AI-driven platforms, or
                building scalable microservices, I bring my commitment to technical excellence and
                innovative thinking to every project I work on. I look
                forward to the opportunity to bring my skills and passion to
                your next project.
              </p>
            </div>

            <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" />
              <Image
                src={profilePic}
                alt="Saurabh Ojha"
                className="w-full h-auto rounded-2xl"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>

            <div className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3">
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={20} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  projects completed
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={3} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  years of experience
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  99.999<span className="text-4xl">%</span>
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  uptime achieved
                </h2>
              </div>
            </div>
          </div>

          <Skills />

          <div className="mt-64 flex flex-col items-center justify-center sm:mt-32">
            <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
              Experience
            </h2>

            <div className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
              <motion.div 
                className="absolute left-[18px] top-0 w-[4px] h-full bg-dark origin-top dark:bg-[#58e6d9] md:w-[2px] md:left-[14px] xs:left-[11.5px]"
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                transition={{ duration: 2.0, ease: "easeInOut" }}
                viewport={{ once: true }}
              />

              <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
                <li className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]">
                  <div>
                    <motion.div 
                      className="absolute left-0 rounded-full bg-[#58e6d9] border-dark border-4 w-[40px] h-[40px] -mt-2 dark:border-light md:w-[30px] md:h-[30px] xs:w-[25px] xs:h-[25px]"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      viewport={{ once: true }}
                    />
                    <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
                      Software Engineer @Blackcoffer
                    </h3>
                    <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
                      07/2024 - Present | Delhi, India
                    </span>
                    <p className="font-medium w-full md:text-sm">
                      Delivered multiple full-stack projects from conception to deployment on AWS/GCP, architecting backends with Express.js and Supabase/PostgreSQL, and building responsive frontends with React.js/Next.js and Zustand/Redux. Developed an NLP-driven automation engine using OpenAI and libreoffice-convert to process complex documents (contracts, RFPs, SOPs), significantly reducing manual compliance and data extraction times.
                    </p>
                  </div>
                </li>

                <li className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]">
                  <div>
                    <motion.div 
                      className="absolute left-0 rounded-full bg-[#58e6d9] border-dark border-4 w-[40px] h-[40px] -mt-2 dark:border-light md:w-[30px] md:h-[30px] xs:w-[25px] xs:h-[25px]"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      viewport={{ once: true }}
                    />
                    <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
                      Full Stack Web Developer @Vedobi
                    </h3>
                    <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
                      04/2023 - 07/2024 | New Delhi, India
                    </span>
                    <p className="font-medium w-full md:text-sm">
                      Developed and implemented an intuitive admin dashboard, revolutionizing product management by enabling seamless addition, deletion, and monitoring of products on the website, resulting in a 40% reduction in time spent on product updates and increased overall website efficiency. Deployed both backend and frontend on AWS for robust hosting and accessibility.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-64 flex flex-col items-center justify-center sm:mt-32">
            <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
              Education
            </h2>

            <div className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
              <motion.div 
                className="absolute left-[18px] top-0 w-[4px] h-full bg-dark origin-top dark:bg-[#58e6d9] md:w-[2px] md:left-[14px] xs:left-[11.5px]"
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                transition={{ duration: 2.0, ease: "easeInOut" }}
                viewport={{ once: true }}
              />

              <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
                <li className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]">
                  <div>
                    <motion.div 
                      className="absolute left-0 rounded-full bg-[#58e6d9] border-dark border-4 w-[40px] h-[40px] -mt-2 dark:border-light md:w-[30px] md:h-[30px] xs:w-[25px] xs:h-[25px]"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      viewport={{ once: true }}
                    />
                    <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
                      B.Tech Computer Science & Engineering
                    </h3>
                    <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
                      01/2020 - 06/2024 | Guru Gobind Singh Indraprastha University
                    </span>
                    <p className="font-medium w-full md:text-sm">
                      CGPA: 8.87/10.0 - Graduated with honors, specializing in full-stack development, data structures, algorithms, and cloud computing. Completed multiple industry-relevant projects involving AI/ML, web development, and microservices architecture.
                    </p>
                  </div>
                </li>

                <li className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]">
                  <div>
                    <motion.div 
                      className="absolute left-0 rounded-full bg-[#58e6d9] border-dark border-4 w-[40px] h-[40px] -mt-2 dark:border-light md:w-[30px] md:h-[30px] xs:w-[25px] xs:h-[25px]"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      viewport={{ once: true }}
                    />
                    <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
                      Senior Secondary (Class 12th)
                    </h3>
                    <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
                      03/2018 - 03/2019 | DSM Public Sr. Sec. School
                    </span>
                    <p className="font-medium w-full md:text-sm">
                      Percentage: 74% - Completed higher secondary education with focus on Physics, Chemistry, and Mathematics, building a strong foundation for engineering studies.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default about;
