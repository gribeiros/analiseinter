
/* 
Alunos:  Aurélia Lima
         Tyrone Alô
         Raí Oliveira
         Gustavo Ribeiro
         Gabriel Alves
         Willian Evangelista Silva
*/


function mmmb(m, B, lambda, u, n) {
    const uN = valorUn();
    const lambdaN = taxaServConst();
    const ro = Ro();
    const p0 = pZero();
    const pb = pB();
    const U = Uf();
    const lambda_l = taxaEfetividade();
    const pn = Pn();
    const en = En();
    const enw = enW();
    const ew = eW();
    const es = eS();
    const loss = taxaPerda();

    console.clear()

    function valorUn(m) {
        if (n <= m - 1) {
            return n * u
        }
        else if (n >= B) {
            return m * u
        }
    }

    function taxaServConst(lambda, m, B) {
        if (n < B) {
            return lamb;
        } else if (n >= B) {
            return 0;
        }
    }

    function pZero() {
        const a = B - m + 1
        return 1 / ((1 + (1 - ro ** a * (m * ro) ** m) / fatorial(m) * (1 - ro)) + soma(ro, m))
    }


    function Ro() {
        return lambda / (m * u)
    }

    function Uf() {
        return ro * (1 - pb)
    }

    function taxaEfetividade() {
        return lambda * (1 - pb)
    }

    function taxaPerda() {
        return lambda * pb
    }

    function En() {
        let result = 0;
        for (let n = 1; n < B; n++) {
            result += n * pn
        }
        return result;
    }

    function enW() {
        let result = 0;
        for (let n = 1 + m; n < B; n++) {
            result += (n - m) * pn
        }
        return result;
    }

    function eS() {
        return en / lambda * (1 - pb)
    }

    function eW() {
        return enw / lambda * (1 - pb)
    }

    function Pn() {
        if (n < m) {
            return (((lambda / u) ** n) * (1 / fatorial(n))) * p0
        }
        else if (m <= B) {
            return ((m ** m / fatorial(m)) * ((lambda / u) ** n)) * p0
        }
    }

    function pB() {
        return ((m ** m / fatorial(m)) * ((lambda / u) ** n)) * p0
    }

    function fatorial(n) {
        let fat;
        for (fat = 1; n > 1; n = n - 1) {
            fat = fat * n;
        }

        return fat;
    }


    function soma(ro, m) {
        let result = 0;
        for (let n = 1; n < m - 1; n++) {
            let aux;
            aux = ((m * ro) ** n) / fatorial(n);
            result += aux;
        }
        return result;
    }


    console.log("ρ = ", ro.toFixed(5))
    console.log("p0 = ", p0.toFixed(5))
    console.log("pB = ", pb.toFixed(5))
    console.log("Pn = ", pn.toFixed(5))
    console.log("Taxa de Perda = ", loss.toFixed(5))
    console.log("Taxa de chegada (λ´)= ", lambda_l.toFixed(5))
    console.log("E[n] = ", en.toFixed(5), "usuarios medio no sistema")
    console.log("E[nw] = ", enw.toFixed(5), "média de usuários na fila")
    console.log("E[s] = ", es.toFixed(5), " média de resposta")
    console.log("E[w] = ", ew.toFixed(5), "média de espera")

    return { ro, p0, pb, pn, loss, en, enw, es, ew }
}

module.exports = mmmb