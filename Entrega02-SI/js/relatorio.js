
    const campos = [
        document.querySelector('#nome'),
        document.querySelector('#email'),
        document.querySelector('#dataNasc'),
        document.querySelector('#pessoas'),
        document.querySelector('#dataViagem'),
        document.querySelector('#formulario-hospedagem')
    ]
    
    const tbody = document.querySelector('tbody');
    
    
    document.querySelector('form').addEventListener('submit',function(evento){
        
        evento.preventDefault();
    
        const tr = document.createElement('tr');
    
        campos.forEach((campo) => {
    
            const td = document.createElement('td');
    
            td.textContent = campo.value;
             
            tr.appendChild(td);
    
        });
    
        const hospedagemValor = (Number(campos[3].value) * 9500);
        const transladoValor = (Number(campos[3].value) * 33500);
        somaTotal = hospedagemValor + transladoValor;

        const valorHospedagem = document.createElement('td');
        valorHospedagem.textContent ='R$ ' + hospedagemValor.toFixed(2);

        tr.appendChild(valorHospedagem);

        

        const valorTranslado = document.createElement('td');
        valorTranslado.textContent ='R$ ' + transladoValor.toFixed(2);
        tr.appendChild(valorTranslado);

        const valorTotal = document.createElement('td');
        valorTotal.textContent ='R$ ' + somaTotal.toFixed(2);
        tr.appendChild(valorTotal);
 
        tbody.appendChild(tr);
    
         
        this.reset();
    
       
        campos[0].focus();
    });

