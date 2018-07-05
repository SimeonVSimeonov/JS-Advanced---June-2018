function constructionCrew(worker) {
    if (worker.handsShaking) {
        let addAlcohol = (worker.weight * 0.1) * worker.experience;
        worker.bloodAlcoholLevel += addAlcohol;
        worker.handsShaking = false;
    }
    return worker;
}

console.log(constructionCrew({
        weight: 80,
        experience: 1,
        bloodAlcoholLevel: 8,
        handsShaking: false
    }
));