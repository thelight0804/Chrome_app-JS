//21.08.10 랜덤 명언 출력
const quotes=[ //명언과 이름
{
    quote: "시간은 아무도 기다려주지 않아", 
    quthor: "시간을 달리는 소녀"
}, 
{
    quote: "그들이 할 수 있으면 우리도 할 수 있다", 
    quthor: " "
}, 
{
    quote: "세상은 넓고 할 일은 많다. 용기를 가지자!!!", 
    quthor: " "
}, 
{
    quote: "서로 부딪치며 성장하는구나 ", 
    quthor: "4월은 너의 거짓말"
}, 
{
    quote: "남자는 일단 행동부터!", 
    quthor: "4월은 너의 거짓말"
}, 
{
    quote: "실패를 두려워하다가 실패한다", 
    quthor: "너와 사는,그집"
}, 
{
    quote: "1.01×1.01×1.01×1.01×ㆍㆍㆍ×=무한", 
    quthor: "수능특강 미적분"
}, 
{
    quote: "그 모든 실패를 '좋은 경험'이었다고 생각할 수 있는 날이 언젠가 찾아올 거야", 
    quthor: "리라이프"
}, 
{
    quote: "모두가 날 싫어하는 마음을 부정할 생각은 없지만, 그 대신 나도 내가 좋아하는 나로 있고 싶어", 
    quthor: "아오하라이드"
}, 
{
    quote: "사람의 원동력은 대부분 유치한 거 아닐까?", 
    quthor: "하이큐!! 3기"
}, 
];
const quote = document.querySelector("#quote span:first-child"); //명언
const author = document.querySelector("#quote span:last-child"); //이름

/*Math.floor() : 버림
Math.random() : 0~1 사이의 랜덤값
quotes.length : 배열 데이터 수
*/
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = `"${todaysQuote.quote}"`; //계산값 todaysQuote의 quote 출력
author.innerText = ` -${todaysQuote.quthor}-`;