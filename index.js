// Meminta input dari pengguna menggunakan prompt
var userInput = prompt("Masukkan sebuah angka:");

// Mengonversi input menjadi bilangan bulat
var angka = parseInt(userInput);

// Memeriksa apakah angka tersebut ganjil atau genap
if (angka % 2 === 0) {
  alert("Angka Genap");
} else {
  alert("Angka Ganjil");
}
