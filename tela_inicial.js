

$(document).ready( function() {
    let pagina_inicial = $("#pagina_inicial")
    let jogo = $("#box_jogo")
    let nome1 = $("#name_player1")[0]
    let nome2 = $("#name_player2")[0]
    pagina_inicial.show()
    jogo.hide()
    $("#fim_jogo").hide()
    $("#btn_start").click( function() {
        let input_name1 = $("#player_name_1")[0].value
        let input_name2 = $("#player_name_2")[0].value
        if(input_name1 == "" || input_name2 == ""){
            console.log(input_name1)
            console.log(input_name2)
            alert("Algum jogador está sem nome")
        }else {
            pagina_inicial.hide()
            jogo.show()
            nome1.innerHTML = input_name1
            nome2.innerHTML = input_name2
            $("#jogador_vez")[0].textContent = nome1.innerText
        } 
    })
})