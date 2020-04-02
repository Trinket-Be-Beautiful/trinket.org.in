function PopupConfig()
{this.prefix='sgpb';this.popupId;this.popupData;this.openDelay=0;this.currentObj={};this.allowed=true;this.showButton=true;this.buttonPosition='topRight';this.buttonInside=true;this.autoclose=false;this.overlayShouldClose=true;this.contentShouldClose=false;this.escShouldClose=true;this.closeButtonImage=sgpbPublicUrl+'img/close.png';this.popupTheme=1;this.popupType='html';this.closeButtonWidth=21;this.closeButtonHeight=21;this.closeButtonWidthType='px';this.closeButtonHeightType='px';this.closeButtonType='IMG';this.closeButtonText='Close';this.closeButtonDelay=0;this.overlayVisible=true;this.overlayColor='black';this.overlayOpacity=80;this.overlayAddClass='sgpb-popup-overlay sg-popup-overlay';this.contentPadding=8;this.zIndex=9999;this.contentShowBackground=true;this.contentBackgroundColor='#ffffff';this.contentBackgroundImage='';this.contentBackgroundMode='none';this.contentBackgroundPosition='';this.contentBorderStyle='solid';this.contentBorderRadius=0;this.contentBorderRadiusType='%';this.contentBorderColor='#f00';this.contentBorderWidth=0;this.boxBorderWidth=0;this.contentShadowColor='#ccc';this.contentShadowBlur=0;this.scrollingEnabled=false;this.shadowSpread=0;this.contentAddClass='class2';this.contents=false;this.positionRight=false;this.positionTop=false;this.positionBottom=false;this.positionLeft=false;this.width='-1';this.height='-1';this.maxWidth='-1';this.maxHeight='-1';this.minWidth='-1';this.minHeight='-1';this.srcElement='';this.openAnimationEffect='';this.openAnimationSpeed=0;this.openAnimationStatus=false;this.closeAnimationEffect='';this.closeAnimationSpeed=0;this.closeAnimationStatus=false;this.customShouldOpen=false;this.customShouldClose=false;}
String.prototype.firstToLowerCase=function()
{return this.charAt(0).toLowerCase()+this.slice(1);};String.prototype.firstToUpperCase=function()
{return this.charAt(0).toUpperCase()+this.slice(1);};PopupConfig.prototype.magicCall=function(functionName,arrgname)
{if(functionName.indexOf('get')!=-1){var param=functionName.replace(/^get/g,"").firstToLowerCase();return this[param];}
else{var param=functionName.replace(/^set/g,"").firstToLowerCase();this[param]=arrgname;}};PopupConfig.prototype.isIE=function()
{var ua=navigator.userAgent;var isIE=ua.indexOf('MSIE ')>-1||ua.indexOf('Trident/')>-1;return isIE;};PopupConfig.prototype.addCustomEvent=function(eventName,args)
{if(this.isIE()){var event=document.createEvent('CustomEvent');event.initCustomEvent(eventName,true,true,args);}
else{var event=new CustomEvent(eventName,{detail:args,bubbles:true,cancelable:true});}
window.dispatchEvent(event);};PopupConfig.prototype.combineConfigObj=function()
{var that=this;var eventSendArgs={'popupId':that.popupId,'popupData':that.popupData,'currentObj':that.currentObj};window.sgWindowOldWidth=window.innerWidth;window.sgWindowOldHeight=window.innerHeight;var config={popupId:that.popupId,openDelay:this.openDelay,popupTheme:this.popupTheme,popupType:this.popupType,closeBehavior:{allowed:this.allowed,showButton:this.showButton,buttonPosition:this.buttonPosition,buttonInside:this.buttonInside,autoclose:this.autoclose,overlayShouldClose:this.overlayShouldClose,contentShouldClose:this.contentShouldClose,escShouldClose:this.escShouldClose,right:this.closeButtonPositionRight,top:this.closeButtonPositionTop,bottom:this.closeButtonPositionBottom,left:this.closeButtonPositionLeft},openAnimation:{type:this.openAnimationEffect,speed:this.openAnimationSpeed,status:this.openAnimationStatus},closeAnimation:{type:this.closeAnimationEffect,speed:this.closeAnimationSpeed,status:this.closeAnimationStatus},closeButton:{data:this.buttonImage,width:this.closeButtonWidth,height:this.closeButtonHeight,widthType:this.closeButtonWidthType,heightType:this.closeButtonHeightType,type:this.closeButtonType,text:this.closeButtonText},overlay:{visible:this.overlayVisible,color:this.overlayColor,opacity:this.overlayOpacity,addClass:this.overlayAddClass},contentBox:{padding:this.contentPadding,zIndex:this.zIndex,showBackground:this.contentShowBackground,backgroundColor:this.contentBackgroundColor,backgroundImage:this.contentBackgroundImage,backgroundMode:this.contentBackgroundMode,backgroundPosition:this.contentBackgroundPosition,borderStyle:this.contentBorderStyle,borderRadius:this.contentBorderRadius,borderRadiusType:this.contentBorderRadiusType,borderColor:this.contentBorderColor,borderWidth:this.contentBorderWidth,boxBorderWidth:this.boxBorderWidth,shadowColor:this.contentShadowColor,shadowBlur:this.contentShadowBlur,scrollingEnabled:this.scrollingEnabled,shadowSpread:this.shadowSpread,addClass:this.contentAddClass},contents:this.contents,inline:this.srcElement,iframe:false,position:{right:this.positionRight,top:this.positionTop,bottom:this.positionBottom,left:this.positionLeft},sizingRanges:[{screenFrom:{width:0,height:0},screenTo:{width:300,height:3000},width:'100%',height:this.height,maxWidth:this.maxWidth,maxHeight:this.maxHeight,minWidth:this.minWidth,minHeight:this.minHeight},{screenFrom:{width:300,height:0},screenTo:{width:3000,height:3000},width:this.width,height:this.height,maxWidth:this.maxWidth,maxHeight:this.maxHeight,minWidth:this.minWidth,minHeight:this.minHeight}],shouldOpen:function(){return true;},willOpen:function(){that.addCustomEvent('sgpbWillOpen',eventSendArgs);},didOpen:function(args){var finalArgs=Object.assign(args,eventSendArgs);that.addCustomEvent('sgpbDidOpen',finalArgs);},shouldClose:function(){return true;},willClose:function(){that.addCustomEvent('sgpbWillClose',eventSendArgs);},didClose:function(){that.addCustomEvent('sgpbDidClose',eventSendArgs);}};if(this.customShouldOpen){config.shouldOpen=this.customShouldOpen;}
if(this.customShouldClose){config.shouldClose=this.customShouldClose;}
return config;};var obj=new PopupConfig();