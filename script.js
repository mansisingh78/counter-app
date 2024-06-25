const value = document.querySelector("h1");
const decrementButton = document.getElementById("decrement");
const resetButton = document.getElementById("reset");
const incrementButton = document.getElementById("increment");

console.log(value.textContent);

const incrementValue = () => {
  let currentValue = parseInt(value.textContent, 10);
  value.textContent = currentValue + 1;
};

const decrementValue = () => {
  let currentValue = parseInt(value.textContent, 10);
  value.textContent = currentValue - 1;
};
const resetValue = () => {
  value.textContent = 0;
};

incrementButton.addEventListener("click", incrementValue);
decrementButton.addEventListener("click", decrementValue);
resetButton.addEventListener("click", resetValue);
