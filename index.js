const minValueInput = document.getElementById("minValue");
const maxValueInput = document.getElementById("maxValue");
const generateBtn = document.getElementById("generateBtn");
const result = document.getElementById("result");

generateBtn.addEventListener("click", () => {
  const minValue = parseInt(minValueInput.value);
  const maxValue = parseInt(maxValueInput.value);

  if (isNaN(minValue) || isNaN(maxValue)) {
    result.innerHTML = "Please enter numbers";
    result.classList.add("text-[#FF204E]");
  } else {
    const randomNum =
      Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
    result.innerText = randomNum;
    result.classList.remove("text-[#FF204E]");
    result.classList.add("text-[#186F65]");
  }
});
