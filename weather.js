const Api_key = "8b718b4d2935b7625fe3a17cf8ced283";

function getweather(){
    const city = document.getElementById("cityinput").value;
    const weatherdetails = document.getElementById("weather-details");
    if (city ===''){
        weatherdetails.innerHTML =' <p>Please enter a city name</p> ';
        return;
    }
 const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${Api_key}`;
 fetch(url)
 .then(Response=>Response.json())
 .then(data=>{
    if(data.code ==='404'){
        weatherdetails.innerHTML =`<p>city not found please try again </p>`;
    }
    else{
        console.log(data);
        
        weatherdetails.innerHTML =`<h2>${data.name},${data.sys.country}</h2>
        <p>Temparatute:${data.main.temp}</p>
        <p>Humidity:${data.main.humidity}</p>
        <p>Max_Temparature:${data.main.temp_max}</p>
        <p>Mix_Temparatute:${data.main.temp_min}</p>
        `;
        

    }
 })
 .catch((error)=>{
    weatherdetails.innerHTML=`<p>error fetching data</p>`;
 });

}