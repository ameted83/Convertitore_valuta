const amount = document.getElementById("amount");
const select = document.querySelectorAll(".currency");
const btn = document.getElementById("btn");
const result = document.getElementById("result");

const fetchData = fetch("https://api.frankfurter.app/latest")
  .then((data) => data.json())
  .then((data) => {
    insertData(data);
  });

function insertData(data) {
  // console.log(data);
  const currency = Object.entries(data.rates);
  // console.log(currency);
  for (let i = 0; i < currency.length; i++) {
    select[0].innerHTML += `<option value="${currency[i][0]}">${currency[i][0]}</option>`;
    select[1].innerHTML += `<option value="${currency[i][0]}">${currency[i][0]}</option>`;
  }
}

btn.addEventListener("click", () => {
  let currency1 = select[0].value;
  // console.log(currency1);
  let currency2 = select[1].value;
  // console.log(currency2);
  let value = amount.value;
  // console.log(value);
  convert(currency1, currency2, value);
});

function convert(currency1, currency2, value) {
  const host = "api.frankfurter.app";

  fetch(
    `https://${host}/latest?amount=${value}&from=${currency1}&to=${currency2}`
  )
    .then((item) => item.json())
    .then((item) => {
      result.innerHTML = `Conversion: ${value} ${currency1} = ${
        Object.values(item.rates)[0]
      } ${currency2}`;
    });
}
