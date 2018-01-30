// https://github.com/Marak/faker.js/wiki
var faker = require('faker')
module.exports = function() {
  return {
    code: 200,
    data: {
      entity: {
        autoFinishTime: 0,
        business: "KH",
        cityName: "中陲",
        complainStatus: 0,
        consigneeAddress: "中陲省-中陲-朝阳区-长楹天街-千丁互联-1-8888",
        consigneeMobile: "18600656670",
        consigneeName: "凤凰花",
        cprice: 1,
        createAt: 1497857449353,
        deliveryStatus: 0,
        desc: "<p>阿萨德发撒的发骄傲圣诞节疯狂老师的家乐福卡就是打开了房间啊速度离开房间啊身份卡就是打开啦就是的空间都是坑垃圾罚款来说</p>",
        figure: "https://img1.qdingnet.com/image-484f4081-d358-4a3d-bf9a-01dc825255bf.png",
        imgs: "[{url:https: //img1.qdingnet.com/image-484f4081-d358-4a3d-bf9a-01dc825255bf.png}]",
        isShowCancelBtn: false,
        isShowComplainBtn: false,
        isShowConfirmFinishBtn: false,
        isShowFixPriceBtn: false,
        isShowPaymentBtn: true,
        isShowPremiumBtn: false,
        isShowServiceTime: 1,
        lowPrice: 100,
        needExpress: 1,
        num: 1,
        orderCode: "KH65800011706191530484412",
        orderStatus: 101,
        payStatus: 101,
        price: 100,
        priceStatus: 0,
        priceType: 0,
        productId: "44f79daf519311e78d7b44a8421ae0af",
        projectName: "千丁互联",
        promotionList: [],
        serviceStartTime: 1497857400000,
        serviceTime: "8点-20点",
        showImg: [{ url: "https://img1.qdingnet.com/image-484f4081-d358-4a3d-bf9a-01dc825255bf.png" }],
        skuId: 17408,
        specValue: "[2017, SL]",
        title: "虚拟券",
        totalPrice: 100,
        totalRealPrice: 100,
        totalShouldPrice: 100,
        upPrice: 100,
        userOrderStatus: "未知状态"
      },
      project: {
        cityId: "23",
        cityName: "中陲",
        concats: [{ address: "千丁互联1", id: "249", phone: "40008700199", phones: ["40008700199", "40008700177", "40008700666"], postCode: "千丁互联", type: "1" }],
        distance: "",
        districtId: 2839,
        districtName: "测试中陲区1",
        groups: [{ groupCode: "1", groupName: "15" }, { groupCode: "2", groupName: "14" }],
        id: "1789",
        isDemo: 0,
        isRent: 1,
        name: "千丁互联",
        provinceId: 35,
        provinceName: "中陲省",
        streetInfo: "长楹天街"
      }
    },
  };
};
