/*global kakao*/
import React, { Component } from "react";
import { useEffect } from "react";

const KakaoMap = () => {
  useEffect(() => {
    const script = document.createElement("script");

    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?appkey=bceef382c68271baae2f8cb3fa08af86&autoload=false";
    script.type = "text/javascript";
    script.autol;

    document.body.appendChild(script);

    script.onload = () => {
      kakao.maps.load(() => {
        let container = document.getElementById("kakaomap");
        var options = {
          center: new kakao.maps.LatLng(37.70136758790199, 126.81675969770745),
          level: 6,
        };

        const map = new window.kakao.maps.Map(container, options);

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

        function setMapType(maptype) {
          var roadmapControl = document.getElementById("btnRoadmap");
          var skyviewControl = document.getElementById("btnSkyview");
          if (maptype === "roadmap") {
            map.setMapTypeId(kakao.maps.MapTypeId.ROADMAP);
            roadmapControl.className = "selected_btn";
            skyviewControl.className = "btn";
          } else {
            map.setMapTypeId(kakao.maps.MapTypeId.HYBRID);
            skyviewControl.className = "selected_btn";
            roadmapControl.className = "btn";
          }
        }

        // 지도 확대, 축소 컨트롤에서 확대 버튼을 누르면 호출되어 지도를 확대하는 함수입니다
        function zoomIn() {
          map.setLevel(map.getLevel() - 1);
        }

        // 지도 확대, 축소 컨트롤에서 축소 버튼을 누르면 호출되어 지도를 확대하는 함수입니다
        function zoomOut() {
          map.setLevel(map.getLevel() + 1);
        }
      });
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <div className="relative h-full w-full">
        <div className="h-full w-full bg-white" id="kakaomap"></div>
        <div className="bg-trans absolute top-0">
          <div>
            <form onSubmit="searchPlaces(); return false;">
              키워드 :
              <input
                type="text"
                value="이태원 맛집"
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
