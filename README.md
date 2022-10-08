
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

#### Get item





## Screenshots

![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)


## Contributing

Contributions are always welcome!



## License

[MIT](https://choosealicense.com/licenses/mit/)


## Support

For support, email umerahmed1000@gmail.com
