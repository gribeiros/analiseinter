
/* 
Alunos:  Aurélia Lima
         Tyrone Alô
         Raí Oliveira
         Gustavo Ribeiro
         Gabriel Alves
         Willian Evangelista Silva
*/
function mmm(m, y, u) {

    let ro = Ro().toFixed(3);
    let p1 = P0().toFixed(3);
    let p2 = Number(Pn()).toFixed(3)
    let p_fila = PFila().toFixed(3);
    let c = C().toFixed(3);
    let e = E().toFixed(3);
    let en = eNW().toFixed(3);
    let es = eNS().toFixed(3);
    let enn = eNW() + eNS();
    let ew = EW().toFixed(3);
    //Exemplo do Slide

    function Ro() {
        return y / (m * u);
    }

    function Pn() {
        if (y < m) {
            return (((m * ro) ** u) / fatorial(u)) * p1;
        } else if (y > m) {
            return (((ro ** y) * (m ** m)) / fatorial(m)) * p1;
        }
    }

    function fatorial(n) {
        let fat;
        for (fat = 1; n > 1; n = n - 1) {
            fat = fat * n;
        }

        return fat;
    }

    function P0() {
        return 1 / (((m * ro) ** m) / (fatorial(m) * (1 - ro)) + soma(ro, m));
    }

    function soma(ro, m) {
        let result = 0;
        for (let n = 0; n < m - 1; n++) {
            let aux;
            aux = ((m * ro) ** n) / fatorial(n);
            result += aux;
        }
        return result;
    }

    function C() {
        return p1 * ((m * ro) ** m) / (fatorial(m) * (1 - p1));

    }

    function E() {
        return (1 / u) * (p1 / (m * (1 - p1)))
    }

    function PFila() {
        return p1 * ((m * ro) ** m) / (fatorial(m) * (1 - ro));
    }

    function eNW() {
        return (ro * p_fila) / (1 - ro)
    }

    function eNS() {
        return (ro * m)
    }

    function EW() {
        return p_fila / (m * u * (1 - ro));
    }

    console.clear()
    console.log("\nResultados:\n")
    console.log('\nRo = ' + ro);
    console.log('\nPn = ' + p2);
    console.log('\nP0 = ' + p1);
    console.log('\nC(m,u) = ' + c);
    console.log('\nE[s] = ' + e);
    console.log('\nP[fila] = ' + p_fila);
    console.log('\nE[nw] = ' + en);
    console.log('\nE[ns] = ' + es);
    console.log('\nE[n] = ' + enn.toFixed(2));
    console.log('\nE[w] = ' + ew + '\n');

    return { ro, p2, p1, c, e, p_fila, en, es, enn, ew }
}

module.exports = mmm