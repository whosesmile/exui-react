// https://github.com/Marak/faker.js/wiki
/*
  补差价
*/
var faker = require('faker')

module.exports = function() {
  return {
    code: 200,
    data: {
      entity: {
        orderCode: "KH65800011706191530484412",
        shouldPay: "100"
      },
      message: "预约成功"
    }
  };
}
