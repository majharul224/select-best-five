document.getElementById("total-calculate").addEventListener('click', function() {
    // maneger field
    const managerBalnceField = document.getElementById("manager-field")
    const managerBalnceString = managerBalnceField.value
    const managerBalnce = parseFloat(managerBalnceString)
    managerBalnceField.value = " "

    // corse field

    const coachBalnceField = document.getElementById("coach-field")
    const coachBalnceString = coachBalnceField.value
    const coachBalnce = parseFloat(coachBalnceString);

    if (Number.isNaN(managerBalnce) == true || Number.isNaN(coachBalnce) == true) {
        alert("please input number in manager and coach")
    }


    coachBalnceField.value = " "
    const playerExpenses = document.getElementById("player-expenses").innerHTML;

    // total calcoleter

    const totalBalance = parseFloat(playerExpenses) - (parseFloat(managerBalnceString) + parseFloat(coachBalnceString));
    document.getElementById("total").innerHTML = totalBalance

})