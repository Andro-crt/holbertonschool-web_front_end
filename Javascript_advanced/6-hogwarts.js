#!/usr/bin/node

const studentHogwarts = () => {
    let privateScore = 0;
    let name = null;
    let changeScoreBy = points => privateScore += points;

    let setName = newName => name = newName;
    let rewardStudent = () => changeScoreBy(1);
    let penalizeStudent = () => changeScoreBy(-1);
    let getScore = () => `${name}: ${privateScore}`;

    return {
        setName,
        rewardStudent,
        penalizeStudent,
        getScore
    }
};

const harry = studentHogwarts();
Harry.setName("Harry");
Harry.rewardStudent();
Harry.rewardStudent();
Harry.rewardStudent();
Harry.rewardStudent();

const draco = studentHogwarts();
Draco.setName("Draco");
Draco.rewardStudent();
Draco.penalizeStudent();
Draco.penalizeStudent();
Draco.penalizeStudent();
