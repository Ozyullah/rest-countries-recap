
const loadCountryData = () =>{
    fetch("https://restcountries.com/v3.1/all")
    .then(res => res.json())
    .then(infoes => displayData(infoes));
}

const displayData = contries =>{
    
    const documentCountries = contries.map(countrie => catchData(countrie));
    
    const getHtml =document.getElementById("countryContainer");
    getHtml.innerHTML =documentCountries.join(' ');
}

const catchData = ({name, flags, maps}) =>{

    return `
        <div class="akorson">
        <h2>${name.common}</h2>
        <img src="${flags.png}">
        <a href="${maps.googleMaps}">Go here</a>
        </div>
    `
}

loadCountryData()



// const catchData = partes =>{
//     console.log(partes)
//     return `
//         <div class="akorson">
//         <h2>${partes.name.common}</h2>
//         <img src="${partes.flags.png}">
//         </div>
//     `
// }


// const catchData = partes =>{
//     const {name, flags}= partes;
//     return `
//         <div class="akorson">
//         <h2>${name.common}</h2>
//         <img src="${flags.png}">
//         </div>
//     `
// }