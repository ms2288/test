//발표화면 전송기능 구현
function send_display(){
    if (document.querySelectorAll('[data-tooltip="발표 시작"]').length===1){
        console.log("발표중지")
        return 
    }
    else if (document.querySelectorAll('[data-tooltip="본인이 발표 중입니다"]').length===1){
        console.log("본인이 발표 중입니다")
        return document.querySelectorAll('video')[0]
    }
    else {
        let selected
        let max=0
        console.log("상대방이 발표중입니다")
        for (let i of document.querySelectorAll('video')){
            if(max < i.scrollWidth * i.scrollHeight){
                max=i.scrollWidth * i.scrollHeight
                selected=i
            }
        }
        return selected

    }
}

var old_state = 0;
var timer = setInterval(function(){
   if (document.querySelectorAll('[data-tooltip="발표 시작"]').length===1){
        var new_state = 0
    }
    else if (document.querySelectorAll('[data-tooltip="본인이 발표 중입니다"]').length===1){
        var new_state = 1
    }
    else {
        var new_state = 2
    }
    if (old_state != new_state){
        p_tag=send_display()
        console.log(p_tag)
        old_state=new_state
    }
},10)


//채팅메세지 전송 기능 구현
//버전1(최신값 하나만 출력)
var old_length = 0
var timer = setInterval(function(){
    var chats = document.querySelectorAll('[data-sender-id]')
    if ((chats.length>0)&&(chats.length>old_length)){
        var result = {}
        var text = chats[chats.length-1].lastChild.outerText.split('\n')
        result[chats[chats.length-1].dataset.senderId] =[chats[chats.length-1].dataset.senderName,text[text.length-1],chats[chats.length-1].dataset.timestamp]
        text_length = text.length
        old_length = chats.length
        console.log(result)
    }
    else if ((chats.length===old_length)&&(text_length < chats[chats.length-1].lastChild.outerText.split('\n').length)){
        var result = {}
        var text = chats[chats.length-1].lastChild.outerText.split('\n')
        result[chats[chats.length-1].dataset.senderId] =[chats[chats.length-1].dataset.senderName,text[text.length-1],chats[chats.length-1].dataset.timestamp]
        text_length = text.length
        old_length = chats.length
        console.log(result)
    }
},10)


//버전2(모든 사용자 message 출력)
var old_length = 0
var timer = setInterval(function(){
    var chats = document.querySelectorAll('[data-sender-id]')
    if ((chats.length>0)&&(chats.length>old_length)){
        var result = {}
        for (let i=0;i<chats.length;i++){
            var text = chats[chats.length-1].lastChild.outerText.split('\n')
            result[chats[i].dataset.senderId] =[chats[i].dataset.senderName,text[text.length-1],chats[i].dataset.timestamp]
            }
        var text = chats[chats.length-1].lastChild.outerText.split('\n')
        text_length = text.length
        old_length = chats.length
        console.log(result)
    }
    else if ((chats.length===old_length)&&(text_length < chats[chats.length-1].lastChild.outerText.split('\n').length)){
        var result = {}
        for (let i=0;i<chats.length;i++){
            var text = chats[chats.length-1].lastChild.outerText.split('\n')
            result[chats[i].dataset.senderId] =[chats[i].dataset.senderName,text[text.length-1],chats[i].dataset.timestamp]
            }
        var text = chats[chats.length-1].lastChild.outerText.split('\n')
        text_length = text.length
        old_length = chats.length
        console.log(result)
    }
},10)
