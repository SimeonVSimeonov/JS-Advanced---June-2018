function personalBMI(name, age, w, h) {
    let patient = {
        name: name,
        peresonalInfo: {
            age: age,
            weight: Math.round(w),
            height: Math.round(h),
        },
        BMI: Math.round(w/ (Math.pow(h / 100,2)))
    };

    let status;
    switch (true){
        case patient.BMI < 18.5: status = "underweight"; break;
        case patient.BMI < 25: status = "normal"; break;
        case patient.BMI < 30: status = "overweight"; break;
        case patient.BMI >= 30: status = "obese"; break;
    }
    patient.status = status;
    if(status === "obese"){
        patient.recommendation = "admission required";
    }
    return patient;
}

console.log(personalBMI('Peter', 29, 75, 182));