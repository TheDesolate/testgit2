// 创建表头，同时将选择的数据渲染到table中
function createTable() {

    // 将已经有的数据清除，每次都会出翔
    if (tableWrapper.childNodes[0]) {
        tableWrapper.removeChild(tableWrapper.childNodes[0])
    }
    var data = getTableData();

    var radioSelect = getData(regionRatio)
    var productSelect = getData(productRatio)

    // 制作表头
    var headTable = ["商品", "地区", "1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"];
    var table = document.createElement("table")
    var thead = table.createTHead();
    var tr0 = table.insertRow(0)
    for (var i = 0; i < headTable.length; i++) {
        var td = tr0.insertCell(i);
        td.innerHTML = headTable[i];
    }

    var regionlen = radioSelect.length
    var productlen = productSelect.length
    // console.log(regionlen)
    // console.log(productlen)
    // 分别对选择不同数量商品，不同数量地区时做出不同的渲染
    // 难点：表格合并,合并行后 ，下面的表格会少一个
    // 注意：多行多列时商品合并，地区不变的情况处理。所以得先循环商品
    if (productlen == 1 && regionlen >= 1) {
        for (var i = 0; i < regionlen; i++) {
            if (i == 0) {
                var tr = table.insertRow(table.rows.length);
                var td = tr.insertCell(0);
                td.innerHTML = data[i].product;
                td.rowSpan = regionlen
                var td = tr.insertCell(1);
                td.innerHTML = data[i].region;

                for (var j = 0; j < 12; j++) {
                    var td = tr.insertCell(j + 2);
                    td.innerHTML = data[i].sale[j];
                }
            } else {
                var tr = table.insertRow(table.rows.length);
                var td = tr.insertCell(0); //合并单元格后，后面行少一个单元格
                td.innerHTML = data[i].region;

                for (var j = 0; j < 12; j++) {
                    var td = tr.insertCell(j + 1);
                    td.innerHTML = data[i].sale[j];
                }
            }
        }
    } else if (regionlen == 1 && productlen > 1) {
        for (var i = 0; i < productlen; i++) {
            if (i == 0) {
                var tr = table.insertRow(table.rows.length)
                var td = tr.insertCell(0);
                td.rowSpan = productlen;
                td.innerHTML = data[i].region
                var td = tr.insertCell(1);
                td.innerHTML = data[i].product;

                for (var j = 0; j < 12; j++) {
                    var td = tr.insertCell(j + 2)
                    td.innerHTML = data[i].sale[j]
                }
            } else {
                var tr = table.insertRow(table.rows.length)
                var td = tr.insertCell(0);
                td.innerHTML = data[i].product

                for (var j = 0; j < 12; j++) {
                    var td = tr.insertCell(j + 1)
                    td.innerHTML = data[i].sale[j]
                }
            }
        }
    } else if (regionlen > 1 && productlen > 1) {
        for (var i = 0; i < productlen; i++) {
            for (var j = 0; j < regionlen; j++) {
                if (j == 0) {
                    var tr = table.insertRow(table.rows.length);
                    var td = tr.insertCell(0);
                    td.innerHTML = data[j + i * regionlen].product;
                    td.rowSpan = regionlen;
                    var td = tr.insertCell(1);
                    td.innerHTML = data[j + i * regionlen].region

                    for (var k = 0; k < 12; k++) {
                        var td = tr.insertCell(k + 2)
                        td.innerHTML = data[j + i * regionlen].sale[k]
                    }
                } else {
                    var tr = table.insertRow(table.rows.length);
                    var td = tr.insertCell(0);
                    td.innerHTML = data[j + i * regionlen].region

                    for (var k = 0; k < 12; k++) {
                        var td = tr.insertCell(k + 1)
                        td.innerHTML = data[j + i * regionlen].sale[k]
                    }
                }
            }
        }

    }
    tableWrapper.appendChild(table);
}