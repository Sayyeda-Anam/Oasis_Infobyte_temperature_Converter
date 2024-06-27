console.log('Welcome to 🌡️ Temperature Converter');

const tempLoad = () => {
  const fa = document.getElementById('fa');
  fa.innerHTML = "&#xf2cb";
  fa.style.color = "#ffa41b";

  setTimeout(() => {
    fa.innerHTML = "&#xf2ca;";
    fa.style.color = "#ffa41b";
  }, 1000);

  setTimeout(() => {
    fa.innerHTML = "&#xf2c9;";
  }, 2000);

  setTimeout(() => {
    fa.innerHTML = "&#xf2c8;";
  }, 3000);

  setTimeout(() => {
    fa.innerHTML = "&#xf2c7;";
    fa.style.color = "#ff5151";
  }, 4000);
};

const startTempLoad = () => {
  setInterval(() => {
    const fa = document.getElementById('fa');
    fa.style.color = "#ffa41b";
    tempLoad();
  }, 5000);
};

startTempLoad();

const calculateTemp = () => {
  const numberTemp = parseFloat(document.getElementById('temp').value);
  const tempSelected = document.querySelector('#temp_diff');
  const valeTemp = tempSelected.options[tempSelected.selectedIndex].value;

  const celsiusToFahrenheit = (celsius) => (celsius * (9 / 5)) + 32;
  const fahrenheitToCelsius = (fahrenheit) => ((fahrenheit - 32) * 5) / 9;

  let result;
  if (valeTemp === "cel") {
    result = celsiusToFahrenheit(numberTemp);
    document.getElementById('resultContainer').innerHTML = `= ${result.toFixed(2)}°Fahrenheit`;
  } else {
    result = fahrenheitToCelsius(numberTemp);
    document.getElementById('resultContainer').innerHTML = `= ${result.toFixed(2)}°Celsius`;
  }

  setTimeout(() => {
    window.location.reload();
  }, 1500);
};
