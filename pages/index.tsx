import Head from "next/head";
import { PrismaClient } from "@prisma/client";
import { GetStaticProps } from "next";
import { Post } from "../prisma/model";
import { useRouter } from "next/router";

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};

interface HomeProps {
  posts: Post[];
}

const Home = (props: HomeProps) => {
  return (
    <>
      <Head>
        <title>노란공테니스 NTRP</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex justify-center items-center flex-col">
        <div className="h-20 flex justify-center items-center p-4 bg-btn-1 w-2/3">
          <img src={`img/forehand.png`} className="w-12"></img>
          <span className="text-2xl ">포핸드 스트로크</span>
        </div>
        <div className="h-20 flex justify-center items-center p-4 bg-btn-2 w-2/3">
          <img src={`img/backhand.png`} className="w-12"></img>
          <span className="text-2xl">백핸드 스트로크</span>
        </div>
        <div className="h-20 flex justify-center items-center p-4 bg-btn-3 w-2/3">
          <img src={`img/volley2.png`} className="w-12"></img>
          <span className="text-2xl">포핸드 발리</span>
        </div>
        <div className="h-20 flex justify-center items-center p-4 bg-btn-4 w-2/3">
          <img src={`img/volley2.png`} className="w-12"></img>
          <span className="text-2xl">백핸드 발리</span>
        </div>
        <div className="h-20 flex justify-center items-center p-4 bg-btn-5 w-2/3 ">
          <img src={`img/serve.png`} className="w-12"></img>
          <span className="text-2xl">서브 & 리턴</span>
        </div>
        <div className="h-20 flex justify-center items-center p-4 bg-btn-6 w-2/3">
          <img src={`img/rob2.png`} className="w-12"></img>
          <span className="text-2xl">로브 & 스매시</span>
        </div>
      </main>
    </>
  );
};

export default Home;
