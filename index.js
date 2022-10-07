function penjumlahan (bilanganA,bilanganB) {
    return bilanganA + bilanganB    
}

function pengurangan (bilanganA, bilanganB){
    return bilanganA - bilanganB;
}


var A = 99;
var B = 40;
var kurang = pengurangan(A, B);

console.log (penjumlahan (10,20))

console.log ("hasil pengurangan dari "+ A + " dan " + B + " adalah " + kurang);