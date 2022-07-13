// clock
function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML =  h + ":" + m + ":" + s;
    setTimeout(startTime, 1000);
  }
      
  function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }

// weather custom location
let Weather={
    apiKet:"7960b8508bd356d405143b43bf71d6a8",
    fetchWeather: function(city){
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q="
            + city
            + "&units=metric&appid="
            + this.apiKet 
        ) 
        .then((response)=>response.json())
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data){
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed }=  data.wind ;
        console.log(name,icon,description,temp,humidity,speed);
        document.querySelector(".city").innerText="Weather in "+ name;
        document.querySelector(".icon").src="http://openweathermap.org/img/wn/"+icon+"@4x.png";
        document.querySelector(".description").innerText=description;
        document.querySelector(".temp").innerText="Temprature: "+ temp+"°C";
        document.querySelector(".humidity").innerText="Humidity: "+ humidity+"%";
        document.querySelector(".wind").innerText="Wind Speed: " +speed+ "km/h";
    },
    search: function(){
        this.fetchWeather(document.querySelector(".input1").value);
    }
};

document.querySelector(".button1").addEventListener("click",function(){
    Weather.search();
});

document.querySelector(".input1").addEventListener("keyup",event => {
    if (event.keyCode === 13) {
        Weather.search();
    }
  });



// weather current location
let Weather1={
    apiKey:"7960b8508bd356d405143b43bf71d6a8",
    fetchWeather: function(position){
        const lat=position.coords.latitude;
        const lon=position.coords.longitude;
        fetch("https://api.openweathermap.org/data/2.5/weather?lat="
            +lat
            +"&lon="
            +lon
            +"&units=metric&appid=7960b8508bd356d405143b43bf71d6a8"
        )
        .then((response)=>response.json())
        .then((data) => {
            const { name } = data;
            const { icon, description } = data.weather[0];
            const { temp, humidity } = data.main;
            const { speed }=  data.wind ;
            console.log(name,icon,description,temp,humidity,speed);
            document.querySelector(".city").innerText="Current Location: "+ name;
            document.querySelector(".icon").src="http://openweathermap.org/img/wn/"+icon+"@4x.png";
            document.querySelector(".description").innerText=description;
            document.querySelector(".temp").innerText="Temprature: "+ temp+"°C";
            document.querySelector(".humidity").innerText="Humidity: "+ humidity+"%";
            document.querySelector(".wind").innerText="Wind Speed: " +speed+ "km/h";

        });
    },
    getLocation: function () {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(this.fetchWeather);
        } else { 
            alert("Geolocation is not supported by this browser.");
        }
    }
};

window.onload=Weather1.getLocation();
window.onload=startTime();