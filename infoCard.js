const createDivElement = () => {
    const newDiv = document.createElement("div");
    return newDiv;
}
const cardInfo = (data, image) => {
    const main = document.querySelector("main");
    const section = document.createElement("section");
    main.appendChild(section);
    const infoCard = createDivElement();
    infoCard.className = "infoCard";
    section.appendChild(infoCard);
    const locationH1 = createH1Element();
    locationH1.innerText = data.city.name;
    infoCard.appendChild(locationH1);
    const city = createParagraphElement();
    city.innerText = data.city.country;
    infoCard.appendChild(city);
    const cityImage = createDivElement();
    cityImage.className = "cityImage";
    cityImage.innerHTML = `<img src=${image.results[0].urls.regular} alt="City of" style="width:200px;height:200px">`;
    infoCard.appendChild(cityImage);
  }

export default cardInfo;