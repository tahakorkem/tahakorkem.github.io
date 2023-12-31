// wait until the DOM is ready

let y;
let z;
let th;
let hashes;
let desc;
let infoText;

document.addEventListener("DOMContentLoaded", function(event) {
  console.log("dom is ready!")
  y = document.querySelector('.y')
  z = document.querySelector('.z')
  th = document.querySelector('.th')
  hashes = document.querySelectorAll('.hash')
  desc = document.querySelector('.desc')
  infoText = document.querySelector('.info-text')
  z.addEventListener('click', function() {
    start()
  })
})

const start = () => {
  y.classList.remove('top-1/2')
  y.classList.add('top-0')
  y.classList.remove('-translate-y-1/2')
  y.classList.remove('text-5xl')
  y.classList.add('text-3xl')
  y.classList.remove('border-opacity-0')
  th.classList.add('flex-auto')
  th.classList.add('tracking-widest')
  z.classList.remove('h-10')
  z.classList.remove('border-2')
  z.classList.add('h-0')
  z.classList.add('opacity-0')
  z.classList.add('pointer-events-none')
  hashes.forEach((hash) => {
    hash.classList.add('hidden')
    hash.classList.add('md:block')
    hash.classList.remove('md:h-16')
    hash.classList.remove('h-12')
    hash.classList.add('h-9')
  })
  desc.classList.remove('hidden')
  infoText.classList.remove('hidden')
  infoText.classList.add('animate-info-text')
}
