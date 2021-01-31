/*global kakao*/
import React, { useRef, useState } from "react";
import { useEffect } from "react";
import { shops } from "./courtsData";
import { hiddenContent, showContent } from "./jsFunction";

const ShopKakaoMap = () => {
  const [searchText, setSearchText] = useState("");
  const [map, setMap] = useState();
  const [geocoder, setGeocoder] = useState();

  const [overlay, setOverlay] = useState();
  const inputRef = useRef(null);

  let filterdCourts = [];

  const onChangeText = ({ target: { value } }) => {
    if (searchText === "") {
      setTimeout(() => {
        hiddenContent("shop");
      }, 400);
    }
    setSearchText(value);
  };

  useEffect(() => {
    setTimeout(() => {
      map?.setCenter(
        new kakao.maps.LatLng(37.566653033875774, 126.97876549797886)
      );
    }, 300);
  }, [map]);

  filterdCourts = shops.filter((value) => {
    if (
      searchText !== "" &&
      (value.location.toUpperCase().includes(searchText.toUpperCase()) ||
        value.call.toUpperCase().includes(searchText.toUpperCase()) ||
        value.name.toUpperCase().includes(searchText.toUpperCase()))
    ) {
      return value;
    }
  });

  function moveCenter() {
    if (map && searchText === "") {
      var moveLatLon = new kakao.maps.LatLng(
        37.566653033875774,
        126.97876549797886
      );
      // 지도 중심을 부드럽게 이동시킵니다
      // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
      map.setLevel(5);
      map.panTo(moveLatLon);
    }
  }

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
          center: new kakao.maps.LatLng(37.566653033875774, 126.97876549797886),

          level: 7,
        };

        const tmpMap = new kakao.maps.Map(container, options);
        let tmpGeocoder = new kakao.maps.services.Geocoder();
        setGeocoder(tmpGeocoder);
        let tmpOverlay;
        shops.map((value) => {
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
                title: value.index,
              });

              // 마커가 지도 위에 표시되도록 설정합니다
              marker.setMap(tmpMap);

              if ((value.name = "썬 스포츠")) {
                value.call = "010-7566-8081";
              }

              var iwContent = `               
              <div id="court-${
                value.index
              }" class="py-3 px-4 rounded-md text-xs bg-trans07 absolute hidden flex-col justify-center shadow items-start bottom-20 -ml-28">
              <div onClick="" class="absolute cursor-pointer bg-red-500 top-1 right-1 text text-white py-1 px-2 rounded hidden">
                닫기
              </div>
              <div class="flex mt-1">
                <div class="ml-1">${value.name}</div>
              </div>
              <div class="flex mt-1">
                <div class="ml-1 overflow-auto">
                ${value.ceo}
                </div>
              </div>
              <div class="flex mt-1">
                <div class="ml-1 overflow-auto">
                ${value.location.replace(/\n/g, "<br/>")}
                </div>
              </div>
              <div class="flex mt-1">
                <div class="ml-1"><a href="tel:${
                  value.call
                }">${value.call.replace(/\n/g, "<br/>")}</a></div>
              </div>
              <div class="flex mt-1">
                <div class="ml-1 underline">
                  <a href="${value.homepage}" target="_blank">
                    ${value.homepage
                      .replace("https://", "")
                      .replace("http://", "")}
                  </a>
                </div>
              </div>
              <div class="flex mt-1">
                <div class="ml-1 overflow-auto">
                ${value.category.replace(/\n/g, "<br/>")}
                </div>
              </div>
              <div class="flex mt-2 justify-center items-center">
                <div class="w-16 text-right ">길찾기 : </div>
                <div class="ml-1 flex">
                  <a
                    href="https://map.kakao.com/link/to/${
                      value.name
                    },${lat},${lng}"
                    target="_blank"
                    class="w-8"
                  >
                    <img src="/img/kakao_map.png" class="w-6"></img>
                  </a>
                  <a href="https://apis.openapi.sk.com/tmap/app/routes?appKey=l7xx75a1cc684f7241998e80d788bc58aa39&name=${
                    value.name
                  }&lon=${lng}&lat=${lat}"
                    target="_blank"
                    class="w-8"
                  >
                    <img src="/img/t.png" class="w-6"></img>
                  </a>

                </div>
              </div>
            </div>
            `,
                iwPosition = new kakao.maps.LatLng(lat, lng); //인포윈도우 표시 위치입니다

              tmpOverlay = new kakao.maps.CustomOverlay({
                content: iwContent,
                map: tmpMap,
                position: marker.getPosition(),
              });

              kakao.maps.event.addListener(marker, "click", function () {
                let divId = `court-${marker.getTitle()}`;
                let div = document.getElementById(divId);
                div.classList.toggle("hidden");
                div.classList.toggle("flex");
              });
            }
          });
        });
        setMap(tmpMap);
        setOverlay(tmpOverlay);
      });
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  function getLocationByAddress(address, courtindex) {
    geocoder.addressSearch(address, function (result, status) {
      // 정상적으로 검색이 완료됐으면
      if (status === kakao.maps.services.Status.OK) {
        var coords = new kakao.maps.LatLng(
          Number(result[0].y) + 0.005,
          result[0].x
        );
        map.setLevel(5);
        map.panTo(coords);
      }
    });
    setTimeout(() => {
      showContent(courtindex);
    }, 200);
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
              검색 :
              <input
                ref={inputRef}
                className="ml-2 px-2 w-64 border border-yellow-1"
                type="text"
                value={searchText}
                placeholder="지역명, 이름으로 검색"
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
                    inputRef.current?.blur();

                    setTimeout(() => {
                      if (searchText !== "") {
                        getLocationByAddress(value.location, value.index);
                      }
                    }, 200);
                  }}
                >
                  <div className="text-xl mr-2">{i + 1}.</div>
                  <div>
                    <div className="flex ">
                      <div>{value.name}</div>
                    </div>
                    <div className="flex ">
                      <div> {value.location}</div>
                    </div>
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

export default ShopKakaoMap;
