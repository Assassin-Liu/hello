
var send =document.getElementById('send');
// var pic =document.getElementById('pic');
var text =document.getElementById('text');
// var info_box = document.getElementsByClassName('info_box')[0];
var chat = document.getElementById('chat');
chat.onclick=function(){
	document.getElementById("chatbox").style.bottom = "10px";
};
send.onclick=function(){
	if(text.value===''){
	alert('请输入内容');
    } else{
	var div = document.createElement('div');
	var span_1 = document.createElement('span');
	var span_2 = document.createElement('span');
	// var img = document.createElement('img');
	var txt = document.createTextNode(text.value);
	var content = document.getElementsByClassName('content')[0];
	span_1.appendChild(txt);
	div.appendChild(span_2);
	div.appendChild(span_1);
	// div.appendChild(imgs);
	// nDiv.style.display='block';
	content.insertBefore(div,content.lastChild);
	span_1.className='bubble_2';
	span_2.className='img_2';
	div.className='bubble_me';
	// imgs.src='img/2.jpg';

	var div = document.createElement('div');
	var span_1 = document.createElement('span');
	var span_2 = document.createElement('span');
	// var img = document.createElement('img');
	var txt = document.createTextNode(text.value);
	var content = document.getElementsByClassName('content')[0];
	span_1.appendChild(txt);
	div.appendChild(span_2);
	div.appendChild(span_1);
	// div.appendChild(imgs);
	// nDiv.style.display='block';
	content.insertBefore(div,content.lastChild);
	span_1.className='bubble_1';
	span_2.className='img_1';
	div.className='bubble_you';
    }
	text.value='';
}


