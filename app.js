// select data-time attributes
const timeNodes = [...document.querySelectorAll("[data-time]")]; // create array from nodelist using Array.from() or destructurning

// return the total seconds summary for the videos
const seconds = timeNodes
  .map(node => node.dataset.time)
  .map(item => {
    const [a, b] = item.split(":").map(parseFloat); // run parseFloat function to convert string to integer

    return a * 60 + b;
  })
  .reduce((total, value) => {
    // reduce function will summarize the values
    return (total += value);
  }, 0);

console.log(seconds);
