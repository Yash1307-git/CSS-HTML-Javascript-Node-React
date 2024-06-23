const apikey="b03d127ea67f14a3f11bbfa0a6648da6";
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchbox=document.querySelector(".search input");
const searchbtn=document.querySelector(".search button");
const weathericon=document.querySelector(".Weathericon")

async function checkWeather(city) {
    const response = await fetch(apiurl + city + `&appid=${apikey}`)
    var data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML= Math.round(data.main.temp)  +"°c";
    document.querySelector(".humidity").innerHTML=data.main.humidity +"%";
    document.querySelector(".wind").innerHTML=data.wind.speed + "km/h";

    if(data.weather[0].main == "Clouds")
    {
        weathericon.src="clouds.png";
    }
    else if (data.weather[0].main == "Clear")
    {
        weathericon.src="clear.png"
    }
    else if(data.weather[0].main == "Rain")
    {
        weathericon.src="rain.png"
    }
    else if(data.weather[0].main == "Drizzle")
    {
        weathericon.src="drizzle.png"
    }
    else if(data.weather[0].main == "Mist")
    {
        weathericon.src="mist.png"
    }


}

searchbtn.addEventListener("click" , () => {

    checkWeather(searchbox.value);
})
