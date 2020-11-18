/* 
Alunos:  Aurélia Lima
         Tyrone Alô
         Raí Oliveira
         Gustavo Ribeiro
         Gabriel Alves
         Willian Evangelista Silva
*/
function mm1(requisits, capacity, users) {
    function intensidadeTrafego(r, c) {
        let u = r / c
        return u
    }

    function probzero_user(p0) {
        let zero_user = 1 - p0
        if (zero_user < 0)
            return 0
        else
            return zero_user
    }

    function probn_user(p, user, zUser) {
        let n_user = ((p ** user) * zUser)
        return n_user
    }

    function probNouMais(intensidade, user) {
        let more_users = intensidade ** user
        if (more_users > 1) {
            return 1
        }
        return more_users
    }

    function probUmOuMais(intensidade) {
        let more_than_one_users = intensidade ** 1
        return more_than_one_users
    }

    function mediaResposta(intensidade, capacity) {
        let resposta = 1 / (intensidade * capacity)
        return resposta
    }

    function mediaEspera(capacity, zUser) {
        let media = 1 / (capacity * zUser)
        return media
    }

    function mediaUser(intensidade, capacity) {
        let media = intensidade / capacity
        return media
    }

    function mediaFila(usage) {
        let media = (usage ** 2) / usage
        return media
    }

    let usage = intensidadeTrafego(requisits, capacity)
    let zero_user = probzero_user(usage)
    let n_user = probn_user(usage, users, zero_user)
    let more_users = probNouMais(usage, users)
    let more_than_one_users = probUmOuMais(usage)
    let resposta = mediaResposta(usage, capacity)
    let waiting = mediaEspera(capacity, zero_user)
    let media_user1 = mediaUser(usage, capacity)
    let req_fila = mediaFila(usage)

    console.clear()

    console.log("\nResultados:\n")

    console.log("\nValores utilizados:\n" + "Requisitos:" + requisits + "\n" + "Capacidade:" + capacity + "\n" + "Usuários:" + users + "\n")

    console.log("Intensidade = ", parseFloat(usage.toFixed(2)), "%")
    console.log("Probabilidade de nenhum usuário no sistema = ", zero_user, "%")
    console.log("Probabilidade de ", users, "utilizando o sistema: ", parseFloat(n_user * 100).toFixed(2), "%")
    console.log("Probabilidade de ", users, "usuarios ou mais usuários no sistema :", parseFloat((more_users * 100).toFixed(2)), "%")
    console.log("Probabilidade de um ou mais usuarios no sistema: ", parseFloat((more_than_one_users * 100).toFixed(2)), "%")
    console.log("Tempo médio de resposta: ", parseFloat(resposta.toFixed(2)), "s")
    console.log("Tempo médio de espera na fila: ", waiting.toFixed(2), "s")
    console.log("Número médio de usuários: ", parseFloat(media_user1.toFixed(2)), "requisições")
    console.log("Número médio de requisições na fila: ", parseFloat(req_fila.toFixed(2)), "requisições" + "\n")

    return { usage, zero_user, n_user, more_users, more_than_one_users, resposta, waiting, media_user1, req_fila }
}
module.exports = mm1