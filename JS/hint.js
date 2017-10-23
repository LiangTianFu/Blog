 // obj    tooltip 超链接元素
    // id      tooltip提示框id
    // html     tooltip提示框HTML
    // width    tooltip提示框宽度（可选）
    // height    tooltip提示框高度（可选）
    var toolTipBoxClass = "tooltip-box";

    var isIE = navigator.userAgent.indexOf("MSIE") > -1; //判断是否IE浏览器

    function showToolTip(obj, id, html, width, height) {
      if (document.getElementById(id) == null) { //不存在 创建出来  <div class="tooltip-box" id="xx">xxxx</div>
        var toolTipBox;
        toolTipBox = document.createElement("div");
        toolTipBox.className = "tooltip-box";
        toolTipBox.id = id;
        toolTipBox.innerHTML = html;
        obj.appendChild(toolTipBox);

        toolTipBox.style.width = width ? width + "px" : "auto";
        toolTipBox.style.height = height ? height + "px" : "auto";

        if (!width && isIE) {
          toolTipBox.style.width = toolTipBox.offsetWidth;
        }

        toolTipBox.style.position = "absolute";
        toolTipBox.style.display = "block";

        var left = obj.offsetLeft;
        var top = obj.offsetTop + 25;

        //left,不让ToolTip提示框超出浏览器
        if (left + toolTipBox.offsetWidth > document.body.clientWidth) {
          var demoLeft = document.getElementById("demo").offsetLeft;
          left = document.body.clientWidth - toolTipBox.offsetWidth - demoLeft;
          if (left < 0) left = 0;
        }

        toolTipBox.style.left = left + "px";
        toolTipBox.style.top = top + "px";

        obj.onmouseleave = function() {
          setTimeout(function() {
            document.getElementById(id).style.display = "none";
          }, 300);

        }
      } else { //存在 显示

        document.getElementById(id).style.display = "block";
      }
    }

    var t1 = document.getElementById("tooltip1");
    var t2 = document.getElementById("tooltip2");
    t1.onmouseenter = function() {
      showToolTip(this, "t1", "<img src='images/map.png' width='500' />", 520); //obj, id, html, width, height
    }
     t2.onmouseenter = function() {
      showToolTip(this, "t2", "<img src='images/school.jpg' width='500' />", 520); //obj, id, html, width, height
    }
   
