// 监听选择了那些地区，将地区名称加入数组
function getData(checkBoxName) {
    var len = checkBoxName.childNodes.length
    var checkList = [];
    for (var i = 3; i < len; i += 2) {
        if (checkBoxName.childNodes[i].checked == true) {
            checkList.push(checkBoxName.childNodes[i + 1].data)
        }
    }
    // console.log(checkList);
    return checkList
}

// getTableData()
// 遍历数据，将满足需要的数据加入数组中

function getTableData() {
    // 调用函数拿到被选择的按钮情况，然后根据情况判断符合条件的数据
    var radioSelect = getData(regionRatio)
    var productSelect = getData(productRatio)
    // console.log(radioSelect);
    // console.log(productSelect)
    var dataList = []
    let len = sourceData.length
    // console.log(len)
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < radioSelect.length; j++) {
            for (let k = 0; k < productSelect.length; k++) {
                if (radioSelect[j] == sourceData[i].region && productSelect[k] == sourceData[i].product) {
                    dataList.push(sourceData[i]);
                }
            }
        }
    }
    // console.log(dataList);
    return dataList;
}

// 原始数据
let sourceData = [{
    product: "手机",
    region: "华东",
    sale: [120, 100, 140, 160, 180, 185, 190, 210, 230, 245, 255, 270]
}, {
    product: "手机",
    region: "华北",
    sale: [80, 70, 90, 110, 130, 145, 150, 160, 170, 185, 190, 200]
}, {
    product: "手机",
    region: "华南",
    sale: [220, 200, 240, 250, 260, 270, 280, 295, 310, 335, 355, 380]
}, {
    product: "笔记本",
    region: "华东",
    sale: [50, 60, 80, 110, 30, 20, 70, 30, 420, 30, 20, 20]
}, {
    product: "笔记本",
    region: "华北",
    sale: [30, 35, 50, 70, 20, 15, 30, 50, 710, 130, 20, 20]
}, {
    product: "笔记本",
    region: "华南",
    sale: [80, 120, 130, 140, 70, 75, 120, 90, 550, 120, 110, 100]
}, {
    product: "智能音箱",
    region: "华东",
    sale: [10, 30, 4, 5, 6, 5, 4, 5, 6, 5, 5, 25]
}, {
    product: "智能音箱",
    region: "华北",
    sale: [15, 50, 15, 15, 12, 11, 11, 12, 12, 14, 12, 40]
}, {
    product: "智能音箱",
    region: "华南",
    sale: [10, 40, 10, 6, 5, 6, 8, 6, 6, 6, 7, 26]
}];


// 数组或对象都可以
// 地区参数
var regionData = [{
    value: 1,
    text: "华东"
}, {
    value: 2,
    text: "华南"
}, {
    value: 3,
    text: "华北"
}]

// 商品参数
var productData = [{
    value: 1,
    text: "手机"
}, {
    value: 2,
    text: "笔记本"
}, {
    value: 3,
    text: "智能音箱"
}]