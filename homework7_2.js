

axios.get('https://dev.codekit.co/devcamp-api/covid-country.txt').then(response => {
    const allCovidData = response.data
    console.log(allCovidData.reduce((sum, obj) => sum + obj["todayRecovered"], 0))
    console.log(allCovidData.filter((country) => country["population"] > 100000000 && country["todayDeaths"] < 10)
                                .map((country) => country["country"]))

});

    

