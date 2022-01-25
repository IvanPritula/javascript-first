let a = prompt('Скажите размер стороны a триугольника ' );
let b = prompt('Скажите размер стороны b триугольника ' );
let sinY = prompt('Скажите sinY триугольника ' );
const STriangle = (1/2)*a*b*(sinY/(180/Math.PI));
console.log(STriangle);

let c = prompt('Скажите размер стороны c трапеции ' );
let d = prompt('Скажите размер стороны d трапеции ' );
let h = prompt('Скажите высоту h трапеции ' );
const STrapeze = ((c + d)/2)*h;
console.log(STrapeze);

let r = prompt('Скажите радиус r круга ' );
const SCircle = Math.PI * (r*r);
console.log(SCircle);

let a1 = prompt('Скажите размер стороны a1 паралелограмма ' );
let b1 = prompt('Скажите размер стороны b1 паралелограмма ' );
let sinY1 = prompt('Скажите sinY1 паралелограмма ' );
const SParalelogram = a1*b1*sinY1((180/Math.PI));
console.log(SParalelogram);

let h1 = prompt('Скажите высоту цилиндра h1 ' );
let r1 = prompt('Скажите радиус основания r1 ' );
const VCilindr = Math.PI*r1*r1*h1;
console.log(VCilindr)

let r2 = prompt('Скажите радиус сферы r2 ' );
const VSfera = (4/3)*Math.PI*(r2*r2*r2);
console.log(VSfera);


