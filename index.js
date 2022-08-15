const getCountryInfo = countryName => {
  axios
    .get(`https://restcountries.com/v3.1/name/${countryName}`)
    .then(response => {
      const countryDetail = response.data[0];
      console.log('a single country details: ', countryDetail);
      printCountryInfo(countryDetail);
    })
    .catch(err => console.log(err));
};

const printCountryInfo = country => {
  const header = document.getElementById('country-name');
  const capital = document.getElementById('country-capital');
  const image = document.getElementById('country-flag');

  header.innerHTML = 'Country: ' + country.name.official;
  capital.innerHTML = 'Capital: ' + country.capital[0];
  image.src = country.flags.svg;
};
 
document.getElementById('get-country-btn').addEventListener('click', () => {
  const userInput = document.getElementById('country-name-input').value;
  getCountryInfo(userInput);
});