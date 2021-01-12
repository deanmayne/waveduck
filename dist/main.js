(()=>{"use strict";const t=.99;let i={x:0,y:0,down:!1},s=document.getElementById("theme").value,e=document.getElementById("duckSlider").value,h=document.getElementById("liquidSlider").value,c=document.getElementById("theme");c.addEventListener("change",(function(){s=c.value}));let n=document.getElementById("duckSlider");n.addEventListener("change",(function(){e=n.value}));let o=document.getElementById("liquidSlider");o.addEventListener("change",(function(){h=o.value})),canvas.addEventListener("mousemove",(function(t){i.x=t.x,i.y=t.y})),canvas.addEventListener("mousedown",(function(t){i.down=!0})),document.addEventListener("mouseup",(function(t){i.down=!1}));class a{constructor(t){this.ctx=t.getContext("2d"),this.dimensions={width:t.width,height:t.height},this.load()}load(){this.points=[];for(let t=0;t<h;t++){let i="";switch(s){case"french":i=["blue","white","red"][Math.floor(3*Math.random())];break;case"devil":i="red";break;case"angel":i="white";break;case"unicorn":i="pink";break;case"witch":i="black";break;default:i="blue"}this.points.push(new l(this.dimensions,s,i)),this.points[t].draw(this.ctx)}this.ducks=[];for(let t=0;t<e;t++)this.ducks.push(new d(this.dimensions,s)),this.ducks[t].draw(this.ctx);this.animate()}animate(){if(this.ctx.clearRect(0,0,canvas.width,canvas.height),this.ducks[0].theme!==s||this.ducks.length!=e||this.points.length!=h)return void this.load();let t=[...this.ducks,...this.points];for(let s=0;s<t.length;s++){let e=t[s];if(i.down){let t=i.x-e.x,s=i.y-e.y,h=Math.sqrt(t*t+s*s);h<2*e.radius&&(0===h&&(h=.1),e.velocity.x+=.3*t,e.velocity.y+=.3*s)}e.animate(this.ctx);for(let i=0;i<t.length;i++){if(s===i)continue;let h=t[i],c=h.x-e.x,n=h.y-e.y,o=Math.sqrt(c*c+n*n);if(o<e.radius||o<e.height){0===o&&(o=.1);let t=-.1,i=c/o*t*.3,s=n/o*t*.3;e.velocity.x+=i,e.velocity.y+=s,h.velocity.x-=i,h.velocity.y-=s}i++}}requestAnimationFrame(this.animate.bind(this))}}class d{constructor(t,i){this.dimensions=t,this.x=Math.random()*this.dimensions.width-50,this.y=.25*this.dimensions.height,this.velocity={x:0,y:0},this.height=60,this.width=75,this.radius=this.width,this.theme=i}animate(t){this.move(),this.draw(t)}move(){this.velocity.y+=.1,this.velocity.x*=t,this.velocity.y*=t,this.velocity.x>=3?this.velocity.x=3:this.velocity.x<=-3&&(this.velocity.x=-3),this.velocity.y>=3?this.velocity.y=3:this.velocity.y<=-3&&(this.velocity.y=-3),this.y+=this.velocity.y,this.x+=this.velocity.x,this.y>this.dimensions.height-this.height&&(this.y=this.dimensions.height-this.height,this.velocity.y=-Math.abs(this.velocity.y)),this.y<this.height&&(this.y=this.height,this.velocity.y=Math.abs(this.velocity.y)),this.x>this.dimensions.width-this.width&&(this.x=this.dimensions.width-this.width,this.velocity.x=-Math.abs(this.velocity.x)),this.x<0&&(this.x=0,this.velocity.x=Math.abs(this.velocity.x))}draw(t){const i=new Image;switch(this.theme){case"french":i.src="./src/svg/FrenchRubberDucky.svg";break;case"devil":i.src="./src/svg/DevilRubberDucky.svg";break;case"angel":i.src="./src/svg/AngelRubberDucky.svg";break;case"unicorn":i.src="./src/svg/UnicornRubberDucky.svg";break;case"witch":i.src="./src/svg/WitchRubberDucky.svg";break;default:i.src="./src/svg/RubberDucky.svg"}t.drawImage(i,this.x,this.y,this.width,this.height)}}class l{constructor(t,i,s){this.dimensions=t,this.x=Math.random()*this.dimensions.width-10,this.y=(.6*Math.random()+.4)*this.dimensions.height,this.velocity={x:0,y:0},this.radius=Math.max(20*Math.random(),5),this.theme=i,this.color=s}animate(t){this.move(),this.draw(t)}move(){this.velocity.y+=.1,this.velocity.x*=t,this.velocity.y*=t,this.velocity.x>=3?this.velocity.x=3:this.velocity.x<=-3&&(this.velocity.x=-3),this.velocity.y>=3?this.velocity.y=3:this.velocity.y<=-3&&(this.velocity.y=-3),this.x+=this.velocity.x,this.y+=this.velocity.y,this.y>this.dimensions.height-this.radius&&(this.y=this.dimensions.height-this.radius,this.velocity.y=-Math.abs(this.velocity.y)),this.y<this.radius&&(this.y=this.radius,this.velocity.y=Math.abs(this.velocity.y)),this.x>this.dimensions.width-this.radius&&(this.x=this.dimensions.width-this.radius,this.velocity.x=-Math.abs(this.velocity.x)),this.x<this.radius&&(this.x=this.radius,this.velocity.x=Math.abs(this.velocity.x))}draw(t){t.beginPath(),t.arc(this.x,this.y,this.radius,0,2*Math.PI),t.fillStyle=this.color,t.fill()}}document.addEventListener("DOMContentLoaded",(function(){const t=document.getElementById("canvas");new a(t)}))})();