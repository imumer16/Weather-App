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


let Weather={
    apiKet:"Enter Your API Key",
    // weather current location
    fetchCurrentWeather: function(position){
        const lat=position.coords.latitude;
        const lon=position.coords.longitude;
        fetch("https://api.openweathermap.org/data/2.5/weather?lat="
            +lat
            +"&lon="
            +lon
            +"&units=metric&appid="
             +this.apiKet
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
          navigator.geolocation.getCurrentPosition(this.fetchCurrentWeather);
        } else { 
            alert("Geolocation is not supported by this browser.");
        }
    },
    // weather custom location
    fetchWeather: function(city){
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q="
            + city
            + "&units=metric&appid="
            + this.apiKet 
        ) 
        .then((response)=>response.json())
        .then((data) => {
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
    });
    },
    search: function(){
        this.fetchWeather(document.querySelector(".input1").value);
    }
};

//Event "Click Search button"
document.querySelector(".button1").addEventListener("click",function(){ Weather.search(); });   
//Event "Enter key"
document.querySelector(".input1").addEventListener("keyup",event => {
    if (event.keyCode === 13) { Weather.search(); }
});

// Get timestamp and location on page load
window.onload=Weather.getLocation();
window.onload=startTime();
