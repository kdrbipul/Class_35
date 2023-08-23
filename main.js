// alert('Do you want to website?');

const loadCountries =() =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then(data => displayOurCountry(data))
}

const displayOurCountry = (countries) =>{
    // console.log(countries);
    
    const getCountriesHTML = countries.map((country)=> getCountryHTML(country));
    const countriesHTML = (getCountriesHTML.join(' ')); 
    document.getElementById("country").innerHTML = countriesHTML;
}

const getCountryHTML = (country) =>{
    // console.log(country);
    return `
    <div style="padding:10px; background:tomato; border-radius:5px;">
        <h3>${country.name.common}</h3>
        <p>${country?.capital}</p>
        <button onClick=loadCountryByName('${country.name.common}')>Show Details</button>
    </div>
    `
}



loadCountries(); 








