//21.08.10 배경화면 설정
const images=[
    "01.jpg",
    "02.jpg",
    "03.jpg",
    "04.jpg",
    "05.jpg",
]

//html의 Element 생성
const bgImage = document.createElement("img"); //HTML element(img)를 추가

const ranImage=images[Math.floor(Math.random()*images.length)];

bgImage.src = `img/${ranImage}`; //.src : 외부 스크립트를 가져옴

document.body.appendChild(bgImage) //bgImage을 HTML body에 적용
//prepend() - HTML 가장 위에 적용
//appendChild() - HTML 가장 밑에 적용