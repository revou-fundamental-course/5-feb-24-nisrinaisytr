const celcius = document.getElementById("celcius");
const fahrenheit = document.getElementById("fahrenheit");
const carakalkulasi = document.getElementById("carakalkulasi");
const konversiBtn = document.getElementById("konversi-btn");
const resetBtn = document.getElementById("reset-btn"); // Menambahkan referensi ke tombol reset
const reverseBtn = document.getElementById("reverse-btn");

let isCelsiusToFarhenheit = true; // Menyimpan arah konversi

window.addEventListener("load", () => {
    celcius.value = "";
    fahrenheit.value = ""; // Mengatur nilai input Fahrenheit menjadi kosong saat halaman dimuat
    carakalkulasi.textContent = ""; // Mengatur teks cara kalkulasi menjadi kosong saat halaman dimuat
});

konversiBtn.addEventListener("click", (e) => {
    e.preventDefault();
    konversi();
});

resetBtn.addEventListener("click", (e) => {
    e.preventDefault();
    resetInputs();
});

reverseBtn.addEventListener("click", (e) => {
    e.preventDefault();
    toggleKonversi();
});

function konversi() {
    let inputValue = parseFloat(celcius.value);
    if (!isNaN(inputValue)) {
        if (isCelsiusToFarhenheit) {
            let fahrenheitValue = (inputValue * 9 / 5) + 32;
            fahrenheit.value = fahrenheitValue.toFixed(2);
            carakalkulasi.textContent = `Rumus: (${inputValue}°C × 9/5) + 32 = ${fahrenheitValue.toFixed(2)}°F`;
        } else {
            let celciusValue = (inputValue - 32) * 5 / 9;
            celcius.value = celciusValue.toFixed(2);
            carakalkulasi.textContent = `Rumus: (${inputValue}°F - 32) × 5/9 = ${celciusValue.toFixed(2)}°C`;
        }
    } else {
        alert("Masukkan nilai suhu Celsius yang valid.");
    }
}

        
    var inputLabel = isCelsiusToFarhenheit ? '°C' : '°F';
    var outputLabel = isCelsiusToFarhenheit ? '°F' : '°C';
    var kalkulasi = `(${inputRounded}${inputLabel} ${isCelsiusToFarhenheit ? '× 9/5) + 32' : '- 32) × 5/9'} = ${outputValue}${outputLabel}`;

    document.getElementById("output").value = outputValue;
    document.getElementById("output_carakalkulasi").value = kalkulasi;


   

function resetInputs() {
    celcius.value = ""; // Mengatur nilai input suhu Celsius menjadi kosong saat tombol reset ditekan
    fahrenheit.value = ""; // Mengatur nilai input suhu Fahrenheit menjadi kosong saat tombol reset ditekan
    carakalkulasi.textContent = ""; // Mengatur teks cara kalkulasi menjadi kosong saat tombol reset ditekan
}

function toggleKonversi() {
    isCelsiusToFarhenheit = !isCelsiusToFarhenheit; // Toggle nilai antara true dan false
    if (isCelsiusToFarhenheit) {
        celcius.placeholder = " input number";
        fahrenheit.placeholder = "Hasil Fahrenheit (°F)";
        carakalkulasi.textContent = "Rumus: (°C × 9/5) + 32 = °F";
    } else {
        celcius.placeholder = " input number";
        fahrenheit.placeholder = "Hasil Celsius (°C)";
        carakalkulasi.textContent = "Rumus: (°F - 32) × 5/9 = °C";
    }
}
