class validate{
  check(type, realType) {
    return realType.find(real => real.type === type);
  }
}
module.exports = validate;