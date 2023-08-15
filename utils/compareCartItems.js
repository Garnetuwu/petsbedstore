import _ from "lodash";

const compareCartItems = function (obj1, obj2) {
  return _.reduce(
    obj1,
    function (result, value, key) {
      if (_.isPlainObject(value)) {
        result[key] = diff(value, obj2[key]);
      } else if (!_.isEqual(value, obj2[key])) {
        result[key] = value;
      }
      return result;
    },
    {}
  );
};

export default compareCartItems;
