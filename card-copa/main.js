/*let ignite = true
function changeCard(event){

    let card = event.currentTarget
    const bgimage = ignite
    ? "url./images/bg.explorer.svg"
    :"url.images/bg-ignite.svg"
    ignite = !ignite
    card.style.backgroundImage = "url(.images/bg.explorer.svg"
}
*/






let btn = document.getElementById('btn')
btn.addEventListener('click', function(e){
    e.preventDefault()
   
    printNome()
    trilha()
    
})
function printNome(){
    let nome = document.getElementById('nome')
    let nomeTela = document.getElementById('nome-tela')
    nomeTela.innerHTML = nome.value
}
function trilha(){
    let ignite = document.getElementsByClassName('trilha')
    if(trilha[1]=true){
        style.card.backgroundImage = 'bg-ignite.svg'
    } else{
        style.card.backgroundImage='bg.explorer.svg'
    }
    function image(){
        let img = document.getElementById('img')
        let arquivo = document.getElementById('file')
        img.innerHTML = arquivo.value
    }
}