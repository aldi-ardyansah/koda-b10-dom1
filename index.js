const hitung = document.getElementById("hitung");
const hapus = document.getElementById("hapus");

hitung.addEventListener("click", (event) => {
    const celcius = parseInt(document.getElementById("inputCelcius").value);
    const reamur = 4 / 5 * celcius;
    const fahrenheit = (9 / 5 * celcius) + 32;
    const kelvin = celcius + 273;

    document.getElementById("reamur").textContent = reamur;
    document.getElementById("fahrenheit").textContent = fahrenheit;
    document.getElementById("kelvin").textContent = kelvin;
});

hapus.addEventListener("click", (event) => {
    document.getElementById("inputCelcius").value = "";
    document.getElementById("reamur").textContent = "-";
    document.getElementById("fahrenheit").textContent = "-";
    document.getElementById("kelvin").textContent = "-";
});