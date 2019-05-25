function writeCode(prefix, code, fn) { //fn相当于传入一个电话号码
  let domCode = document.querySelector('#code')
  domCode.innerHTML = prefix || ''
  let n = 0
  let id = setInterval(()=>{ 
     n += 1
     domCode.innerHTML = Prism.highlight(prefix + code.substring(0,n), Prism.languages.css);
     styleTag.innerHTML= prefix + code.substring(0, n)  
     domCode.scrollTop = 10000
     if(n >= code.length ){
       window.clearInterval(id)
       fn.call()
     } 
  }, 0)
}

function writeMarkdown(markdown, fn) {
   let domPaper = document.querySelector('#paper > .content')
   let n =0
   let id = setInterval(()=>{ 
     n += 1
     domPaper.innerHTML = markdown.substring(0,n)
     domPaper.scrollTop = domPaper.scrollHeight
     if(n >= markdown.length ){
       window.clearInterval(id)
       fn.call()
     } 
  }, 0)
}

var result =`/*
 *  面试官你好，我叫王小勤，
 *  我现在用动画展示文字的形式展示自己
 *  因为用文字介绍自己太单调了~
 *  我就用我写的代码来介绍自己吧~
 */

*{
 transition: all 1s;
}
html {
  background: rgb(222, 222,222);
  font-size: 10px;
}
#code{
  border: 1px solid red;
  padding: 16px;
}

/* 我需要代码高亮 */
.token.selector {
  color: #690;
}
.token.property {
  color: #905;
}
.token.function {
  color: #DD4A68;
}

/* 加点 3D 效果 */
#code {
 transform: rotate(360deg);
}

/* 先不秀技能了，毕竟还不太会 */
/* 我现在需要一张白纸介绍自己~ */

#code {
  position: fixed;
  left:0;
  width: 50%;
  height: 100%;
}

#paper {
  position: fixed;
  right: 0;
  width: 50%;
  height: 100%;
  background: red;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
}
#paper > .content {
  width: 100%;
  height: 100%;
  background: white;
  padding-left: 16px;
}
`

var result2 =`
#paper {
   
}`

var md = `
# 自我介绍

我叫 xxx
今年xx岁
毕业于xxxxx
自学前端半年
希望应聘前端开发岗位

# 技能介绍

熟悉 HTML(5) CSS(3) JavaScript

# 项目介绍

1： xxx 简历
2： xxx 电影网站
3： xxx 小程序
4： xxx 轮播

# 联系方式
QQ  xxxx
微信 xxxx
电话 xxxx
`

writeCode('', result, ()=>{  //writeCode call the function 回调返回异步结果，如同回电话
   creatPaper(()=>{
     writeCode(result,result2, ()=>{
       writeMarkdown(md)
     })
   })
})

// 1、定闹钟：10毫秒之后才写第一行代码
// 2、writeCode 返回
// 3、执行fn2()
// 4、闹钟时间到
// 5、写第一行代码

function creatPaper(fn) {
   var paper = document.createElement('div')
   paper.id = 'paper'
   var content = document.createElement('pre')
   content.className = 'content'
   paper.appendChild(content)
   document.body.appendChild(paper)
   fn.call()
}



