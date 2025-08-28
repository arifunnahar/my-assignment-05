
    const historyContainer = document.getElementById("history-container");
    const allCard = document.querySelectorAll(".common-cart");
    let copyUpdate = document.getElementById("copy-count");
    let loveUpdate = document.getElementById("heart-count");
    let credit = document.getElementById("credit");

    const clearHistory = document.getElementById("clear-history");
    let noHistory = document.getElementById("no-history");

    let copyCount = 0;
    let loveCount = 0;

    [...allCard].forEach((card) => {
      card.addEventListener("click", function (e) {
        if (getClass(e, "copyBtn")) {
          const number = card.querySelector(".phone-number").textContent;
          navigator.clipboard.writeText(number);
          copyCount++;
          copyUpdate.textContent = copyCount;
          alert(`✅ Number Copied: ${number}`);

        } else if (getClass(e, "heart")) {
          loveCount++;
          loveUpdate.textContent = loveCount;

        } else if (getClass(e, "call")) {
          const subTitle = card.querySelector(".sub-title").textContent;
          const title = card.querySelector(".title").textContent;
          const number = card.querySelector(".phone-number").textContent;

          const callCost = 20;
          let currentCredit = Number(credit.textContent);
          if (currentCredit < 20) {
            alert("❌ পর্যাপ্ত কয়েন নেই (কমপক্ষে ২০ কয়েন দরকার)।");
            return;
          }
          currentCredit -= callCost;
          credit.textContent = currentCredit;
          alert(`📞 Calling ${subTitle}: ${number}`);

          noHistory.innerHTML = "";
          historyCreate(title, number, getTime());
        }
      });
    });

    clearHistory.addEventListener("click", function () {
      historyContainer.innerHTML = "";
      noHistory.textContent = "No history yet.";
      historyContainer.appendChild(noHistory);
    });

    function getClass(e, text) {
      return e.target.classList.contains(text);
    }

    function historyCreate(title, number, time) {
      const div = document.createElement("div");
      div.className = "flex justify-between items-center bg-gray-100 rounded-lg px-3 py-2";
      div.innerHTML = `
        <div>
          <p class="font-medium text-gray-800 text-sm">${title}</p>
          <p class="text-gray-600 text-xs">${number}</p>
        </div>
        <span class="text-xs text-gray-900">${time}</span>
      `;
      historyContainer.appendChild(div);
    }

    function getTime() {
      const date = new Date();
      let h = date.getHours();
      let hour12 = h % 12 || 12;
      let m = date.getMinutes().toString().padStart(2, "0");
      let s = date.getSeconds().toString().padStart(2, "0");
      return `${hour12}:${m}:${s}`;
    }
