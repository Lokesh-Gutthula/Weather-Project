const submit = document.getElementById("submit");
const city_name = document.getElementById("city");

const cityname = document.getElementById("msg");

const getInfo = async(event)=>{
	event.preventDefault();	// to avoid query string
	let cityval = city_name.value;
	if(cityval==""){
		cityname.innerText="Plz write the name before search";
	}
	else{
		try{
			document.getElementById("hide").style.visibility="visible";
			let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityval}&units=metric&appid=6a8853e624a27a6494fde60e4e8d244a`;
			const response = await fetch(url);
			const data = await response.json();
			console.log(data)
			document.getElementById("msg").innerHTML = data.name +",  "+data.sys.country+"<br>";
			document.getElementById('temp').innerHTML=data.main.temp+"<span><sup>o</sup>C</span>";
			const icon = data.weather[0].description;
			document.getElementById("desc").innerText = icon;
			const state = document.getElementById("temp_status");
			if(icon == "moderate rain" || icon == "light rain")
				state.innerHTML = `<i class="fa-solid fa-cloud-rain fa-beat"></i>`;
			else if(icon == "heavy intensity rain")
				state.innerHTML = `<i class="fa-solid fa-cloud-showers-heavy fa-beat"></i>`
			else if(icon == "overcast clouds")
				state.innerHTML = `<i class="fa-solid fa-cloud fa-beat"></i>`;
			else if(icon == "clear sky")
				state.innerHTML = `<i class="fa-solid fa-circle"></i>`;
			// if()
		}catch{
			cityname.innerText="Plz Enter Valid City Name!";
	
		}
	}
}

submit.addEventListener("click", getInfo);