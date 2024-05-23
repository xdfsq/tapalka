const knopka = document.getElementById('knopa')
let counterId = document.getElementById('counter')
let schitalka = 0


knopka.addEventListener('click', function (){
    schitalka++
    counterId.textContent = schitalka
}) 