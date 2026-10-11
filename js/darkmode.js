let darkmode = localStorage.getItem('darkmode')
const themeSwitch = document.getElementById('theme-switch')

const enableDarkmode = () => {
    document.body.classList.add('darkmode')
    localStorage.setItem('darkmode', 'active')
    document.getElementById('textohp').textContent = '"Eu confesso não saber a razão, mas olhar as estrelas sempre me faz sonhar. - Vincent Van Gogh, 1889."';
    const imagem = document.getElementById("divisorb");
imagem.setAttribute("src", "./imagens/DivisorB.png");

}

const disableDarkmode = () => {
    document.body.classList.remove('darkmode')
    localStorage.setItem('darkmode', null)
    document.getElementById('textohp').textContent = '"Vejo nele a imagem da morte, no sentido de que a humanidade seria o trigo que ele está ceifando... Mas não há nada de triste na morte, ela segue seu caminho, sob a ampla luz do dia, com o sol inundando tudo, com uma luz de puro ouro. -Vincent Van Gogh, 1889."';
    const imagem = document.getElementById("divisorb");
    imagem.setAttribute("src", "./imagens/DivisorA.png");

}

if(darkmode === "active") enableDarkmode()

themeSwitch.addEventListener("click", () => {
    darkmode = localStorage.getItem('darkmode')
    darkmode !== "active" ? enableDarkmode() : disableDarkmode()
})