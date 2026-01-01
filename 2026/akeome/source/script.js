// 画像とテキストをセットで管理
const items = [
  { img: "../akeome/images/01.png", text: "大吉", number: "79233918" },
  { img: "../akeome/images/02.png", text: "吉", number: "88634192" },
  { img: "../akeome/images/03.png", text: "中吉", number: "50287179" },
  { img: "../akeome/images/04.png", text: "小吉", number: "52164175" },
  { img: "../akeome/images/05.png", text: "凶", number: "49512698" }
];

const container = document.getElementById("image-container");
const textContainer = document.getElementById("text-container");
const numberContainer = document.getElementById("number-container");
const button = document.getElementById("gacha-btn");

button.addEventListener("click", () => {
  button.disabled = true;

  // ★ 前回の結果を初期化（何度も回せるように）
  textContainer.textContent = "";
  numberContainer.textContent = "";
  textContainer.classList.remove("fade-in");
  numberContainer.classList.remove("fade-in");

  let count = 0;
  const maxCount = 20;
  container.classList.add("flash");

  const interval = setInterval(() => {
    const random = items[Math.floor(Math.random() * items.length)];

    // 回転中はテキストと数字を消す
    textContainer.textContent = "";
    numberContainer.textContent = "";
    textContainer.classList.remove("fade-in");
    numberContainer.classList.remove("fade-in");

    container.innerHTML = `<img src="${random.img}">`;
    count++;

    if (count >= maxCount) {
      clearInterval(interval);
      container.classList.remove("flash");

      // ★ 最終結果
      const result = items[Math.floor(Math.random() * items.length)];
      container.innerHTML = `<img src="${result.img}">`;

      // ★ テキストと数字をフェードイン表示
      textContainer.textContent = result.text;
      numberContainer.textContent = `印刷番号：${result.number} / L版`;
      textContainer.classList.add("fade-in");
      numberContainer.classList.add("fade-in");

      button.disabled = false;
    }
  }, 100);
});