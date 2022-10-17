window.alert('funciona')

function selecionaprato(this){
    if (this.classList.contains('pratoclicado')){
        this.classList.remove('pratoclicado')
    }
    else{
        this.classList.add('pratoclicado')
    }
}
 