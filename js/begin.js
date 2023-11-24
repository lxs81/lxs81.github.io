var container = document.querySelector('.container');
var canvas = document.querySelector('#canvas')
var btn = document.querySelector('.btn')
var right = document.querySelector('.right')
var left = document.querySelector('.left')
container.style.overflow = 'hidden'
canvas.style.zIndex = '4'
btn.style.zIndex = '4'
left.style.zIndex = '3'
right.style.zIndex = '3'
btn.onclick = function () {
    container.style.overflowY='scroll'
    right.className = 'right rightdiv'
    left.className = 'left leftdiv'
    btn.style.display = 'none'
    canvas.style.zIndex = '-1'
}