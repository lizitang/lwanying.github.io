var EventUtil = {
	addHandler:function(element,type,handler){
		if(element.addEventListener){
			element.addEventListener(type,handler,false)//采用事件冒泡false
		}else if(element.attachEvent){
			element.attachEvent('on'+type,handler)
		}else{
			element['on'+type]=handler;
		}
	},
	removeHandler:function(element,type,handler){
		if(element.removeEventListener){
			element.removeEventListener(type,handler,false)
		}else if(element.detachEvent){
			element.detachEvent('on'+type,handler)
		}else{
			element['on'+type]=null;
		}
	},
}


var EventUtil ={
	addHandler: function(ele,type,handler){
		if(ele.addEventListener){
			ele.addEventListener(type,handler,false)
		}else if(){
			ele.attachEvent('on'+type,handler)
		}else{
			ele['on'+type]=handler;
		}
	}
}