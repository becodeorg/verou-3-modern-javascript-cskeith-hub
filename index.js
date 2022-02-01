import apiKey from "./javascript/config.js";
import addCard from "./javascript/addCard.js";
import cardInfo from "./javascript/cardInfo.js";
import chart from "./javascript/chart.js";

const addEveryWeekDay = () => {
  const weekDay = ["Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  let everyDay = [];
  for (let i = 0; i < 5; i++) {
    let day = new Date().getDay();
    everyDay.push(weekDay[(day + i) % 7]);
  }
  return everyDay;
}
const dayLabel = addEveryWeekDay();

const temperature = (tempData) => {
  let everyDayTemperature = [
    tempData.list[0].main.temp,
    tempData.list[8].main.temp,
    tempData.list[16].main.temp,
    tempData.list[24].main.temp,
    tempData.list[32].main.temp
  ]
  return everyDayTemperature;
}

const submit = document.getElementById("submit");
const weatherPLace = document.getElementById("weatherPlace");

submit.addEventListener('click', function () {
  let place = weatherPLace.value;
  fetch("https://api.unsplash.com/search/photos?query=" + place + "&client_id=" + apiKey.imageKey)
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