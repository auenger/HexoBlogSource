(function($){var flipTimer=function(element,options){this.element=element;if(!this.element.hasClass('flipTimer')){this.element.addClass('flipTimer');}
this.userOptions=options;this.defaultOptions=flipTimer.defaults;this.options=$.extend({},this.defaultOptions,this.userOptions);if(this.element.find('.seconds').length>0){this.options.seconds=this.element.find('.seconds')[0];}
if(this.element.find('.minutes').length>0){this.options.minutes=this.element.find('.minutes')[0];}
if(this.element.find('.hours').length>0){this.options.hours=this.element.find('.hours')[0];}
if(this.element.find('.days').length>0){this.options.days=this.element.find('.days')[0];}
this.initDate=new Date();this.options.date=new Date(this.options.date);this.calculateDate();};flipTimer.defaults={seconds:false,minutes:false,hours:false,days:false,date:(new Date()).toDateString(),direction:'up',callback:null,digitTemplate:''+
'<div class="digit">'+
'  <div class="digit-top">'+
'    <span class="digit-wrap"></span>'+
'  </div>'+
'  <div class="shadow-top"></div>'+
'  <div class="digit-bottom">'+
'    <span class="digit-wrap"></span>'+
'  </div>'+
'  <div class="shadow-bottom"></div>'+
'</div>'};flipTimer.prototype={calculateDate:function(){var dateDiff;if(this.options.direction=='down'){dateDiff=this.options.date-this.initDate;}else if(this.options.direction=='up'){dateDiff=this.initDate-this.options.date;}
this.seconds=Math.floor(dateDiff/1000)%60;this.minutes=Math.floor(dateDiff/1000/60)%60;this.hours=Math.floor(dateDiff/1000/3600)%24;this.days=Math.floor(dateDiff/1000/60/60/24);this.render();},render:function(){if(this.options.seconds){this.renderDigits(this.options.seconds,this.seconds);}
if(this.options.minutes){this.renderDigits(this.options.minutes,this.minutes);}
if(this.options.hours){this.renderDigits(this.options.hours,this.hours);}
if(this.options.days){this.renderDigits(this.options.days,this.days);}
this.startTimer();},renderDigits:function(subject,value){var i,x,max,maxDigit,currentDigit,_this=this,number_array;if($(subject).find('.digit').length==0){if(_this.days<0&&_this.hours<0&&_this.minutes<0&&_this.seconds<0){number_array=[0,0];}else if(_this.days>99){number_array=[0,0];}else{number_array=String((value/10).toFixed(1)).split('.');}
if(subject==_this.options.seconds||subject==_this.options.minutes){maxDigit=5;}else if(subject==_this.options.hours){maxDigit=2;}else{maxDigit=9;}
$(subject).append('<div class="digit-set"></div><div class="digit-set"></div>');$(subject).find('.digit-set').each(function(el){max=(el==0)?maxDigit:9;for(i=0;i<=max;i++){$(this).append(_this.options.digitTemplate);x=(_this.options.direction=='down')?max-i:i;currentDigit=$(this).find('.digit')[i];$(currentDigit).find('.digit-wrap').append(x);if(x==number_array[el]){$(currentDigit).addClass('active');}else if(number_array[el]!=0&&((x+1)==number_array[el])){$(currentDigit).addClass('previous');}else if(number_array[el]==0&&x==max){$(currentDigit).addClass('previous');}}});}},startTimer:function(){var _this=this;clearInterval(this.timer);this.timer=setInterval(function(){if(_this.days<=0&&_this.hours<=0&&_this.minutes<=0&&_this.seconds<=0){if(_this.options.callback){_this.options.callback();}
clearInterval(_this.timer);return;}
if((_this.days>99)||(_this.days==99&&_this.hours==23&&_this.minutes==59&&_this.seconds==59)){clearInterval(_this.timer);return;}
(_this.options.direction=='down')?_this.seconds--:_this.seconds++;if(_this.options.seconds)_this.increaseDigit(_this.options.seconds);if(_this.seconds==60||_this.seconds==-1){if(_this.options.direction=='down'){_this.seconds=59;_this.minutes--;}else{_this.seconds=0;_this.minutes++;}
if(_this.options.minutes)_this.increaseDigit(_this.options.minutes);}
if(_this.minutes==60||_this.minutes==-1){if(_this.options.direction=='down'){_this.minutes=59;_this.hours--;}else{_this.minutes=0;_this.hours++;}
if(_this.options.hours)_this.increaseDigit(_this.options.hours);}
if(_this.hours==24||_this.hours==-1){if(_this.options.direction=='down'){_this.hours=23;_this.days--;}else{_this.hours=0;_this.days++;}
if(_this.options.days)_this.increaseDigit(_this.options.days);}},1000);},increaseDigit:function(target){var digitSets=new Array(),_this=this;$(target).find('.digit-set').each(function(){digitSets.push(this);});increase(digitSets[digitSets.length-1]);function increase(el){var current=$(el).find('.active'),previous=$(el).find('.previous'),index=$.inArray(el,digitSets);previous.removeClass('previous');current.removeClass('active').addClass('previous');if(current.next().length==0){if(_this.options.direction=='down'&&target==_this.options.hours&&(_this.hours==-1||_this.hours==23)&&$(el).find('.digit').length==10){$($(el).find('.digit')[6]).addClass('active');}else{$(el).find('.digit:first-child').addClass('active');}
if(index!=0){increase(digitSets[index-1]);}}else{if(_this.options.direction=="up"&&target==_this.options.hours&&_this.hours==24){$(el).find('.digit:first-child').addClass('active');increase(digitSets[index-1]);}else{current.next().addClass('active');}}}}};$.fn.flipTimer=function(options){return this.each(function(){if(!$(this).data('flipTimer')){$(this).data('flipTimer',new flipTimer($(this),options));}});};})(jQuery);