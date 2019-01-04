let timeNodes = [...document.querySelectorAll("[data-time]")];

let seconds = timeNodes
  .map(node => node.dataset.time)
  .map(timeStr => {
    [a, b] = timeStr.split(":").map(parseFloat);
    return a * 60 + b;
  })
  .reduce((total, cur) => (total += cur), 0);

let hours, minutes;

hours = Math.floor(seconds / 3600);
let secondsLeft = seconds % 3600;

minutes = Math.floor(secondsLeft / 60);

seconds = secondsLeft % 60;

let obj = {
  h: hours,
  m: minutes,
  s: seconds
};

console.log(obj);
