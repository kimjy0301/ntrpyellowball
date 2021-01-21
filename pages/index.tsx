import Head from "next/head";
import { PrismaClient } from "@prisma/client";
import { GetStaticProps } from "next";
import { Post } from "../prisma/model";
import { useRouter } from "next/router";
import KakaoMap from "../components/KakaoMap.js";

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

      <main>
        <div className="flex flex-col w-screen justify-center items-center md:flex-row md:justify-between max-w-7xl mx-auto py-8 flex-wrap">
          <div className="flex relative max-w-md justify-center items-center md:ml-5">
            <div className="w-full h-full bg-gradient-to-t from-yellow-1 to-yellow-2 transform absolute inset-0 rounded-xl -rotate-6 shadow-lg md:h-64"></div>
            <div className="z-10 bg-white p-5 rounded-lg shadow-lg md:h-64">
              <h1 className="text-2xl ">노란공테니스 NTRP</h1>
              <h1 className="text-base mt-3">
                해당사이트는 노란공테니스 NTRP 자가테스트를 위해 만들어진
                사이트입니다.
              </h1>
              <h1 className="text-base mt-3">
                원하는 버튼을 눌러 자가테스트를 시작하세요.
              </h1>
            </div>
          </div>

          <div className="flex justify-center items-center flex-row my-5 flex-wrap max-w-2xl mt-12 md:mt-0">
            <div className="h-20 flex md:m-3 md:w-72 md:shadow-lg justify-between items-center p-4 from-btn-1 to-yellow-1 bg-gradient-to-br w-full md:max-w-xs cursor-pointer hover:from-yellow-1 transition-all hover:shadow-lg">
              <img src={`img/forehand.png`} className="w-12 relative "></img>
              <span className="text-2xl ">포핸드 스트로크</span>
            </div>

            <div className="h-20 flex md:m-3 md:w-72 md:shadow-lg justify-between items-center p-4 from-btn-2 to-yellow-1 bg-gradient-to-br w-full md:max-w-xs cursor-pointer hover:from-yellow-1 transition-all hover:shadow-lg">
              <img src={`img/backhand.png`} className="w-12 relative "></img>
              <span className="text-2xl">백핸드 스트로크</span>
            </div>

            <div className="h-20 flex md:m-3 md:w-72 md:shadow-lg justify-between items-center p-4 from-btn-3 to-yellow-1 bg-gradient-to-br w-full md:max-w-xs cursor-pointer hover:from-yellow-1 transition-all hover:shadow-lg">
              <img src={`img/volley1.png`} className="w-12 relative "></img>
              <span className="text-2xl">포핸드 발리</span>
            </div>

            <div className="h-20 flex md:m-3 md:w-72 md:shadow-lg justify-between items-center p-4 from-btn-4 to-yellow-1 bg-gradient-to-br w-full md:max-w-xs cursor-pointer hover:from-yellow-1 transition-all hover:shadow-lg">
              <img src={`img/volley2.png`} className="w-12 relative "></img>
              <span className="text-2xl">백핸드 발리</span>
            </div>

            <div className="h-20 flex md:m-3 md:w-72 md:shadow-lg justify-between items-center p-4 from-btn-5 to-yellow-1 bg-gradient-to-br w-full md:max-w-xs cursor-pointer hover:from-yellow-1 transition-all hover:shadow-lg ">
              <img src={`img/serve.png`} className="w-12 relative "></img>
              <span className="text-2xl">서브 & 리턴</span>
            </div>

            <div className="h-20 flex md:m-3 md:w-72 md:shadow-lg justify-between items-center p-4 from-btn-6 to-yellow-1 bg-gradient-to-br w-full md:max-w-xs cursor-pointer hover:from-yellow-1 transition-all hover:shadow-lg">
              <img src={`img/smash.png`} className="w-12 relative "></img>
              <span className="text-2xl">로브 & 스매시</span>
            </div>
          </div>

          <div className="w-full mt-3 ">
            <div className="mx-48 mb-3">
              <div className="text-2xl">About 노란공테니스</div>
              <div>경기도 고양시 일산동구 성석동 37-67</div>
              <div>소개글 들어갈자리</div>
            </div>
            <div className="w-full h-64 bg-red-100">
              <KakaoMap></KakaoMap>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
