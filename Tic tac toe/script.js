let box = document.querySelectorAll('.box')
let boxes = document.querySelector('.boxes')
let dev  = document.createElement('div').classList.add('black')

console.log(boxes)
boxes.addEventListener('click',(e)=>{
console.log(e)
e.target.remove()
})
