const index = () => {
  //bottom-20 -ml-36
  return (
    <>
      <div className="p-4 rounded-md h-44 w-72 text-xs bg-trans07 absolute flex flex-col justify-center shadow items-start bottom-20 -ml-36">
        <div className="absolute cursor-pointer bg-red-500 top-1 right-1 text text-white py-1 px-2 rounded">
          닫기
        </div>
        <div className="flex mt-1">
          <div className="w-14 text-right">코트명 : </div>
          <div className="ml-1">노란공테니스</div>
        </div>
        <div className="flex mt-1">
          <div className="w-14 text-right">주소 : </div>
          <div className="ml-1">
            서울특별시 영등포구 여의나루로 42 <br></br> 여의도종합상가 4층
          </div>
        </div>
        <div className="flex mt-1">
          <div className="w-14 text-right">전화번호 : </div>
          <div className="ml-1">010-8807-0301</div>
        </div>
        <div className="flex mt-1">
          <div className="w-14 text-right">코트 : </div>
          <div className="ml-1">클레이 6면</div>
        </div>
        <div className="flex mt-1">
          <div className="w-14 text-right">홈페이지 : </div>
          <div className="ml-1">
            <a href="${value.homepage}" target="_blank">
              http://yellowball.co.kr
            </a>
          </div>
        </div>

        <div className="flex mt-1">
          <div className="w-14 text-right ">길찾기 : </div>
          <div className="ml-1">
            <a
              href="https://map.kakao.com/link/to/${value.name},${lat},${lng}"
              target="_blank"
              className="w-16"
            >
              <img src="/img/kakao_map.png" className="w-6"></img>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
