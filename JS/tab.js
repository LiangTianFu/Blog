
window.onload=function(){
  //返回顶部
  var oBtn = document.getElementById('btn');
  //获取页面可视区的高度
  var clientHeight = document.documentElement.clientHeight;
  var timer = null;
  var isTop = true;
  //滚动条滚动时触发
  window.onscroll = function() {
    var osTop = document.documentElement.scrollTop || document.body.scrollTop;
    if (osTop >= clientHeight) {
      oBtn.style.display = 'block';
    } else {
      oBtn.style.display = 'none';
    }
    if (!isTop) {
      clearInterval(timer);
    }
    isTop = false;
  }

  oBtn.onclick = function() {
    timer = setInterval(function() { //定时器
      //获取滚动条距离顶部的高度
      var osTop = document.documentElement.scrollTop || document.body.scrollTop;
      var ispeed = Math.floor(-osTop / 5);
      document.documentElement.scrollTop = document.body.scrollTop = osTop + ispeed;
      isTop = true;
     /* console.log(osTop - ispeed);*/
      if (osTop == 0) {
        clearInterval(timer);
      }
    }, 30);
  }


  /*  选项卡切换*/
  var itemTit = document.getElementById('itemtit');
  var liBtn = itemTit.getElementsByTagName('li');
  var itemCon = document.getElementById('itemcon');
  var ulCon = itemCon.getElementsByTagName('ul');


  for (var i = 0; i < liBtn.length; i++) {
    liBtn[i].index = i;

    liBtn[i].onclick = function() {
      for (var i = 0; i < liBtn.length; i++) {

        liBtn[i].className = '';
        ulCon[i].style.display = 'none';
        //隐藏所有的选项卡
      }
      this.className = 'active';
      ulCon[this.index].style.display = 'block';
      //显示所有的选项卡
    }

  }
}
