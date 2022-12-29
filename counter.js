export default function counterStation() {
  let ele = document.querySelector(".counter");
  console.log(ele);
  let interval;
  let count = 0;

  let time = 1;
  window.onload = () => {
    interval = setInterval(() => {
      count++;
      // console.log(count);
      ele.innerHTML = count;
      if (count === 1000) {
        clearInterval(interval);
      }
    }, time);
  };
}

