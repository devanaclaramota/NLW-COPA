let ignite = true
function changeCard(event){

    let card = event.currentTarget
    const bgimage = ignite
    ? "url./images/bg.explorer.svg"
    :"url.images/bg-ignite.svg"
    ignite = !ignite
    card.style.backgroundImage = "url(.images/bg.explorer.svg"
}