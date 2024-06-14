// register.js
let participantCount = 1;
import {participentTemplate, successTemplate} from "./templates.js"

function submitForm(event) {
    event.preventDefault();
    // write code here
    const adultName = document.getElementById("adult_name").value;
    const totalFee = totalFees();

    const info = {
        adultName,
        participantCount,
        totalFee
    };

    // hide form, show summary
    document.querySelector("form").style.display = "none";
    document.getElementById("summary").innerHTML = successTemplate(info);
}

function totalFees() {
    let feeElements = document.querySelectorAll("[id^=fee]");
    console.log(feeElements);
    feeElements = [...feeElements];
    // sum up all of the fees. could use Array.reduce or Array.forEach
    let totalFee = 0
    // text entered will be found using .value
    feeElements.forEach(element => {
        const fee = parseFloat(element.value) || 0;
        totalFee += fee;
    });
    // return total
    return totalFee;
}

document.getElementById("add").addEventListener("click", function () {
    participantCount++;
    const addButton = document.getElementById("add");
    const newParticipant = participentTemplate(participantCount);
    addButton.insertAdjacentHTML('beforebegin', newParticipant);

    const firstParticipant = document.querySelector(".participant1");
    if (firstParticipant) {
        firstParticipant.classList.remove("full-width")
    }
});

document.querySelector("form").addEventListener("submit", submitForm);