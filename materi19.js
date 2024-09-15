function ganjilGenap(platNomor) {
    if (platNomor % 2 !== 0) {
        return "Ganjil"; 
    } else {
        return "Genap"; 
    }
}

let platNomor1 = 7;  
let platNomor2 = 8;  

console.log(ganjilGenap(platNomor1)); 
console.log(ganjilGenap(platNomor2));