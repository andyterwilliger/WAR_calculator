/*WAR = (Batting Runs + Base Running Runs + Fielding Runs + Positional Adjustment + League Adjustment +Replacement Runs) / (Runs Per Win)



*/

let form = document.getElementById('form');
let submit = document.getElementById('submit')
let wRAA = document.getElementById('wRAA')
let BsR = document.getElementById('BsR')
let uzr = document.getElementById('UZR')
let posAdj = document.getElementById('pos-adj')
let leagueAdj = document.getElementById('league-adj')
let repRuns = document.getElementById('rep-runs')
let results = document.getElementById('results')
let input = document.querySelectorAll('.input')
let rpw = document.getElementById('RPW')
function inputEmpty(){
    for(let i = 0; i < input.length; i++){
        if(input[i].value.length === 0){
            console.log("not long enough")
        }
        if(isNaN(input[i].value)){
            console.log('Not a number')
        }
    }
}

function calculateWAR(){
    let wraaValue = parseFloat(wRAA.value)
    let bsrValue = parseFloat(BsR.value)
    let uzrValue = parseFloat(uzr.value)
    let posAdjValue = parseFloat(posAdj.value)
    let leagueAdjValue = parseFloat(leagueAdj.value)
    let repRunsValue = parseFloat(repRuns.value)
    let rpwValue = parseFloat(rpw.value)
    let WAR = parseFloat(wraaValue + bsrValue + uzrValue + posAdjValue + leagueAdjValue+ repRunsValue)/ parseFloat(rpwValue)
    console.log(WAR.toFixed(1))
}

function handleForm(event){
    event.preventDefault();
    inputEmpty()
    calculateWAR()
  }
form.addEventListener('submit',handleForm)

/*
submit.addEventListener('click', function(){
    //check to see if value is not 0
    if(hits.value.length ===  0 || atBats.value.length === 0){
        console.log("Not a number!")
    } 
    if(isNaN(hits.value) || isNaN(atBats.value)){
        console.log("you are not doing this correctly")
    }
    console.log('hi')
    let avg = hits.value/atBats.value 
    results.textContent =  avg

})
*/