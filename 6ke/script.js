'use strict';
window.onload=()=>{
	let words=[
		["哎呀","āiyā"],
		["流量","liúliàng"],
		["用","yòng"],
		["完","wán"],
		["了","le"],
		["已经","yǐjīng"],
		["放","fàng"],
		["下","xià"],
		["一会儿","yíhuìr"],
		["听","tīng"],
		["对了","duìle"],
		["要","yào"],
		["和","hé"],
		["朋友","péngyou"],
		["参加","cānjiā"],
		["太","tài"],
		["巧","qiǎo"],
		["次","cì"],
		["好","hǎo"],
		["宾馆","bīnguǎn"],
		["订","dìng"],
		["放心","fàngxīn"],
		["机场","jīchǎng"],
		["接","jiē"],
		["祝","zhù"],
		["一路平安","yílùpíngān"],
		["春天","chūntiān"],
		["天气","tiānqì"],
		["暖和","nuǎnhuo"],
		["快","kuài"],
		["碗","wǎn"],
		["饱","bǎo"],
		["走","zǒu"],
		["累","lèi"],
		["见","jiàn"],
		["懂","dǒng"],
		["洗","xǐ"],
		["干净","gānjìng"],
		["晚","wǎn"],
		["肺炎","fèiyán"],
		["终于","zhōngyú"],
		["治","zhì"],
		["清楚","qīngchu"],
		["刚才","gāngcái"],
		["话","huà"],
		["老","lǎo"],
		["跑","pǎo"],
		["厨房","chúfáng"],
		["菜刀","càidāo"],
		["掏","tāo"],
		["出","chū"],
		["小本儿","xiǎoběnr"],
		["记","jì"],
		["书名","shūmíng"],
		["出版社","chūbǎnshè"],
		["暑假","shǔjià"],
		["上海","shànghǎi"],
		["加","jiā"],
		["糖","táng"],
		["忙","máng"],
		["浪费","làngfèi"],
		["太古里","tàigǔlǐ"],
		["街","jiē"],
		["父母","fùmǔ"],
		["商量","shāngliang"],
		["上海菜","shànghǎicài"],
		["平时","píngshí"],
		["辣","là"],
		["汉语","hànyǔ"],
		["难","nán"],
		["街道","jiēdào"],
		["熬夜","áoyè"],
		["习惯","xíguàn"],
		["考试","kǎoshì"],
		["考","kǎo"],
		["日文","Rìwén"],
		["坐","zuò"],
		["钟头","zhōngtóu"],
		["等","děng"],
		
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
		console.log(input);
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
			console.log(wrongwords);
		}
		if(index==words.length-1){
			msg+=`<br>全${words.length}問中${correct}問正解`;
			index=-1;
			document.getElementById('wrong').innerHTML="間違えた単語でもう一度テスト:"+wrong;
			wrong=[];
			words=wrongwords;
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
