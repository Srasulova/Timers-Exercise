// countdown exercise
function countDown(num) {
  for (let i = num; i >= 0; i--) {
    if (i === 0) {
      console.log("DONE!");
    } else {
      console.log(i);
    }
  }
}

setInterval(countDown(5), 1000);

// randomGame exercise
let counter = 0;

let randomNumber = function () {
  let randomNum = Math.random();
  console.log(randomNum);

  if (randomNum < 0.75) {
    counter++;
    console.log(counter);
  } else {
    clearInterval(randomGame);
    console.log(
      `The number of tries it took before we found a number greater than .75: ${counter}`
    );
  }
  return randomNum;
};

let randomGame = setInterval(randomNumber, 1000);
