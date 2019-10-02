const absoluteNumber = a => {
  return a >= 0 ? a : -a;
};

const nameAndAge = (name, age) => {
  return ` my name is ${name} and my age is ${age}`;
};

const countries = () => {
  return ["Tunisia", "Germany", "Japan"];
};

const getUser = (id, name) => {
  return { id, name, isNice: true };
};

const throwAnErrorIfStrictNegative = val => {
  if (val < 0) throw new Error("this is an error");
};

module.exports.absoluteNumber = absoluteNumber;
module.exports.nameAndAge = nameAndAge;
module.exports.countries = countries;
module.exports.getUser = getUser;
module.exports.throwAnErrorIfStrictNegative = throwAnErrorIfStrictNegative;
