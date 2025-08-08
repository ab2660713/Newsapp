export const fetchWeather = async (city) => {
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=494038a74f1b4ec288c30006252906&q=${city}&aqi=yes`);
    const data = await response.json();
    return data;
}
