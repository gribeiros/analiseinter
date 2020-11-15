/* 
Alunos:  Aurélia Lima
         Tyrone Alô
         Raí Oliveira
         Gustavo Ribeiro
         Gabriel Alves
         Willian Evangelista Silva
*/

function mminfinitos(y, u, n, porc) {

    let p0 = porc / 100;
    let ro = Ro().toFixed(2);
    let pN = Pn().toFixed(5);
    let eS = Es().toFixed(2);

    function Ro() {
        return y / u;
    }

    function fatorial(n) {
        let fat;
        for (fat = 1; n > 1; n = n - 1) {
            fat = fat * n;
        }

        return fat;
    }

    function Pn() {
        return ((ro ** 5) / fatorial(n)) * p0;
    }

    function Es() {
        return 1 / u;
    }

    console.clear()
    console.log("\nResultados:\n")
    console.log('\nP = ' + ro)
    console.log('\nPn = ' + pN)
    console.log('\nE[n] = ' + ro)
    console.log('\nE[s] = ' + eS)
}
module.exports = mminfinitos