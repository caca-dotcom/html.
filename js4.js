// switch cocok ketika satu variabel dibandingkan ke banyak nilai
let hari = 'Senin';
switch (hari) {
 case 'Senin':
 case 'Selasa':
 case 'Rabu':
 case 'Kamis':
 case 'Jumat':
 console.log('Hari kerja — sekolah!');
 break; // PENTING: hentikan eksekusi agar tidak lanjut ke case 
berikutnya
 case 'Sabtu':
 console.log('Sabtu — ekskul atau les!');
 break;
 case 'Minggu':
 console.log('Minggu — libur!');
 break;
 default:
 console.log('Nama hari tidak valid');
}
// Output: 'Hari kerja — sekolah!'
// Tanpa break, eksekusi akan 'jatuh' ke case berikutnya (fall-through)
// Ini kadang dimanfaatkan untuk mengelompokkan case (seperti Senin-Jumat di atas)