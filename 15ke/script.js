'use strict';
window.onload=()=>{
	let words=[
		["才","cái"],
		["堵车","dǔchē"],
		["大城市","dàchéngshì"],
		["就","jiù"],
		["这样","zhèyàng"],
		["办法","bànfǎ"],
		["周五","zhōuwǔ"],
		["路","lù"],
		["从","cóng"],
		["出口","chūkǒu"],
		["向","xiàng"],
		["拐","guǎi"],
		["小路","xiǎolù"],
		["快","kuài"],
		["更","gèng"],
		["吵","chǎo"],
		["来","lái"],
		["定","dìng"],
		["过","guò"],
		["小学","xiǎoxué"],
		["会","huì"],
		["精","jīng"],
		["批","pī"],
		["珍贵","zhēnguì"],
		["史料","shǐliào"],
		["黄河","huánghé"],
		["市区","shìqū"],
		["穿","chuān"],
		["兰州","lánzhōu"],
		["最","zuì"],
		["特色","tèsè"],
		["往","wǎng"],
		["雷","léi"],
		["表示","biǎoshì"],
		["抱歉","bàoqiàn"],
		["撞","zhuàng"],
		["上","shàng"],
		["赶紧","gǎnjǐn"],
		["打方向盘","dǎfāngxiàngpán"],
		["收心","shōuxīn"],
		["复习","fùxí"],
		["结婚","jiéhūn"],
		["讲","jiǎng"],
		["道","dào"],
		["题","tí"],
		["本地人","běndìrén"],
		["向导","iàngdǎo"]


	];
	const ja =document.getElementById('ja');
	const btn=document.getElementById('btn');
	const output=document.getElementById('output');
	const result=document.getElementById('result');
	document.addEventListener('keydown', keydown_ivent);
	let input = "";

	function keydown_ivent(e) {


		switch (e.key) {
			case 'Backspace':
				input = input.slice(0,input.length-1);
				break;
			case 'Enter':
				btn.click();
				break;
			case 'Shift':
				break;
			case 'v':
				input=String(input)+'ü';
				break;
			default:
				input=String(input)+String(e.key);
			};

		switch (input.slice(-2)) {
			case 'a1':
				input= String(input.slice(0,input.length-2))+'ā';
				break;
			case 'a2':
				input= String(input.slice(0,input.length-2))+'á';
				break;
			case 'a3':
				input= String(input.slice(0,input.length-2))+'ǎ';
				break;
			case 'a4':
				input= String(input.slice(0,input.length-2))+'à';
				break;
			case 'i1':
				input= String(input.slice(0,input.length-2))+'ī';
				break;
			case 'i2':
				input= String(input.slice(0,input.length-2))+'í';
				break;
			case 'i3':
				input= String(input.slice(0,input.length-2))+'ǐ';
				break;
			case 'i4':
				input= String(input.slice(0,input.length-2))+'ì';
				break;
			case 'u1':
				input= String(input.slice(0,input.length-2))+'ū';
				break;
			case 'u2':
				input= String(input.slice(0,input.length-2))+'ú';
				break;
			case 'u3':
				input= String(input.slice(0,input.length-2))+'ǔ';
				break;
			case 'u4':
				input= String(input.slice(0,input.length-2))+'ù';
				break;
			case 'ü1':
				input= String(input.slice(0,input.length-2))+'ǖ';
				break;
			case 'ü2':
				input= String(input.slice(0,input.length-2))+'ǘ';
				break;
			case 'ü3':
				input= String(input.slice(0,input.length-2))+'ǚ';
				break;
			case 'ü4':
				input= String(input.slice(0,input.length-2))+'ǜ';
				break;
			case 'e1':
				input= String(input.slice(0,input.length-2))+'ē';
				break;
			case 'e2':
				input= String(input.slice(0,input.length-2))+'é';
				break;
			case 'e3':
				input= String(input.slice(0,input.length-2))+'ě';
				break;
			case 'e4':
				input= String(input.slice(0,input.length-2))+'è';
				break;
			case 'o1':
				input= String(input.slice(0,input.length-2))+'ō';
				break;
			case 'o2':
				input= String(input.slice(0,input.length-2))+'ó';
				break;
			case 'o3':
				input= String(input.slice(0,input.length-2))+'ǒ';
				break;
			case 'o4':
				input= String(input.slice(0,input.length-2))+'ò';
				break;

		};

		output.innerHTML = input;
		return false;
	};

	let wrong=[];
	let wrongwords=[];
	let index=0;
	let correct=0;
	btn.addEventListener('click',()=>{
		let ans=input;
		let msg='';
		ja.classList.remove("fade");
		if (ans == words[index][1]){
			correct++;
			msg='〇';
		}else{
			msg=`× 正:${words[index][1]}`;
			wrong.push(words[index][0]);
			wrongwords.push([String(words[index][0]),String(words[index][1])]);

		}
		if(index==words.length-1){
			index=-1;
			document.getElementById('wrong').innerHTML=`全${words.length}問中${correct}問正解<br>`+"間違えた単語でもう一度テスト:<br>"+wrong;
			wrong=[];
			words=wrongwords;
			wrongwords=[];
		}
		input="";
		output.innerHTML=input;
		result.innerHTML=msg;
		result.classList.remove('fade');
		setTimeout(function(){
			result.classList.add('fade');
		},1500);
		setItem(++index);
		output.focus();


	});
	function setItem(index){
		ja.textContent=words[index][0];
	}
	setItem(index);
}