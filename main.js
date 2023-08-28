document.addEventListener('keyup', (e)=>{ ///keyup ejecuta un evento cuando dejamos de presionar
    ///una tecla. Cuando tocamos una tecla se ejecuta, pues la presionamos y soltamos
    if (e.target.matches('#buscador')){ 
///match retorna todas las coincidencias de una expresion regular en una cadena. si llega
///mel, retorna melon, melocoton ...
        document.querySelectorAll('.articulo').forEach(
            fruta =>{
                fruta.textContent.toLowerCase().includes(e.target.value.toLowerCase())
                ?fruta.classList.remove('filtro')
                :fruta.classList.add('filtro')
            }
        )
    }
})