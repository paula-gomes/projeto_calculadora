let calculadora = {};
            calculadora.display = document.querySelector("#display"); 
            let botoes = document.querySelectorAll(".botoesNum"); // seleciona todos os botoes de numero      
            let botaoSoma = document.querySelector("#soma");
            let botaoIgual = document.querySelector("#igual");
            let botaoSubtracao= document.querySelector("#subtracao");
            let botaoMultiplicacao= document.querySelector("#multiplicacao");
            let botaoDivisao= document.querySelector("#divisao");
            let botaoClear = document.querySelector("#clear");
            let acumulador = "";
            

            //para cada botao do array de botoes irá adicionar um evento de click , o qual executa a funçao de add no display
            botoes.forEach(function(button){ button.addEventListener("click", function(){ColocaNumDisplay(button)})});
            
            //funçao que acrescenta numeros ao display da calculadora
            function ColocaNumDisplay(bt)
            {
                calculadora.display.innerText += bt.innerText;
            }
            
        
            botaoSoma.onclick = function() {
                acumulador += calculadora.display.innerText;
                acumulador += " + ";
                calculadora.display.innerText = "";
            }
            botaoSubtracao.onclick = function() {
                acumulador += calculadora.display.innerText;
                acumulador += " - ";
                calculadora.display.innerText = "";
            }
            botaoMultiplicacao.onclick = function() {
                acumulador += calculadora.display.innerText;
                acumulador += " * ";                
                calculadora.display.innerText = "";
            }
            botaoDivisao.onclick = function() {
                acumulador += calculadora.display.innerText;
                acumulador += "/";
                calculadora.display.innerText = "";
            }


            botaoIgual.onclick = function() {
                //TODO: checar se existe conteúdo dentro do display

                //colocando conteúdo do display no acumulador

                acumulador += calculadora.display.innerText;                
                //resolvendo conta (conteúdo acumulador)
                let resultado = eval(acumulador);
                //colocando no display o conteúdo do acumulador
                calculadora.display.innerText = resultado;
                // limpando o acumulador
                acumulador = "";

            }

          botaoClear.onclick= function() {

            calculadora.display.innerText = "";}
        