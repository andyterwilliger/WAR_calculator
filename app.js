let form = document.getElementById('form');
let submit = document.getElementById('submit')
let hits = document.getElementById('hits')
let atBats = document.getElementById('at-bats')
let results = document.getElementById('results')

function handleForm(event){
    event.preventDefault();
  }
form.addEventListener('submit',handleForm)


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
