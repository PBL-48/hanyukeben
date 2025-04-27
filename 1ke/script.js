
'use strict';

window.onload=()=>{
	const word_list=[ //全単語一覧。固定。
		["这","zhè"],
		["位","wèi"],
		["是","shì"],
		["她","tā"],
		["也","yě"],
		["桃乡","táoxiāng"],
		["大学","dàxué"],
		["的","de"],
		["学生","xuésheng"],
		["你","nǐ"],
		["好","hǎo"],
		["你好","nǐhǎo"],
		["姓","xìng"],
		["林","lín"],
		["吗","ma"],
		["我","wǒ"],
		["不","bù"],
		["进修","jìnxiū"],
		["学院","xuéyuàn"],
		["日本","rìběn"],
		["留学生","liúxuéshēng"],
		["名片","míngpiàn"],
		["请","qǐng"],
		["多","duō"],
		["指教","zhǐjiào"],
		["谢谢","xièxie"],
		["外语","wàiyǔ"],
		["二","èr"],
		["年级","niánjí"],
		["您","nín"],
		["他","tā"],
		["它","tā"],
		["我们","wǒmen"],
		["咱们","zánmen"],
		["你们","nǐmen"],
		["她们","tāmen"],
		["他们","tāmen"],
		["它们","tāmen"],
		["英国","yīngguó"],
		["美国人","měiguórén"],
		["黄","huáng"],
		["王","wáng"],
		["张","zhāng"],
		["教授","jiàoshòu"],
		["研究","yánjiū"],
		["物理","wùlǐ"],
		["每天","měitiān"],
		["打","dǎ"],
		["太极拳","tàijíquán"],
		["那","nà"],
		["哪","nǎ"],
		["广东菜","guǎngdōngcài"],
		["水性笔","shuǐxìngbǐ"],
		["油性笔","yóuxìngbǐ"],
		["大阪","dàbǎn"],
		["车站","chēzhàn"],
		["新大阪","xīndàbǎn"],
		["月饼","yuèbing"],
		["这个","zhèige"],
		["那个","nèige"],
		["家","jiā"],
		["要","yào"],
		["哪个","něige"],
		["鲁迅","lǔxùn"],
		["文学家","wénxuéjiā"],
		["思想家","sīxiǎngjiā"],
		["小","xiǎo"],
		["李","lǐ"],
		["独生子女","dúshēngzǐnǚ"],
		["教(動詞)","jiāo"],
		["英语","yīngyǔ"],
		["眼镜","yǎnjìng"],
		["手表","shǒubiǎo"],
		["笔记本","bǐjìběn"],
		["电脑","diànnǎo"],
		["贝多芬","bèiduōfēn"],
		["交响曲","jiāoxiǎngqǔ"],
		["梵高","fàngāo"],
		["自画像","zìhuàxiàng"],
		["图书馆","túshūguǎn"],
		["书","shū"],
		["博物馆","bówùguǎn"],
		["展品","zhǎnpǐn"],
		["快餐店","kuàicāndiàn"],
		["菜单","càidān"],
		["学校","xuéxiào"],
		["公司","gōngsī"],
		["妈妈","māma"],
		["哥哥","gēge"],
		["广东人","guǎngdōngrén"],
		["福建人","fújiànrén"],
		["中国","zhōngguó"],
		["韩国","hánguó"],
		["参加","cānjiā"],
		["生日","shēngri"],
		["聚会","jùhuì"],
		["爷爷","yéye"],
		["奶奶","nǎinai"],
		["姥爷","lǎoye"],
		["姥姥","lǎolao"],
		["姑姑","gūgu"],
		["叔叔","shūshu"],
		["伯伯","bóbo"],
		["爸爸","bàba"],
		["姨妈","yímā"],
		["姨","yí"],
		["舅舅","jiùjiu"],
		["妹妹","mèimei"],
		["姐姐","jiějie"],
		["弟弟","dìdi"],
		["爱人","àiren"],
		["丈夫","zhàngfu"],
		["妻子","qīzi"],
		["儿子","érzi"],
		["女儿","nǚ'ér"],

	];
	let words=word_list //出題する単語集。動的。
	const shuffle=document.getElementById('shuffle'); //htmlの要素をidで取得
	const all_mode=document.getElementById('all_mode');
	const wrong_mode=document.getElementById('wrong_mode');
	const num=document.getElementById('num');
	const chn=document.getElementById('chn');
	const btn=document.getElementById('btn');
	const output=document.getElementById('output');
	const result=document.getElementById('result');
	document.addEventListener('keydown', keydown_ivent);
	const ls = localStorage;
	let input = "";

	function keydown_ivent(e) { //キー入力での動作


		switch (e.key) {
			case 'Backspace':
				input = input.slice(0,input.length-1);
				break;
			case 'Enter':
				e.preventDefault(); // フォームのデフォルト動作を防ぐ
                		btn.click(); //btn要素のクリックに対応させる
				break;
			case 'Shift':
			case 'Control':
			case 'Delete':
			case 'Meta':
			case 'Escape':
			case 'Insert':
			case 'Alt':
			case 'ArrowRight':
			case 'ArrowLeft':
			case 'ArrowUp':
			case 'ArrowDown':
			case 'Hiragana':
			case 'Convert':
			case 'Hankaku':
			case 'Zenkaku':
			case 'Alphanumeric':
				break;
			case 'v':
				input=String(input)+'ü';
				break;
			default:
				input=String(input)+String(e.key);
			};
		

		output.innerHTML = input; //htmlに表示する
		return false;
	};
	function shuffle_func(a){ //配列をシャッフルする関数（ネットからとってきた）
		const array=a.slice()
		for (let i=array.length-1;i>=0;i--){
			const randomIndex=Math.floor(Math.random()*(i+1));
			[array[i], array[randomIndex]]=[array[randomIndex],array[i]]
		}
		return array

	}
	let wrong=[]; //間違えた単語一覧用のリスト
	let wrongwords=[]; //wordsを置き換えるための配列
	let index=0;
	let correct=0;

	btn.addEventListener('click', ()=>{
		let ans = convertToneNumberToMark(input); // ←ここで変換する！
		let msg = '';
		chn.classList.remove("fade");
		
		if (ans == words[index][1]){
			correct++;
			msg = '〇';
		} else {
			msg = `× 正:${words[index][1]}`;
			wrong.push(words[index][0]);
			wrongwords.push([String(words[index][0]), String(words[index][1])]);
		}
	
		if (index == words.length-1){
			index = -1;
			document.getElementById('wrong').innerHTML = `全${words.length}問中${correct}問正解<br>` + "間違えた単語でもう一度テスト:<br>" + wrong;
			wrong = [];
			words = wrongwords;
			ls.setItem("wrong1", JSON.stringify(wrongwords));
			wrongwords = [];
		}
		input = "";
		output.value = ""; // 入力欄もクリア
		result.innerHTML = msg;
		result.classList.remove('fade');
		setTimeout(function(){
			result.classList.add('fade');
		},1500);
		setItem(++index);
		output.focus();
	});
	
	function convertToneNumberToMarkRealTime(pinyin) {
	    	const toneMap = {
       			 	'a': ['ā','á','ǎ','à'],
       			 	'o': ['ō','ó','ǒ','ò'],
       			 	'e': ['ē','é','ě','è'],
      			 	'i': ['ī','í','ǐ','ì'],
       			 	'u': ['ū','ú','ǔ','ù'],
       				'ü': ['ǖ','ǘ','ǚ','ǜ']
			};
   			 pinyin = pinyin.replace(/v/g, 'ü');

			return pinyin.replace(/([aeiouü])([1-4])/g, (match, vowel, tone) => {
			return toneMap[vowel][parseInt(tone) - 1];
		});
	}

	function setItem(index){ //プログレスバー
		chn.textContent=words[index][0];
		num.innerHTML=`${index+1}問目/全${words.length}問`;
		document.getElementById("bar").style.width = (index+1)/words.length*100 + "%";
	}
	setItem(index);
	shuffle.addEventListener('click',()=>{ //単語をシャッフル
		if (index==0){ //面倒なのでindexが一番最初じゃないとシャッフルできないようにしました
			words=shuffle_func(words);
			setItem(0);
			result.innerHTML="単語をシャッフルしました"
		}else{
			result.innerHTML="再読み込みしてもう一度試してください"
		}
	})
	all_mode.addEventListener('click',()=>{ //全ての単語モード
		if (index==0){ //同上
			words=word_list;
			setItem(0);
			result.innerHTML="全ての単語モードに切り替えました"
		}else{
			result.innerHTML="再読み込みしてもう一度試してください"
		}
	})
	wrong_mode.addEventListener('click',()=>{ //苦手単語モード
		if (index==0){
			words=JSON.parse(ls.getItem("wrong1")); //ここも課によって変える
			setItem(0);
			result.innerHTML="苦手単語モードに切り替えました"
		}else{
			result.innerHTML="再読み込みしてもう一度試してください"
		}
	})
}
