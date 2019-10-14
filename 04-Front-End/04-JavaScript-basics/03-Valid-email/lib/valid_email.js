const valid = (email) => {
  // TODO: return true if the `email` string has the right pattern!
  const string = email;
  if (string.match(/([\w]+.[\w]+|[\w]+)@[\w]+\.[a-z]{2,3}/)) {
    return true;
  } return false;
};


module.exports = valid; // Do not remove.
