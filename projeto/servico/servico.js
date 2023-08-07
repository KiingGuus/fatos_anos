import fatosHistoricos from '../dados/fatos.js';

//ve se o ano é um numero ou uma string, e se for um numero execura uma logica para ver se o periodo se enquadra com os dados.
function validaAno(ano){
    if(isNaN(ano)){
        return false
    }
    else{
        if(ano >= 1920 && ano <= 2020){
            return true
        }
        else{
            return false
        };
    };
};

//função que busca o fato dentro da camada de dados
function servicoBuscarFatoPorAno (ano){
    let fatoSelecionado = fatosHistoricos.find(fato => fato.Ano == ano); 
    //função nativa find() acha o primeiro parametro que atende as requisições. Caso nao ache retorna undefind.
    
    return fatoSelecionado.Fato;
}
export {servicoBuscarFatoPorAno, validaAno};