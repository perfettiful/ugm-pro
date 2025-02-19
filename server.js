const express = require('express')
const app = express()
require("dotenv").config();

const port = process.env.PORT || 3000;

app.get('*', (req, res) => {
  res.send(

`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>UMG Spotify REST API</title>
    <script src='https://cdnjs.cloudflare.com/ajax/libs/gsap/latest/TweenMax.min.js'></script>
</head>
<body>
<style>
@import url(https://fonts.googleapis.com/css?family=Oswald:700);
body {
background: black;
overflow: hidden;
width: 100%;
}
svg {
width: 600px;
margin: 0 auto;
position: relative;
display: block;
z-index: 0;
}
svg text {
fill: #fff;
font-family: 'Oswald';
font-weight: 700;
}
svg text tspan {
padding: 0;
margin: 0;
opacity: 0;
}
svg line, svg polyline, svg ellipse, svg path {
stroke: #fff;
fill: none;
stroke-linecap: round;
stroke-linejoin: round;
stroke-width: 6;
opacity: 0;
stroke-miterlimit: 10;
}
svg .dec {
stroke-width: 3;
}
svg .underline {
stroke-width: 6;
stroke-linecap: butt;
opacity: 1;
}
svg .dot {
opacity: 1;
}
svg .purple {
stroke: #B191FF;
}
svg .lime {
stroke: #DCE2AA;
}
svg .plum {
stroke: #843B62;
}
svg .blue {
stroke: #241E4E;
}
#play {
font-size: 20px;
color: #fff;
display: block;
position: 'relative';
margin: 0 auto;
width: 400px;
text-align: center;
background: none;
border: none;
outline: none;
opacity: 0;

}
a{
height: 20px;
text-decoration:none;
}

</style>

<svg id="svg" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
   viewBox="0 0 800 280" enable-background="new 0 0 800 280" xml:space="preserve">

<!-- underlines -->
<line id="underline1" class="underline plum" x1="146" y1="176" x2="146" y2="176"/>
<line id="underline2" class="underline blue" x1="146" y1="184" x2="146" y2="184"/>
<line id="underline3" class="underline purple" x1="146" y1="192" x2="146" y2="192"/>
<line id="underline4" class="underline lime" x1="146" y1="200" x2="146" y2="200"/>

<!-- T -->
<line id="t1" x1="151.6" y1="68.4" x2="151.6" y2="68.4"/>
<line id="t1d1" class="dec blue" x1="159" y1="70" x2="159" y2="70" />
<line id="t1d2" class="dec lime" x1="165" y1="70" x2="165" y2="70" />
<line id="t2" x1="113.6" y1="70.6" x2="113.6" y2="70.6"/>
<line id="t2d1" class="dec purple" x1="106" y1="62" x2="106" y2="62" />
<line id="t2d2" class="dec lime" x1="102" y1="55" x2="102" y2="55" />
<line id="t2d3" class="dec plum" x1="98" y1="50" x2="98" y2="50" />

<!-- H -->
<line id="h1" x1="214.6" y1="51.4" x2="214.6" y2="51.4"/>
<line id="h2" x1="267.6" y1="86.6" x2="267.6" y2="86.6"/>
<line id="h2d1" class="dec purple" x1="220" y1="109" x2="220" y2="109" />
<line id="h2d2" class="dec plum" x1="220" y1="115" x2="220" y2="115" />
<line id="h2d3" class="dec lime" x1="220" y1="121" x2="220" y2="121" />
<line id="h3" x1="264.6" y1="47.4" x2="264.6" y2="47.4"/>
<ellipse id="h3d1" class="dec dot blue" cx="256" cy="51" rx="0" ry="0"/>
<ellipse id="h3d2" class="dec dot plum" cx="256" cy="61" rx="0" ry="0"/>
<ellipse id="h3d3" class="dec dot purple" cx="256" cy="71" rx="0" ry="0"/>
<ellipse id="h3d4" class="dec dot lime" cx="256" cy="81" rx="0" ry="0"/>

<!-- A -->
<polyline id="a1" points="305.6,51.6 305.6,51.6 305.6,51.6 "/>
<line id="a2" x1="293.6" y1="101.4" x2="293.6" y2="101.4"/>
<line id="a2d1" class="dec blue" x1="307" y1="120" x2="307" y2="120" />
<line id="a2d2" class="dec lime" x1="307" y1="127" x2="307" y2="127" />
<line id="a2d3" class="dec plum" x1="307" y1="134" x2="307" y2="134" />

<!-- N -->
<line id="n1d1" class="dec purple" x1="352" y1="147" x2="352" y2="147" />
<line id="n1d2" class="dec blue" x1="358" y1="147" x2="358" y2="147" />
<line id="n1d3" class="dec plum" x1="363" y1="147" x2="363" y2="147" />
<line id="n1d4" class="dec lime" x1="369" y1="80" x2="369" y2="80" />
<line id="n1d5" class="dec plum" x1="365" y1="74" x2="365" y2="74" />
<polyline id="n1" points="345.6,145.4 345.6,145.4 345.6,145.4 
345.6,145.4 "/>

<!-- K -->
<line id="k1d1" class="dec blue" x1="419" y1="60" x2="419" y2="60" />
<line id="k1" x1="411.6" y1="56.4" x2="411.6" y2="56.4"/>
<polyline id="k2" points="414.1,97.6 414.1,97.6 414.1,97.6 "/>
<ellipse id="k2d1" class="dec dot blue" cx="430" cy="103" rx="0" ry="0"/>
<ellipse id="k2d2" class="dec dot plum" cx="439" cy="112" rx="0" ry="0"/>
<ellipse id="k2d3" class="dec dot purple" cx="447" cy="121" rx="0" ry="0"/>
<ellipse id="k2d4" class="dec dot lime" cx="455" cy="130" rx="0" ry="0"/>

<!-- Y -->
<line id="y1d1" class="dec plum" x1="510" y1="56" x2="510" y2="56" />
<line id="y1d2" class="dec blue" x1="502" y1="60" x2="502" y2="60" />
<line id="y1" x1="463.6" y1="62.6" x2="463.6" y2="62.6"/>
<line id="y2" x1="517.6" y1="56.6" x2="517.6" y2="56.6"/>
<ellipse id="y2d1" class="dec dot purple" cx="459" cy="75" rx="0" ry="0"/>
<ellipse id="y2d2" class="dec dot lime" cx="465" cy="84" rx="0" ry="0"/>

<!-- O -->
<ellipse id="o1d1" class="dec dot purple" cx="544.6" cy="110.1" rx="0" ry="0"/>
<ellipse id="o1d2" class="dec dot plum" cx="544.6" cy="110.1" rx="0" ry="0"/>
<ellipse id="o1d3" class="dec dot blue" cx="544.6" cy="110.1" rx="0" ry="0"/>
<ellipse id="o1d4" class="dec dot lime" cx="544.6" cy="110.1" rx="0" ry="0"/>
<ellipse id="o1" cx="544.6" cy="110.1" rx="0" ry="0"/>

<!-- U -->
<path id="u1" d="M580.6,63.4v43.1c0,0,3.2,42,26.2,44
  s26.8-43.5,26.8-43.5V63.4"/>
<line id="u1d1" class="dec purple" x1="626" y1="114" x2="626" y2="114" />
<line id="u1d2" class="dec plum" x1="620" y1="106" x2="620" y2="106" />

<!-- ! -->
<line id="e1" x1="669.6" y1="56.6" x2="669.6" y2="56.6"/>
<line id="e1d1" class="dec lime" x1="662" y1="56" x2="662" y2="56" />
<line id="e1d2" class="dec blue" x1="658" y1="56" x2="658" y2="56" />
<line id="e1d3" class="dec plum" x1="677" y1="56" x2="677" y2="56" />
<ellipse id="e2" cx="655" cy="150" rx="0" ry="0"/>

 <!-- you're awesome -->
<text x="150" y="203" font-size="30" id="text"><tspan dx="-380" dy="20">F</tspan><tspan dy="-0.7">O</tspan><tspan dy="-0.7">R</tspan>&nbsp;<tspan dy="-0.7"> </tspan><tspan dy="-0.7">V</tspan><tspan dy="-0.7">I</tspan><tspan dy="-0.7"></tspan><tspan dy="-0.7">S</tspan><tspan dy="-0.7">I</tspan><tspan dy="-0.7">T</tspan><tspan dy="-0.7">I</tspan><tspan dy="-0.7">N</tspan><tspan dy="-0.7">G</tspan><tspan dy="-0.7">!</tspan></text>
</svg>
<button id="play">
<a href='https://api.umg.codes/docs/' target='_blank'> 📖 READ API DOCS ON AWS </a>
<br>
<a href='https://github.com/perfettiful/umg-mvp' target='_blank'> 🖥️ VIEW CODE ON GITHUB</a>
</button>

<script>
document.body.onload = function() {
// SELECTING...
// T
var t1 = document.getElementById('t1');
var t2 = document.getElementById('t2');
var t2d = [document.getElementById('t2d1'), document.getElementById('t2d2'), document.getElementById('t2d3')];
var t1d = [document.getElementById('t1d1'), document.getElementById('t1d2')]; 

// H
var h1 = document.getElementById('h1');
var h2 = document.getElementById('h2');
var h2d = [document.getElementById('h2d1'), document.getElementById('h2d2'), document.getElementById('h2d3')];
var h3 = document.getElementById('h3');
var h3d = [document.getElementById('h3d1'), document.getElementById('h3d2'), document.getElementById('h3d3'), document.getElementById('h3d4')];

// A
var a1 = document.getElementById('a1');
var a2 = document.getElementById('a2');
var a2d = [document.getElementById('a2d1'), document.getElementById('a2d2'), document.getElementById('a2d3')];

// N
var n1 = document.getElementById('n1');
var n1d = [document.getElementById('n1d1'), document.getElementById('n1d2'), document.getElementById('n1d3'),
document.getElementById('n1d4'), document.getElementById('n1d5')];

// K
var k1 = document.getElementById('k1');
var k1d = document.getElementById('k1d1');
var k2 = document.getElementById('k2');
var k2d = [document.getElementById('k2d1'), document.getElementById('k2d2'), document.getElementById('k2d3'),
document.getElementById('k2d4')];

// Y
var y1 = document.getElementById('y1');
var y1d = [document.getElementById('y1d1'), document.getElementById('y1d2')];
var y2 = document.getElementById('y2');
var y2d = [document.getElementById('y2d1'), document.getElementById('y2d2')];

// O
var o1 = document.getElementById('o1');
var o1d = [document.getElementById('o1d1'), document.getElementById('o1d2'), document.getElementById('o1d3'), document.getElementById('o1d4')];

// U
var u1 = document.getElementById('u1');
var u1d = [document.getElementById('u1d1'), document.getElementById('u1d2')];

// E
var e1 = document.getElementById('e1');
var e2 = document.getElementById('e2');
var e1d = [document.getElementById('e1d1'), document.getElementById('e1d2'), document.getElementById('e1d3')];

// text
var text = document.getElementById('text');
var tspans = document.getElementsByTagName('tspan');
// underline
var underlines = [document.getElementById('underline1'), document.getElementById('underline2'), document.getElementById('underline3'), document.getElementById('underline4')];

// MAIN TIMELINE
var mainTimeline = new TimelineLite({onComplete: showReplay});

// T TIMELINE
var tline = new TimelineLite();
tline
  .to(t2.x2.baseVal, 0.4, {value: 200.6, ease: Back.easeInOut}, 0)
  .to(t2.y2.baseVal, 0.4, {value: 58.6, ease: Back.easeInOut}, 0)
  .to(t1.y2.baseVal, 0.5, {value: 156.4, ease: Back.easeInOut}, 0.1)
  .to(t2, 0.01, {opacity: 1}, 0)
  .to(t1, 0.01, {opacity: 1}, 0.3);
  addLineDecTween(tline, t2d[0], 0.2, 200, 51, 0.1);
  addLineDecTween(tline, t2d[1], 0.2, 170, 48, 0.2);
  addLineDecTween(tline, t2d[2], 0.2, 150, 44, 0.3);
  addLineDecTween(tline, t1d[0], 0.2, 160, 159, 0.2);
  addLineDecTween(tline, t1d[1], 0.2, 165, 130, 0.3);
mainTimeline.add(tline, 0.5);

// H TIMELINE
var hline = new TimelineLite();
hline
  .to(h1.y2.baseVal, 0.5, {value: 145.4, ease: Back.easeInOut}, 0)
  .to(h2.x2.baseVal, 0.4, {value: 217.1, ease: Back.easeInOut}, 0.2)
  .to(h2.y2.baseVal, 0.4, {value: 102.6, ease: Back.easeInOut}, 0.2)
  .to(h3.y2.baseVal, 0.5, {value: 130.4, ease: Back.easeInOut}, 0.3)
  .to(h1, 0.01, {opacity: 1}, 0)
  .to(h2, 0.01, {opacity: 1}, 0.2)
  .to(h3, 0.01, {opacity: 1}, 0.3);
  addDotDecTween(hline, h3d[0], 0.25, 2, 0.2);
  addDotDecTween(hline, h3d[1], 0.25, 2, 0.4);
  addDotDecTween(hline, h3d[2], 0.25, 2, 0.6);
  addDotDecTween(hline, h3d[3], 0.25, 2, 0.8);
  addLineDecTween(hline, h2d[0], 0.3, 270, 93, 0.1);
  addLineDecTween(hline, h2d[1], 0.3, 256, 104, 0.2);
  addLineDecTween(hline, h2d[2], 0.3, 242, 114, 0.3);
mainTimeline.add(hline, 0.9);

// A TIMELINE
var aline = new TimelineLite();
if(a1.points[0]) {
  aline
  .to(a1.points[0], 0.2, {x: 305.6, y: 138.6, ease: Quad.easeIn}, 0)
  .to(a1.points[0], 0.5, {x: 282.6, ease: Back.easeOut}, 'a1')
  .to(a1.points[2], 0.2, {x: 305.6, y: 138.6, ease: Quad.easeIn}, 0)
  .to(a1.points[2], 0.5, {x: 330.6, ease: Back.easeOut}, 'a1');
} else {
  var apoly = {x0: 305.6, y0: 51.6, x1: 305.6, y1: 51.6, x2: 305.6, y2: 51.6};
  aline
    .to(apoly, 0.2, {x0: 305.6, y0: 138.6, x2: 305.6, y2: 138.6, ease: Quad.easeIn, onUpdate: function() {
      updatePolyline(a1, apoly);
}}, 0)
    .to(apoly, 0.5, {x0: 282.6, x2: 330.6, ease: Back.easeOut, onUpdate: function() {
      updatePolyline(a1, apoly);
    }}, 'a1');
}
aline
  .to(a2.x1.baseVal, 0.4, {value: 319.6, ease: Back.easeInOut}, 0.2)
  .to(a1, 0.01, {opacity: 1}, 0)
  .to(a2, 0.01, {opacity: 1}, 0.2);
  addLineDecOutTween(aline, a2d[0], 0.2, 295, 120, 319, 120, 0.2);
addLineDecOutTween(aline, a2d[1], 0.2, 293, 127, 321, 127, 0.3);
addLineDecOutTween(aline, a2d[2], 0.2, 291, 134, 322, 134, 0.4);
mainTimeline.add(aline, 1.2);

// N TIMELINE
var nline = new TimelineLite();
if(n1.points[1]) {
  nline
  .to(n1.points[1], 0.2, {y: 51.6, ease: Quad.easeOut}, 0)
  .to(n1.points[3], 0.2, {y: 51.6, ease: Quad.easeOut}, 0)
  .to(n1.points[2], 0.2, {x: 391.6, y: 138.6}, 'n1')
  .to(n1.points[3], 0.2, {x: 391.6, y: 62.4, ease: Quad.easeOut}, 0.4)
} else {
  var npoly = {x0: 352, y0: 147, x1: 358, y1: 147, x2: 363, y2: 147, x3: 365, y3: 74};
  nline
    .to(npoly, 0.2, {y1: 51.6, y3: 51.6, ease: Quad.easeOut, onUpdate: function() {
      updatePolyline(n1, npoly);
}}, 0)
    .to(npoly, 0.2, {x2: 391.6, x3: 391.6, y2: 138.6, y3: 62.4, ease: Quad.easeOut, onUpdate: function() {
      updatePolyline(n1, npoly);
    }}, 0.2);
}
nline
  .to(n1, 0.01, {opacity: 1}, 0);
  addLineDecTween(nline, n1d[0], 0.3, 352, 70, 0.1);
  addLineDecTween(nline, n1d[1], 0.3, 358, 102, 0.2);
  addLineDecTween(nline, n1d[2], 0.3, 363, 124, 0.3);
  addLineDecTween(nline, n1d[3], 0.3, 385, 80, 0.4);
  addLineDecTween(nline, n1d[4], 0.3, 385, 74, 0.5);
mainTimeline.add(nline, 1.5);

// K TIMELINE
var kline = new TimelineLite();
if (k2.points[0]) {
  kline
    .to(k2.points[0], 0.2, {x: 452.6, y: 51.6, ease: Back.easeOut}, 0.2)
    .to(k2.points[2], 0.2, {x: 452.6, y: 145.6, ease: Back.easeOut}, 0.3)
} else {
  var kpoly = {x0: 414.1, y0: 97.6, x1: 414.1, y1: 97.6, x2: 414.1, y2: 97.6};
  kline
    .to(kpoly, 0.2, {x0: 452.6, y0: 51.6, x2: 452.6, y2: 145.6, ease: Back.easeOut, onUpdate: function() {
      updatePolyline(k2, kpoly);
}}, 0.2)
}

kline
  .to(k1.y2.baseVal, 0.4, {value: 138.4, ease: Back.easeInOut}, 0)
  .to(k1, 0.01, {opacity: 1}, 0)
  .to(k2, 0.01, {opacity: 1}, 0.2);
  addLineDecTween(kline, k1d1, 0.3, 419, 139, 0.1);
  addDotDecTween(kline, k2d[0], 0.25, 2, 0.2);
  addDotDecTween(kline, k2d[1], 0.25, 2, 0.4);
  addDotDecTween(kline, k2d[2], 0.25, 2, 0.6);
  addDotDecTween(kline, k2d[3], 0.25, 2, 0.8);
mainTimeline.add(kline, 1.7);

// Y TIMELINE
var yline = new TimelineLite();
yline
  .to(y1.x2.baseVal, 0.3, {value: 493.6, ease: Back.easeOut}, 0)
  .to(y1.y2.baseVal, 0.3, {value: 112.6, ease: Back.easeOut}, 0)
  .to(y2.x2.baseVal, 0.4, {value: 472.6, ease: Back.easeOut}, 0.15)
  .to(y2.y2.baseVal, 0.4, {value: 168.6, ease: Back.easeOut}, 0.15)
  .to(y1, 0.01, {opacity: 1}, 0)
  .to(y2, 0.01, {opacity: 1}, 0.15);
  addLineDecTween(yline, y1d[0], 0.3, 470, 155, 0.3);
  addLineDecTween(yline, y1d[1], 0.3, 478, 120, 0.4);
  addDotDecTween(yline, y2d[0], 0.25, 2, 0.1);
  addDotDecTween(yline, y2d[1], 0.25, 2, 0.2);
mainTimeline.add(yline, 2);

// O TIMELINE
var oline = new TimelineLite();
o1.style.opacity = 1;
oline
  .to(o1.rx.baseVal, 0.5, {value: 27, ease: Back.easeOut}, 0)
  .to(o1.ry.baseVal, 0.5, {value: 40.5, ease: Back.easeOut}, 0)
  .to(o1d[0].rx.baseVal, 0.6, {value: 27, ease: Back.easeOut}, 0.1)
  .to(o1d[0].ry.baseVal, 0.6, {value: 40.5, ease: Back.easeOut}, 0.1)
  .to(o1d[1].rx.baseVal, 0.6, {value: 27, ease: Quad.easeOut}, 0.2)
  .to(o1d[1].ry.baseVal, 0.6, {value: 40.5, ease: Quad.easeOut}, 0.2)
  .to(o1d[2].rx.baseVal, 0.6, {value: 27, ease: Quad.easeOut}, 0.3)
  .to(o1d[2].ry.baseVal, 0.6, {value: 40.5, ease: Quad.easeOut}, 0.3)
  .to(o1d[3].rx.baseVal, 0.6, {value: 27, ease: Quad.easeOut}, 0.4)
  .to(o1d[3].ry.baseVal, 0.6, {value: 40.5, ease: Quad.easeOut}, 0.4);
mainTimeline.add(oline, 2.2);

// U TIMELINE
var uline = new TimelineLite();
var length = u1.getTotalLength();
u1.style.opacity = 1;
u1.style.strokeDasharray = length;
u1.style.strokeDashoffset = length;
uline
  .to(u1, 0.5, {strokeDashoffset: 0, ease: Quad.easeInOut}, 0);
addLineDecTween(uline, u1d[0], 0.3, 626, 60, 0.3);
  addLineDecTween(uline, u1d[1], 0.3, 620, 60, 0.4);
mainTimeline.add(uline, 2.4);

// ! TIMELINE
var eline = new TimelineLite();
e2.style.opacity = 1;
eline
  .to(e2.rx.baseVal, 0.3, {value: 6, ease: Back.easeOut}, 0.3)
  .to(e2.ry.baseVal, 0.3, {value: 6, ease: Back.easeOut}, 0.3)
  .to(e1.x2.baseVal, 0.3, {value: 658.6, ease: Back.easeInOut}, 0)
  .to(e1.y2.baseVal, 0.3, {value: 130.6, ease: Back.easeInOut}, 0)
  .to(e1, 0.01, {opacity: 1}, 0);
addLineDecTween(eline, e1d[0], 0.3, 653, 118, 0.1);
addLineDecTween(eline, e1d[1], 0.3, 650, 110, 0.2);
addLineDecTween(eline, e1d[2], 0.3, 673, 86, 0.3);
mainTimeline.add(eline, 2.6);

// TEXT TIMELINE

var textTl = new TimelineLite();
if(tspans[0].dx.baseVal[0]) {
  textTl.to(tspans[0].dx.baseVal[0], 0.6, {value: 0, ease: Cubic.easeOut}, 1);
  textTl.to(tspans[0].dy.baseVal[0], 0.6, {value: -1, ease: Cubic.easeOut}, 1);
} else {
  tspans[0].setAttribute('dx', '0');
  tspans[0].setAttribute('dy', '0');
}
for (var i = tspans.length-1; i >= 0; i--) {
    textTl.to(tspans[i], 0.3, {opacity: 1}, 1 + (tspans.length-1-i)*0.05);
  }
addUnderlineTween(textTl, underlines[0], 0.5, 664, 153, 370, 167, 0.2);
addUnderlineTween(textTl, underlines[1], 0.51, 670, 160, 370, 175, 0.3);
addUnderlineTween(textTl, underlines[2], 0.52, 678, 168, 370, 183, 0.4);
addUnderlineTween(textTl, underlines[3], 0.53, 686, 176, 370, 191, 0.5);

mainTimeline.add(textTl, 2); 



mainTimeline.timescale = 0.6;
mainTimeline.play();

function addLineDecTween(tl, line, duration, x, y, delay) {
    tl.to(line.x2.baseVal, duration, {value: x, ease: Quart.easeInOut}, delay);
    tl.to(line.y2.baseVal, duration, {value: y, ease: Quart.easeInOut}, delay);
    tl.to(line.x1.baseVal, duration, {value: x, ease: Quart.easeInOut}, delay+duration);
    tl.to(line.y1.baseVal, duration, {value: y, ease: Quart.easeInOut}, delay+duration);
    tl.to(line, 0.01, {opacity: 1}, delay);
    tl.to(line, 0.01, {opacity: 0}, delay+(duration*2));
}

function addLineDecOutTween(tl, line, duration, x1, y1, x2, y2, delay) {
  tl.to(line.x1.baseVal, duration, {value: x1, ease: Quart.easeInOut}, delay);
  tl.to(line.y1.baseVal, duration, {value: y1, ease: Quart.easeInOut}, delay);
  tl.to(line.x2.baseVal, duration, {value: x2, ease: Quart.easeInOut}, delay);
  tl.to(line.y2.baseVal, duration, {value: y2, ease: Quart.easeInOut}, delay);
  tl.to(line.x1.baseVal, duration, {value: x2, ease: Quart.easeInOut}, delay+duration);
  tl.to(line.y1.baseVal, duration, {value: y2, ease: Quart.easeInOut}, delay+duration);
  tl.to(line, 0.01, {opacity: 1}, delay);
  tl.to(line, 0.01, {opacity: 0}, delay+(duration*2));
}

function addDotDecTween(tl, dot, duration, r, delay) {
    tl.to(dot.rx.baseVal, duration, {value: r, ease: Quart.easeOut}, delay);
    tl.to(dot.ry.baseVal, duration, {value: r, ease: Quart.easeOut}, delay);
    tl.to(dot.rx.baseVal, duration, {value: 0, ease: Quart.easeIn}, delay+duration);
    tl.to(dot.ry.baseVal, duration, {value: 0, ease: Quart.easeIn}, delay+duration);
}

function addUnderlineTween(tl, ul, duration, x2, y2, x1, y1, delay) {
  tl.to(ul.x2.baseVal, duration, {value: x2, ease: Quad.easeInOut}, delay);
  tl.to(ul.y2.baseVal, duration, {value: y2, ease: Quad.easeInOut}, delay);
  tl.to(ul.x1.baseVal, duration, {value: x1, ease: Quad.easeInOut}, delay+duration);
  tl.to(ul.y1.baseVal, duration, {value: y1, ease: Quad.easeInOut}, delay+duration);
}

// for Safari
function updatePolyline(line, points) {
  if (points.x3) {
    line.setAttribute('points', points.x0+','+points.y0+' '+points.x1+','+points.y1+' '+points.x2+','+points.y2+' '+points.x3+','+points.y3);
  } else {
    line.setAttribute('points', points.x0+','+points.y0+' '+points.x1+','+points.y1+' '+points.x2+','+points.y2);
  }
}

var play = document.getElementById('play');
play.onclick = function() {
  mainTimeline.restart();
}

function showReplay() {
  TweenLite.to(play, 0.4, {opacity: 1});
}

var svg = document.getElementById('svg');
if (window.innerWidth < 600) {
  svg.style.width = window.innerWidth+'px';
}
}

</script>
</body>
</html>
`

)
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})