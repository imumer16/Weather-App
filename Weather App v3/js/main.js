let Weather = {
  apiKet: "7960b8508bd356d405143b43bf71d6a8",
  // weather current location
  fetchCurrentWeather: function (position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=33.5433997&lon=73.0810023&exclude=daily,alerts,minutely,current&appid=7960b8508bd356d405143b43bf71d6a8`
    )
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        fetchLocationName(lat, lon);
        const { icon, description } = data.hourly[0].weather[0];
        const { temp, humidity } = data.hourly[0];
        const speed = data.hourly[0].wind_speed;
        // console.log(name, icon, description, temp, humidity, speed);
        document.querySelector(".icon").src =
          "http://openweathermap.org/img/wn/" + icon + "@4x.png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText =
          "Temprature: " + (temp - 273.15).toFixed(2) + "°C";
        document.querySelector(".humidity").innerText =
          "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText =
          "Wind Speed: " + speed + "km/h";

        const icon1 = data.hourly[1].weather[0].icon;
        const temp1 = data.hourly[1].temp;
        console.log(icon1, temp1);
        document.getElementById("box1").src =
          "http://openweathermap.org/img/wn/" + icon1 + "@4x.png";
        document.getElementById("t1").innerText =
          (temp1 - 273.15).toFixed(2) + "°C";

        const icon2 = data.hourly[2].weather[0].icon;
        const temp2 = data.hourly[2].temp;
        console.log(icon2, temp2);
        document.getElementById("box2").src =
          "http://openweathermap.org/img/wn/" + icon2 + "@4x.png";
        document.getElementById("t2").innerText =
          (temp2 - 273.15).toFixed(2) + "°C";

        const icon3 = data.hourly[3].weather[0].icon;
        const temp3 = data.hourly[3].temp;
        console.log(icon3, temp3);
        document.getElementById("box3").src =
          "http://openweathermap.org/img/wn/" + icon3 + "@4x.png";
        document.getElementById("t3").innerText =
          (temp3 - 273.15).toFixed(2) + "°C";

        const icon4 = data.hourly[4].weather[0].icon;
        const temp4 = data.hourly[4].temp;
        console.log(icon4, temp4);
        document.getElementById("box4").src =
          "http://openweathermap.org/img/wn/" + icon4 + "@4x.png";
        document.getElementById("t4").innerText =
          (temp4 - 273.15).toFixed(2) + "°C";

        const icon5 = data.hourly[5].weather[0].icon;
        const temp5 = data.hourly[5].temp;
        console.log(icon5, temp5);
        document.getElementById("box5").src =
          "http://openweathermap.org/img/wn/" + icon5 + "@4x.png";
        document.getElementById("t5").innerText =
          (temp5 - 273.15).toFixed(2) + "°C";

        const icon6 = data.hourly[6].weather[0].icon;
        const temp6 = data.hourly[6].temp;
        console.log(icon6, temp6);
        document.getElementById("box6").src =
          "http://openweathermap.org/img/wn/" + icon6 + "@4x.png";
        document.getElementById("t6").innerText =
          (temp6 - 273.15).toFixed(2) + "°C";

        const icon7 = data.hourly[7].weather[0].icon;
        const temp7 = data.hourly[7].temp;
        console.log(icon7, temp7);
        document.getElementById("box7").src =
          "http://openweathermap.org/img/wn/" + icon7 + "@4x.png";
        document.getElementById("t7").innerText =
          (temp7 - 273.15).toFixed(2) + "°C";

        const icon8 = data.hourly[8].weather[0].icon;
        const temp8 = data.hourly[8].temp;
        console.log(icon8, temp8);
        document.getElementById("box8").src =
          "http://openweathermap.org/img/wn/" + icon8 + "@4x.png";
        document.getElementById("t8").innerText =
          (temp8 - 273.15).toFixed(2) + "°C";

        const icon9 = data.hourly[9].weather[0].icon;
        const temp9 = data.hourly[9].temp;
        console.log(icon9, temp9);
        document.getElementById("box9").src =
          "http://openweathermap.org/img/wn/" + icon9 + "@4x.png";
        document.getElementById("t9").innerText =
          (temp9 - 273.15).toFixed(2) + "°C";

        const icon10 = data.hourly[10].weather[0].icon;
        const temp10 = data.hourly[10].temp;
        console.log(icon10, temp10);
        document.getElementById("box10").src =
          "http://openweathermap.org/img/wn/" + icon10 + "@4x.png";
        document.getElementById("t10").innerText =
          (temp10 - 273.15).toFixed(2) + "°C";

        const icon11 = data.hourly[11].weather[0].icon;
        const temp11 = data.hourly[11].temp;
        console.log(icon11, temp11);
        document.getElementById("box11").src =
          "http://openweathermap.org/img/wn/" + icon11 + "@4x.png";
        document.getElementById("t11").innerText =
          (temp11 - 273.15).toFixed(2) + "°C";

        const icon12 = data.hourly[12].weather[0].icon;
        const temp12 = data.hourly[12].temp;
        console.log(icon12, temp12);
        document.getElementById("box12").src =
          "http://openweathermap.org/img/wn/" + icon12 + "@4x.png";
        document.getElementById("t12").innerText =
          (temp12 - 273.15).toFixed(2) + "°C";

        const icon13 = data.hourly[13].weather[0].icon;
        const temp13 = data.hourly[13].temp;
        console.log(icon13, temp13);
        document.getElementById("box13").src =
          "http://openweathermap.org/img/wn/" + icon13 + "@4x.png";
        document.getElementById("t13").innerText =
          (temp13 - 273.15).toFixed(2) + "°C";

        const icon14 = data.hourly[14].weather[0].icon;
        const temp14 = data.hourly[14].temp;
        console.log(icon14, temp14);
        document.getElementById("box14").src =
          "http://openweathermap.org/img/wn/" + icon14 + "@4x.png";
        document.getElementById("t14").innerText =
          (temp14 - 273.15).toFixed(2) + "°C";

        const icon15 = data.hourly[15].weather[0].icon;
        const temp15 = data.hourly[15].temp;
        console.log(icon15, temp15);
        document.getElementById("box15").src =
          "http://openweathermap.org/img/wn/" + icon15 + "@4x.png";
        document.getElementById("t15").innerText =
          (temp15 - 273.15).toFixed(2) + "°C";

        const icon16 = data.hourly[16].weather[0].icon;
        const temp16 = data.hourly[16].temp;
        console.log(icon16, temp16);
        document.getElementById("box16").src =
          "http://openweathermap.org/img/wn/" + icon16 + "@4x.png";
        document.getElementById("t16").innerText =
          (temp16 - 273.15).toFixed(2) + "°C";

        const icon17 = data.hourly[17].weather[0].icon;
        const temp17 = data.hourly[17].temp;
        console.log(icon17, temp17);
        document.getElementById("box17").src =
          "http://openweathermap.org/img/wn/" + icon17 + "@4x.png";
        document.getElementById("t17").innerText =
          (temp17 - 273.15).toFixed(2) + "°C";

        const icon18 = data.hourly[18].weather[0].icon;
        const temp18 = data.hourly[18].temp;
        console.log(icon18, temp18);
        document.getElementById("box18").src =
          "http://openweathermap.org/img/wn/" + icon18 + "@4x.png";
        document.getElementById("t18").innerText =
          (temp18 - 273.15).toFixed(2) + "°C";

        const icon19 = data.hourly[19].weather[0].icon;
        const temp19 = data.hourly[19].temp;
        console.log(icon19, temp19);
        document.getElementById("box19").src =
          "http://openweathermap.org/img/wn/" + icon19 + "@4x.png";
        document.getElementById("t19").innerText =
          (temp19 - 273.15).toFixed(2) + "°C";

        const icon20 = data.hourly[20].weather[0].icon;
        const temp20 = data.hourly[20].temp;
        console.log(icon20, temp20);
        document.getElementById("box20").src =
          "http://openweathermap.org/img/wn/" + icon20 + "@4x.png";
        document.getElementById("t20").innerText =
          (temp20 - 273.15).toFixed(2) + "°C";

        const icon21 = data.hourly[21].weather[0].icon;
        const temp21 = data.hourly[21].temp;
        console.log(icon21, temp21);
        document.getElementById("box21").src =
          "http://openweathermap.org/img/wn/" + icon21 + "@4x.png";
        document.getElementById("t21").innerText =
          (temp21 - 273.15).toFixed(2) + "°C";

        const icon22 = data.hourly[22].weather[0].icon;
        const temp22 = data.hourly[22].temp;
        console.log(icon22, temp22);
        document.getElementById("box22").src =
          "http://openweathermap.org/img/wn/" + icon22 + "@4x.png";
        document.getElementById("t22").innerText =
          (temp22 - 273.15).toFixed(2) + "°C";

        const icon23 = data.hourly[23].weather[0].icon;
        const temp23 = data.hourly[23].temp;
        console.log(icon23, temp23);
        document.getElementById("box23").src =
          "http://openweathermap.org/img/wn/" + icon23 + "@4x.png";
        document.getElementById("t23").innerText =
          (temp23 - 273.15).toFixed(2) + "°C";

        const icon24 = data.hourly[24].weather[0].icon;
        const temp24 = data.hourly[24].temp;
        console.log(icon24, temp24);
        document.getElementById("box24").src =
          "http://openweathermap.org/img/wn/" + icon24 + "@4x.png";
        document.getElementById("t24").innerText =
          (temp24 - 273.15).toFixed(2) + "°C";
      });
  },
  getLocation: function () {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.fetchCurrentWeather);
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  },
  // weather custom location
  fetchWeather: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=metric&appid=" +
        this.apiKet
    )
      .then((response) => response.json())
      .then((data) => {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        console.log(name, icon, description, temp, humidity, speed);
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".icon").src =
          "http://openweathermap.org/img/wn/" + icon + "@4x.png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText =
          "Temprature: " + temp + "°C";
        document.querySelector(".humidity").innerText =
          "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText =
          "Wind Speed: " + speed + "km/h";
      });
  },
  search: function () {
    this.fetchWeather(document.querySelector(".input1").value);
  },
};

// Get timestamp and location on page load
window.onload = Weather.getLocation();

const fetchLocationName = async (lat, lng) => {
  await fetch(
    "https://www.mapquestapi.com/geocoding/v1/reverse?key=G1moSFJkXvMTf7kCVqTOPMh1SxtvJaGi&location=" +
      lat +
      "%2C" +
      lng +
      "&outFormat=json&thumbMaps=false"
  )
    .then((response) => response.json())
    .then((data) => {
      const name = data.results[0].locations[0].street;
      console.log(data);
      document.querySelector(".city").innerText = "Current Location: " + name;
      document.querySelector(".city").style = "font-size:1rem";
    });
};
