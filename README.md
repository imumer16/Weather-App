
# Weather-App
The weather app also provides atmospheric pressure, weather conditions, visibility distance, relative humidity, precipitation in different unites, dew point, wind speed and direction, in addition to eight days in future and hourly weather forecast


## Authors

- [@imumer16](https://www.github.com/imumer16)


## Run Locally

Clone the project

```bash
  git clone https://github.com/imumer16/Weather-App.git
```










## Demo
```bash
   https://getyourweather1.netlify.app/
```



## API Reference

#### Get all items

```http
  api.openweathermap.org/data/2.5/forecast/daily?lat={lat}&lon={lon}&cnt={cnt}&appid={API key}
```

| Parameter |
| :-------- |
| lat, lon	required	Geographical coordinates (latitude, longitude). If you need the geocoder to automatic convert city names and zip-codes to geo coordinates and the other way around, please use our Geocoding API.
appid	required	Your unique API key (you can always find it on your account page under the "API key" tab)
cnt	optional	A number of days, which will be returned in the API response (from 1 to 16). Learn more
mode	optional	Data format. Possible values are: json, xml. If the mode parameter is empty the format is JSON by default. Learn more
units	optional	Units of measurement. standard, metric and imperial units are available. If you do not use the units parameter, standard units will be applied by default.
lang	optional	Language code.|

</br>

| Description                |
| :------------------------- |
| **Required**. Your API key |

</br>




## Example of API reponse

```
{
  "city": {
    "id": 3163858,
    "name": "Zocca",
    "coord": {
      "lon": 10.99,
      "lat": 44.34
    },
    "country": "IT",
    "population": 4593,
    "timezone": 7200
  },
  "cod": "200",
  "message": 0.0582563,
  "cnt": 7,
  "list": [
    {
      "dt": 1661857200,
      "sunrise": 1661834187,
      "sunset": 1661882248,
      "temp": {
        "day": 299.66,
        "min": 288.93,
        "max": 299.66,
        "night": 290.31,
        "eve": 297.16,
        "morn": 288.93
      },
      "feels_like": {
        "day": 299.66,
        "night": 290.3,
        "eve": 297.1,
        "morn": 288.73
      },
      "pressure": 1017,
      "humidity": 44,
      "weather": [
        {
          "id": 500,
          "main": "Rain",
          "description": "light rain",
          "icon": "10d"
        }
      ],
      "speed": 2.7,
      "deg": 209,
      "gust": 3.58,
      "clouds": 53,
      "pop": 0.7,
      "rain": 2.51
    },
    {
      "dt": 1661943600,
      "sunrise": 1661920656,
      "sunset": 1661968542,
      "temp": {
        "day": 295.76,
        "min": 287.73,
        "max": 295.76,
        "night": 289.37,
        "eve": 292.76,
        "morn": 287.73
      },
      "feels_like": {
        "day": 295.64,
        "night": 289.45,
        "eve": 292.97,
        "morn": 287.59
      },
      "pressure": 1014,
      "humidity": 60,
      "weather": [
        {
          "id": 500,
          "main": "Rain",
          "description": "light rain",
          "icon": "10d"
        }
      ],
      "speed": 2.29,
      "deg": 215,
      "gust": 3.27,
      "clouds": 66,
      "pop": 0.82,
      "rain": 5.32
    },
    {
      "dt": 1662030000,
      "sunrise": 1662007126,
      "sunset": 1662054835,
      "temp": {
        "day": 293.38,
        "min": 287.06,
        "max": 293.38,
        "night": 287.06,
        "eve": 289.01,
        "morn": 287.84
      },
      "feels_like": {
        "day": 293.31,
        "night": 287.01,
        "eve": 289.05,
        "morn": 287.85
      },
      "pressure": 1014,
      "humidity": 71,
      "weather": [
        {
          "id": 500,
          "main": "Rain",
          "description": "light rain",
          "icon": "10d"
        }
      ],
      "speed": 2.67,
      "deg": 60,
      "gust": 2.66,
      "clouds": 97,
      "pop": 0.84,
      "rain": 4.49
    },
    ....
                   

                
```

### Fields in API response



</br>



## Screenshots

![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)


## Contributing

Contributions are always welcome!



## License

[MIT](https://choosealicense.com/licenses/mit/)


## Support

For support, email umerahmed1000@gmail.com
