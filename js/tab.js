// 获取元素
var choice = document.querySelector('.tab_list').querySelectorAll('li')
var item = document.querySelectorAll('.item')
var tab_list = document.querySelector('.tab_list')
var flag = true

for (var i = 0; i < choice.length; i++) {
    // 一始给5个小li 设置索引号 
    choice[i].setAttribute('index', i)

    choice[i].onclick = function () {

        // 控制tab_list菜单的每个li标签与tab_list的下滑情况（高）
        if (flag) {
            tab_list.className = 'tab_list tab_listmove'
            flag = !flag
        } else {
            tab_list.className = 'tab_list'
            flag = !flag
        }

        // 1. 上的模块选项卡，点击某一个，当前这一个底色会是红色，其余不变（排他思想） 修改类名的方式

        // 干掉所有人 其余的li清除 class 这个类
        for (var i = 0; i < choice.length; i++) {
            choice[i].className = ' '
        }
        // 留下我自己 
        this.className = 'active'

        var index = this.getAttribute('index')
        for (var i = 0; i < item.length; i++) {
            item[i].style.display = 'none'
        }
        item[index].style.display = 'block'
    }
}