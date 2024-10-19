const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('Nome do Heroi: ', function(nome){
    rl.question('Quantidade de XP do Heroi: ', function(xp) {
        xp = parseInt(xp)
        let nivel = xp <= 1000 ? 'Ferro': 
                xp <= 2000 ? 'Bronze':
                xp <= 5000 ? 'Prata':
                xp <= 7000 ? 'Ouro':
                xp <= 8000 ? 'Platina':
                xp <= 9000 ? 'Radiante':
                xp <= 10000 ? 'Imortal' : 'Radiante'
        console.log(`O Heroi de nome ${nome} está no nivel de ${nivel} `)
        rl.close()
    })
})
