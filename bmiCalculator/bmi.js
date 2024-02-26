let heigthE = document.getElementById("height");
let weightE = document.getElementById("weight");
let bmiE = document.getElementById("bmi");
let condition = document.getElementById("status");
let submitBtn = document.getElementById("submitBtn");
let spinner = document.getElementById("spinner");
let showResult = document.getElementById("showResult");

submitBtn.addEventListener("click", (event) => {
    event.preventDefault();
    if (heigthE.value === "" || weightE.value === "") {
        alert("Please Enter the Valid Details");
        return;

    };
    let height = parseInt(heigthE.value) / 100;
    let weight = parseInt(weightE.value);
    if (height <= 0 || weight <= 0){
        alert("heigth and weight cannot be less than 0 or Less");
        return;
    }
    spinner.classList.remove("d-none");
    showResult.classList.add("d-none");
    setTimeout(() => {
        spinner.classList.add("d-none");
        
        showResult.classList.remove("d-none");
        let bmi = Math.round(weight / Math.pow(height, 2) * 10) / 10;// multiplied by 10 to get a decimal
        if (bmi < 18.5) {

            condition.textContent = "You are Under Weight!"

        }
        else if (18.5 <= bmi && bmi < 25) {

            condition.textContent = "Your Weight Normal!"

        }
        else if (25 <= bmi && bmi < 40) {

            condition.textContent = "You are Over Weight!"

        }
        else {

            condition.textContent = "You are suffering from Obesity!"

        }
        bmiE.textContent = bmi;
    }, 1000);

    heigthE.value = "" ;
    weightE.value = "" ;



});


