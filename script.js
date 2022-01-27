const form = document.querySelector(
  "#calorieForm"
);
const uli =
  document.querySelector("#cals");
const first =
  document.querySelector("#meals");
const second = document.querySelector(
  "#calories"
);

let total = 0;
form.addEventListener(
  "submit",
  function (e) {
    e.preventDefault();
    if (first.value && second.value) {
      const sum = (total += parseInt(
        second.value
      ));
      if (sum <= 1000) {
        const li =
          document.createElement("li");

        li.innerText = `You had ${first.value} with ${second.value} calories. Your Total calorie intake so far is  ${sum}.`;

        uli.append(li);
      } else {
        alert(
          "Stop now!!!!!! You are about to burst"
        );
      }
      first.value = "";
      second.value = "";
    }
  }
);

uli.addEventListener(
  "click",
  function (x) {
    x.target.nodeName === "LI" &&
      x.target.remove();
  }
);
