$(document).ready(function () {

//https://api.themoviedb.org/3/discover/movie?api_key=51bdd827768a48612af8d3a0bd074a01

//https://api.themoviedb.org/3/movie/497698?api_key=51bdd827768a48612af8d3a0bd074a01

//http://image.tmdb.org/t/p/w300/hUzeosd33nzE5MCNsZxCGEKTXaQ.png



const ApiKey = '?api_key=51bdd827768a48612af8d3a0bd074a01'
let baseURL = 'https://api.themoviedb.org/4/'

$(document).ready(function () {
    fetch(baseURL + 'discover/movie' + ApiKey)
    .then(function(response){
        if (!response.ok) {
            throw new Error(
                "Erro Ao Tentar Se Comunicar com o Servidor! Status " + 
                response.status
        )}else{
            return response.json();
        }   
})
    .then(function (data) {

            for(let i = 2; i < data.results.length ; i++){
                
                //console.log(data.results[i]) //retorna o array item por item

                rowDiscover = document.getElementById('row02_movies_popular')
                
                //aqui retorna o link da imagem
                var posterimg = 'http://image.tmdb.org/t/p/w300' + data.results[i].poster_path
                 
                //demonstra os filmes na tela
                 rowDiscover.innerHTML +=  
                    `
                    <li>
                        <a href="Pages/MediaDetails/index.html?id=${data.results[i].id}&type=movie">
                            <img src="${posterimg}" id="item0${i}" alt="">
                        </a>
                    </li>
                    `  
            }


    })

})
});