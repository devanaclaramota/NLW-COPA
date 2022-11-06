let delay= 0.4
function criarCard(date, day, jogos){
    delay= delay + 0.4;
    return`
    <div class="card" style="animation-delay:${delay}s">
            <div class="data" >
                <span>${date}</span>
                <p id="dia"> ${day}</p>
            </div>
            <ul>
                ${jogos}
            </ul>
        </div>
    `
}
function jogos(time1,hora, time2){
    return`
        <li>
         <abbr title="${time1}"><img src="${time1}.svg" alt=""></abbr>   <strong>${hora}</strong> <abbr title="${time2}"><img src="${time2}.svg" alt=""></abbr>
        </li> 
    `

}
document.querySelector('.cards').innerHTML=

   
    
    criarCard('21/11', 'quinta', jogos('brasil', '22:00', 'camaroes') 
    +
    jogos('camaroes' , '00:00' , 'brasil'))
    +
    criarCard('22/11', 'Sexta', jogos('brasil', '16:00', 'camaroes')) +
    criarCard('23/11', 'Sábado', jogos('brasil', '13:00', 'camaroes')) + 
    criarCard('25/11', 'Domingo', jogos('brasil', '20:00' , 'camaroes' ))
    +
    criarCard('22/11', 'Sexta', jogos('brasil', '16:00', 'camaroes')) +
    criarCard('23/11', 'Sábado', jogos('brasil', '13:00', 'camaroes'))
    


        



