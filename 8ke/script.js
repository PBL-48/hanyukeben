'use strict';
window.onload=()=>{
	let words=[
		["校医院","āiyā"],
		["还是","liúliàng"],
		["三甲","yòng"],
		["差别","wán"],
		["比","le"],
		["近","yǐjīng"],
		["一点儿","fàng"],
		["但是","xià"],
		["水平","yíhuìr"],
		["没有","tīng"],
		["高","duìle"],
		["大病","yào"],
		["这么","hé"],
		["挂号","péngyou"],
		["交费","cānjiā"],
		["药房","tài"],
		["得","qiǎo"],
		["又","cì"],
		["添","hǎo"],
		["麻烦","bīnguǎn"],
		["付","dìng"],
		["能","fàngxīn"],
		["信用卡","jīchǎng"],
		["刷卡","jiē"],
		["站","zhù"],
		["地铁","yílùpíngān"],
		["出租车","chūntiān"],
		["租","tiānqì"],
		["公分","nuǎnhuo"],
		["选手","kuài"],
		["多了","wǎn"],
		["旺季","bǎo"],
		["淡季","zǒu"],
		["机票","lèi"],
		["一些","jiàn"],
		["语法","dǒng"],
		["阿拉伯语","xǐ"],
		["为什么","gānjìng"],
		["总是","wǎn"],
		["客气","fèiyán"],
		["成都","zhōngyú"],
		["那么","zhì"],
		["好吃","qīngchu"],
		["骑","gāngcái"],
		["遵守","huà"],
		["交通","lǎo"],
		["规则","pǎo"],
		["前","càidāo"],
		["安检","tāo"],
		["迷路","chū"],
		["小心","xiǎoběnr"],
		["过","jì"],
		["口","shūmíng"],
		["气","chūbǎnshè"],
		["俯卧撑","shǔjià"],
		["醉","shànghǎi"],
		["冷","jiā"],
		["安静","táng"],
		["酒","máng"]
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