let posicoes = [];
for (var i = 0; i < 9; i++) {
    posicoes.push(undefined)
}
console.log(posicoes.indexOf(undefined))
let vez_de_marcar = $("#jogador_vez")[0];
let player1 = [$("#player_name_1")[0], "marcacao_1.png", "x", "jogador_1.png"]
let player2 = [$("#player_name_2")[0], "marcacao_2.png", "o", "jogador_2.png"]
let marcacao = undefined
let vencedor = undefined

function inicio_jogo() { 
    $("#pagina_inicial").hide()
    $("#name_player1")[0].innerHTML = player1[0].value
    $("#name_player2")[0].innerHTML = player2[0].value
    vez_de_marcar.innerHTML = $("#name_player1")[0].value
}

function campo_selecionado(campo){
    return campo[campo.length-1] - 1
}

function troca_vez() {
    if(vez_de_marcar.innerText == player1[0].value) {
        vez_de_marcar.innerHTML = player2[0].value
    }else{
        vez_de_marcar.innerHTML = player1[0].value
    }
}

function verifica_horizontal(){
    if(posicoes[0] == posicoes[1] && posicoes[1] == posicoes[2]){
        if(posicoes[0] != undefined){
            return posicoes[0]
        }else{
            return "not"
        }
    }else if(posicoes[3] == posicoes[4] && posicoes[4] == posicoes[5]){
        if(posicoes[3] != undefined){
            return posicoes[3]
        }else{
            return "not"
        }
    }else if(posicoes[6] == posicoes[7] && posicoes[7] == posicoes[8]){
        if(posicoes[6] != undefined){
            return posicoes[6]
        }else{
            return "not"
        }
    }else {
        return "not"
    }
}

function verifica_vertical(){
    if(posicoes[0] == posicoes[3] && posicoes[3] == posicoes[6]){
        if(posicoes[0] != undefined){
            return posicoes[0]
        }else{
            return "not"
        }
    }else if(posicoes[1] == posicoes[4] && posicoes[4] == posicoes[7]){
        if(posicoes[1] != undefined){
            return posicoes[1]
        }else{
            return "not"
        }
    }else if(posicoes[2] == posicoes[5] && posicoes[5] == posicoes[8]){
        if(posicoes[2] != undefined){
            return posicoes[2]
        }else{
            return "not"
        }
    }else {
        return "not"
    }
}

function verifica_diagonal(){
    if(posicoes[0] == posicoes[4] && posicoes[4] == posicoes[8]){
        if(posicoes[0] != undefined){
            return posicoes[0]
        }else{
            return "not"
        }
    }else if(posicoes[2] == posicoes[4] && posicoes[4] == posicoes[6]){
        if(posicoes[2] != undefined){
            return posicoes[2]
        }else{
            return "not"
        }
    }else{
        return "not"
    }
}

function verifica_vitoria(posicoes){
    let verificador_diag = verifica_diagonal()
    let verificador_horiz = verifica_horizontal()
    let verificador_vert = verifica_vertical()

    if(verificador_diag != "not" || verificador_horiz != "not" || verificador_vert != "not") {
        return true
    }else{
        return false
    }
}

function fim_de_jogo(vencedor, velha){
    $("#box_jogo").hide()
    $("#fim_jogo").show()
    if(velha == "novelha"){
        $("#img_vencedor")[0].srcset = `imagens/${vencedor[3]}`
        $("#nome_vencedor")[0].innerHTML = `<strong>${vencedor[0].value}</strong>`
    }else{
        $("#img_vencedor").hide()
        $('#fim_jogo p').hide()
        $("#nome_vencedor")[0].innerHTML = `<strong>DEU VELHA, não há vencedor!</strong>`
    }
    
}

function insere_simbolo(marcacao, e, posicoes){
    let img = document.createElement("img")
    img.setAttribute("alt", "Marcacao de jogo")
    img.src = `imagens/${marcacao[1]}`
    img.style.width= "80px"
    e.target.appendChild(img)
    posicoes[campo_selecionado(e.target.className)] = marcacao[2]
}


inicio_jogo()
$("td").click((e) => {
    
    if(e.target.children.length == 0 && e.target.tagName == "TD"){
        
        if(vez_de_marcar.innerText == player1[0].value) {
            marcacao = player1
        }else{
            marcacao = player2
        }
        insere_simbolo(marcacao, e, posicoes)
        if(verifica_vitoria(posicoes)){
            vencedor = marcacao
            fim_de_jogo(vencedor, "novelha")
        }else{
            if(posicoes.indexOf(undefined) == -1){
                fim_de_jogo(vencedor, "velha")
            }
            troca_vez()
        }    
    }
})
$("#botao_novo_jogo").click(function () {
    location.reload()
})