//写一个函数, 处理innerText和textContent的兼容问题

//获取元素之间的内容
function getInnerText(element) {
  //判断element是否支持innerText
  if (typeof element.innerText === 'string'){
    return element.innerText;
  }else{
    return element.textContent;
  }
}


//设置元素之间的内容
function setInnerText(element, content) {
  //判断element是否支持innerText
  if (typeof element.innerText === 'string'){
    element.innerText = content;
  }else{
    return element.textContent = content;
  }
}
