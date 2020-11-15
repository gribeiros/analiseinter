
/* 
Alunos:  Aurélia Lima
		 Tyrone Alô
		 Raí Oliveira
		 Gustavo Ribeiro
		 Gabriel Alves
		 Willian Evangelista Silva
*/

function mminfinitok(lambda, u, K, n) {


    const lambdaN = lambN();
    const un = Un();
    const ro = RO();
    const en = EN();


    function lambN() {
        if (0 <= n < K) {
            return lambda * (K - n)
        } else if (n > K) {
            return 0
        }
    }

    function Un() {
        return n * u;
    }

    function RO() {
        return (K * lambda) / 1 + (lambda / u)
    }

    function EN() {
        return K * (lambda / u) / 1 + (lambda * u)
    }

    console.clear()
    console.log("\nResultados:\n")
    console.log('Lambda N: ', lambdaN.toFixed(2));
    console.log('Un: ', un.toFixed(2));
    console.log('Intensidade de tráfego: ', ro.toFixed(2));
    console.log('Clientes no sistema: ', en.toFixed(2));
}

module.exports = mminfinitok