
/* 
Alunos:  Aurélia Lima
		 Tyrone Alô
		 Raí Oliveira
		 Gustavo Ribeiro
		 Gabriel Alves
		 Willian Evangelista Silva
*/

function mm1k(m, lambda, u, K, n) {

    const un = u;
    const p0 = P0();
    const ro = RO();
    const lambdan = lambN();
    const pn = pN();
    const enw = ENW();
    const en = EN();
    const uti = U();
    const lambdal = lambdaL();
    const ew = EW()
    const es = ES();

    function RO() {
        return lambda / u;
    }

    function lambN() {
        if (0 <= n <= K) {
            return lambda * (K - n)
        }
        else if (n > K) {
            return 0
        }
    }

    function pN() {
        if (0 <= n <= K) {
            return ((lambda / u) ** n) * (fatorial(K) / fatorial(K - n)) * p0
        }
        else if (n > K) {
            return 0;
        }
    }

    function P0() {
        return 1 / soma(K, lambda, u)
    }

    function U() {
        return ro * (K - en);
    }

    function fatorial(n) {
        let fat;
        for (fat = 1; n > 1; n = n - 1) {
            fat = fat * n;
        }

        return fat;
    }

    function ENW() {
        return K - (lambda - u / lambda) * (1 - p0)
    }

    function EN() {
        return enw + (1 - p0)
    }

    function EW() {
        return enw / lambda * (K - en);
    }

    function ES() {
        return ew + (1 / u)
    }

    function lambdaL() {
        return u * (1 - p0)
    }

    function soma() {
        let result = 0;
        for (let n = 0; n < K; n++) {
            result += ((lambda / u) ** n) * (fatorial(K) / fatorial((K - n)))
        }
        return result;
    }

    console.clear()
    console.log("\nResultados:\n")
    console.log('p', ro.toFixed(2))
    console.log('p0: ', p0.toFixed(4))
    console.log('E[nw]: ', enw.toFixed(2))
    console.log('Lambda N: ', lambdan)
    console.log('Utilização: ', uti.toFixed(2))
    console.log('Lambda L: ', lambdal.toFixed(2))
    console.log('E[w]: ', ew.toFixed(2))
    console.log('En: ', en.toFixed(2))
    console.log('Pn: ', pn.toFixed(2))
    console.log('E[nw]: ', enw.toFixed(2))
}

module.exports = mm1k