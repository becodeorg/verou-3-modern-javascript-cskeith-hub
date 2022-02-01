import apiKey from "./javascript/config.js";
import addCard from "./javascript/addCard.js";
import cardInfo from "./javascript/cardInfo.js";
import chart from "./javascript/chart.js";
import temperature from "./javascript/temperature.js";
import addEveryWeekDay from "./javascript/addEveryWeekDay.js";

const dayLabel = addEveryWeekDay();
const submit = document.getElementById("submit");
const weatherPLace = document.getElementById("weatherPlace");

submit.addEventListener('click', function () {
  let place = weatherPLace.value;
  fetch(`https://api.unsplash.com/search/photos?query=${place}&client_id=` + apiKey.imageKey)
    .then(response => response.json())
    .then(image => {
      fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${place}&units=metric&appid=` + apiKey.weatherKey)
        .then(response => response.json())
        .then(data => {
          const dailyTemperature = temperature(data);
          chart(dayLabel, dailyTemperature);
          cardInfo(data, image);
          addCard(data.list[0], "card", dayLabel[0]);
          addCard(data.list[8], "card", dayLabel[1]);
          addCard(data.list[16], "card", dayLabel[2]);
          addCard(data.list[24], "card", dayLabel[3]);
          addCard(data.list[32], "card", dayLabel[4]);
        })
    })
})