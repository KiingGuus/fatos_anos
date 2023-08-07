import express from 'express';
import {servicoBuscarFatoPorAno, validaAno} from './servico/servico.js';
const app = express();

//recebendo e enviando parametros para o front-end
app.get('/', (req, res) =>{
    let anoFato = req.query.ano;
    if(validaAno(anoFato) == true){ // Se o valor for true ira executar o odigo e mandar o resultado para o front-end
        let fato = servicoBuscarFatoPorAno(anoFato);
        res.json({fato: fato});
    } else{ // Se o valor não for encontrado ira reportar status de erro para o front-end
        res.status(400).json({Error: 'parametro ano invalido'});
    }
})

//iniciando o servidor e conectando o mesmo com a porta do site para enviar os parametros
app.listen(8080, () =>{
    console.log('servidor iniciado');
})