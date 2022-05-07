var titulo_counter = document.getElementById('contenido_counter')




function counter_simple (objeto_html){
    var numero_inicial = 0;
    var interval =setInterval(function(){
        
        numero_inicial+=1;
        objeto_html.innerHTML =numero_inicial;
        if (numero_inicial ==10){
            clearInterval(interval);
        }
    },1000);

    

}

counter_simple(titulo_counter);