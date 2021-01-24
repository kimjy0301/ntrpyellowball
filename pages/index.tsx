import Head from "next/head";
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
  const router = useRouter();
  return (
    <>
      <Head>
        <title>노란공테니스 YTRP</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="h-full overflow-y-scroll md:flex md:justify-center md:items-center md:-mt-14 mx-auto">
        <div className="h-full flex flex-col w-screen justify-center items-center md:flex-row md:justify-between max-w-7xl mx-auto py-8 flex-wrap">
          <div className="flex relative max-w-md justify-center items-center md:ml-5">
            <div className="w-full h-full bg-gradient-to-t from-yellow-1 to-yellow-2 transform absolute inset-0 rounded-xl -rotate-6 shadow-lg md:h-64"></div>
            <div className="z-10 bg-white p-5 rounded-lg shadow-lg md:h-64">
              <h1 className="text-2xl font-semibold mt-5">노란공테니스 YTRP</h1>
              <h1 className="text-sm tracking-normal">
                (Yellowball Tennis Rating Program)
              </h1>
              <h1 className="mt-3">해당 프로그램은</h1>
              <h1 className="">순수 동호인을 대상으로 하여</h1>
              <h1 className="">자가 테니스레벨을 테스트하는 프로그램입니다.</h1>

              <h1 className="">원하는 버튼을 눌러 테스트를 시작해 보세요.</h1>
            </div>
          </div>
          <div className="flex justify-center items-center flex-row my-5 flex-wrap max-w-2xl mt-12 md:mt-0">
            <div
              onClick={(e) => {
                e.preventDefault();
                router.push("/forehand");
              }}
              className="flex md:m-3 md:w-72 md:shadow-lg justify-between border-yellow-1 border-2  rounded-md items-center p-4  w-2/5 bg-white mx-1 my-1 shadow-lg md:max-w-xs cursor-pointer hover:bg-yellow-1 transition-all hover:shadow-lg"
            >
              <span className="text-sm md:text-2xl">스트로크 stroke</span>
            </div>

            <div className="flex md:m-3 md:w-72 md:shadow-lg justify-between border-yellow-1 border-2  rounded-md items-center p-4  w-2/5 bg-white mx-1 my-1 shadow-lg md:max-w-xs cursor-pointer hover:bg-yellow-1 transition-all hover:shadow-lg">
              <span className="text-sm md:text-2xl">발리 volley</span>
            </div>

            <div className="flex md:m-3 md:w-72 md:shadow-lg justify-between border-yellow-1 border-2  rounded-md items-center p-4  w-2/5 bg-white mx-1 my-1 shadow-lg md:max-w-xs cursor-pointer hover:bg-yellow-1 transition-all hover:shadow-lg">
              <span className="text-sm md:text-2xl">서브 & 스매시</span>
            </div>

            <div className="flex md:m-3 md:w-72 md:shadow-lg justify-between border-yellow-1 border-2  rounded-md items-center p-4  w-2/5 bg-white mx-1 my-1 shadow-lg md:max-w-xs cursor-pointer hover:bg-yellow-1 transition-all hover:shadow-lg">
              <span className="text-sm md:text-2xl">리턴 & 로브</span>
            </div>

            <div className="flex md:m-3 md:w-72 md:shadow-lg justify-between border-yellow-1 border-2  rounded-md items-center p-4  w-2/5 bg-white mx-1 my-1 shadow-lg md:max-w-xs cursor-pointer hover:bg-yellow-1 transition-all hover:shadow-lg ">
              <span className="text-sm md:text-2xl">게임운영능력</span>
            </div>

            <div className="flex md:m-3 md:w-72 md:shadow-lg justify-between border-yellow-1 border-2  rounded-md items-center p-4  w-2/5 bg-white mx-1 my-1 shadow-lg md:max-w-xs cursor-pointer hover:bg-yellow-1 transition-all hover:shadow-lg">
              <span className="text-sm md:text-2xl">나의 테니스 열정</span>
            </div>
            <div className="flex md:m-3 md:w-72 md:shadow-lg justify-between border-yellow-1 border-2  rounded-md items-center p-4  w-2/5 bg-white mx-1 my-1 shadow-lg md:max-w-xs cursor-pointer hover:bg-yellow-1 transition-all hover:shadow-lg">
              <span className="text-sm md:text-2xl">나의 게임매너</span>
            </div>
            <div className="flex md:m-3 md:w-72 md:shadow-lg justify-between border-yellow-1 border-2  rounded-md items-center p-4  w-2/5 bg-white mx-1 my-1 shadow-lg md:max-w-xs cursor-pointer hover:bg-yellow-1 transition-all hover:shadow-lg">
              <span className="text-sm md:text-2xl">나의 테니스 매너</span>
            </div>
          </div>

          {/* <div className="w-full mt-3 ">
            <div className="ml-5 mb-3">
              <div className="text-2xl">About</div>
              <div>경기도 고양시 일산동구 성석동 37-67</div>
              <div>"즐겨라 ! 테니스에서 좋은 것은 그것 뿐이다."</div>
            </div>
            <div className="w-full h-64 bg-red-100">
              <KakaoMap></KakaoMap>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Home;
