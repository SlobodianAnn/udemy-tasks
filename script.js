let money  = prompt('Ваш бюджет на месяц?');
let time = prompt('Введите дату в формате YYYY-MM-DD');

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    saving: false,
}

let answerExpenses = prompt('Введите обязательную статью расходов в этом месяце', '');
let answerCostExpenses = prompt('Во сколько обойдется?', '');
let answer2Expenses = prompt('Введите обязательную статью расходов в этом месяце', '');
let answer2CostExpenses = prompt('Во сколько обойдется?', '');

appData.expenses.answerExpenses = answerCostExpenses;
appData.expenses.answer2Expenses = answer2CostExpenses;

function detectDayBudget() {
    appData.moneyPerDay = appData.budget / 30;
    alert('Ваш бюджет на месяц состовляет ' + appData.moneyPerDay);
};
detectDayBudget();

function detectLevel(){
    switch(true) {
        case appData.moneyPerDay < 100:
            console.log('Это неплохо');
            break;
        case appData.moneyPerDay >= 100:
            console.log('Это хорошо')
            break;
        case appData.moneyPerDay >= 1000:
            console.log('Это отлично');
            break;
    }
};
detectLevel();

function chooseOptExpenses(){
    for(let i = 1; i < 4; i++){
        let answerOptExpenses = prompt("Статья необязательных расходов?");
        appData.optionalExpenses[i] = answerOptExpenses;
    }
    console.log(appData.optionalExpenses)
};
chooseOptExpenses();

function chooseIncome(){
    let additionalIncome;
    while(additionalIncome == undefined || additionalIncome == null || additionalIncome == ''){
        additionalIncome = prompt("Что принесет дополнительный доход? (Перечислите через запятую)", "");
    }
    appData.income = additionalIncome.split(', ')
    appData.income.forEach(function(incomItem, i){
        alert('Вам приносит доход ' + (i+1) + ' ' + incomItem);
    });
}
chooseIncome();

for (let key in appData){
    console.log('наша прогорамма включает ' + key + ' - ' + appData[key]);
}



