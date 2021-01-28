/*global kakao*/
import React, { useState } from "react";
import { useEffect } from "react";
import { courts } from "../components/courtsData";

const KakaoMap = () => {
  const [searchText, setSearchText] = useState("");
  const [map, setMap] = useState();
  const [geocoder, setGeocoder] = useState();

  let filterdCourts = [];

  const onChangeText = ({ target: { value } }) => {
    setSearchText(value);
  };

  filterdCourts = courts.filter((value) => {
    if (
      value.location.includes(searchText) ||
      value.call.includes(searchText) ||
      value.name.includes(searchText)
    ) {
      return value;
    }
  });

  useEffect(() => {
    const script = document.createElement("script");

    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?appkey=bceef382c68271baae2f8cb3fa08af86&autoload=false&libraries=services";
    script.type = "text/javascript";

    document.body.appendChild(script);

    script.onload = () => {
      kakao.maps.load(() => {
        let container = document.getElementById("kakaomap");
        var options = {
          center: new kakao.maps.LatLng(37.70136758790199, 126.81675969770745),
          level: 6,
        };

        const map = new kakao.maps.Map(container, options);
        setGeocoder(new kakao.maps.services.Geocoder());

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

        setMap(map);
      });
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  function getLocationByAddress(address) {
    geocoder.addressSearch(address, function (result, status) {
      // 정상적으로 검색이 완료됐으면
      if (status === kakao.maps.services.Status.OK) {
        var coords = new kakao.maps.LatLng(result[0].y, result[0].x);
        map.panTo(coords);
      }
    });
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
            키워드 :
            <input
              className="ml-2"
              type="text"
              value={searchText}
              onChange={onChangeText}
            ></input>
          </div>

          <div className="flex flex-col mt-2 h-28 overflow-y-auto ">
            {filterdCourts?.map((value, i) => {
              return (
                <div
                  key={i}
                  className="text-xs cursor-pointerl"
                  onClick={() => {
                    getLocationByAddress(value.location);
                  }}
                >
                  <div> {value.name}</div>
                  <div> {value.location}</div>
                  <div> {value.call}</div>
                  <div> {value.homepage}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default KakaoMap;
