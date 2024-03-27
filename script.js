const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '136785f316msh89f12a9e6fd513fp12067cjsn3e9c8988ac74',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const getweather = (city) => {
	cityName.innerHTML = city
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
		.then(response => response.json())
		.then((response) => {
			console.log(response)
			temp.innerHTML = response.temp
			temp2.innerHTML = response.temp
			min_temp.innerHTML = response.min_temp
			max_temp.innerHTML = response.max_temp
			cloud_pct.innerHTML = response.cloud_pct
			feels_like.innerHTML = response.feels_like
			humidity.innerHTML = response.humidity
			humidity2.innerHTML = response.humidity
			wind_speed.innerHTML = response.wind_speed
			wind_speed2.innerHTML = response.wind_speed
			sunrise.innerHTML = response.sunrise
			sunset.innerHTML = response.sunset
			cloud_pct3.innerHTML = 40
			temp3.innerHTML = 35
			feels_like3.innerHTML = 34
			humidity3.innerHTML = 26
			min_temp3.innerHTML = 35
			max_temp3.innerHTML = 35
			wind_speed3.innerHTML = 3.09
			wind_degrees3.innerHTML = 300
			sunrise3.innerHTML = 1711500402
			sunset3.innerHTML = 1711544761
			cloud_pct4.innerHTML = 20
			temp4.innerHTML = 28
			feels_like4.innerHTML = 32
			humidity4.innerHTML = 78
			min_temp4.innerHTML = 27
			max_temp4.innerHTML = 28
			wind_speed4.innerHTML = 4.12
			wind_degrees4.innerHTML = 180
			sunrise4.innerHTML = 1711498464
			sunset4.innerHTML = 171154256
			cloud_pct5.innerHTML = 40
			temp5.innerHTML = 31
			feels_like5.innerHTML = 38
			humidity5.innerHTML = 74
			min_temp5.innerHTML = 31
			max_temp5.innerHTML = 31
			wind_speed5.innerHTML = 1.54
			wind_degrees5.innerHTML = 90
			sunrise5.innerHTML = 1711497823
			sunset5.innerHTML = 1711541988
		})
		// .then(response => response.json(delhi))
		// .then((response) => {
		// 	cloud_pct5.innerHTML = delhi.cloud_pct5
		// 	temp5.innerHTML = delhi.temp5
		// 	feels_like5.innerHTML = delhi.feels_like5
		// 	humidity5.innerHTML = delhi.humidity5
		// 	min_temp5.innerHTML = delhi.min_temp5
		// 	max_temp5.innerHTML = delhi.max_temp5
		// 	wind_speed5.innerHTML = delhi.wind_speed5
		// 	wind_degrees5.innerHTML = delhi.wind_degrees5
		// 	sunrise5.innerHTML = delhi.sunrise5
		// 	sunset5.innerHTML = delhi.sunset5
		// })
		.catch(err => console.error(err));
}
// var getweather2 = (city) => {
// 	cityName2.innerHTML = delhi
// 	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=delhi', options)
// 		.then(response => response.json())
// 		.then((response) => {
// 			console.log(response)
// 			temp3.innerHTML = response.temp3
// 		})
// }
submit.addEventListener("click", (e) => {
	e.preventDefault()
	getweather(city.value)
}
)
getweather("Dehli")