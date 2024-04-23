const url = "https://api.openweathermap.org";
let city = "";
let appid ="0c34ef34f1a376e376fec11d496a3c6c";

async function getWeather() {
    let city=document.getElementById("city").value
    console.log;
    let response = await fetch(`${url}/data/2.5/weather?q=${city}&appid=${appid}`)
    let data = await response.json();
    console.log(data);

    let icon =data.weather[0].icon;

    let div = document.getElementById("data");
    div.innerHTML = `
            <h1>อุณหภูมิ : ${Math.round(data.main.temp - 273.15)} °C</h1>
            <h1>ความชื้น : ${data.main.humidity} % </h1>
            <h1>ชื่อเมือง : ${data.name}</h1>
            <img src="https://openweathermap.org/img/wn/${icon}.png" alt="icon">   
            `;
}
getWeather();
