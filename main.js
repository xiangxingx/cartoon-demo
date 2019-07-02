!function () {
  var duration = 20

  $('.actions').on('click', 'button', function (e) {
    let $button = $(e.currentTarget)
    let speed = $button.attr('data-speed')
    $button.addClass('active').siblings('.active').removeClass('active')
    switch (speed) {
      case 'slow':
        duration = 100
        break
      case 'normal':
        duration = 50
        break
      case 'fast':
        duration = 10
        break
    }
  })

  function writeCode(prefix, code, fn) {
    let container = document.querySelector('#code')
    let styleTag = document.querySelector('#styleTag')
    let n = 0
    let id = setTimeout(function run() {
      n += 1
      container.innerHTML = code.substring(0, n)
      styleTag.innerHTML = code.substring(0, n)
      container.scrollTop = container.scrollHeight
      if (n < code.length) {
        id = setTimeout(run, duration)
      } else {
        fn && fn.call()
      }
    }, duration);
  }

  let code = `
 /* 
  * 画一只皮卡丘吧
  * 准备皮卡丘的皮肤
  */
.preview{
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #FFDC2B;
  border: 1px solid green;
}
.wrapper{
  width: 100%;
  height: 165px;
  position: relative;
}
/* 画一个鼻子 */
.nose{
  width: 0px;
  height: 0px;
  border-style: solid;
  border-width: 12px;
  border-color: black transparent transparent transparent;
  border-radius: 12px;
  position: absolute;
  left: 50%;
  top: 28px;
  transform: translateX(-50%);
}
/* 画眼睛 */
.eye{
  width: 49px;
  height: 49px;
  background: #2E2E2E;
  position: absolute;
  border-radius: 50%;
  border: 2px solid black;
}
.eye::before{
  content: '';
  display: block;
  width: 24px;
  height: 24px;
  background: white;
  position: absolute;
  border-radius: 50%;
  left: 6px;
  top: -1px;
  border: 2px solid black;
}
.eye.right{
  left: 50%;
  margin-left: 90px;
}
.eye.left{
  right: 50%;
  margin-right: 90px;
}
/* 画它的小脸蛋 */
.face{
  width: 68px;
  height: 68px;
  background: #FF251A;
  position: absolute;
  border-radius: 50%;
  border: 2px solid black;
  top: 85px;
}
.face.right{
  left: 50%;
  margin-left: 116px;
}
.face.left{
  right: 50%;
  margin-right: 116px;
}
/* 画它的上嘴唇 */
.upperLip{
  height: 20px;
  width: 76px;
  background: #FFDC2B;
  border: 2px solid black;
  border-top: none;
  position: absolute;
  top: 52px;
  z-index: 1;

}
.upperLip.left{
  right: 50%;
  border-bottom-left-radius: 48px 30px;
  border-right: none;
  transform: rotate(-20deg);
}
.upperLip.right{
  left: 50%;
  border-bottom-right-radius: 48px 30px;
  border-left: none;
  transform: rotate(20deg);
}
/* 画它的下嘴唇 */
.lowerLip-wrapper{
  overflow: hidden;
  left: 50%;
  transform: translateX(-50%);
  position: absolute;
  height: 124px;
  width: 200px;
  bottom: -16px;
}
.lowerLip{
  overflow: hidden;
  left: 50%;
  transform: translateX(-50%);
  width: 160px;
  height: 1000px;
  background: #A91411;
  border-radius: 100px/600px;
  border: 2px solid black;
  position: absolute;
  bottom: 0px;
}
/* 最后加一个小舌头 */
.lowerLip::after{
  content: '';
  position: absolute;
  bottom: -8px;
  width: 110px;
  height: 110px;
  background: #FF5D62;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 50%;
}`

  writeCode('', code)

}.call()
