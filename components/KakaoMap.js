/*global kakao*/
import React, { Component } from "react";
import { useEffect } from "react";




const KakaoMap = ()=>{
    useEffect(() => {
        const script = document.createElement("script");
    
        script.src =
          "//dapi.kakao.com/v2/maps/sdk.js?appkey=bceef382c68271baae2f8cb3fa08af86&autoload=false";
        script.type = "text/javascript";
        script.autol
    
        document.body.appendChild(script);

        script.onload = () => {
            kakao.maps.load(() => {
              let container = document.getElementById("kakaomap");
              var options = {
                center: new kakao.maps.LatLng(37.70136758790199, 126.81675969770745),
                level: 5
            };
      
              const map = new window.kakao.maps.Map(container, options);


              var imageSrc = 'marker.png', // 마커이미지의 주소입니다    
                imageSize = new kakao.maps.Size(44, 50), // 마커이미지의 크기입니다
                imageOption = {offset: new kakao.maps.Point(27, 69)}; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
                    
                // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
                var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption),
                    markerPosition = new kakao.maps.LatLng(37.70136758790199, 126.81675969770745); // 마커가 표시될 위치입니다

                // 마커를 생성합니다
                var marker = new kakao.maps.Marker({
                    position: markerPosition, 
                    image: markerImage // 마커이미지 설정 
                });

                // 마커가 지도 위에 표시되도록 설정합니다
                marker.setMap(map);  

           
            });
          };
    
        return () => {
          document.body.removeChild(script);
        };
      }, []);

    return(
    <>
        <div className="h-full w-full bg-black" id="kakaomap">


        </div>
    
    
    </>
    
    )

};

export default KakaoMap;
