/*
  立即预约
*/
var faker = require('faker')

module.exports = function() {
  return {
    code: 200,
    data: {
      goods: {
        businessNo: 'CS',
        categoryCode: 'LZ',
        figure: "https://img1.qdingnet.com/image-484f4081-d358-4a3d-bf9a-01dc825255bf.png",
        id: "44f79daf519311e78d7b44a8421ae0af",
        isShowServiceTime: 1,
        isSpecification: 1,
        pageType: 0,
        pageUrl: "",
        price: "1.00",
        priceRange: "",
        priceType: 1,
        productImg: ["https://img1.qdingnet.com/image-37e73979-b92c-4f2b-a2fc-e89af0051bea.png"],
        projectRanges: [{ projectId: "1789", projectName: "千丁互联" }, { projectId: "76", projectName: "北京好望山" }],
        serviceDetail: "<p>阿萨德发撒的发骄傲圣诞节疯狂老师的家乐福卡就是打开了房间啊速度离开房间啊身份卡就是打开啦就是的空间都是坑垃圾罚款来说</p>",
        serviceStandard: "的",
        serviceTime: "8点-20点",
        servictType: 0,
        showImg: [{ url: "https://img1.qdingnet.com/image-484f4081-d358-4a3d-bf9a-01dc825255bf.png" }],
        url: "https://img1.qdingnet.com/image-484f4081-d358-4a3d-bf9a-01dc825255bf.png",
        status: 1,
        subTitle: "订单",
        title: "订单详情",
        unit: "元",
        wareId: 3510
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
      },
      specifics: {
        beginTime: null,
        brandId: 0,
        brandName: "",
        categoryCode: "jh",
        categoryCode2: "jh1-1",
        categoryCode3: "",
        categoryId: 942,
        categoryId2: 943,
        categoryId3: 0,
        cityId: [-1],
        cityName: [],
        contractId: "GFJS1000803201705261443554531",
        countSkuClickLike: 0,
        countSkuSellNum: 0,
        countStock: 1,
        countWareClickLike: 0,
        countWareSellNum: 0,
        deliveryRemark: "",
        deliveryType: 1,
        desc: "",
        description: "",
        endTime: null,
        ext: "",
        features: { 年份: ["2018", "2017"], 尺寸: ["ML", "SL"] },
        isAppBuy: 0,
        isAppSearch: 1,
        isDel: 0,
        isMain: 1,
        isSdnrtr: 1,
        isShare: 1,
        keywords: "",
        lowPrice: "1.00",
        marketPrice: "1.00",
        markingCode: "default",
        markingName: "",
        name: "聚合业态555",
        orderOffTime: "",
        price: "1.00",
        projectId: [-1],
        projectName: [],
        propertiesId: 270,
        providerId: 1000803,
        providerName: "0525聚合业态供方",
        sellPlatform: [],
        shopId: "",
        shortName: "订单",
        similars: [
          { 年份: "2018", 尺寸: "ML", skuId: "17411" },
          { 年份: "2018", 尺寸: "SL", skuId: "17410" },
          { 年份: "2017", 尺寸: "ML", skuId: "17409" },
          { 年份: "2017", 尺寸: "SL", skuId: "17408" }
        ],
        skuCode: "",
        skuId: "17408",
        skuImgUrl: [],
        skuName: "聚合业态555（2017/SL）",
        specCode: ["year", ""],
        specEnValue: ["2017", "SL"],
        specName: ["年份", "尺寸"],
        specRel: [{
          skuId: "17411",
          specCode: ["year", ""],
          specEnValue: ["2018", "ML"],
          specName: ["年份", "尺寸"],
          specValue: ["2018", "ML"],
          specValueImg: ["", ""]
        }, {
          skuId: "17410",
          specCode: ["year", ""],
          specEnValue: ["2018", "SL"],
          specName: ["年份", "尺寸"],
          specValue: ["2018", "SL"],
          specValueImg: ["", ""]
        }, {
          skuId: "17409",
          specCode: ["year", ""],
          specEnValue: ["2017", "ML"],
          specName: ["年份", "尺寸"],
          specValue: ["2017", "ML"],
          specValueImg: ["", ""]
        }, {
          skuId: "17408",
          specCode: ["year", ""],
          specEnValue: ["2017", "SL"],
          specName: ["年份", "尺寸"],
          specValue: ["2017", "SL"],
          specValueImg: ["", ""]
        }],
        specValue: ["2017", "SL"],
        specValueImg: ["", ""],
        specs: [{ title: "年份", specValues: [{ name: "2018", active: false, disabled: false }, { name: "2017", active: false, disabled: false }] }, { title: "尺寸", specValues: [{ name: "ML", active: false, disabled: false }, { name: "SL", active: false, disabled: false }] }],
        status: 1,
        supportCart: 0,
        tags: "",
        unlimitedStock: 0,
        upPrice: "1.00",
        wareCode: "",
        wareId: 3510,
        wareImgUrl: [],
        watermarkUrl: ""
      }
    }
  };
}