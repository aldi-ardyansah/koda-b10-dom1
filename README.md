# DOM 1

## Membuat Program Konversi Suhu

### Kode
```javascript
const hitung = document.getElementById("hitung");

hitung.addEventListener("click", (event) => {
    const celcius = parseInt(document.getElementById("suhuCelcius").value);
    const reamur = 4 / 5 * celcius;
    const fahrenheit = (9 / 5 * celcius) + 32;
    const kelvin = celcius + 273;

    document.getElementById("reamur").textContent = reamur;
    document.getElementById("fahrenheit").textContent = fahrenheit;
    document.getElementById("kelvin").textContent = kelvin;
});
```