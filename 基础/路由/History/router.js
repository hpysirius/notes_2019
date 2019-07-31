
// (function () {
//     history.replaceState(null, null, '');//最开始的状态，采用replace直接替换
//     $('#router').html('<p>显示内容区域</p>')
//     $('a').on('click', function () {
//         console.log(this.text)
//         var text = this.text;
//         $('#router').html('<p>' + text + '</p>')
//         history.pushState(null, null, '#/' + text);
//     })
// })()


// 状态版
(function(){   
    var count = [0,0,0]
    $('#router').html('<p>首页</p>'+count[0]+'<p>新闻</p>'+count[1]+'<p>关于</p>'+count[2])
    // history.replaceState(count,null,'');//最开始的状态，采用replace直接替换
 
    for(var i = 0 ; i<$('a').length; i++){
        $('a')[i].index = i
        $('a').eq(i).on('click',function(){
            console.log(this.index);
            var index = this.index;
            count[index]++;
            $('#router').html('<p>首页</p>'+count[0]+'<p>新闻</p>'+count[1]+'<p>关于</p>'+count[2])
            console.log(count)
            history.pushState(count,null,'#/count'+count[index]);//之后的状态，需要进行保存
        })
    }
    //监听history其他api导致地址栏url改变事件
    window.addEventListener('popstate',function(e){
        console.log(e.state);
        var state = e.state;
        $('#router').html('<p>首页</p>'+state[0]+'<p>新闻</p>'+state[1]+'<p>关于</p>'+state[2])
 
    })
 })()
 
