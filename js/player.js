const playerArray = [];

function display() {
    // console.log(cardPlayersName)
    if (playerArray.length <= 5) {
        const oderList = document.getElementById("player-list")
        const li = document.createElement("li")
        for (let i = 0; i < playerArray.length; i++) {
            li.innerText = `${playerArray[i]}`
        }
        oderList.appendChild(li)
    } else {
        alert('Cannot take more than 5 players')
    }
}

function addToPlayer(btn) {
    const playerName = (btn.parentNode.children[0].innerText);
    // console.log(playerName)
    playerArray.push(playerName)
    display()
    btn.disabled = 'true'
    console.log(playerArray)
}

function stringValue(elementId) {
    const elementValue = document.getElementById(elementId)
    const elementValueString = elementValue.value
    const elementValueNumber = parseFloat(elementValueString)
    elementValue.value = ""
    return elementValueNumber;

}

document.getElementById("calculater").addEventListener('click', function() {
    const player = stringValue('per-player')
    const players = player * playerArray.length
    const playerExpenses = document.getElementById("player-expenses")
    playerExpenses.innerText = players
    player.value = " "
})