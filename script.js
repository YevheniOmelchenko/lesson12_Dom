const decrement = document.getElementById("decrement");
const decrement10 = document.getElementById("decrement10");
const increment10 = document.getElementById("increment10");
const increment = document.getElementById("increment");
const count = document.getElementById("count");
const reset = document.getElementById("reset");

function updateCount(value){
    count.textContent = +count.textContent + value + '';

}

// let num = count.textContent;

decrement.addEventListener("click", () => updateCount(-1));

increment.addEventListener("click", () => updateCount(+1));

increment10.addEventListener("click", () => updateCount(+10));

decrement10.addEventListener("click", () => updateCount(-10));
reset.addEventListener("click", () => {
    count.textContent = "0";
});
