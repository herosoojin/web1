var Links = {
  setColor:function(color){
    var alist = document.querySelectorAll('a');
    var i = 0;
    while(i < alist.length){
      alist[i].style.color = color;
      i = i + 1;
  }
}
}
var body = {
  setColor:function(color){
    var target = document.querySelector('body').style.color=color;
  }, <!-- 객체는 객체의 property를 구별할떄 ,를 찍어야한다.-->
  setBackgroundColor:function(color){
    var target = document.querySelector('body').style.backgroundColor=color;
  }
}

function nightDayHandler(self){
  if(self.value==='night'){
    body.setBackgroundColor('black');
    body.setColor('white');
    self.value ='day';
    Links.setColor('coral');

  } else {
    body.setBackgroundColor('white');
    body.setColor('black');
    self.value='night';
    Links.setColor('blue');
  }
}
