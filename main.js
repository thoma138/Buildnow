
function calc() {
    const a = parseInt(document.getElementById('budget').value);
    const b = parseInt(document.getElementById('value').value);
    const c = parseInt(document.getElementById('quality').value);
    const d = parseInt(document.getElementById('luxury').value);

    let x = parseInt(document.getElementById('sqm-amount').value);
    let result;

    if (parseInt(document.getElementById('build-options').value) === a) {
       result = a * x;
    } else if (parseInt(document.getElementById('build-options').value) === b) {
        result = b * x;
    } else if (parseInt(document.getElementById('build-options').value) === c) {
        result = c * x;
    } else if (parseInt(document.getElementById('build-options').value) === d) {
        result = d * x;
    }

    return result;
}

function updateResult() {
    document.getElementById("result").innerText = calc();
}

document.getElementById("calculate").addEventListener("click", function(event) {
    event.preventDefault()
  });

  document.getElementById("calculate").addEventListener("click", function(event) {
    event = updateResult()
  });


    

  const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'gold-price-live.p.rapidapi.com',
		'X-RapidAPI-Key': 'ff68b8ef9fmsh59bdd30a9f7113cp16ffeajsn36b945a6b15c'
	}
};



fetch('https://gold-price-live.p.rapidapi.com/get_metal_prices', options)
	.then(response => response.json())
	.then(data => {document.getElementById("data").innerHTML = data.gold})
	.catch(err => console.error(err));

