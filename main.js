let pages = 0; // 현재 인덱스
let valueOfPosition = 0; // 이미지 위치 값
const imageBundleWidth = 1170; // 3개씩 담겨 있는 이미지 묶음 너비
// 넘겼을 때 overflow: hidden이 풀리지 않고 그대로 안보이는 상태가 유지됨 [???]


const prevBtn = document.querySelector(".fa-angle-left"); // 이전 버튼
const nextBtn = document.querySelector(".fa-angle-right"); // 다음 버튼
const imageUl = document.querySelector(".ul"); // 이미지 묶음 ul

function nextSlide(){
    if (pages < 2){
        prevBtn.removeAttribute("disabled")
        valueOfPosition -= imageBundleWidth;
        imageUl.style.transform = `translateX(${valueOfPosition}px)`;
        pages += 1;
    }
    if (pages === 2){
        nextBtn.setAttribute("disabled", "true")
    }
}

function prevSlide(){
    if (pages > 0){
        nextBtn.removeAttribute("disabled")
        valueOfPosition += imageBundleWidth;
        imageUl.style.transform = `translateX(${valueOfPosition}px)`;
        pages -= 1;
    }
    if (pages === 0){
        prevBtn.setAttribute("disabled", "true")
    }
}

function init(){
    prevBtn.setAttribute("disabled", "true");
    prevBtn.addEventListener("click", prevSlide);
    nextBtn.addEventListener("click", nextSlide);
}

init();
