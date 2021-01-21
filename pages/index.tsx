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
        <title>노란공테니스 NTRP</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="flex flex-col w-screen justify-center items-center md:flex-row md:justify-between max-w-7xl mx-auto py-8 flex-wrap">
          <div className="flex relative max-w-md justify-center items-center md:ml-5">
            <div className="w-full h-full bg-gradient-to-t from-yellow-1 to-yellow-2 transform absolute inset-0 rounded-xl -rotate-6 shadow-lg md:h-64"></div>
            <div className="z-10 bg-white p-5 rounded-lg shadow-lg md:h-64">
              <h1 className="text-2xl ">노란공테니스 YTRP</h1>
              <h1 className="text-base mt-3">
                해당사이트는 테니스레벨 자가테스트를 위해 만들어진 사이트입니다.
              </h1>
              <h1 className="text-base mt-3">
                원하는 버튼을 눌러 자가테스트를 시작하세요.
              </h1>
            </div>
          </div>

          <div className="flex justify-center items-center flex-row my-5 flex-wrap max-w-2xl mt-12 md:mt-0">
            <div
              onClick={(e) => {
                e.preventDefault();
                router.push("/forehand");
              }}
              className="h-20 flex md:m-3 md:w-72 md:shadow-lg justify-between items-center p-4 from-btn-2 to-yellow-1 bg-gradient-to-br w-full md:max-w-xs cursor-pointer hover:from-yellow-1 transition-all hover:shadow-lg"
            >
              <img src={`img/forehand2.png`} className="h-16 relative "></img>
              <span className="text-2xl text-stroke-green">
                포핸드 스트로크
              </span>
            </div>

            <div className="h-20 flex md:m-3 md:w-72 md:shadow-lg justify-between items-center p-4 from-btn-2 to-yellow-1 bg-gradient-to-br w-full md:max-w-xs cursor-pointer hover:from-yellow-1 transition-all hover:shadow-lg">
              <img src={`img/backhand2.png`} className="h-16 relative "></img>
              <span className="text-2xl text-stroke-green">
                백핸드 스트로크
              </span>
            </div>

            <div className="h-20 flex md:m-3 md:w-72 md:shadow-lg justify-between items-center p-4 from-btn-3 to-yellow-1 bg-gradient-to-br w-full md:max-w-xs cursor-pointer hover:from-yellow-1 transition-all hover:shadow-lg">
              <img src={`img/volley3.png`} className="h-16 relative "></img>
              <span className="text-2xl text-stroke-green">포핸드 발리</span>
            </div>

            <div className="h-20 flex md:m-3 md:w-72 md:shadow-lg justify-between items-center p-4 from-btn-3 to-yellow-1 bg-gradient-to-br w-full md:max-w-xs cursor-pointer hover:from-yellow-1 transition-all hover:shadow-lg">
              <img src={`img/volley4.png`} className="h-16 relative "></img>
              <span className="text-2xl text-stroke-green">백핸드 발리</span>
            </div>

            <div className="h-20 flex md:m-3 md:w-72 md:shadow-lg justify-between items-center p-4 from-btn-4 to-yellow-1 bg-gradient-to-br w-full md:max-w-xs cursor-pointer hover:from-yellow-1 transition-all hover:shadow-lg ">
              <img src={`img/serve2.png`} className="h-16 relative "></img>
              <span className="text-2xl text-stroke-green">서브 & 리턴</span>
            </div>

            <div className="h-20 flex md:m-3 md:w-72 md:shadow-lg justify-between items-center p-4 from-btn-4 to-yellow-1 bg-gradient-to-br w-full md:max-w-xs cursor-pointer hover:from-yellow-1 transition-all hover:shadow-lg">
              <img src={`img/smash2.png`} className="h-16 relative "></img>
              <span className="text-2xl text-stroke-green">로브 & 스매시</span>
            </div>
            <div className="h-20 flex md:m-3 md:w-72 md:shadow-lg justify-between items-center p-4 from-btn-5 to-yellow-1 bg-gradient-to-br w-full md:max-w-xs cursor-pointer hover:from-yellow-1 transition-all hover:shadow-lg">
              <img src={`img/gaming.png`} className="h-16 relative "></img>
              <span className="text-xl text-stroke-green">
                테니스 운영 능력
              </span>
            </div>
            <div className="h-20 flex md:m-3 md:w-72 md:shadow-lg justify-between items-center p-4 from-btn-5 to-yellow-1 bg-gradient-to-br w-full md:max-w-xs cursor-pointer hover:from-yellow-1 transition-all hover:shadow-lg">
              <img src={`img/passion.png`} className="h-14 relative "></img>
              <span className="text-xl text-stroke-green">
                나의 테니스 열정
              </span>
            </div>
          </div>

          <div className="w-full mt-3 ">
            <div className="ml-5 mb-3">
              <div className="text-2xl">About</div>
              <div>경기도 고양시 일산동구 성석동 37-67</div>
              <div>"즐겨라 ! 테니스에서 좋은 것은 그것 뿐이다."</div>
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
