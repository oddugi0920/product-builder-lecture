const generatorBtn = document.getElementById("generator-btn");
const lottoNumbersContainer = document.getElementById("lotto-numbers");
const themeToggle = document.getElementById("theme-toggle");

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
    const numbers = new Set();
    while(numbers.size < 6) {
        numbers.add(Math.floor(Math.random() * 45) + 1);
    }
    
    const sortedNumbers = Array.from(numbers).sort((a,b) => a - b);

    sortedNumbers.forEach(number => {
        const numberElement = document.createElement("div");
        numberElement.classList.add("lotto-number");
        numberElement.textContent = number;
        lottoNumbersContainer.appendChild(numberElement);
    });
});
