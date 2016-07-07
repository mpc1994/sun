window.onload=function(){
	var oImg=document.getElementById("img1");
	var oPre=document.getElementById("prev");
	var oNext=document.getElementById("next");
	var oP2=document.getElementById("p2");
	var oP1=document.getElementById("p1");
	var oBtn1=document.getElementById("button1");
	var oBtn2=document.getElementById("button2");
	var oDiv=document.getElementById("div2");
	var arrSrc=["image/262126.jpg","image/265340.jpg","image/284397.jpg","image/342996.jpg"];
	var arrText=["风景一","风景二","风景三","风景四"]
	var num=0;
	var onOff = true;
	oBtn1.onclick=function(){
		onOff = true;
		oDiv.innerHTML="循环切换";
	}
	oBtn2.onclick=function(){
		onOff = false;
		oDiv.innerHTML="顺序切换(只能到最后一张或第一张)";
	}
	function change(){
	oP2.innerHTML=num+1+"/"+arrSrc.length;
	oImg.src=arrSrc[num];
	oP1.innerHTML=arrText[num];
}
change();
	oNext.onclick=function(){
	num=num+1;
	if (num==arrSrc.length) 
	{
		if (onOff) {
			num=0;
		}
		else{
			num=arrSrc.length-1;
		}
	}
 		change();
};
	oPre.onclick=function(){
		num=num-1;
		if (num==-1) {
			if (onOff) {
				num=arrSrc.length-1
			}
			else{
				num=0;
			}
			
		}
		change();
	}
}