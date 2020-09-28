


    ScrollReveal().reveal('.img1', { delay: 5000})
    ScrollReveal().reveal('.img2', { delay: 600 })
    ScrollReveal().reveal('.img3', { delay: 600 })
    ScrollReveal().reveal('.img4', { delay: 800})


setTimeout( ()=>{
    let div = document.querySelector('.sub')
    //criaçao do span1
    let span1 = document.createElement('span')
    span1.setAttribute('id', 'first')
    span1.textContent ='Fabricação de móveis sob medida'
    div.appendChild(span1)
    
}, 3000)

setTimeout(()=> {
    let div = document.querySelector('.sub')
      //criação do span2
      let span2 = document.createElement('span')
      span2.setAttribute('id', 'second')
      span2.textContent = 'Planejamento de interiores'
      div.appendChild(span2)
}, 4000)

setTimeout(()=>{
    let div = document.querySelector('.sub')
    let span3 = document.createElement('span')
    span3.setAttribute('id', 'third')
    span3.textContent = 'Adequação de ambientes'
    div.appendChild(span3)
}, 5000)