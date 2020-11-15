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
        u = r / c
        return u
    }

    function probZeroUser(p0) {
        zeroUser = 1 - p0
        if (zeroUser < 0)
            return 0
        else
            return zeroUser
    }

    function probNUser(p, user, zUser) {
        nUser = ((p ** user) * zUser)
        return nUser
    }

    function probNouMais(intensidade, user) {
        MoreUsers = intensidade ** user
        if (MoreUsers > 1) {
            return 1
        }
        return MoreUsers
    }

    function probUmOuMais(intensidade) {
        moreThanOneUsers = intensidade ** 1
        return moreThanOneUsers
    }

    function mediaResposta(intensidade, capacity) {
        resposta = 1 / (intensidade * capacity)
        return resposta
    }

    function mediaEspera(capacity, zUser) {
        media = 1 / (capacity * zUser)
        return media
    }

    function mediaUser(intensidade, capacity) {
        media = intensidade / capacity
        return media
    }

    function mediaFila(usage) {
        media = (usage ** 2) / usage
        return media
    }

    usage = intensidadeTrafego(requisits, capacity)
    zeroUser = probZeroUser(usage)
    nUser = probNUser(usage, users, zeroUser)
    MoreUsers = probNouMais(usage, users)
    moreThanOneUsers = probUmOuMais(usage)
    resposta = mediaResposta(usage, capacity)
    waiting = mediaEspera(capacity, zeroUser)
    mediaUser1 = mediaUser(usage, capacity)
    reqFila = mediaFila(usage)

    console.clear()

    console.log("\nResultados:\n")

    console.log("\nValores utilizados:\n" + "Requisitos:" + requisits + "\n" + "Capacidade:" + capacity + "\n" + "Usuários:" + users + "\n")

    console.log("Intensidade = ", parseFloat(usage.toFixed(2)), "%")
    console.log("Probabilidade de nenhum usuário no sistema = ", zeroUser, "%")
    console.log("Probabilidade de ", users, "utilizando o sistema: ", parseFloat(nUser * 100).toFixed(2), "%")
    console.log("Probabilidade de ", users, "usuarios ou mais usuários no sistema :", parseFloat((MoreUsers * 100).toFixed(2)), "%")
    console.log("Probabilidade de um ou mais usuarios no sistema: ", parseFloat((moreThanOneUsers * 100).toFixed(2)), "%")
    console.log("Tempo médio de resposta: ", parseFloat(resposta.toFixed(2)), "s")
    console.log("Tempo médio de espera na fila: ", waiting, "s")
    console.log("Número médio de usuários: ", parseFloat(mediaUser1.toFixed(2)), "requisições")
    console.log("Número médio de requisições na fila: ", parseFloat(reqFila.toFixed(2)), "requisições")

    return { usage, zeroUser, nUser, MoreUsers, moreThanOneUsers, resposta, waiting, mediaUser1, reqFila }
}
module.exports = mm1