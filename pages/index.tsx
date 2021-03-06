import Head from "next/head";
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
  const router = useRouter();
  function refreshPage() {
    window.parent.location.reload();
  }

  return (
    <>
      <Head>
        <title>노란공테니스</title>
        <link rel="icon" href="/favicon.ico" />
        {/* Twitter */}
        <meta name="twitter:card" content="summary" key="twcard" />
        <meta name="twitter:creator" content={"노란공테니스"} key="twhandle" />

        {/* Open Graph */}
        <meta
          property="og:url"
          content={"https://yellowball.co.kr/"}
          key="ogurl"
        />
        <meta property="og:image" content={`BI-vertical.png`} key="ogimage" />
        <meta
          property="og:site_name"
          content={"노란공테니스"}
          key="ogsitename"
        />
        <meta property="og:title" content={"노란공테니스"} key="ogtitle" />
        <meta property="og:description" content={"노란공테니스"} key="ogdesc" />
      </Head>
      <div className="h-full overflow-y-auto md:flex md:justify-center md:items-center md:-mt-14 mx-auto">
        <div className="h-full flex flex-col w-screen justify-center items-center md:flex-row md:justify-between max-w-7xl mx-auto py-8">
          <div className="flex relative max-w-md justify-center items-center md:ml-5">
            <div className="mt-2 w-full h-full bg-gradient-to-t from-yellow-1 to-yellow-2 transform absolute inset-0 rounded-xl -rotate-6 shadow-lg md:h-64"></div>
            <div className="mt-2 z-10 bg-white p-5 rounded-lg shadow-lg md:h-64">
              <div className="w-full flex justify-center flex-col items-center">
                <h1 className="text-2xl font-semibold mt-5">노란공테니스</h1>
                <h1 className="text-sm tracking-normal">
                  www.yellowball.co.kr
                </h1>
              </div>
              <h1 className="mt-3">누가 뭐래도</h1>
              <h1 className="">
                테니스는 <span className="text-blue-600">건강</span>이고{" "}
                <span className="text-red-600">즐거움</span>이 우선 입니다
              </h1>
              <h1 className="">적당한 열정과 적당한 욕심으로</h1>

              <h1 className="">
                <span className="text-red-600">건강한 땀</span>을 흘리고 언제나{" "}
                <span className="text-blue-600">즐테</span> 하기를 ..
              </h1>
            </div>
          </div>
          <div className="flex justify-center items-center flex-row my-5 flex-wrap max-w-2xl mt-8 md:mt-0">
            <div
              onClick={(e) => {
                e.preventDefault();
                router.push("/technic");
              }}
              className="flex md:m-3 md:w-72 md:shadow-lg justify-between border-yellow-1 border-2  rounded-md items-center p-4  w-2/5 bg-white mx-1 my-1 shadow-lg md:max-w-xs cursor-pointer hover:bg-yellow-1 transition-all hover:shadow-lg"
            >
              <span className="text-sm md:text-2xl">
                <span className="text-blue-600">T</span>echnic{" "}
                <span className="text-blue-600">L</span>evel{" "}
                <span className="text-blue-600">T</span>est
              </span>
            </div>
            <div
              className="flex md:m-3 md:w-72 md:shadow-lg justify-between border-yellow-1 border-2  rounded-md items-center p-4  w-2/5 bg-white mx-1 my-1 shadow-lg md:max-w-xs cursor-pointer hover:bg-yellow-1 transition-all hover:shadow-lg"
              onClick={(e) => {
                e.preventDefault();
                router.push("/game");
              }}
            >
              <span className="text-sm md:text-2xl">
                <span className="text-red-600">G</span>ame{" "}
                <span className="text-red-600">L</span>evel{" "}
                <span className="text-red-600">T</span>est
              </span>
            </div>
            <div
              className="flex md:m-3 md:w-72 md:shadow-lg justify-between border-yellow-1 border-2  rounded-md items-center p-4  w-2/5 bg-white mx-1 my-1 shadow-lg md:max-w-xs cursor-pointer hover:bg-yellow-1 transition-all hover:shadow-lg"
              onClick={(e) => {
                e.preventDefault();
                router.push("/courts");
              }}
            >
              <span className="text-sm md:text-2xl">테니스 코트 찾기</span>
            </div>
            <div
              className="flex md:m-3 md:w-72 md:shadow-lg justify-between border-yellow-1 border-2  rounded-md items-center p-4  w-2/5 bg-white mx-1 my-1 shadow-lg md:max-w-xs cursor-pointer hover:bg-yellow-1 transition-all hover:shadow-lg"
              onClick={(e) => {
                e.preventDefault();
                router.push("/academy");
              }}
            >
              <span className="text-sm md:text-2xl">레슨/아카데미 찾기</span>
            </div>
            <div
              className="flex md:m-3 md:w-72 md:shadow-lg justify-between border-yellow-1 border-2  rounded-md items-center p-4  w-2/5 bg-white mx-1 my-1 shadow-lg md:max-w-xs cursor-pointer hover:bg-yellow-1 transition-all hover:shadow-lg"
              onClick={(e) => {
                e.preventDefault();
                router.push("/club");
              }}
            >
              <span className="text-sm md:text-2xl">클럽/동호회 찾기</span>
            </div>
            <div
              className="flex md:m-3 md:w-72 md:shadow-lg justify-between border-yellow-1 border-2  rounded-md items-center p-4  w-2/5 bg-white mx-1 my-1 shadow-lg md:max-w-xs cursor-pointer hover:bg-yellow-1 transition-all hover:shadow-lg"
              onClick={(e) => {
                e.preventDefault();
                router.push("/shop");
              }}
            >
              <span className="text-sm md:text-2xl">테니스샵 찾기</span>
            </div>
            <div
              className="flex md:m-3 md:w-72 md:shadow-lg justify-between border-yellow-1 border-2  rounded-md items-center p-4  w-2/5 bg-white mx-1 my-1 shadow-lg md:max-w-xs cursor-pointer hover:bg-yellow-1 transition-all hover:shadow-lg"
              onClick={(e) => {
                e.preventDefault();
                router.push("/manner");
              }}
            >
              <span className="text-sm md:text-2xl">테니스 규칙과 매너</span>
            </div>
            <div
              className="flex md:m-3 md:w-72 md:shadow-lg justify-between border-yellow-1 border-2  rounded-md items-center p-4  w-2/5 bg-white mx-1 my-1 shadow-lg md:max-w-xs cursor-pointer hover:bg-yellow-1 transition-all hover:shadow-lg"
              onClick={(e) => {
                e.preventDefault();
                router.push("/article");
              }}
            >
              <span className="text-sm md:text-2xl">테니스 한마디</span>
            </div>
          </div>
          <div className="cursor-pointer" onClick={() => refreshPage()}>
            <img src="/img/refresh.png" className="w-16 md:hidden"></img>
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
