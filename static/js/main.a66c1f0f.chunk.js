(this["webpackJsonpipod-classic"]=this["webpackJsonpipod-classic"]||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a(20)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),i=a(6),l=a.n(i),r=(a(13),a(1)),s=a(2),o=a(4),u=a(3),m=(a(14),a(15),a(16),a(7)),v=a.n(m),d=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(r.a)(this,a),(e=t.call(this)).doSomething=function(t){var a=e.props.updateActiveMenu;if(0===t.detail.distanceFromOrigin&&(e.angle=t.detail.angle),Math.abs(e.angle-t.detail.angle)>300){if(e.angle=Math.abs(t.detail.angle),0===t.detail.distanceFromLast)return;t.detail.distanceFromLast<0?a(1):a(0)}else if(Math.abs(e.angle-t.detail.angle)>15){if(e.angle=Math.abs(t.detail.angle),0===t.detail.distanceFromLast)return;t.detail.distanceFromLast>0?a(1):a(0)}},e.angle=0,e}return Object(s.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"wheel-container",id:"wheel-container"},c.a.createElement("div",{className:"wheel",id:"wheel"},c.a.createElement("div",{className:"controll",id:"menu"},"MENU"),c.a.createElement("div",{className:"controll",id:"forward"},c.a.createElement("i",{className:"fas fa-fast-forward"})),c.a.createElement("div",{className:"controll",id:"play-pause"},c.a.createElement("i",{className:"fas fa-play"}),c.a.createElement("i",{className:"fas fa-pause"})),c.a.createElement("div",{className:"controll",id:"reverse"},c.a.createElement("i",{className:"fas fa-fast-backward"}))),c.a.createElement("div",{className:"blank",id:"blank"}))}},{key:"componentDidMount",value:function(){var e=this.doSomething,t=document.getElementById("wheel");v.a.Region(t).bind(t,"rotate",(function(t){e(t)}))}}]),a}(c.a.Component),f=(a(18),function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(r.a)(this,a),(e=t.call(this)).state={time:e.getCurrentTime()},console.log(e.state.time),console.log("hello"),e}return Object(s.a)(a,[{key:"getCurrentTime",value:function(){var e=new Date;return e.getHours()+":"+e.getMinutes()}},{key:"render",value:function(){var e=this.state.time;return c.a.createElement("div",{className:"bar"},c.a.createElement("h5",null,"iPod ",c.a.createElement("i",{className:"fas fa-wifi"})),c.a.createElement("h3",null,e),c.a.createElement("img",{className:"battery",src:"https://image.flaticon.com/icons/svg/3103/3103446.svg",alt:"Battery"}))}}]),a}(c.a.Component)),E=(a(19),function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props.active;return c.a.createElement("div",{className:"screen"},c.a.createElement("div",{className:"menu"},c.a.createElement(f,null),c.a.createElement("ul",null,1===e?c.a.createElement("li",{className:"active"},"\xa0Cover Flow"):c.a.createElement("li",null,"\xa0Cover Flow"),2===e?c.a.createElement("li",{className:"active"},"\xa0Music"):c.a.createElement("li",null,"\xa0Music"),3===e?c.a.createElement("li",{className:"active"},"\xa0Games"):c.a.createElement("li",null,"\xa0Games"),4===e?c.a.createElement("li",{className:"active"},"\xa0Settings"):c.a.createElement("li",null,"\xa0Settings"))))}}]),a}(c.a.Component)),p=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props,t=e.active,a=e.updateActiveMenu;return c.a.createElement("div",{className:"case-container"},c.a.createElement("div",{className:"case"},c.a.createElement(E,{active:t}),c.a.createElement(d,{active:t,updateActiveMenu:a})))}}]),a}(c.a.Component),h=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(r.a)(this,a),(e=t.call(this)).updateActiveMenu=function(t){1===t?4===e.state.active?e.setState({active:1}):e.setState({active:e.state.active+1}):1===e.state.active?e.setState({active:4}):e.setState({active:e.state.active-1})},e.state={active:2},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this.state.active;return c.a.createElement("div",{className:"App"},c.a.createElement(p,{active:e,updateActiveMenu:this.updateActiveMenu}))}}]),a}(c.a.Component);l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(h,null)),document.getElementById("root"))}],[[8,1,2]]]);
//# sourceMappingURL=main.a66c1f0f.chunk.js.map