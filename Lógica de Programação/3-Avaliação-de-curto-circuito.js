/* 
&& -> false && true -> false
&& -> true && true -> true
|| -> false || true -> true
|| -> false || false -> false
false -> valor literar falso
0 -> valor literal falso
"", '', `´, - falso
null / undefined - falso
NaN - falso
*/

console.log('Luiz Otávio' && true && 'Ronoel')

function falaOi () {
    return 'Oi'
}

const vaiExecutar = false;

console.log(vaiExecutar && falaOi());

const corUsuario = null;
const corPadrao = corUsuario || 'preto'

console.log(corPadrao)

const a = 0;
const b = null;
const c = false;
const d = NaN;

console.log(a || b || c || d || e)
