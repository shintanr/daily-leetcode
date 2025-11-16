var getSmallestString = function(n, k) {
    let res = Array(n).fill('a');
    let sisa = k-n;

    let i = n - 1; // ini karena index dimulai dari 0
    while ( sisa > 1 ){ // > 1 karena 1 itu udah a, sedangkan a sudah masuk ke adlam perhitunan
        let tambah = Math.min(25, sisa); // misal ada 40, maka yang ditulis tetap 25, kalo kurang dari maka ditulis sisanya 
        res[i] = String.fromCharCode('a'.charCodeAt(0)+ tambah); // ambil 
        sisa -= tambah;
        i--;
    }
    return res.join('');
};
