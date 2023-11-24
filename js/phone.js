var phone = document.querySelector('.phone')
var tab_list = document.querySelector('.tab_list')
var tab_content = document.querySelector('.tab_content')
var flag = true
phone.onclick = function () {
    if (flag) {
        tab_list.className = 'tab_list tab_listmove'
        flag = !flag
    } else {
        tab_list.className = 'tab_list'
        flag = !flag
    }
}



//移动端滑动处理 
var startX, startY;
document.addEventListener('touchstart', function (ev) {
    startX = ev.touches[0].pageX;
    startY = ev.touches[0].pageY;
}, false);
document.addEventListener('touchend', function (ev) {
    var endX, endY;
    endX = ev.changedTouches[0].pageX;
    endY = ev.changedTouches[0].pageY;
    var direction = GetSlideDirection(startX, startY, endX, endY);
    switch (direction) {
        case 0:
            break;
        case 1:
            // 向上 
            tab_list.className = 'tab_list'
            flag=true
            break;
        case 2:
            // 向下 
            tab_list.className = 'tab_list'
            flag=true
            break;
        default:
    }
}, false);
function GetSlideDirection(startX, startY, endX, endY) {
    var dy = startY - endY;
    //var dx = endX - startX; 
    var result = 0;
    if (dy > 0) {//向上滑动 
        result = 1;
    } else if (dy < 0) {//向下滑动 
        result = 2;
    }
    else {
        result = 0;
    }
    return result;
}





// // 监听鼠标滑动与控制tab_list
// var scrollFunc = function (e) {
//     var e = e || window.event;
//     if (e.wheelDelta) {
//         if (e.wheelDelta > 0) {//鼠标滚轮向上滚动;
//             tab_list.className = 'tab_list'
//         }
//         if (e.wheelDelta < 0) {//鼠标滚轮向下滚动
//             tab_list.className = 'tab_list'
//         }
//     }
//     flag=true
// }
// //    给页面绑定鼠标滚轮事件,针对火狐的非标准事件 
// window.addEventListener("DOMMouseScroll", scrollFunc)
// //    给页面绑定鼠标滚轮事件，针对Google，mousewheel非标准事件已被弃用，请使用 wheel事件代替
// window.addEventListener("wheel", scrollFunc)
// //    ie不支持wheel事件，若一定要兼容，可使用mousewheel
// window.addEventListener("mousewheel", scrollFunc)

// // document.onmousedown = function (e) {
// //     alert('鼠标滚轮停止')
// // }
