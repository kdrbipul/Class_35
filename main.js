// alert('Do you want to website?');

const loadCountries =() =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then(data => displayOurCountry(data))
}

const displayOurCountry = (countries) =>{
    // console.log(countries);
    const countryDiv = document.getElementById('country');
    countries.forEach((country)=>{
        // console.log(country);
        const div = document.createElement('div');
        div.classList.add('country-info');
        div.innerHTML=`
            <h3>${country.name.common}</h3>
            <p>${country?.capital[0]}</p>
            <button onclick=loadCountryByName("${country.name.common}")>Show Details</button>
        `
        countryDiv.appendChild(div);
    });
}

loadCountries(); 

const loadCountryByName = (name) =>{
    fetch(`https://restcountries.com/v3.1/name/${name}`)
    .then(response => response.json())
    .then(dataCountryFlag => countryShow(dataCountryFlag[0]))
}

const countryShow = (country) =>{
    console.log(country);
    const countryDetails = document.getElementById('country-details');
    countryDetails.innerHTML=`
        <h3>Name : ${country.name.common}</h3>
        <p>Capital : ${country.name.capital}</p>
        <p>Population : ${country.population}</p>
        <img src=${country?.flags?.png} alt=${country.flags.alt}>    
    `;
}

// loadCountryByName('UKraine');


const toTop = document.querySelector(".to-top");
window.addEventListener("scroll",()=>{
    if (window.pageYOffset > 100){
        toTop.classList.add("active");
    }else{
        toTop.classList.remove("active");
    }
});