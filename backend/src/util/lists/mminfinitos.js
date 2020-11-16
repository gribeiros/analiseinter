/* 
Alunos:  Aurélia Lima
         Tyrone Alô
         Raí Oliveira
         Gustavo Ribeiro
         Gabriel Alves
         Willian Evangelista Silva
*/

function mminfinitos(y, u, n, porc) {

    let p_zero = porc / 100;
    let ro = Ro().toFixed(2);
    let pn = Pn().toFixed(5);
    let es = Es().toFixed(2);

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
        return ((ro ** 5) / fatorial(n)) * p_zero;
    }

    function Es() {
        return 1 / u;
    }

    console.clear()
    console.log("\nResultados:\n")
    console.log('\nP = ' + ro)
    console.log('\nPn = ' + pn)
    console.log('\nE[n] = ' + ro)
    console.log('\nE[s] = ' + es)

    return { ro, pn, es }

}
module.exports = mminfinitos