
//#region 
let score = 0
let basket = 0
let noscore = 25
let noteam = -100
//#endregion


//#region 
function scoreJacob() {
  score++
  document.getElementById('INC').innerText = score
  console.log(score)
}
function scoreJacobDec() {
  noscore++
  document.getElementById('IMCR').innerText = noscore
  console.log(noscore)
}
//#endregion

//#region 
function scoreEdward() {
  basket++
  document.getElementById('INCR').innerText = basket

  // draw()
  console.log(score)
}
function scoreEdwardDec() {
  noteam--
  draw()
  console.log(noteam)
}
//#endregion

function draw() {
  // document.getElementById('INCR').innerText = basket
  document.getElementById('IMC').innerText = noteam
}