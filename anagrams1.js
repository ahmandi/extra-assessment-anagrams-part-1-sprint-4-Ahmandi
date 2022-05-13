const button = document.getElementById("findButton"); // Adicionando o botão ao documento
let p = document.createElement('p')

function getAnagramsOf(input) {
    const button = document.getElementById("findButton"); // Adicionando o botão ao documento

    button.addEventListener("click", function () {
        let typedText = document.getElementById("input").value;
        getAnagramsOf(typedText);

        let arr = [];

        if(typedText == ''){
            console.log('Input inválido!');
        } else {
            for(let i = 0; i < palavras.length; i++){
                if(sortedWords(typedText) == sortedWords(palavras[i])){
                    arr.push(palavras[i])
                }
            }
        }

        let div = document.createElement('div');
        div.innerText = arr
        document.body.appendChild(div)
        return arr
    });

}
getAnagramsOf()

function sortedWords(a){
    return a.toLowerCase().split("").sort().join("").trim(); //Deixar as palavras em 'ordem crescente'
 }