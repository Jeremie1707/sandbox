const ageInDays = (day, month, year) => {
  // TODO: Implement the method and return an integer
  const ageDays = Math.round(((Date.now() - new Date(year, (month - 1), day)) / 86400000));
  console.log(ageDays);
  return ageDays;
};

module.exports = ageInDays; // Do not remove. We need this for the spec to know about your method.
