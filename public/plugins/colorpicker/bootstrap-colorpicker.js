!function(r){"use strict";function i(e){this.value={h:0,s:0,b:0,a:1},this.origFormat=null,e&&(void 0!==e.toLowerCase?this.setColor(e):void 0!==e.h&&(this.value=e))}function s(e,t){this.element=r(e).addClass("colorpicker-element"),this.options=r.extend({},o,this.element.data(),t),this.component=this.options.component,this.component=!1!==this.component&&this.element.find(this.component),this.component&&0===this.component.length&&(this.component=!1),this.container=!0===this.options.container?this.element:this.options.container,this.container=!1!==this.container&&r(this.container),this.input=this.element.is("input")?this.element:!!this.options.input&&this.element.find(this.options.input),this.input&&0===this.input.length&&(this.input=!1),this.color=new i(!1!==this.options.color?this.options.color:this.getValue()),this.format=!1!==this.options.format?this.options.format:this.color.origFormat,this.picker=r(this.options.template),this.options.inline?this.picker.addClass("colorpicker-inline colorpicker-visible"):this.picker.addClass("colorpicker-hidden"),this.options.horizontal&&this.picker.addClass("colorpicker-horizontal"),"rgba"!==this.format&&"hsla"!==this.format||this.picker.addClass("colorpicker-with-alpha"),this.picker.on("mousedown.colorpicker",r.proxy(this.mousedown,this)),this.picker.appendTo(this.container?this.container:r("body")),!1!==this.input&&(this.input.on({"keyup.colorpicker":r.proxy(this.keyup,this)}),!1===this.component&&this.element.on({"focus.colorpicker":r.proxy(this.show,this)}),!1===this.options.inline&&this.element.on({"focusout.colorpicker":r.proxy(this.hide,this)})),!1!==this.component&&this.component.on({"click.colorpicker":r.proxy(this.show,this)}),!1===this.input&&!1===this.component&&this.element.on({"click.colorpicker":r.proxy(this.show,this)}),this.update(),r(r.proxy(function(){this.element.trigger("create")},this))}var o={horizontal:!(i.prototype={constructor:i,_sanitizeNumber:function(e){return"number"==typeof e?e:isNaN(e)||null===e||""===e||void 0===e?1:void 0!==e.toLowerCase?parseFloat(e):1},setColor:function(e){e=e.toLowerCase(),this.value=this.stringToHSB(e)||{h:0,s:0,b:0,a:1}},stringToHSB:function(s){s=s.toLowerCase();var a=this,n=!1;return r.each(this.stringParsers,function(e,t){var o=t.re.exec(s),i=o&&t.parse.apply(a,[o]),r=t.format||"rgba";return!i||(n=r.match(/hsla?/)?a.RGBtoHSB.apply(a,a.HSLtoRGB.apply(a,i)):a.RGBtoHSB.apply(a,i),a.origFormat=r,!1)}),n},setHue:function(e){this.value.h=1-e},setSaturation:function(e){this.value.s=e},setBrightness:function(e){this.value.b=1-e},setAlpha:function(e){this.value.a=parseInt(100*(1-e),10)/100},toRGB:function(e,t,o,i){var r,s,a,n,l,c,h,u;switch(e=e||this.value.h,t=t||this.value.s,o=o||this.value.b,i=i||this.value.a,e&&void 0===t&&void 0===o&&(t=e.s,o=e.v,e=e.h),c=o*(1-t),h=o*(1-(l=6*e-(n=Math.floor(6*e)))*t),u=o*(1-(1-l)*t),n%6){case 0:r=o,s=u,a=c;break;case 1:r=h,s=o,a=c;break;case 2:r=c,s=o,a=u;break;case 3:r=c,s=h,a=o;break;case 4:r=u,s=c,a=o;break;case 5:r=o,s=c,a=h}return{r:Math.floor(255*r),g:Math.floor(255*s),b:Math.floor(255*a),a:i}},toHex:function(e,t,o,i){var r=this.toRGB(e,t,o,i);return"#"+(1<<24|parseInt(r.r)<<16|parseInt(r.g)<<8|parseInt(r.b)).toString(16).substr(1)},toHSL:function(e,t,o,i){e=e||this.value.h;var r=(2-(t=t||this.value.s))*(o=o||this.value.b),s=t*o;return 1<(s/=0<r&&r<=1?r:2-r)&&(s=1),{h:e,s:s,l:r/=2,a:i=i||this.value.a}},RGBtoHSB:function(e,t,o,i){var r,s,a,n;return e/=255,t/=255,o/=255,r=((r=0==(n=(a=Math.max(e,t,o))-Math.min(e,t,o))?null:a===e?(t-o)/n:a===t?(o-e)/n+2:(e-t)/n+4)+360)%6*60/360,s=0==n?0:n/a,{h:this._sanitizeNumber(r),s:s,b:a,a:this._sanitizeNumber(i)}},HueToRGB:function(e,t,o){return o<0?o+=1:1<o&&(o-=1),6*o<1?e+(t-e)*o*6:2*o<1?t:3*o<2?e+(t-e)*(2/3-o)*6:e},HSLtoRGB:function(e,t,o,i){var r;t<0&&(t=0);var s=2*o-(r=o<=.5?o*(1+t):o+t-o*t),a=e+1/3,n=e,l=e-1/3;return[Math.round(255*this.HueToRGB(s,r,a)),Math.round(255*this.HueToRGB(s,r,n)),Math.round(255*this.HueToRGB(s,r,l)),this._sanitizeNumber(i)]},toString:function(e){switch(e=e||"rgba"){case"rgb":return"rgb("+(t=this.toRGB()).r+","+t.g+","+t.b+")";case"rgba":var t;return"rgba("+(t=this.toRGB()).r+","+t.g+","+t.b+","+t.a+")";case"hsl":var o=this.toHSL();return"hsl("+Math.round(360*o.h)+","+Math.round(100*o.s)+"%,"+Math.round(100*o.l)+"%)";case"hsla":o=this.toHSL();return"hsla("+Math.round(360*o.h)+","+Math.round(100*o.s)+"%,"+Math.round(100*o.l)+"%,"+o.a+")";case"hex":return this.toHex();default:return!1}},stringParsers:[{re:/#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/,format:"hex",parse:function(e){return[parseInt(e[1],16),parseInt(e[2],16),parseInt(e[3],16),1]}},{re:/#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/,format:"hex",parse:function(e){return[parseInt(e[1]+e[1],16),parseInt(e[2]+e[2],16),parseInt(e[3]+e[3],16),1]}},{re:/rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*?\)/,format:"rgb",parse:function(e){return[e[1],e[2],e[3],1]}},{re:/rgb\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*?\)/,format:"rgb",parse:function(e){return[2.55*e[1],2.55*e[2],2.55*e[3],1]}},{re:/rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,format:"rgba",parse:function(e){return[e[1],e[2],e[3],e[4]]}},{re:/rgba\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,format:"rgba",parse:function(e){return[2.55*e[1],2.55*e[2],2.55*e[3],e[4]]}},{re:/hsl\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*?\)/,format:"hsl",parse:function(e){return[e[1]/360,e[2]/100,e[3]/100,e[4]]}},{re:/hsla\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,format:"hsla",parse:function(e){return[e[1]/360,e[2]/100,e[3]/100,e[4]]}},{re:/^([a-z]{3,})$/,format:"alias",parse:function(e){var t=this.colorNameToHex(e[0])||"#000000",o=this.stringParsers[0].re.exec(t);return o&&this.stringParsers[0].parse.apply(this,[o])}}],colorNameToHex:function(e){var t={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",gold:"#ffd700",goldenrod:"#daa520",gray:"#808080",green:"#008000",greenyellow:"#adff2f",honeydew:"#f0fff0",hotpink:"#ff69b4","indianred ":"#cd5c5c","indigo ":"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavender:"#e6e6fa",lavenderblush:"#fff0f5",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgrey:"#d3d3d3",lightgreen:"#90ee90",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370d8",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#d87093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};return void 0!==t[e.toLowerCase()]&&t[e.toLowerCase()]}}),inline:!1,color:!1,format:!1,input:"input",container:!1,component:".add-on, .input-group-addon",sliders:{saturation:{maxLeft:100,maxTop:100,callLeft:"setSaturation",callTop:"setBrightness"},hue:{maxLeft:0,maxTop:100,callLeft:!1,callTop:"setHue"},alpha:{maxLeft:0,maxTop:100,callLeft:!1,callTop:"setAlpha"}},slidersHorz:{saturation:{maxLeft:100,maxTop:100,callLeft:"setSaturation",callTop:"setBrightness"},hue:{maxLeft:100,maxTop:0,callLeft:"setHue",callTop:!1},alpha:{maxLeft:100,maxTop:0,callLeft:"setAlpha",callTop:!1}},template:'<div class="colorpicker dropdown-menu"><div class="colorpicker-saturation"><i><b></b></i></div><div class="colorpicker-hue"><i></i></div><div class="colorpicker-alpha"><i></i></div><div class="colorpicker-color"><div /></div></div>'};s.version="2.0.0-beta",s.Color=i,s.prototype={constructor:s,destroy:function(){this.picker.remove(),this.element.removeData("colorpicker").off(".colorpicker"),!1!==this.input&&this.input.off(".colorpicker"),!1!==this.component&&this.component.off(".colorpicker"),this.element.removeClass("colorpicker-element"),this.element.trigger({type:"destroy"})},reposition:function(){if(!1!==this.options.inline)return!1;var e=this.component?this.component.offset():this.element.offset();this.picker.css({top:e.top+(this.component?this.component.outerHeight():this.element.outerHeight()),left:e.left})},show:function(e){if(this.isDisabled())return!1;this.picker.addClass("colorpicker-visible").removeClass("colorpicker-hidden"),this.reposition(),r(window).on("resize.colorpicker",r.proxy(this.reposition,this)),!this.hasInput()&&e&&e.stopPropagation&&e.preventDefault&&(e.stopPropagation(),e.preventDefault()),!1===this.options.inline&&r(window.document).on({"mousedown.colorpicker":r.proxy(this.hide,this)}),this.element.trigger({type:"showPicker",color:this.color})},hide:function(){this.picker.addClass("colorpicker-hidden").removeClass("colorpicker-visible"),r(window).off("resize.colorpicker",this.reposition),r(document).off({"mousedown.colorpicker":this.hide}),this.update(),this.element.trigger({type:"hidePicker",color:this.color})},updateData:function(e){return e=e||this.color.toString(this.format),this.element.data("color",e),e},updateInput:function(e){return e=e||this.color.toString(this.format),!1!==this.input&&this.input.prop("value",e),e},updatePicker:function(e){void 0!==e&&(this.color=new i(e));var t=!1===this.options.horizontal?this.options.sliders:this.options.slidersHorz,o=this.picker.find("i");if(0!==o.length)return!1===this.options.horizontal?(t=this.options.sliders,o.eq(1).css("top",t.hue.maxTop*(1-this.color.value.h)).end().eq(2).css("top",t.alpha.maxTop*(1-this.color.value.a))):(t=this.options.slidersHorz,o.eq(1).css("left",t.hue.maxLeft*(1-this.color.value.h)).end().eq(2).css("left",t.alpha.maxLeft*(1-this.color.value.a))),o.eq(0).css({top:t.saturation.maxTop-this.color.value.b*t.saturation.maxTop,left:this.color.value.s*t.saturation.maxLeft}),this.picker.find(".colorpicker-saturation").css("backgroundColor",this.color.toHex(this.color.value.h,1,1,1)),this.picker.find(".colorpicker-alpha").css("backgroundColor",this.color.toHex()),this.picker.find(".colorpicker-color, .colorpicker-color div").css("backgroundColor",this.color.toString(this.format)),e},updateComponent:function(e){if(e=e||this.color.toString(this.format),!1!==this.component){var t=this.component.find("i").eq(0);0<t.length?t.css({backgroundColor:e}):this.component.css({backgroundColor:e})}return e},update:function(e){var t=this.updateComponent();return!1===this.getValue(!1)&&!0!==e||(this.updateInput(t),this.updateData(t)),this.updatePicker(),t},setValue:function(e){this.color=new i(e),this.update(),this.element.trigger({type:"changeColor",color:this.color,value:e})},getValue:function(e){var t;return e=void 0===e?"#000000":e,void 0!==(t=this.hasInput()?this.input.val():this.element.data("color"))&&""!==t&&null!==t||(t=e),t},hasInput:function(){return!1!==this.input},isDisabled:function(){return!!this.hasInput()&&!0===this.input.prop("disabled")},disable:function(){return!!this.hasInput()&&(this.input.prop("disabled",!0),!0)},enable:function(){return!!this.hasInput()&&(this.input.prop("disabled",!1),!0)},currentSlider:null,mousePointer:{left:0,top:0},mousedown:function(e){e.stopPropagation(),e.preventDefault();var t=r(e.target).closest("div"),o=this.options.horizontal?this.options.slidersHorz:this.options.sliders;if(!t.is(".colorpicker")){if(t.is(".colorpicker-saturation"))this.currentSlider=r.extend({},o.saturation);else if(t.is(".colorpicker-hue"))this.currentSlider=r.extend({},o.hue);else{if(!t.is(".colorpicker-alpha"))return!1;this.currentSlider=r.extend({},o.alpha)}var i=t.offset();this.currentSlider.guide=t.find("i")[0].style,this.currentSlider.left=e.pageX-i.left,this.currentSlider.top=e.pageY-i.top,this.mousePointer={left:e.pageX,top:e.pageY},r(document).on({"mousemove.colorpicker":r.proxy(this.mousemove,this),"mouseup.colorpicker":r.proxy(this.mouseup,this)}).trigger("mousemove")}return!1},mousemove:function(e){e.stopPropagation(),e.preventDefault();var t=Math.max(0,Math.min(this.currentSlider.maxLeft,this.currentSlider.left+((e.pageX||this.mousePointer.left)-this.mousePointer.left))),o=Math.max(0,Math.min(this.currentSlider.maxTop,this.currentSlider.top+((e.pageY||this.mousePointer.top)-this.mousePointer.top)));return this.currentSlider.guide.left=t+"px",this.currentSlider.guide.top=o+"px",this.currentSlider.callLeft&&this.color[this.currentSlider.callLeft].call(this.color,t/100),this.currentSlider.callTop&&this.color[this.currentSlider.callTop].call(this.color,o/100),this.update(!0),this.element.trigger({type:"changeColor",color:this.color}),!1},mouseup:function(e){return e.stopPropagation(),e.preventDefault(),r(document).off({"mousemove.colorpicker":this.mousemove,"mouseup.colorpicker":this.mouseup}),!1},keyup:function(e){if(38===e.keyCode)this.color.value.a<1&&(this.color.value.a=Math.round(100*(this.color.value.a+.01))/100),this.update(!0);else if(40===e.keyCode)0<this.color.value.a&&(this.color.value.a=Math.round(100*(this.color.value.a-.01))/100),this.update(!0);else{var t=this.input.val();this.color=new i(t),!1!==this.getValue(!1)&&(this.updateData(),this.updateComponent(),this.updatePicker())}this.element.trigger({type:"changeColor",color:this.color,value:t})}},r.colorpicker=s,r.fn.colorpicker=function(i){return this.each(function(){var e=r(this),t=e.data("colorpicker"),o="object"==typeof i?i:{};t||"string"==typeof i?"string"==typeof i&&t[i].apply(t,Array.prototype.slice.call(arguments,1)):e.data("colorpicker",new s(this,o))})},r.fn.colorpicker.constructor=s}(window.jQuery);