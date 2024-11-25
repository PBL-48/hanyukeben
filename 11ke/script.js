'use strict';
window.onload=()=>{
	const words=[
		["外面","xuǎn"],
		["下","wénhuà"],
		["雨","mén"],
		["伞","yǒuyìsi"],
		["坏了","tǐng"],
		["把","búguò"],
		["得","yǒude"],
		["跟","cí"],
		["认识","tīngbudǒng"],
		["高中","yìsi"],
		["同学","zhōngwén"],
		["怪不得","zěnme"],
		["关系","pái"],
		["见面","jié"],
		["就","zǎo"],
		["吵架","qǐ"],
		["才","tīngshuō"],
		["说明","shìma"],
		["感情","duō"],
		["对方","ná"],
		["当","dào"],
		["外人","yōu"],
		["附近","érqiě"],
		["黄金周","jígé"],
		["期间","shǎo"],
		["店","á"],
		["客人","xuéfēn"],
		["跑","bàn"],
		["期末","qiānxū"],
		["报告","yǔyán"],
		["屏幕","yǒuqù"],
		["摔","xiànxiàng"],
		["碎","zuò"],
		["手续","chéngshì"],
		["学生证","lìshǐ"],
		["弄","yōujiǔ"],
		["坏","xīnli"],
		["责怪","kāixīn"],
		["骗","jíshí"],
		["房间","càiliàng"],
		["羽绒服","dà"],
		["脱","zhīqián"],
		["北海道","jìhuàshū"],
		["冬天","gēn"],
		["雪","liánxi"],
		["日语","fāyán"],
		["流利","tào"],
		["女朋友","xīfú"],
		["长","yang"],
		["漂亮","chǒngwù"],
		["篮球","jiǎnyā"],
		["特别","Liú"],
		["家人","zhòng"],
		["旅行","cǎipiào"],
		["任何","yuǎn"],
		["广播","zhòng"],
		["讲座","shēn"],
		["上海话","àolínpǐkè"],
		["福建话","jīnpái"],
		["打瞌睡","dōngjīngqíngkōngtǎ"],
		["脸","chángchéng"],
		["红","shēn"],
		["麻婆豆腐","àolínpǐkè"],
		["烤鸭","jīnpái"],
		["一般","dōngjīngqíngkōngtǎ"],

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
		}
		if(index==words.length-1){
			msg+=`<br>全${words.length}問中${correct}問正解`;
			index=-1;
			document.getElementById('wrong').innerHTML="間違えた文字:"+wrong;
			wrong=[];
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
