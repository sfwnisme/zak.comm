// export default function preload() {
//   let now = performance.now();
//   console.log(now);
//   window.onload = () => {
//     let hid = document.querySelector(".hide");
//     setInterval(() => {
//       if (now) {
//         // hid.style.display = "none";
//         // hid.classList.remove('hide')
//         hid.classList.add("hide-fade");
//       }
//     }, now);
//   };
// }

export default function preload() {
  // let now = performance.now();
  let now = 5000;
  // let now = 5000;
  document.documentElement.style.setProperty("--preload_now", `${now}ms`)
  
  console.log(now);
  let hid = document.querySelector(".hide");
  window.addEventListener("load", () => {
    setInterval(() => {
      if (now) {
        hid.classList.add("hide-fade");
      }
    }, now);
  });
}
