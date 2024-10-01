// endereço
const xmlURL = 'sistemap.xml';

function buscarXML() {
    fetch(xmlURL)
        .then(response => response.text())
        .then(data => {
            //converter texto em DOM
            let parser = new DOMparser();
            let xml = parser.parseFromString(data,
                "application/xml")
                // extrair os dados desejados
                let noticias = xml.getElementByTagName("url");
                //elemento para exibir as noticias 
                let manchetesCotainer = document.getElementById("manchetes");
                manchetesContainer.innerHTML = ""; //limpa a div

                //vamos percorrer a lista usando for
                for (let i = 0; <noticias.length; i++){
                let doc = noticias [i].getElementByTagName
                ("loc")[0].textcontent;

                //extrai a data de public.

                let data_publi_element = noticias[i].getElementByTagName ("publication_data")[0];
                let data_publi = data_publi_element ?
                data_publi_element.textcontent : 'data indisp';

                //verifica o título
                let titulo_element = noticias[i].
                getElementByTagName("title")[0];
                let titulo = titulo_element ? titulo_element.
                textcontent : 'titulo_indisponivel';

                //interpolação de variaveis
                let montadiv = `
                <div class = 'noticias'> 
                    <h2>$ {titulo} </h2>
                    <p> publicado em> $ {datapubli}</p>
                    <a href='${loc}' target='_blank'>
                    leia mais </a><hr>
                `;
                manchetesContainer.innerHTML += montadiv;




                }
    }).catch(error => {
        console.error('erro ao carregar o xml', error);
    });
}
window.onload = buscarXML;