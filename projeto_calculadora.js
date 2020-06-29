let calculadora = {};
            calculadora.display = document.querySelector("#display"); 
            calculadora.botoes = document.querySelectorAll(".botoesNum"); // seleciona todos os botoes de numero      
            calculadora.botaoSoma = document.querySelector("#soma");
            calculadora.botaoIgual = document.querySelector("#igual");
            calculadora.botaoSubtracao= document.querySelector("#subtracao");
            calculadora.botaoMultiplicacao= document.querySelector("#multiplicacao");
            calculadora.botaoDivisao= document.querySelector("#divisao");
            calculadora.botaoClear = document.querySelector("#clear");
            let acumulador = "";
            let count=0;
            

            //para cada botao do array de botoes irá adicionar um evento de click , o qual executa a funçao de add no display
            
            calculadora.botoes.forEach(function (button){ button.addEventListener("click", function (){
                //só executa o evento para um numero que possua menos de 20 caracteres//
                if(calculadora.display.textContent.length <17) 
                ColocaNumDisplay(button); 
                                
            })});

            //funçao que acrescenta numeros ao display da calculadora//
            function ColocaNumDisplay(bt)
            {                
                console.log(count);
                calculadora.display.innerText += bt.innerText;// armazena o valor no display de acordo com o botao clicado
               
            }

            
        
            calculadora.botaoSoma.onclick = function() {
                acumulador += calculadora.display.innerText; //acumulador recebe o que está armazenado no display
                acumulador += " + "; // insere o operador para realizar a conta
                calculadora.display.innerText = "";// limpa o display para inserir o proximo numero
            }
            calculadora.botaoSubtracao.onclick = function() {
                acumulador += calculadora.display.innerText;
                acumulador += " - ";// operador de subtração//
                calculadora.display.innerText = "";
            }
            calculadora.botaoMultiplicacao.onclick = function() {
                acumulador += calculadora.display.innerText;
                acumulador += " * ";// operador de multiplicaçao//                
                calculadora.display.innerText = "";
            }
            calculadora.botaoDivisao.onclick = function() {
                acumulador += calculadora.display.innerText;
                acumulador += "/";// operador de multiplicaçao//  
                calculadora.display.innerText = "";
            }


            calculadora.botaoIgual.onclick = function() {
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

            calculadora.botaoClear.onclick= function() {
                acumulador = ""
                calculadora.display.innerText= "";} // limpa a conta anterior//
        

      

     