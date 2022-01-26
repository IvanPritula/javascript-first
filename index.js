  /**/
  let a = Number(prompt('Скажите размер стороны a триугольника ' ));
  let b = Number(prompt('Скажите размер стороны b триугольника ' ));
  let hyp = prompt('Скажите hypotenuze триугольника ' );
  const STriangle = (1/2)*a*b*(a/hyp);
  console.log(STriangle);

let c = Number(prompt('Скажите размер стороны c трапеции ' ));
let d = Number(prompt('Скажите размер стороны d трапеции ' ));
let h = Number(prompt('Скажите высоту h трапеции ' ));
const STrapeze = ((c + d)/2)*h;
console.log(STrapeze);

let r = Number(prompt('Скажите радиус r круга ' ));
const SCircle = Math.PI * (r*r);
console.log(SCircle);

let a1 = Number(prompt('Скажите размер стороны a1 паралелограмма ' ));
let b1 = Number(prompt('Скажите размер стороны b1 паралелограмма ' ));
let hyp1 = Number(prompt('Скажите hypotenuze паралелограмма ' ));
const SParalelogram = a1*b1*(a1/hyp1);
console.log(SParalelogram);

let h1 = Number(prompt('Скажите высоту цилиндра h1 ' ));
let r1 = Number(prompt('Скажите радиус основания r1 ' ));
const VCilindr = Math.PI*r1*r1*h1;
console.log(VCilindr)

let r2 = Number(prompt('Скажите радиус сферы r2 ' ));
const VSfera = (4/3)*Math.PI*(r2*r2*r2);
console.log(VSfera);


