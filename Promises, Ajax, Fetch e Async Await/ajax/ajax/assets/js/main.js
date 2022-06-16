// const request = obj => {
//   return new Promise((resolve, reject) => {
//     const xhr = new XMLHttpRequest();
//     xhr.open(obj.method, obj.url, true);
//     xhr.send();

//     xhr.addEventListener('load', () => {
//       if(xhr.status >= 200 && xhr.status < 300) {
//         resolve(xhr.responseText);
//       } else {
//         reject(xhr.statusText);
//       }
//     });
//   });
// };

document.addEventListener('click', e => {
  const el = e.target;
  // console.log(el)
  const tag = el.tagName.toLowerCase();
  // console.log(tag)
  if (tag === 'a') {
    e.preventDefault();
    carregaPagina(el);
  }
});

// async function carregaPagina(el) {

//   const href = el.getAttribute('href');

//   const objConfig = {
//     method: 'GET',
//     url: href
//   };

//   try {
//     const response = await request(objConfig);
//     carregaResultado(response);
//   } catch(e) {
//     console.log(e);
//   }
// }

// function carregaResultado(response) {
//   const resultado = document.querySelector('.resultado');
//   resultado.innerHTML = response;
// }

async function carregaPagina(el){
  try{
      const href = el.getAttribute("href");
      // console.log(href)
      const response = await fetch(href);
      console.log(response)
      if(response.status !== 200) throw new Error('ERRO 404!');

      const html = await response.text()
      console.log(html)
      carregaResultado(html)
  } catch(e){
      console.log(e)
  }
}

function carregaResultado(response){
  const resultado = document.querySelector('.resultado')
  resultado.innerHTML = response
}