let angka = [1, 46, 75, 12, 89, 54, 101];
let ganjil = [];

for (let num of angka) {
    if (num % 2 !== 0) {
        ganjil.push(num); 
    }
}

console.log(ganjil);