(function(){

    let tela = document.querySelector('.tela');
    let botoes = document.querySelectorAll('.btn');
    let clear = document.querySelector('.btn-clear');
    let igual = document.querySelector('.btn-igual');

    botoes.forEach(function(button) {
        button.addEventListener('click', function(e) {
            let value = e.target.dataset.num;
            tela.value += value; 
        })
    });

    igual.addEventListener('click', function(e) {
        if (tela.value === '') {
            tela.value = "";
        } else {
            let result = eval(tela.value);
            tela.value = result;
        }
    });

    clear.addEventListener('click', function(e){
        tela.value = "";
    })

})();