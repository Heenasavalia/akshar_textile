!function(d,t){function e(u,r){"use strict";var s=function(e,t){if(!r.versionCheck||!r.versionCheck("1.10.1"))throw"DataTables Responsive requires DataTables 1.10.1 or newer";this.s={dt:new r.Api(e),columns:[]},this.s.dt.settings()[0].responsive||(t&&"string"==typeof t.details&&(t.details={type:t.details}),this.c=u.extend(!0,{},s.defaults,r.defaults.responsive,t),(e.responsive=this)._constructor())};s.prototype={_constructor:function(){var r=this,s=this.s.dt;s.settings()[0]._responsive=this,u(d).on("resize.dtr orientationchange.dtr",s.settings()[0].oApi._fnThrottle(function(){r._resize()})),s.on("destroy.dtr",function(){u(d).off("resize.dtr orientationchange.dtr draw.dtr")}),this.c.breakpoints.sort(function(e,t){return e.width<t.width?1:e.width>t.width?-1:0}),this._classLogic(),this._resizeAuto();var e=this.c.details;e.type&&(r._detailsInit(),this._detailsVis(),s.on("column-visibility.dtr",function(){r._detailsVis()}),s.on("draw.dtr",function(){s.rows({page:"current"}).iterator("row",function(e,t){var n=s.row(t);if(n.child.isShown()){var i=r.c.details.renderer(s,t);n.child(i,"child").show()}})}),u(s.table().node()).addClass("dtr-"+e.type)),this._resize()},_columnsVisiblity:function(t){var e,n,i=this.s.dt,r=this.s.columns,s=u.map(r,function(e){return(!e.auto||null!==e.minWidth)&&(!0===e.auto?"-":-1!==u.inArray(t,e.includeIn))}),o=0;for(e=0,n=s.length;e<n;e++)!0===s[e]&&(o+=r[e].minWidth);var a=i.settings()[0].oScroll,l=a.sY||a.sX?a.iBarWidth:0,d=i.table().container().offsetWidth-l-o;for(e=0,n=s.length;e<n;e++)r[e].control&&(d-=r[e].minWidth);var c=!1;for(e=0,n=s.length;e<n;e++)"-"!==s[e]||r[e].control||(c||d-r[e].minWidth<0?(c=!0,s[e]=!1):s[e]=!0,d-=r[e].minWidth);var h=!1;for(e=0,n=r.length;e<n;e++)if(!r[e].control&&!r[e].never&&!s[e]){h=!0;break}for(e=0,n=r.length;e<n;e++)r[e].control&&(s[e]=h);return-1===u.inArray(!0,s)&&(s[0]=!0),s},_classLogic:function(){function a(e,t){var n=h[e].includeIn;-1===u.inArray(t,n)&&n.push(t)}function l(e,t,n,i){var r,s,o;if(n){if("max-"===n)for(r=d._find(t).width,s=0,o=c.length;s<o;s++)c[s].width<=r&&a(e,c[s].name);else if("min-"===n)for(r=d._find(t).width,s=0,o=c.length;s<o;s++)c[s].width>=r&&a(e,c[s].name);else if("not-"===n)for(s=0,o=c.length;s<o;s++)-1===c[s].name.indexOf(i)&&a(e,c[s].name)}else h[e].includeIn.push(t)}var d=this,c=this.c.breakpoints,h=this.s.dt.columns().eq(0).map(function(e){var t=this.column(e).header().className;return{className:t,includeIn:[],auto:!1,control:!1,never:!!t.match(/\bnever\b/)}});h.each(function(e,s){for(var t=e.className.split(" "),o=!1,n=0,i=t.length;n<i;n++){var a=u.trim(t[n]);if("all"===a)return o=!0,void(e.includeIn=u.map(c,function(e){return e.name}));if("none"===a||"never"===a)return void(o=!0);if("control"===a)return o=!0,void(e.control=!0);u.each(c,function(e,t){var n=t.name.split("-"),i=new RegExp("(min\\-|max\\-|not\\-)?("+n[0]+")(\\-[_a-zA-Z0-9])?"),r=a.match(i);r&&(o=!0,r[2]===n[0]&&r[3]==="-"+n[1]?l(s,t.name,r[1],r[2]+r[3]):r[2]!==n[0]||r[3]||l(s,t.name,r[1],r[2]))})}o||(e.auto=!0)}),this.s.columns=h},_detailsInit:function(){var r=this,s=this.s.dt,e=this.c.details;"inline"===e.type&&(e.target="td:first-child");var o=e.target,t="string"==typeof o?o:"td";u(s.table().body()).on("click",t,function(e){if(u(s.table().node()).hasClass("collapsed")&&s.row(u(this).closest("tr")).length){if("number"==typeof o){var t=o<0?s.columns().eq(0).length+o:o;if(s.cell(this).index().column!==t)return}var n=s.row(u(this).closest("tr"));if(n.child.isShown())n.child(!1),u(n.node()).removeClass("parent");else{var i=r.c.details.renderer(s,n[0]);n.child(i,"child").show(),u(n.node()).addClass("parent")}}})},_detailsVis:function(){var i=this,r=this.s.dt,e=r.columns().indexes().filter(function(e){var t=r.column(e);return t.visible()?null:u(t.header()).hasClass("never")?null:e}),t=!0;(0===e.length||1===e.length&&this.s.columns[e[0]].control)&&(t=!1),t?r.rows({page:"current"}).eq(0).each(function(e){var t=r.row(e);if(t.child()){var n=i.c.details.renderer(r,t[0]);!1===n?t.child.hide():t.child(n,"child").show()}}):r.rows({page:"current"}).eq(0).each(function(e){r.row(e).child.hide()})},_find:function(e){for(var t=this.c.breakpoints,n=0,i=t.length;n<i;n++)if(t[n].name===e)return t[n]},_resize:function(){var e,t,n=this.s.dt,i=u(d).width(),r=this.c.breakpoints,s=r[0].name,o=this.s.columns;for(e=r.length-1;0<=e;e--)if(i<=r[e].width){s=r[e].name;break}var a=this._columnsVisiblity(s),l=!1;for(e=0,t=o.length;e<t;e++)if(!1===a[e]&&!o[e].never){l=!0;break}u(n.table().node()).toggleClass("collapsed",l),n.columns().eq(0).each(function(e,t){n.column(e).visible(a[t])})},_resizeAuto:function(){var n=this.s.dt,t=this.s.columns;if(this.c.auto&&-1!==u.inArray(!0,u.map(t,function(e){return e.auto}))){n.table().node().offsetWidth,n.columns;var e=n.table().node().cloneNode(!1),i=u(n.table().header().cloneNode(!1)).appendTo(e),r=u(n.table().body().cloneNode(!1)).appendTo(e);u(n.table().footer()).clone(!1).appendTo(e),n.rows({page:"current"}).indexes().flatten().each(function(e){var t=n.row(e).node().cloneNode(!0);n.columns(":hidden").flatten().length&&u(t).append(n.cells(e,":hidden").nodes().to$().clone()),u(t).appendTo(r)});var s=n.columns().header().to$().clone(!1);u("<tr/>").append(s).appendTo(i),"inline"===this.c.details.type&&u(e).addClass("dtr-inline collapsed");var o=u("<div/>").css({width:1,height:1,overflow:"hidden"}).append(e);o.find("th.never, td.never").remove(),o.insertBefore(n.table().node()),n.columns().eq(0).each(function(e){t[e].minWidth=s[e].offsetWidth||0}),o.remove()}}},s.breakpoints=[{name:"desktop",width:1/0},{name:"tablet-l",width:1024},{name:"tablet-p",width:768},{name:"mobile-l",width:480},{name:"mobile-p",width:320}],s.defaults={breakpoints:s.breakpoints,auto:!0,details:{renderer:function(o,e){var t=o.cells(e,":hidden").eq(0).map(function(e){var t=u(o.column(e.column).header()),n=o.cell(e).index();if(t.hasClass("control")||t.hasClass("never"))return"";var i=o.settings()[0],r=i.oApi._fnGetCellData(i,n.row,n.column,"display"),s=t.text();return s&&(s+=":"),'<li data-dtr-index="'+n.column+'"><span class="dtr-title">'+s+'</span> <span class="dtr-data">'+r+"</span></li>"}).toArray().join("");return!!t&&u('<ul data-dtr-index="'+e+'"/>').append(t)},target:0,type:"inline"}};var e=u.fn.dataTable.Api;return e.register("responsive()",function(){return this}),e.register("responsive.index()",function(e){return{column:(e=u(e)).data("dtr-index"),row:e.parent().data("dtr-index")}}),e.register("responsive.rebuild()",function(){return this.iterator("table",function(e){e._responsive&&e._responsive._classLogic()})}),e.register("responsive.recalc()",function(){return this.iterator("table",function(e){e._responsive&&(e._responsive._resizeAuto(),e._responsive._resize())})}),s.version="1.0.6",u.fn.dataTable.Responsive=s,u.fn.DataTable.Responsive=s,u(t).on("init.dt.dtr",function(e,t,n){if("dt"===e.namespace&&(u(t.nTable).hasClass("responsive")||u(t.nTable).hasClass("dt-responsive")||t.oInit.responsive||r.defaults.responsive)){var i=t.oInit.responsive;!1!==i&&new s(t,u.isPlainObject(i)?i:{})}}),s}"function"==typeof define&&define.amd?define(["jquery","datatables"],e):"object"==typeof exports?e(require("jquery"),require("datatables")):jQuery&&!jQuery.fn.dataTable.Responsive&&e(jQuery,jQuery.fn.dataTable)}(window,document);