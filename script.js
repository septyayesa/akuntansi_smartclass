function validasiForm() {
    let nama = document.getElementById("nama").value;
    let email = document.getElementById("email").value;
    let pesan = document.getElementById("pesan").value;

    if (nama === "" || email === "" || pesan === "") {
        alert("Semua kolom wajib diisi!");
        return false;
    }

    alert("Pesan berhasil dikirim. Terima kasih!");
    return true;
}// JavaScript Document
let index = 0;
const slides = document.querySelectorAll(".slide");

function tampilSlide(n) {
    slides.forEach(slide => slide.classList.remove("active"));
    slides[n].classList.add("active");
}

function nextSlide() {
    index++;
    if (index >= slides.length) {
        index = 0;
    }
    tampilSlide(index);
}

function prevSlide() {
    index--;
    if (index < 0) {
        index = slides.length - 1;
    }
    tampilSlide(index);
}
function cekJawaban(id, benar) {
    var hasil = document.getElementById(id);

    if (benar == true) {
        hasil.innerHTML = "Jawaban benar.";
        hasil.style.color = "green";
    } else {
        hasil.innerHTML = "Jawaban salah. Silakan pelajari kembali materinya.";
        hasil.style.color = "red";
    }
}
