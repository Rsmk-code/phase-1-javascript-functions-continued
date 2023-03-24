// code your solution here
function saturdayFun(activity = 'roller-skate'){
    return `This Saturday, I want to ${activity}!`;
}


function mondayWork(task = 'go to the office'){
    return `This Monday, I will ${task}.`
}


function wrapAdjective(flair = '*'){
    return function(adjective = "special"){
        return `You are ${flair}${adjective}${flair}!`;
    };
}

saturdayFun();
saturdayFun('hang out with friends');
mondayWork();
mondayWork('go to the home');



const encouragingPromotFunction = wrapAdjective("!!!");
encouragingPromotFunction("a dedication programmer");

wrapAdjective("%")("a dedecated programmer");