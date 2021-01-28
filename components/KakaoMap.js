/*global kakao*/
import React, { useRef, useState } from "react";
import { useEffect } from "react";
import { courts } from "../components/courtsData";

const KakaoMap = () => {
  const [searchText, setSearchText] = useState("");
  const [map, setMap] = useState();
  const [geocoder, setGeocoder] = useState();

  const inputRef = useRef(null);

  let filterdCourts = [];

  const onChangeText = ({ target: { value } }) => {
    setSearchText(value);
  };

  filterdCourts = courts.filter((value) => {
    if (
      searchText !== "" &&
      (value.location.includes(searchText) ||
        value.call.includes(searchText) ||
        value.name.includes(searchText))
    ) {
      return value;
    }
  });

  function moveCenter() {
    if (map) {
      var moveLatLon = new kakao.maps.LatLng(
        37.70145630785961,
        126.81732361855656
      );
      // 지도 중심을 부드럽게 이동시킵니다
      // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
      map.panTo(moveLatLon);
    }
  }
  moveCenter();

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
          center: new kakao.maps.LatLng(37.70145630785961, 126.81732361855656),
          level: 5,
        };

        const map = new kakao.maps.Map(container, options);
        let tmpGeocoder = new kakao.maps.services.Geocoder();
        setGeocoder(tmpGeocoder);

        courts.map((value) => {
          let lat;
          let lng;
          tmpGeocoder.addressSearch(value.location, function (result, status) {
            // 정상적으로 검색이 완료됐으면
            if (status === kakao.maps.services.Status.OK) {
              lat = result[0].y;
              lng = result[0].x;

              var imageSrc = "marker.png", // 마커이미지의 주소입니다
                imageSize = new kakao.maps.Size(35, 40), // 마커이미지의 크기입니다
                imageOption = { offset: new kakao.maps.Point(27, 69) }; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

              // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
              var markerImage = new kakao.maps.MarkerImage(
                  imageSrc,
                  imageSize,
                  imageOption
                ),
                markerPosition = new kakao.maps.LatLng(lat, lng); // 마커가 표시될 위치입니다

              // 마커를 생성합니다
              var marker = new kakao.maps.Marker({
                position: markerPosition,
                image: markerImage, // 마커이미지 설정
              });

              // 마커가 지도 위에 표시되도록 설정합니다
              marker.setMap(map);

              var iwContent = `<div class="p-4 rounded h-full w-52 md:text-sm">코트명 : ${value.name} <br>주소 : ${value.location} <br>전화번호 : ${value.call} <br>코트종류 : ${value.surface} <br>코트면수 : ${value.count} <br>예약가능여부 : ${value.reservation} <br> <a href="https://map.kakao.com/link/to/${value.name},${lat},${lng}" target="_blank" class="text-white bg-blue-600 rounded px-2 ">길찾기</a></div>`,
                iwPosition = new kakao.maps.LatLng(lat, lng); //인포윈도우 표시 위치입니다

              // 인포윈도우를 생성합니다
              var infowindow = new kakao.maps.InfoWindow({
                position: iwPosition,
                content: iwContent,
              });

              // 마커 위에 인포윈도우를 표시합니다. 두번째 파라미터인 marker를 넣어주지 않으면 지도 위에 표시됩니다
              infowindow.open(map, marker);
            }
          });
        });

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
        <div className="bg-trans absolute top-0 z-50 p-3 w-full text-lg">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              inputRef.current?.blur();
            }}
          >
            <div>
              키워드 :
              <input
                ref={inputRef}
                className="ml-2 px-2 w-48"
                type="text"
                value={searchText}
                placeholder="테니스장명, 주소"
                onChange={onChangeText}
              ></input>
            </div>
          </form>

          <div className="flex flex-col mt-2 max-h-28 overflow-y-auto">
            {filterdCourts?.map((value, i) => {
              return (
                <div
                  key={i}
                  className="text-xs cursor-pointerl flex justify-start items-center mt-2 pb-2 border-b"
                  onClick={() => {
                    getLocationByAddress(value.location);
                  }}
                >
                  <div className="text-xl mr-2">{i + 1}.</div>
                  <div>
                    <div>코트명 : {value.name}</div>
                    <div>주소 : {value.location}</div>
                  </div>
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
