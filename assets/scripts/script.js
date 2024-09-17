// Array sumber gambar
const images = [
  "assets/image/Kota-Pekanbaru-1.jpg",
  "assets/image/Kota-Pekanbaru-2.png",
];

// Indeks gambar awal
let currentIndex = 0;

// Dapatkan elemen gambar
const slider = document.getElementById("slider");

// Berfungsi untuk menampilkan gambar berdasarkan index
function showImage(index) {
  slider.src = images[index];
}

// Menampilkan gambar selanjutnya
function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
}

// Menampilkan gambar sebelumnya
function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
}

// Mengatur event listeners untuk tombol
document.getElementById("next").addEventListener("click", nextImage);
document.getElementById("prev").addEventListener("click", prevImage);

// Geser otomatis (interval 5 detik).
setInterval(nextImage, 5000);

// Mengambil elemen dengan id "currentYear" dan mengisi dengan tahun saat ini
document.getElementById("currentYear").textContent = new Date().getFullYear();
