// 调用函数创建html标签，这样传不同的参数就能复用
function checkBoxGroup(checkBoxName, data) {

    // 创建全选checkbox
    var allSelect = document.createElement("input");
    allSelect.setAttribute("type", "checkbox");
    allSelect.setAttribute("checkbox-type", "all");
    allSelect.setAttribute("value", 0);
    var text = document.createTextNode("全选");
    checkBoxName.appendChild(allSelect);
    checkBoxName.appendChild(text);

    // console.log(data.length)
    for (var i = 0; i < data.length; i++) {
        var select = document.createElement("input");
        select.setAttribute("type", "checkbox");
        select.setAttribute("value", i + 1);
        select.setAttribute("checkbox-type", "single")
        var text = document.createTextNode(data[i].text);
        checkBoxName.appendChild(select);
        checkBoxName.appendChild(text);
    }
    // console.log(checkBoxName.childNodes[4]);
    // console.log(checkBoxName.childNodes[6]);
    // console.log(checkBoxName.childNodes[8]);

    // 将监听写在主函数中，方便监听checkbo的变化情况，从而能及时做出改变
    checkBoxName.onclick = function (event) {
        // 封装之前测试用的函数
        // getTableData();
        // getData(regionRatio) //设置要获取的地区的监听，不然点击拿不到数据
        // getData(productRatio)
        var event = event || window.event;
        var target = event.target || event.srcElement;
        if (target.getAttribute("type") == "checkbox") {
            var len = checkBoxName.childNodes.length;
            // console.log(len) // 9
            var count = 0;
            var checkBoxType = target.getAttribute("checkbox-type");
            // 监听全选框的变化，做出相应的改变
            if (checkBoxType == "all") {

                if (target.checked == true) {
                    for (var i = 3; i < len; i += 2) {
                        checkBoxName.childNodes[i].checked = true;
                        // console.log(checkBoxName.childNodes[i]);

                    }
                } else {
                    target.checked = true;
                }
            }
            // 监听其他checkbox的变化
            // 设置count来记录非全选框的数量，当数量等于三的时候将全选按钮选上
            // 当不等于三的时候将全选取消
            // 当等于0的时候再次将点击的按钮勾选

            if (checkBoxType == "single") {
                for (var i = 3; i < len; i += 2) {
                    if (checkBoxName.childNodes[i].checked == true) {
                        count++;
                        // console.log(checkBoxName.childNodes[i]);
                    }
                }
                // console.log(count);
                if (count == Math.floor(len / 2) - 1 && allSelect.checked == false) {
                    allSelect.checked = true;
                } else if (count < len / 2 - 1 && count > 0) {
                    allSelect.checked = false;
                } else if (count == 0) {
                    target.checked = true;
                }
            }
        }
        // 调用创建表格函数
        createTable();
    }
}