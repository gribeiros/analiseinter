
/* 
Alunos:  Aurélia Lima
		 Tyrone Alô
		 Raí Oliveira
		 Gustavo Ribeiro
		 Gabriel Alves
		 Willian Evangelista Silva
*/

function mm1b(m, B, lamb, u, n) {

	let ro = Ro(lamb, u);
	let lambNN = taxaServConst(lamb, m, B);
	let pb = pB(ro, B);
	let lamb1 = taxaPerda(lamb, pb);
	let pZero = p0(ro, B);
	let pN = Pn(ro, m, B);
	let u1 = U(ro, pb);
	let en = En(ro, B);
	let enW = EnW(ro, B);
	let es = Es(en, lamb, ro, pb);
	let ew = Ew(enW, lamb, pb);

	function Ro(lamb, u) {
		return lamb / u;
	}

	function taxaServConst(lamb, n, B) {
		if (n < B) {
			return lamb;
		} else if (n >= B) {
			return 0;
		}
	}

	function pB(ro, B) {
		b = B + 1;
		return (((1 - ro) / (1 - (ro ** b))) * (ro ** B));
	}

	function taxaPerda(lamb, pb) {
		return lamb * pb;
	}

	function p0(ro, B) {
		b = B + 1;
		return ((1 - ro) / (1 - (ro ** b)));
	}

	function Pn(ro, m, B) {
		b = B + 1;
		return ((1 - ro) / (1 - (ro ** b)) * ro ** m);
	}

	function U(ro, pb) {
		return ro * (1 - pb);
	}

	function En(ro, B) {
		b = B + 1;
		return ((ro) / (1 - ro)) - (((B + 1) * (ro ** b)) / 1 - (ro ** b));
	}

	function EnW(ro, B) {
		b = B + 1;
		return (((ro) / (1 - ro)) - ro * ((1 + B * (ro ** B)) / (1 - (ro ** b))));
	}

	function Es(En, lamb, ro, pb) {
		return ((En) / (lamb * (1 - pb)));
	}

	function Ew(EnW, lamb, pb) {
		return ((EnW) / (lamb * (1 - pb)));
	}


	console.clear();
	console.log("\nResultados:\n")
	console.log("ρ = " + ro.toFixed(2));
	console.log("Taxa de Serviço Constante: " + lambNN);
	console.log("pB =  " + pb.toFixed(2));
	console.log("Taxa de Perda (λ´):" + lamb1.toFixed(2));
	console.log("P0 = " + pZero.toFixed(2));
	console.log("Pn = " + pN.toFixed(2));
	console.log("Utilização = " + u1.toFixed(2));
	console.log("E[n] = " + en.toFixed(2) + " usuarios no sistema");
	console.log("E[nw] = " + enW.toFixed(2) + " media de user no sistema");
	console.log("E[s] = " + es.toFixed(2) + " tempo medio de resposta");
	console.log("E[w] = " + ew.toFixed(2) + " tempo medio de espera");

}
module.exports = mm1b