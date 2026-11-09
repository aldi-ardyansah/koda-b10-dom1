const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const data = new FormData(e.target);
    const celcius = parseFloat(data.get("inputCelcius"));

    if (data.get("inputCelcius") === "") return;

    const reamur = 4 / 5 * celcius;
    const fahrenheit = (9 / 5 * celcius) + 32;
    const kelvin = celcius + 273;

    document.getElementById("reamur").textContent = reamur;
    document.getElementById("fahrenheit").textContent = fahrenheit;
    document.getElementById("kelvin").textContent = kelvin;

    appendTable([
        document.querySelectorAll("#history tbody tr").length,
        celcius,
        reamur,
        fahrenheit,
        kelvin
    ]);
});

function appendTable(data) {
    const target = document.querySelector("#history tbody");
    const row = document.createElement("tr");

    data.forEach((value) => {
        const cell = document.createElement("td");
        cell.textContent = value;
        row.appendChild(cell);
    });

    target.appendChild(row);
}

const hapus = document.getElementById("hapus");

hapus.addEventListener("click", () => {
    document.getElementById("inputCelcius").value = "";
    document.getElementById("reamur").textContent = "-";
    document.getElementById("fahrenheit").textContent = "-";
    document.getElementById("kelvin").textContent = "-";
});