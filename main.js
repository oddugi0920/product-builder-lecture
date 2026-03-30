const generatorBtn = document.getElementById("generator-btn");
const lottoNumbersContainer = document.getElementById("lotto-numbers");
const themeToggle = document.getElementById("theme-toggle");
const testBtn = document.getElementById("test-btn");
const test2Btn = document.getElementById("test2-btn");

// 테스트 버튼 로직
testBtn.addEventListener("click", () => {
    alert("배포가 정상적으로 완료되었습니다! (다크 모드 기능 포함)");
});

// 테스트2 버튼 로직
test2Btn.addEventListener("click", () => {
    alert("테스트2 버튼이 클릭되었습니다! 🚀");
});

// 테마 초기화
const currentTheme = localStorage.getItem("theme") || "light";
document.documentElement.setAttribute("data-theme", currentTheme);
updateThemeButton(currentTheme);

themeToggle.addEventListener("click", () => {
    let theme = document.documentElement.getAttribute("data-theme");
    let newTheme = theme === "light" ? "dark" : "light";
    
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    updateThemeButton(newTheme);
});

function updateThemeButton(theme) {
    themeToggle.textContent = theme === "light" ? "다크 모드" : "라이트 모드";
}

generatorBtn.addEventListener("click", () => {
    lottoNumbersContainer.innerHTML = "";
    
    // 5세트 생성
    for (let i = 0; i < 5; i++) {
        const numbers = new Set();
        while(numbers.size < 6) {
            numbers.add(Math.floor(Math.random() * 45) + 1);
        }
        
        const sortedNumbers = Array.from(numbers).sort((a,b) => a - b);
        
        const setContainer = document.createElement("div");
        setContainer.classList.add("set-container");

        const setRow = document.createElement("div");
        setRow.classList.add("lotto-numbers");

        sortedNumbers.forEach(number => {
            const numberElement = document.createElement("div");
            numberElement.classList.add("lotto-number");
            
            // 번호대별 클래스 추가
            if (number <= 10) numberElement.classList.add("ball-10");
            else if (number <= 20) numberElement.classList.add("ball-20");
            else if (number <= 30) numberElement.classList.add("ball-30");
            else if (number <= 40) numberElement.classList.add("ball-40");
            else numberElement.classList.add("ball-45");

            numberElement.textContent = number;
            setRow.appendChild(numberElement);
        });
        
        setContainer.appendChild(setRow);
        lottoNumbersContainer.appendChild(setContainer);
    }
});
