/*global kakao*/
import React, { useState } from "react";
import { useEffect } from "react";

const KakaoMap = () => {
  const [keyword, setKeyword] = useState("");

  const [map, setMap] = useState();

  useEffect(() => {
    const script = document.createElement("script");

    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?appkey=bceef382c68271baae2f8cb3fa08af86&autoload=false";
    script.type = "text/javascript";

    document.body.appendChild(script);

    script.onload = () => {
      kakao.maps.load(() => {
        let container = document.getElementById("kakaomap");
        var options = {
          center: new kakao.maps.LatLng(37.70136758790199, 126.81675969770745),
          level: 6,
        };

        setMap(new window.kakao.maps.Map(container, options));

        var imageSrc = "marker.png", // 마커이미지의 주소입니다
          imageSize = new kakao.maps.Size(44, 50), // 마커이미지의 크기입니다
          imageOption = { offset: new kakao.maps.Point(27, 69) }; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

        // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
        var markerImage = new kakao.maps.MarkerImage(
            imageSrc,
            imageSize,
            imageOption
          ),
          markerPosition = new kakao.maps.LatLng(
            37.70136758790199,
            126.81675969770745
          ); // 마커가 표시될 위치입니다

        // 마커를 생성합니다
        var marker = new kakao.maps.Marker({
          position: markerPosition,
          image: markerImage, // 마커이미지 설정
        });

        // 마커가 지도 위에 표시되도록 설정합니다
        marker.setMap(map);
      });
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  function setCenter() {
    // 이동할 위도 경도 위치를 생성합니다
    var moveLatLon = new kakao.maps.LatLng(33.452613, 126.570888);

    // 지도 중심을 이동 시킵니다
    map.setCenter(moveLatLon);
  }

  function panTo() {
    // 이동할 위도 경도 위치를 생성합니다
    var moveLatLon = new kakao.maps.LatLng(33.45058, 126.574942);

    // 지도 중심을 부드럽게 이동시킵니다
    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
    map.panTo(moveLatLon);
  }

  return (
    <>
      <div className="relative h-full w-full">
        <div
          className="h-full w-full bg-white z-0 relative"
          id="kakaomap"
        ></div>
        <div className="bg-trans absolute top-0 z-50 h-40 p-3 w-full">
          <div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                panTo();
              }}
            >
              키워드 :
              <input
                type="text"
                value={keyword}
                onChange={(e) => {
                  setKeyword(e.value);
                }}
                id="keyword"
                size="15"
              ></input>
              <button type="submit">검색하기</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default KakaoMap;
