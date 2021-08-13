//21.08.13 / 날씨 추가

function GeoOk(position){ //(position) : JS가 기본으로 제공하는 좌표 위치
    const lat = position.coords.latitude; //latitude = 위도(-)
    const lon = position.coords.longitude; //longitude = 경도(ㅣ)
    console.log("당신의 위치는", lat, lon);
    console.log(position);
}
function GeoFail(){ //위치를 못 찾으면
    console.log("bad");
}

//현재 위치
navigator.geolocation.getCurrentPosition(GeoOk, GeoFail);
/*
navigator : 사용자의 정보(쿠키, 네트워크, 위치)
Navigator.geolocation : 사용자의 위치 정보
getCurrentPosition(FUNCTION_1, FUNCTION_2) : 현재 위치를 얻으면 FUNCTION_1, 실패하면 FUNCTION_2를 호출한다
*/