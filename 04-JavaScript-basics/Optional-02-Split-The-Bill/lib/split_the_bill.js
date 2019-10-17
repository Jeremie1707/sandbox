const splitTheBill = (group) => {
  // TODO: implement the function and return an Object
let totalSpending = 0;
  let numberMember = 0;
  Object.keys(group).forEach((member) => {
    totalSpending += group[member];
    numberMember += 1;
  });
  const spendingAverage = totalSpending / numberMember;
  Object.keys(group).forEach((member) => {
    group[member] -= spendingAverage;
  });
  return group;
};


module.exports = splitTheBill; // Do not remove this line.
