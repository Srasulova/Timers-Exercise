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
