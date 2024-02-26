
let birthDateE1 = document.getElementById("birthDate");
let checkBtn = document.getElementById("checkBtn");
let result = document.getElementById("result");

checkBtn.onclick = () => {
    if(birthDateE1.value === ""){
        alert("Enter the valid Input");
        return;
    }
    let now = new Date();
    let birthDate = new Date(birthDateE1.value);
    let time = now - birthDate;
    if(time < 0){
        alert("Date of Birth Cannot be in Future!");
        return;
    }
    
    result.classList.remove("d-none");

    //years
    let years = Math.floor(time / (365 * 24 * 3600 * 1000));
    let remaining = time % (365 * 24 * 3600 * 1000);

    //weeks
    let weeks = Math.floor(remaining / (7 * 24 * 3600 * 1000));
    remaining = remaining % (7 * 24 * 3600 * 1000);

    // days
    let days = Math.floor(remaining / (24 * 3600 * 1000));
    remaining = remaining % (24 * 3600 * 1000);

    let yearsE = document.getElementById("years");
    let weeksE = document.getElementById("weeks");
    let daysE = document.getElementById("days");
    let tipE = document.getElementById("tip");

    if(years < 13){
        tipE.textContent = "You are a Child!";

    }else if (13 <= years && years < 18){
        tipE.textContent = "You are a Teenager!";

    }else{
        tipE.textContent = "You are an Adult!";
    }

    yearsE.textContent = years;
    weeksE.textContent = weeks;
    daysE.textContent = days;



}

