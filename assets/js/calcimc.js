
function calcular() {
    var peso = document.getElementById('peso').value

    var altura = document.getElementById('altura').value

    var altura = parseFloat(altura);

    var altura = altura / 100;

    var peso = parseInt(peso)

    var imc = peso / (altura * altura);


    if ( imc < 18.5 ) {
        
        document.getElementById('title').innerHTML = "Seu IMC é menor que 18.5, você está abaixo do peso médio" 
    
        document.getElementById('desc').innerHTML = "Você está abaixo do peso ideal. Isso pode ser apenas uma característica pessoal, mas também pode ser um sinal de desnutrição ou de algum problema de saúde. Caso esteja perdendo peso sem motivo aparente, procure um médico." }

    else if (imc >= 18.5 && imc <= 24.9) {
        document.getElementById('title').innerHTML = "Seu IMC está entre 18.5 e 24.9, você tem um peso normal." 
        document.getElementById('desc').innerHTML = "Parabéns, você está com o peso normal. Recomendamos que mantenha hábitos saudáveis em seu dia a dia. Especialistas sugerem ingerir de 4 a 5 porções diárias de frutas, verduras e legumes, além da prática de exercícios físicos - pelo menos 150 minutos semanais."
    }

    else if (imc >= 25 && imc <= 29.9 ) {
        document.getElementById('title').innerHTML = "Seu IMC está entre 25.0 e 29.9, você pode estar com sobrepeso." 
        document.getElementById('desc').innerHTML = "Atenção! Alguns quilos a mais já são suficientes para que algumas pessoas desenvolvam doenças associadas, como diabetes e hipertensão. É importante rever seus hábitos. Procure um médico."
    }

    else if (imc >= 30 && imc <= 34.9 ) {
        document.getElementById('title').innerHTML = "Seu IMC está entre 30.9 e 34.9, você pode estár com Obesidade grau I" 
        document.getElementById('desc').innerHTML = "Sinal de alerta! O excesso de peso é fator de risco para desenvolvimento de outros problemas de saúde. A boa notícia é que uma pequena perda de peso já traz benefícios à saúde. Procure um médico para definir o tratamento mais adequado para você."
    }

    else if (imc >= 35 && imc <= 39.9 ) {
        document.getElementById('title').innerHTML = "Seu IMC está entre 35.0 e 39.9, você pode estár com Obesidade grau II" 
        document.getElementById('desc').innerHTML = "Sinal vermelho! Ao atingir este nível de IMC, o risco de doenças associadas está entre alto e muito alto. Busque ajuda de um profissional de saúde, não perca tempo"
    }

    else if (imc >= 40 ) {
        document.getElementById('title').innerHTML = "Seu IMC está acima de 40.0, você pode estar com Obesidade grau III"
        document.getElementById('desc').innerHTML = "Sinal vermelho! Ao atingir este nível de IMC, o risco de doenças associadas é muito alto. Busque ajuda de um profissional de saúde, não perca tempo."
    }
}