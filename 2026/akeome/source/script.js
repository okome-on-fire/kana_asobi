// 画像とテキストをセットで管理
const items = [
  { img: "01.png", text: "大吉", num: "79233918" },
  { img: "01.png", text: "吉", num: "88634192" },
  { img: "01.png", text: "中吉", num: "50287179" },
  { img: "01.png", text: "小吉", num: "52164175" },
  { img: "01.png", text: "凶", num: "49512698" }
];

const container = document.getElementById("image-container");
const textContainer = document.getElementById("text-container");
const button = document.getElementById("gacha-btn");

button.addEventListener("click", () => {
  button.disabled = true;

  let count = 0;
  const maxCount = 20;
  container.classList.add("flash");

  const interval = setInterval(() => {
    const random = items[Math.floor(Math.random() * items.length)];
    container.innerHTML = `<img src="${random.img}">`;
    textContainer.textContent = ""; // 回転中はテキスト非表示
    count++;

    if (count >= maxCount) {
      clearInterval(interval);
      container.classList.remove("flash");

      // 最終結果を決定
      const result = items[Math.floor(Math.random() * items.length)];
      container.innerHTML = `<img src="${result.img}">`;
      textContainer.textContent = result.text;

      button.disabled = false;
    }
  }, 100);
});