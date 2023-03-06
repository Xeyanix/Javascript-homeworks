const financialData = require("./financial.json");

function MoneySpentIn2014() {
  return financialData.reduce((sum, currentPayment) => {
    if (currentPayment.detailsOfPayent.date.includes("2014")) {
      const currentCost = +currentPayment.cost;
      sum += currentCost;
    }
      return +sum.toFixed(2);
  }, 0);
  return MoneySpent;
}
console.log("Money spent in 2014: ", MoneySpentIn2014());

function EarningsPerCompany() {
  const EarningsObject = financialData.reduce((acc, currentPayment) => {
    const currentCompany = currentPayment.detailsOfPayent.company;
    const currentCost = +currentPayment.cost;
    if (acc[currentCompany] === undefined) {
      acc[currentCompany] = 0;
    }
    acc[currentCompany] += currentCost;
    return acc;
  }, {});
  return EarningsObject;
}

console.log("Earnings Per Company: ", EarningsPerCompany());

function SpendingsPerType() {
  const TypeObject = financialData.reduce((acc, currentPayment) => {
    const currentCompany = currentPayment.detailsOfPayent.Type;
    const currentCost = +currentPayment.cost;
    if (acc[currentCompany] === undefined) {
      acc[currentCompany] = 0;
    }
    acc[currentCompany] += currentCost;
    return acc;
  }, {});
  return TypeObject;
}
console.log("Spendings Per Type: ", SpendingsPerType());


function SpendingsByMonth() {
  return financialData.reduce((spendingsPerMonth, currentPayment) => {
    const currentMonth = currentPayment.detailsOfPayent.date.split('-')[1];
    const currentCost = +currentPayment.cost;
    if (spendingsPerMonth[currentMonth] === undefined) {
      spendingsPerMonth[currentMonth] = 0;
    }
    spendingsPerMonth[currentMonth] += currentCost;
    return spendingsPerMonth;
  }, {});
}
console.log("Spendings By Month: ", SpendingsByMonth());


function getSpendingsPerWeekday() {
  return financialData.reduce((spendingsPerMonth, currentPayment) => {
    const dateSplit = currentPayment.detailsOfPayent.date.split('-');
    const dateObject = new Date(
      +dateSplit[2],
      +dateSplit[1] - 1,
      +dateSplit[0]
    );
    const dayOfWeek = dateObject.getDay();
    const currentCost = +currentPayment.cost;
    if (spendingsPerMonth[dayOfWeek] === undefined) {
      spendingsPerMonth[dayOfWeek] = 0;
    }
    spendingsPerMonth[dayOfWeek] += currentCost;
    return spendingsPerMonth;
  }, {});
}
console.log("Spendings Per Weekday: ", getSpendingsPerWeekday());