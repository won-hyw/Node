setTimeout(function () {
    console.log("5초경과");
}, 5000);
// 5초를 기다리고 나면 그 이후에 callback 함수가 실행된다.

setTimeout(function () {
    console.log("2초경과");
}, 2000);