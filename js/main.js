let Weather = {
  // Api key
  apiKey: "Enter YOUR API KEY",

  // weather current location
  fetchCurrentWeather: function (lat, lon) {
    fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=alerts,minutely&appid=${this.apiKey}`
    )
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        this.update_data(data);
        this.change_daily(data.daily);
        this.change_hourly(data.hourly);
      });
  },
  // weather custom location
  fetchWeather: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=metric&appid=" +
        this.apiKey
    )
      .then((response) => response.json())
      .then((data) => {
        this.change_data(data);
        // console.log(data.coord.lat, data.coord.lon);
        this.ho(data.coord.lat, data.coord.lon);
      });
  },
  ho: function (lat, lon) {
    fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=alerts,current,minutely&appid=${this.apiKey}`
    )
      .then((response) => response.json())
      .then((data) => {
        this.change_daily(data.daily);
        this.change_hourly(data.hourly);
      });
  },
  // daily data
  change_daily: function (daily) {
    // console.log(daily);

    document.getElementById("d1").innerText = new Date(
      daily[0].dt * 1000
    ).toLocaleString("en-US", { weekday: "long" });
    document.getElementById("b1").src =
      "../assets/" + daily[0].weather[0].icon + ".png";
    document.getElementById("Max-T1").innerText =
      "Max: " + daily[0].temp.max + "°C";
    document.getElementById("Min-T1").innerText =
      "Min: " + daily[0].temp.min + "°C";

    document.getElementById("d2").innerText = new Date(
      daily[1].dt * 1000
    ).toLocaleString("en-US", { weekday: "long" });
    document.getElementById("b2").src =
      "../assets/" + daily[1].weather[0].icon + ".png";
    document.getElementById("Max-T2").innerText =
      "Max: " + daily[1].temp.max + "°C";
    document.getElementById("Min-T2").innerText =
      "Min: " + daily[1].temp.min + "°C";

    document.getElementById("d3").innerText = new Date(
      daily[2].dt * 1000
    ).toLocaleString("en-US", { weekday: "long" });
    document.getElementById("b3").src =
      "../assets/" + daily[2].weather[0].icon + ".png";
    document.getElementById("Max-T3").innerText =
      "Max: " + daily[2].temp.max + "°C";
    document.getElementById("Min-T3").innerText =
      "Min: " + daily[2].temp.min + "°C";

    document.getElementById("d4").innerText = new Date(
      daily[3].dt * 1000
    ).toLocaleString("en-US", { weekday: "long" });
    document.getElementById("b4").src =
      "../assets/" + daily[3].weather[0].icon + ".png";
    document.getElementById("Max-T4").innerText =
      "Max: " + daily[3].temp.max + "°C";
    document.getElementById("Min-T4").innerText =
      "Min: " + daily[3].temp.min + "°C";

    document.getElementById("d5").innerText = new Date(
      daily[4].dt * 1000
    ).toLocaleString("en-US", { weekday: "long" });
    document.getElementById("b5").src =
      "../assets/" + daily[4].weather[0].icon + ".png";
    document.getElementById("Max-T5").innerText =
      "Max: " + daily[4].temp.max + "°C";
    document.getElementById("Min-T5").innerText =
      "Min: " + daily[4].temp.min + "°C";

    document.getElementById("d6").innerText = new Date(
      daily[5].dt * 1000
    ).toLocaleString("en-US", { weekday: "long" });
    document.getElementById("b6").src =
      "../assets/" + daily[5].weather[0].icon + ".png";
    document.getElementById("Max-T6").innerText =
      "Max: " + daily[5].temp.max + "°C";
    document.getElementById("Min-T6").innerText =
      "Min: " + daily[5].temp.min + "°C";

    document.getElementById("d7").innerText = new Date(
      daily[6].dt * 1000
    ).toLocaleString("en-US", { weekday: "long" });
    document.getElementById("b7").src =
      "../assets/" + daily[6].weather[0].icon + ".png";
    document.getElementById("Max-T7").innerText =
      "Max: " + daily[6].temp.max + "°C";
    document.getElementById("Min-T7").innerText =
      "Min: " + daily[6].temp.min + "°C";

    document.getElementById("d8").innerText = new Date(
      daily[7].dt * 1000
    ).toLocaleString("en-US", { weekday: "long" });
    document.getElementById("b8").src =
      "../assets/" + daily[7].weather[0].icon + ".png";
    document.getElementById("Max-T8").innerText =
      "Max: " + daily[7].temp.max + "°C";
    document.getElementById("Min-T8").innerText =
      "Min: " + daily[7].temp.min + "°C";
  },
  //hourly data
  change_hourly: function (hourly) {
    // console.log(hourly);

    document.getElementById("time1").innerText = new Date(
      hourly[0].dt * 1000
    ).toLocaleString("en-US", { hour: "numeric", minute: "numeric" });
    document.getElementById("box1").src =
      "../assets/" + hourly[0].weather[0].icon + ".png";
    document.getElementById("t1").innerText = hourly[0].temp + "°C";

    document.getElementById("time2").innerText = new Date(
      hourly[1].dt * 1000
    ).toLocaleString("en-US", { hour: "numeric", minute: "numeric" });
    document.getElementById("box2").src =
      "../assets/" + hourly[1].weather[0].icon + ".png";
    document.getElementById("t2").innerText = hourly[1].temp + "°C";

    document.getElementById("time3").innerText = new Date(
      hourly[2].dt * 1000
    ).toLocaleString("en-US", { hour: "numeric", minute: "numeric" });
    document.getElementById("box3").src =
      "../assets/" + hourly[2].weather[0].icon + ".png";
    document.getElementById("t3").innerText = hourly[2].temp + "°C";

    document.getElementById("time4").innerText = new Date(
      hourly[3].dt * 1000
    ).toLocaleString("en-US", { hour: "numeric", minute: "numeric" });
    document.getElementById("box4").src =
      "../assets/" + hourly[3].weather[0].icon + ".png";
    document.getElementById("t4").innerText = hourly[3].temp + "°C";

    document.getElementById("time5").innerText = new Date(
      hourly[4].dt * 1000
    ).toLocaleString("en-US", { hour: "numeric", minute: "numeric" });
    document.getElementById("box5").src =
      "../assets/" + hourly[4].weather[0].icon + ".png";
    document.getElementById("t5").innerText = hourly[4].temp + "°C";

    document.getElementById("time6").innerText = new Date(
      hourly[5].dt * 1000
    ).toLocaleString("en-US", { hour: "numeric", minute: "numeric" });
    document.getElementById("box6").src =
      "../assets/" + hourly[5].weather[0].icon + ".png";
    document.getElementById("t6").innerText = hourly[5].temp + "°C";

    document.getElementById("time7").innerText = new Date(
      hourly[6].dt * 1000
    ).toLocaleString("en-US", { hour: "numeric", minute: "numeric" });
    document.getElementById("box7").src =
      "../assets/" + hourly[6].weather[0].icon + ".png";
    document.getElementById("t7").innerText = hourly[6].temp + "°C";

    document.getElementById("time8").innerText = new Date(
      hourly[7].dt * 1000
    ).toLocaleString("en-US", { hour: "numeric", minute: "numeric" });
    document.getElementById("box8").src =
      "../assets/" + hourly[7].weather[0].icon + ".png";
    document.getElementById("t8").innerText = hourly[7].temp + "°C";

    document.getElementById("time9").innerText = new Date(
      hourly[8].dt * 1000
    ).toLocaleString("en-US", { hour: "numeric", minute: "numeric" });
    document.getElementById("box9").src =
      "../assets/" + hourly[8].weather[0].icon + ".png";
    document.getElementById("t9").innerText = hourly[8].temp + "°C";

    document.getElementById("time10").innerText = new Date(
      hourly[9].dt * 1000
    ).toLocaleString("en-US", { hour: "numeric", minute: "numeric" });
    document.getElementById("box10").src =
      "../assets/" + hourly[9].weather[0].icon + ".png";
    document.getElementById("t10").innerText = hourly[9].temp + "°C";

    document.getElementById("time11").innerText = new Date(
      hourly[10].dt * 1000
    ).toLocaleString("en-US", { hour: "numeric", minute: "numeric" });
    document.getElementById("box11").src =
      "../assets/" + hourly[10].weather[0].icon + ".png";
    document.getElementById("t11").innerText = hourly[10].temp + "°C";

    document.getElementById("time12").innerText = new Date(
      hourly[11].dt * 1000
    ).toLocaleString("en-US", { hour: "numeric", minute: "numeric" });
    document.getElementById("box12").src =
      "../assets/" + hourly[11].weather[0].icon + ".png";
    document.getElementById("t12").innerText = hourly[11].temp + "°C";

    document.getElementById("time13").innerText = new Date(
      hourly[12].dt * 1000
    ).toLocaleString("en-US", { hour: "numeric", minute: "numeric" });
    document.getElementById("box13").src =
      "../assets/" + hourly[12].weather[0].icon + ".png";
    document.getElementById("t13").innerText = hourly[12].temp + "°C";

    document.getElementById("time14").innerText = new Date(
      hourly[13].dt * 1000
    ).toLocaleString("en-US", { hour: "numeric", minute: "numeric" });
    document.getElementById("box14").src =
      "../assets/" + hourly[13].weather[0].icon + ".png";
    document.getElementById("t14").innerText = hourly[13].temp + "°C";

    document.getElementById("time15").innerText = new Date(
      hourly[14].dt * 1000
    ).toLocaleString("en-US", { hour: "numeric", minute: "numeric" });
    document.getElementById("box15").src =
      "../assets/" + hourly[14].weather[0].icon + ".png";
    document.getElementById("t15").innerText = hourly[14].temp + "°C";

    document.getElementById("time16").innerText = new Date(
      hourly[15].dt * 1000
    ).toLocaleString("en-US", { hour: "numeric", minute: "numeric" });
    document.getElementById("box16").src =
      "../assets/" + hourly[15].weather[0].icon + ".png";
    document.getElementById("t16").innerText = hourly[15].temp + "°C";

    document.getElementById("time17").innerText = new Date(
      hourly[16].dt * 1000
    ).toLocaleString("en-US", { hour: "numeric", minute: "numeric" });
    document.getElementById("box17").src =
      "../assets/" + hourly[16].weather[0].icon + ".png";
    document.getElementById("t17").innerText = hourly[16].temp + "°C";

    document.getElementById("time18").innerText = new Date(
      hourly[17].dt * 1000
    ).toLocaleString("en-US", { hour: "numeric", minute: "numeric" });
    document.getElementById("box18").src =
      "../assets/" + hourly[17].weather[0].icon + ".png";
    document.getElementById("t18").innerText = hourly[17].temp + "°C";

    document.getElementById("time19").innerText = new Date(
      hourly[18].dt * 1000
    ).toLocaleString("en-US", { hour: "numeric", minute: "numeric" });
    document.getElementById("box19").src =
      "../assets/" + hourly[18].weather[0].icon + ".png";
    document.getElementById("t19").innerText = hourly[18].temp + "°C";

    document.getElementById("time20").innerText = new Date(
      hourly[19].dt * 1000
    ).toLocaleString("en-US", { hour: "numeric", minute: "numeric" });
    document.getElementById("box20").src =
      "../assets/" + hourly[19].weather[0].icon + ".png";
    document.getElementById("t20").innerText = hourly[19].temp + "°C";

    document.getElementById("time21").innerText = new Date(
      hourly[20].dt * 1000
    ).toLocaleString("en-US", { hour: "numeric", minute: "numeric" });
    document.getElementById("box21").src =
      "../assets/" + hourly[20].weather[0].icon + ".png";
    document.getElementById("t21").innerText = hourly[20].temp + "°C";

    document.getElementById("time22").innerText = new Date(
      hourly[21].dt * 1000
    ).toLocaleString("en-US", { hour: "numeric", minute: "numeric" });
    document.getElementById("box22").src =
      "../assets/" + hourly[21].weather[0].icon + ".png";
    document.getElementById("t22").innerText = hourly[21].temp + "°C";

    document.getElementById("time23").innerText = new Date(
      hourly[22].dt * 1000
    ).toLocaleString("en-US", { hour: "numeric", minute: "numeric" });
    document.getElementById("box23").src =
      "../assets/" + hourly[22].weather[0].icon + ".png";
    document.getElementById("t23").innerText = hourly[22].temp + "°C";

    document.getElementById("time24").innerText = new Date(
      hourly[23].dt * 1000
    ).toLocaleString("en-US", { hour: "numeric", minute: "numeric" });
    document.getElementById("box24").src =
      "../assets/" + hourly[23].weather[0].icon + ".png";
    document.getElementById("t24").innerText = hourly[23].temp + "°C";
  },
  update_data: function (data) {
    document.querySelector(".icon").src =
      "../assets/" + data.current.weather[0].icon + ".png";
    document.querySelector(".description").innerText =
      data.current.weather[0].description;
    document.querySelector(".temp").innerText = data.current.temp + "°C";
    document.querySelector(".humidity").innerText =
      "Humidity: " + data.current.humidity + "%";
    document.querySelector(".wind").innerText =
      "Wind Speed: " + data.current.wind_speed + "km/h";
    this.update_time(data.current.dt);
  },
  change_data: function (data) {
    // console.log(data);
    document.querySelector(".city").innerText =
      "Current Location: " + data.name;
    document.querySelector(".icon").src =
      "../assets/" + data.weather[0].icon + ".png";
    document.querySelector(".description").innerText =
      data.weather[0].description;
    document.querySelector(".temp").innerText = data.main.temp + "°C";
    document.querySelector(".humidity").innerText =
      "Humidity: " + data.main.humidity + "%";
    document.querySelector(".wind").innerText =
      "Wind Speed: " + data.wind.speed + "km/h";
    this.update_time(data.dt);
  },
  getLocation: function () {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        // console.log(position);
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        fetchLocationName(lat, lon);
        this.fetchCurrentWeather(lat, lon);
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  },

  search: function () {
    this.fetchWeather(document.querySelector(".form__field").value);
  },
  update_time(dt) {
    document.querySelector(".time").innerText = new Date(
      dt * 1000
    ).toLocaleString("en-US", {
      weekday: "long",
      hour: "numeric",
      minute: "numeric",
    });
  },
};


//Event "Enter key"
document.querySelector(".form__field").addEventListener("keyup", (event) => {
  if (event.keyCode === 13) {
    Weather.search();
  }
});

// Get timestamp and location on page load
window.onload = Weather.getLocation();

const fetchLocationName = async (lat, lon) => {
  await fetch(
    "https://www.mapquestapi.com/geocoding/v1/reverse?key=G1moSFJkXvMTf7kCVqTOPMh1SxtvJaGi&location=" +
      lat +
      "%2C" +
      lon +
      "&outFormat=json&thumbMaps=false"
  )
    .then((response) => response.json())
    .then((data) => {
      // console.log(data);
      const name = data.results[0].locations[0].street;
      document.querySelector(".city").innerText = name;
    });
};
