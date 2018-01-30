// https://github.com/Marak/faker.js/wiki
var faker = require('faker')
module.exports = function() {
  return {
    code: 200,
    data: {
      entity:{
        id:"57017da140fc11e792941866da8c77bf",
        name:"优惠券",
        mainImg: "//img1.qdingnet.com/image-381f3fcd-d389-439b-9153-07e663da2935.jpg", //商品主图
        marketPrice: faker.random.number(), //单位分
        sellPrice: faker.random.number(),//单位分
        shortDesc: "商品简介商品简介商品简介商品简介商品简介商品简介商品简介商品简介商品简介",
        desc:"商品详情商品详情商品详情",
        stock:99,
        imageList:["https://img1.qdingnet.com/image-37e73979-b92c-4f2b-a2fc-e89af0051bea.png","https://img1.qdingnet.com/image-37e73979-b92c-4f2b-a2fc-e89af0051bea.png","https://img1.qdingnet.com/image-37e73979-b92c-4f2b-a2fc-e89af0051bea.png"]
      },
      message:"商品详情查询成功",
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
        priceType: 0,
        productImg: ["https://img1.qdingnet.com/image-37e73979-b92c-4f2b-a2fc-e89af0051bea.png","https://img1.qdingnet.com/image-37e73979-b92c-4f2b-a2fc-e89af0051bea.png","https://img1.qdingnet.com/image-37e73979-b92c-4f2b-a2fc-e89af0051bea.png"],
        projectRanges: [{ projectId: "1789", projectName: "千丁互联" }, { projectId: "76", projectName: "北京好望山" }],
        serviceDetail: "<p>这是商品详情信息</p>",
        serviceStandard: "的",
        serviceTime: "8点-20点",
        servictType: 0,
        showImg: [{ url: "https://img1.qdingnet.com/image-484f4081-d358-4a3d-bf9a-01dc825255bf.png" }],
        url: "https://img1.qdingnet.com/image-484f4081-d358-4a3d-bf9a-01dc825255bf.png",
        status: 1,
        subTitle: "订单订单订单订单订单订单订单订单订单订单订单订单订单订单订单订单订单",
        title: "洗车20元优惠券，新用户专享，下单可再送20元",
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
        countStock: 999,
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
        name: "虚拟券",
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
        skuName: "虚拟券（2017/SL）",
        specCode: ["year", ""],
        specEnValue: ["2017", "SL"],
        specName: [],
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
    },
  };
};
