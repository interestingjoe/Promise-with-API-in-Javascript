let url = 'https://catfact.ninja/breeds?limit=1';

fetch(url)
.then(response => response.json())
.then(json => console.log(json))
.catch(error => console.log('Error: ', error))
