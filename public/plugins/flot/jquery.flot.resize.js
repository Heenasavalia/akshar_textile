!function(o,r,s){function h(){for(var e=m.length-1;0<=e;e--){var i=o(m[e]);if(i[0]==r||i.is(":visible")){var t=i.width(),n=i.height(),a=i.data(d);!a||t===a.w&&n===a.h?l[f]=l[v]:(l[f]=l[g],i.trigger(c,[a.w=t,a.h=n]))}else(a=i.data(d)).w=0,a.h=0}null!==u&&(u=r.requestAnimationFrame(h))}var u,m=[],l=o.resize=o.extend(o.resize,{}),t="setTimeout",c="resize",d=c+"-special-event",f="delay",v="pendingDelay",g="activeDelay",n="throttleWindow";l[v]=250,l[g]=20,l[f]=l[v],l[n]=!0,o.event.special[c]={setup:function(){if(!l[n]&&this[t])return!1;var e=o(this);m.push(this),e.data(d,{w:e.width(),h:e.height()}),1===m.length&&(u=s,h())},teardown:function(){if(!l[n]&&this[t])return!1;for(var e=o(this),i=m.length-1;0<=i;i--)if(m[i]==this){m.splice(i,1);break}e.removeData(d),m.length||(cancelAnimationFrame(u),u=null)},add:function(e){function i(e,i,t){var n=o(this),a=n.data(d);a.w=i!==s?i:n.width(),a.h=t!==s?t:n.height(),r.apply(this,arguments)}return!(!l[n]&&this[t])&&(o.isFunction(e)?(r=e,i):(r=e.handler,void(e.handler=i)));var r}},r.requestAnimationFrame||(r.requestAnimationFrame=r.webkitRequestAnimationFrame||r.mozRequestAnimationFrame||r.oRequestAnimationFrame||r.msRequestAnimationFrame||function(e,i){return r.setTimeout(e,l[f])}),r.cancelAnimationFrame||(r.cancelAnimationFrame=r.webkitCancelRequestAnimationFrame||r.mozCancelRequestAnimationFrame||r.oCancelRequestAnimationFrame||r.msCancelRequestAnimationFrame||clearTimeout)}(jQuery,this),jQuery.plot.plugins.push({init:function(i){function t(){var e=i.getPlaceholder();0!=e.width()&&0!=e.height()&&(i.resize(),i.setupGrid(),i.draw())}i.hooks.bindEvents.push(function(e,i){e.getPlaceholder().resize(t)}),i.hooks.shutdown.push(function(e,i){e.getPlaceholder().unbind("resize",t)})},options:{},name:"resize",version:"1.0"});