// Struktur if - else if - else
let nilai = 78;
if (nilai >= 90) {
 console.log('Predikat: A — Sangat Baik');
} else if (nilai >= 80) {
 console.log('Predikat: B — Baik');
} else if (nilai >= 70) {
 console.log('Predikat: C — Cukup');
} else if (nilai >= 60) {
console.log('Predikat: D — Kurang');
} else {
 console.log('Predikat: E — Sangat Kurang');
}
// Output: 'Predikat: C — Cukup'
// Kondisi gabungan dengan operator logika
let umur = 17;
let punyaSIM = false;
if (umur >= 17 && punyaSIM) {
 console.log('Boleh mengemudi');
} else if (umur >= 17 && !punyaSIM) {
 console.log('Cukup umur, tapi belum punya SIM');
} else {
 console.log('Belum cukup umur');
}
// Ternary operator — versi singkat if-else untuk 1 kondisi
let status = (nilai >= 70) ? 'LULUS' : 'TIDAK LULUS';
console.log(status); // 'LULUS'