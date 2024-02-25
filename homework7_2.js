axios.get('https://disease.sh/v3/covid-19/countries').then(response => {
    console.log(response.data);
});
