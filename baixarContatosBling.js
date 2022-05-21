/*BAIXA OS CONTATOS DO BLING - (https://www.bling.com.br/exportacao.contatos.php?criterio=opc-ultimos&pesquisa=&tipo=opc-todos&idVendedor=0&idMunicipio=0&uf=%20&telefone=&proxVisitaMin=&proxVisitaMax=&dataUltimaCompraIni=&dataUltimaCompraFim=&considerarSituacoesVendas=9)*/

const table = document.querySelector("#lista > tbody")

async function sleep(ms){
    const timestamp = Date.now()+ms;
    while(Date.now() < timestamp){/*do nothing*/}
    return true;}

async function baixarTudo(pages){
    for(let i=1; i<= pages; i++){
      baixarArquivo(i, 'opc-ultimos', '', 'opc-todos', '0', '0', ' ', '', '', '', '', '', '9') 
        await sleep(2500)
    }}


baixarTudo(table.childNodes.length)