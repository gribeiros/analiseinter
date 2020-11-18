const { stat } = require("fs");
const { exit } = require("process");
const readline = require("readline");
const { start } = require("repl");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const mm1 = require('./mm1')
const mm1b = require('./mm1b')
const mm1k = require('./mm1k')
const mminfinitos = require('./mminfinitos')
const mminfinitok = require('./mminfinitok')
const mmm = require('./MMm')
const mmmb = require('./mmmb')

console.clear()
console.log('Selecione a fila:\n')
console.log(
    '1 - Fila M/M/1 - O Sistema Classico\n' +
    '2 - Fila M/M/m - m-Servidores\n' +
    '3 - Fila M/M/(infinitos) - Infinitos Servidores\n' +
    '4 - Fila M/M/1/B - Capacidade Finita\n' +
    '5 - Fila M/M/m/B - m-Servidores com Capacidade Finita\n' +
    '6 - Fila M/M/1//K - Populacao Finita com um Servidor\n' +
    '7 - Fila M/M/(infinitos)//K - Populacao Finita com Infinitos Servidores\n' +
    '8 - Sair\n')

rl.question('Entre com o numero: ', (number) => {
    console.clear()
    switch (number) {
        case '1'://Fila M/M/1
            rl.question('Requisito :', (req) => {
                rl.question('Capacidade :', (cap) => {
                    rl.question('Usuários :', (user) => {
                        mm1(req, cap, user)
                        rl.close();
                    })
                })
            })
            break;

        case '2'://Fila M/M/m
            rl.question('Servidores :', (m) => {
                rl.question('Requisições por minuto :', (y) => {
                    rl.question('Processamento :', (u) => {
                        mmm(m, y, u)
                        rl.close();
                    })
                })
            })
            break;
        case '3'://Fila M/M/(infinitos)
            rl.question('Chegada de clientes: ', (y) => {
                rl.question('Taxa de serviço: ', (u) => {
                    rl.question('Probabilidade de usuários no servidor: ', (n) => {
                        rl.question('Probabilidade de existir cliente no servidor:', (porc) => {
                            mminfinitos(y, u, n, porc)
                            rl.close();
                        })
                    })
                })
            })

            break;
        case '4'://Fila M/M/1/B
            rl.question('Servidores : ', (m) => {
                rl.question('Pacotes : ', (B) => {
                    rl.question('Capacidade de pacotes por segundo : ', (lamb) => {
                        rl.question('Chegada de pacotes por segundo: ', (u) => {
                            rl.question('As probabilidades de n usuários no Sistema : ', (n) => {
                                mm1b(m, B, lamb, u, n)
                                rl.close();
                            })
                        })
                    })
                })
            })
            break;
        case '5'://Fila M/M/m/B
            rl.question('Servidores : ', (m) => {
                rl.question('Pacotes : ', (B) => {
                    rl.question('pacotes enviados: ', (lambda) => {
                        rl.question('Chegada de pacotes por segundo: ', (u) => {
                            rl.question('As probabilidades de n usuários no Sistema : ', (n) => {
                                mmmb(parseInt(m), parseInt(B), parseInt(lambda), parseInt(u), parseInt(n))

                                rl.close();
                            })
                        })
                    })
                })
            })

            break;
        case '6'://Fila M/M/1//K
            rl.question('Servidores : ', (m) => {
                rl.question('Requisições : ', (lambda) => {
                    rl.question('Chegada de pacotes por hora : ', (u) => {
                        rl.question('Usuários : ', (K) => {
                            rl.question('Numero de requisições na fila : ', (n) => {
                                mm1k(m, lambda, u, K, n)
                                rl.close();
                            })
                        })
                    })
                })
            })
            break;
        case '7'://Fila M/M/(infinitos)//K
            rl.question('Taxa media de requisição: ', (lambda) => {
                rl.question('Total de usuário no banco: ', (u) => {
                    rl.question('Limite de requisições: ', (K) => {
                        rl.question('Probabilidade de usuários no servidor:', (n) => {
                            mminfinitok(lambda, u, K, n)
                            rl.close();
                        })
                    })
                })
            })

            break;
        case '8':
            console.log('Saindo');
            break;
        default:
            console.log('Opção nao e valida\n')

    }
})
