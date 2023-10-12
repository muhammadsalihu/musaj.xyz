import { type NextPage } from "next";
import Head from "next/head";
// import Image from "next/image";
// import Me from "public/images/me.jpg";
// import Astronaut from "public/images/astronaut.jpg";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faInstagram, faLinkedin, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import Main from "src/layout/Main";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Muhammad Salihu </title>
        <meta name="description" content="Muhammad Salihu" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <div className="flex flex-col gap-3 sm:px-4 sm:py-16">
          <div className="sm:text-[2rem] text-xl font-semibold">
            "Become the Best in the world at what you do. keep redefining what you do until this is true" - Naval
          </div>
          <div className="flex flex-row gap-3 text-[1.5rem] w-full">
            <a href="https://twitter.com/iam_musaj" target="_blank" className="hover:scale-[1.08] transform transition duration-500" >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="https://github.com/muhammadsalihu" target="_blank" className="hover:scale-[1.08] transform transition duration-500" >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="https://linkedin.com/in/musaj" target="_blank" className="hover:scale-[1.08] transform transition duration-500" >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="https://youtube.com/@musaj.airbills" target="_blank" className="hover:scale-[1.08] transform transition duration-500" >
              <FontAwesomeIcon icon={faYoutube} />
            </a>
            <a href="https://instagram.com/iam_musaj" target="_blank" className="hover:scale-[1.08] transform transition duration-500" >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>

          <div className="flex flex-row w-full gap-3 text-[1.2rem]">
            <Link href={"/about"} className="underline underline-offset-8">
              about
            </Link>
            <Link href={"https://musaj.substack.com"} className="underline underline-offset-8">
              blog
            </Link>
            <Link href={"https://youtube.com/@musaj.airbills"} className="underline underline-offset-8">
              youtube
            </Link>
          </div>
        </div>
      </Main>
    </>
  );
};

export default Home;
