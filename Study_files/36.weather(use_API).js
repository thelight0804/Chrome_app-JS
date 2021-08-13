//21.08.13 / 날씨 추가
//API : https://openweathermap.org/api
const API_KEY = "###"; //openweather API Key

function GeoOk(position){ //(position) : JS가 기본으로 제공하는 좌표 위치
    const lat = position.coords.latitude; //latitude = 위도(-)
    const lon = position.coords.longitude; //longitude = 경도(ㅣ)
    const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    //&units=metric : 화씨->섭씨
    //console.log(URL);

    //fetch(URL) : URL을 네트워크에 요청함
    fetch(URL)
    .then(response => response.json())
    .then((data)=>{
        const city = document.querySelector("#weather span:first-child"); //도시
        const weather = document.querySelector("#weather span:last-child"); //날씨
        city.innerText = data.name; //도시 출력
        weather.innerText = `${data.weather[0].main} / ${data.main.temp} C`; //날씨 출력
    });
    /*
    fetch(URL).then(res => res.json()), then(res => {~})
    = 백앤드로부터 데이터를 받아와 ~을 실행한다
    */
}
function GeoFail(){ //위치를 못 찾으면
    console.log("bad");
}

//현재 위치
navigator.geolocation.getCurrentPosition(GeoOk, GeoFail);
//getCurrentPosition(FUNCTION_1, FUNCTION_2) : 현재 위치를 얻으면 FUNCTION_1, 실패하면 FUNCTION_2를 호출한다
