document.getElementById('calculate-btn').addEventListener('click', function(){
    let h = parseFloat(document.getElementById('height').value);
    let w = parseFloat(document.getElementById('weight').value);

    // validation

    if(isNaN(h) || isNaN(w) || h<=0 || w <=0){
        document.getElementById('result').innerText = "Please enter valid numbers!";
        return;
    }
    let result = bmi(h,w);

    document.getElementById('result').innerText = `Your BMI Category: ${result}`;
});

function bmi(height, weight){
    let h1 = (height * height) / 10000;
    let bmi = weight / h1;

    
    return BMI(bmi);
}

function BMI(bmi){
    if(bmi < 18.5){
        return "Underweight";
    }else if(bmi >= 18.5 && bmi <= 24.9){
        return "Healthy Weight";
    }else if(bmi >= 25.0 && bmi <= 29.9){
        return "Overweight";
    }else {
        return "Obesity";
    }
}