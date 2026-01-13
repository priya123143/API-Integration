function getWeather() {
    const city = document.getElementById("city").value.trim();
    const apiKey = "de92a19ed59dae0997fd1c4b529b31b8";

    const url =  `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                document.getElementById("result").innerHTML =
                    `City: ${data.name} <br>
                     Temperature: ${data.main.temp} °C <br>
                     Weather: ${data.weather[0].description}`;
            } else {
                document.getElementById("result").innerText = data.message;
            }
        })
        .catch(error => {
            document.getElementById("result").innerText = "Error fetching data";
        });
}
