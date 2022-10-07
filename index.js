function penjumlahan(bilanganA, bilanganB) {
  if (typeof bilanganA != "number") {
    return bilanganA + "bukan number";
  } else if (typeof bilanganB != "number") {
    return bilanganB + "bukan number";
  }
  return bilanganA + bilanganB;
}

function penjumlahan_menurun(bilangan) {
    if(typeof bilangan != 'number') {
        return `${bilangan} bukan number`
    } else if (bilangan <= 0) {
        return `${bilangan} wajib positif`
    }
  var hasil = 0;
  for (let i = bilangan; i > 0; i--) {
    hasil += i;
  }
  /*
    i = 3       3 > 0 = true        0 + 3       hasil = 3
    i = 2       2 > 0 = true        3 + 2       hasil = 5
    i = 1       1 > 0 = true        5 + 1       hasil = 6
    i = 0       0 > 0 = false
  */
  return hasil;
}

function pengurangan(bilanganA, bilanganB) {
  return bilanganA - bilanganB;
}

const perkalian = (bilanganA, bilanganB) => bilanganA * bilanganB;

var A = 99;
var B = 40;
var kurang = pengurangan(A, B);

console.log(penjumlahan(10, 20));

console.log("hasil pengurangan dari " + A + " dan " + B + " adalah " + kurang);
console.log(perkalian(10, 5));
console.log(penjumlahan_menurun(-5));
