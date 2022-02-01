const createDivElement = () => {
    const newDiv = document.createElement("div");
    return newDiv;
}

const createParagraphElement = () => {
    const newParagraph = document.createElement("p");
    return newParagraph;
}

const createH1Element = () => {
    const newH1 = document.createElement("h1");
    return newH1;
}

const createH3Element = () => {
    const newH3 = document.createElement("h3");
    return newH3;
}

const addCard = (data, style, addEveryWeekDay) => {
    const main = document.querySelector("main");

    const section = document.createElement("section");
    main.appendChild(section);
    const day1 = createDivElement();
    day1.className = style;
    section.appendChild(day1);
    const mondayH1 = createH1Element();
    mondayH1.innerText = addEveryWeekDay;
    day1.appendChild(mondayH1);
    const dateParagraph = createParagraphElement();
    day1.appendChild(dateParagraph);
    dateParagraph.innerHTML = data.dt_txt;
    const tempH3 = createH3Element();
    tempH3.innerText = "Temperature:";
    day1.appendChild(tempH3);
    const temperature = createDivElement();
    temperature.className = "temperature";
    day1.append(temperature);
    const tempParagraph = createParagraphElement();
    day1.append(tempParagraph);
    tempParagraph.innerHTML = data.main.temp + "<span>&#8451;</span>";
    const feelTempH3 = createH3Element();
    feelTempH3.innerText = "Feeling Temperature:";
    day1.appendChild(feelTempH3);
    const feelTemp = createDivElement();
    feelTemp.className = "feelTemp";
    day1.append(feelTemp);
    const feelTempParagraph = createParagraphElement();
    day1.append(feelTempParagraph);
    feelTempParagraph.innerHTML = data.main.feels_like + "<span>&#8451;</span>";
    const weatherH3 = createH3Element();
    weatherH3.innerText = "Weather:";
    day1.append(weatherH3);
    const weather = createDivElement();
    weather.className = "weather";
    day1.append(weather);
    const weatherParagraph = createParagraphElement();
    weatherParagraph.innerHTML = data.weather[0].main;
    day1.append(weatherParagraph);
    const windH3 = createH3Element();
    windH3.innerText = "Wind:";
    day1.append(windH3);
    const wind = createDivElement();
    wind.className = "wind";
    day1.append(wind);
    const windParagraph = createParagraphElement();
    windParagraph.innerHTML = data.wind.speed + "<span>MpS</span>";
    day1.append(windParagraph);
    const humidityH3 = createH3Element();
    humidityH3.innerText = "Humidity:";
    day1.append(humidityH3);
    const humidity = createDivElement();
    humidity.className = "humidity";
    day1.append(humidity);
    const humidityParagraph = createParagraphElement();
    humidityParagraph.innerHTML = data.main.humidity + "<span>%</span>";
    day1.append(humidityParagraph);
}

export default addCard;