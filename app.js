window.addEventListener('load', () => {
    let long;
    let lat;
    let temperatureDescription = document.querySelector('.description')
    let temperatureDegree = document.querySelector('.degree')
    let locationTimezone = document.querySelector('.location-timezone')
    let icon = document.querySelector(".icon")
    let temperaturySection = document.querySelector('.temperature')
    const temperaturespam = document.querySelector('.temperature span')
    
    if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
           long = position.coords.longitude;
           lat = position.coords.latitude
           console.log(lat)
           console.log(long)

           const apiKey = "1b2d3f5c36244b56bde173851232903";
           const api =`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${lat},${long}&days=1&aqi=no&alerts=no`
           fetch(api)
       .then(response => {
        return response.json();
       })
       .then(data =>{
        console.log(data)

        temperatureDegree.textContent = data.current.temp_c
        locationTimezone.textContent = data.location.tz_id
        temperatureDescription.textContent = data.current.condition.text
        iconApi = data.current.condition.icon
        icon.style.backgroundImage =  "url(https:"+ iconApi +")";
        //  formula for celciius
        let celcius = data.current.temp_c * 9 / 5 + 32
        console.log(celcius)

        
         temperaturySection.addEventListener('click', () => {
            if(temperaturespam.textContent === '°C'){
                temperaturespam.textContent = "F"
                temperatureDegree.textContent = celcius
            }else {
                temperaturespam.textContent = '°C'
                temperatureDegree.textContent = data.current.temp_c
            }
            
         })

       
       })
           
           
        })

    }

       


})