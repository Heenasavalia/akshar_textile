!function(u){var y,x,w,m=Object.prototype.hasOwnProperty;u.plot.plugins.push({init:function(g,t){var e=t.Canvas;null==y&&(x=e.prototype.getTextInfo,w=e.prototype.addText,y=e.prototype.render),e.prototype.render=function(){if(!g.getOptions().canvas)return y.call(this);var t=this.context,e=this._textCache;for(var i in t.save(),t.textBaseline="middle",e)if(m.call(e,i)){var n=e[i];for(var o in n)if(m.call(n,o)){var r=n[o],s=!0;for(var a in r)if(m.call(r,a)){var l=r[a],h=l.positions,f=l.lines;s&&(t.fillStyle=l.font.color,t.font=l.font.definition,s=!1);for(var p,c=0;p=h[c];c++)if(p.active)for(var v,d=0;v=p.lines[d];d++)t.fillText(f[d].text,v[0],v[1]);else h.splice(c--,1);0==h.length&&delete r[a]}}}t.restore()},e.prototype.getTextInfo=function(t,e,i,n,o){if(!g.getOptions().canvas)return x.call(this,t,e,i,n,o);var r,s,a,l;if(e=""+e,r="object"==typeof i?i.style+" "+i.variant+" "+i.weight+" "+i.size+"px "+i.family:i,null==(s=this._textCache[t])&&(s=this._textCache[t]={}),null==(a=s[r])&&(a=s[r]={}),null==(l=a[e])){var h=this.context;if("object"!=typeof i){var f=u("<div>&nbsp;</div>").css("position","absolute").addClass("string"==typeof i?i:null).appendTo(this.getTextLayer(t));(i={lineHeight:f.height(),style:f.css("font-style"),variant:f.css("font-variant"),weight:f.css("font-weight"),family:f.css("font-family"),color:f.css("color")}).size=f.css("line-height",1).height(),f.remove()}r=i.style+" "+i.variant+" "+i.weight+" "+i.size+"px "+i.family,l=a[e]={width:0,height:0,positions:[],lines:[],font:{definition:r,color:i.color}},h.save(),h.font=r;for(var p=(e+"").replace(/<br ?\/?>|\r\n|\r/g,"\n").split("\n"),c=0;c<p.length;++c){var v=p[c],d=h.measureText(v);l.width=Math.max(d.width,l.width),l.height+=i.lineHeight,l.lines.push({text:v,width:d.width,height:i.lineHeight})}h.restore()}return l},e.prototype.addText=function(t,e,i,n,o,r,s,a,l){if(!g.getOptions().canvas)return w.call(this,t,e,i,n,o,r,s,a,l);var h=this.getTextInfo(t,n,o,r,s),f=h.positions,p=h.lines;i+=h.height/p.length/2,i="middle"==l?Math.round(i-h.height/2):"bottom"==l?Math.round(i-h.height):Math.round(i),window.opera&&window.opera.version().split(".")[0]<12&&(i-=2);for(var c,v=0;c=f[v];v++)if(c.x==e&&c.y==i)return void(c.active=!0);c={active:!0,lines:[],x:e,y:i},f.push(c);var d;for(v=0;d=p[v];v++)"center"==a?c.lines.push([Math.round(e-d.width/2),i]):"right"==a?c.lines.push([Math.round(e-d.width),i]):c.lines.push([Math.round(e),i]),i+=d.height}},options:{canvas:!0},name:"canvas",version:"1.0"})}(jQuery);