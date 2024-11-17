// this code work for only one element (first H1)

var h1Text = document.querySelector('#firsth1').textContent;
let makeArr = h1Text.split('');

let clutter = '';

makeArr.forEach(char => {
  clutter += `<span>${char}</span>`;
});

document.querySelector('#firsth1').innerHTML = clutter;

gsap.to('#page2 h1 span', {
  color: '#E3E3C4',
  stagger: 0.1,
  scrollTrigger: {
    trigger: '#page2 h1',
    scroller: 'body',
    start: 'top 80%',
    end: 'top 10%',
    markers: true,
    scrub: true,
  }

})