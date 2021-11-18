

# html2canvas + jspdf 实现 html 转 pdf
实现pdf导出 废话不多说 我们来看看代码

## 安装
```js
npm install html2canvas --save

npm install jsPDF --save

```

## 引入
```js
// 引入的方式
import html2canvas from 'html2canvas'
import jsPDF from 'jsPDF '

```

## 使用
注意： 生成的pdf只有页面窗口可见的区域，有滚动条的下面没有生成出来
如果截取是body的这个层级，而刚好body设置了overflow: hidden;那超出的部分是永远截取不到的，因为这个节点的dom高就是窗口可见的高度，并不包含滚动条多出来的部分。
解决办法：只需要在导出之前将overflow:auto设置成visible；导出pdf后再设置回去。
```js
//页面
<div id="demo" > //要打印的dom


//下载pdf方法
import html2canvas from 'html2canvas'
import jsPDF from 'jsPDF '

function createPDF(id,name) {
    let demo=document.getElementById(id);
    demo.style.overflow='visible';
    html2canvas(demo, {
        allowTaint: true,//允许跨域
        height: document.getElementById(id).scrollHeight,//
        width: document.getElementById(id).scrollWidth,//为了使横向滚动条的内容全部展示，这里必须指定
        background: "#FFFFFF",//如果指定的div没有设置背景色会默认成黑色
        onrendered:function(canvas) {
            var contentWidth = canvas.width;
            var contentHeight = canvas.height;

            //一页pdf显示html页面生成的canvas高度;
            var pageHeight = contentWidth / 595.28 * 841.89;
            //未生成pdf的html页面高度
            var leftHeight = contentHeight;
            //pdf页面偏移
            var position = 0;
            //a4纸的尺寸[595.28,841.89]，html页面生成的canvas在pdf中图片的宽高
            var imgWidth = 555.28;
            var imgHeight = 555.28/contentWidth * contentHeight;

            var pageData = canvas.toDataURL('image/jpeg', 1.0);

            var pdf = new jsPDF('', 'pt', 'a4');
            //有两个高度需要区分，一个是html页面的实际高度，和生成pdf的页面高度(841.89)
            //当内容未超过pdf一页显示的范围，无需分页
            if (leftHeight < pageHeight) {
                pdf.addImage(pageData, 'JPEG', 20, 0, imgWidth, imgHeight );
            } else {
                while(leftHeight > 0) {
                    pdf.addImage(pageData, 'JPEG', 20, position, imgWidth, imgHeight)
                    leftHeight -= pageHeight;
                    position -= 841.89;
                    //避免添加空白页
                    if(leftHeight > 0) {
                        pdf.addPage();
                    }
                }
            }

            pdf.save(name+'.pdf');
        }
    })
    demo.style.overflow='auto';
};




```