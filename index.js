function penjumlahan (bilanganA,bilanganB) {
    if(typeof bilanganA != "number"){
        return  bilanganA+"bukan number"
    }
    else if(typeof bilanganB != "number"){
        return bilanganB+"bukan number"
    }
    return bilanganA + bilanganB    
}

function pengurangan (bilanganA, bilanganB){
    return bilanganA - bilanganB;
}

const perkalian = (bilanganA, bilanganB) => bilanganA*bilanganB


var A = 99;
var B = 40;
var kurang = pengurangan(A, B);

console.log (penjumlahan (10,20))

console.log ("hasil pengurangan dari "+ A + " dan " + B + " adalah " + kurang);
console.log (perkalian(10,5));
