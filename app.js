document.addEventListener('DOMContentLoaded', function (){
    
   //const promesa = fetch('https://dragonball-api.com/api/characters')
   //console.log(promesa);

   fetch('https://dragonball-api.com/api/characters')
    .then(respuesta => respuesta.json())
    .then(data => console.log)

});