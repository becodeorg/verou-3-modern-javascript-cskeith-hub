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

export default temperature;