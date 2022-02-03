import apiKey from "./javascript/config.js";
import addCard from "./javascript/addCard.js";
import cardInfo from "./javascript/cardInfo.js";
import chart from "./javascript/chart.js";
import temperature from "./javascript/temperature.js";
import addEveryWeekDay from "./javascript/addEveryWeekDay.js";
import { DateTime } from "luxon";






setInterval(() => {
let now = DateTime.now().toLocaleString(DateTime.DATETIME_MED);
let DateNowPara = document.querySelector('p');
DateNowPara.innerHTML = now;
}, 1000);



const getWeather = () => {
  let weatherPLace = document.getElementById("weatherPlace").value;
  const dayLabel = addEveryWeekDay();

  fetch(`https://api.unsplash.com/search/photos?query=${weatherPLace}&client_id=` + apiKey.imageKey)
    .then(response => response.json())
    .then(image => {
      fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${weatherPLace}&units=metric&appid=` + apiKey.weatherKey)
        .then(response => response.json())
        .then(data => {
          const dailyTemperature = temperature(data);
          chart(dayLabel, dailyTemperature);
          cardInfo(data, image);
          for (let i = 0; i < 5; i++) {
            addCard(data.list[i * 8], "card", dayLabel[i]);
          }
        })

    })
}
document.querySelector("form").addEventListener('submit', function(event){
    event.preventDefault();
    if (event.key === "Enter"){
      console.log("cow");
    }
    console.log("cat");
    getWeather();
});
console.log("Hello, Webpack!");

