const playerArray = [];
function display(){
// console.log(cardPlayersName)
if(playerArray.length <=5){
    const oderList = document.getElementById("player-list")
    const li = document.createElement("li")
    for( let i = 0; i<playerArray.length ; i++){
        li.innerText = `${playerArray[i]}`
        }
        oderList.appendChild(li)
}

else{
    alert('full')
}
}

function addToPlayer(btn){
    const playerName = (btn.parentNode.children[0].innerText);
    // console.log(playerName)
    playerArray.push(playerName)
    display()
    btn.disabled = 'true'
     console.log(playerArray)
}