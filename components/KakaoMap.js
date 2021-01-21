/*global kakao*/
import React, { Component } from "react";
import { useEffect } from "react";




const KakaoMap = ()=>{
    useEffect(() => {
        const script = document.createElement("script");
    
        script.src =
          "//dapi.kakao.com/v2/maps/sdk.js?appkey=bceef382c68271baae2f8cb3fa08af86";
        script.type = "text/javascript";
    
        document.body.appendChild(script);

        script.onload = () => {
            console.log("!!");
            kakao.maps.load(() => {
              let container = document.getElementById("kakaomap");
              let options = {
                center: new kakao.maps.LatLng(37.506502, 127.053617),
                level: 7
              };
      
              const map = new window.kakao.maps.Map(container, options);
           
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
