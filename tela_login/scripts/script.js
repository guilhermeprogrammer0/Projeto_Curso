var resultado = document.querySelector("#resultado");
var senha = document.querySelector("#senha");
var btn_enviar = document.querySelector("#btn_enviar");

senha.addEventListener('input',verificar);

function verificar()
{
    if(senha.value.length<8)
    {
        resultado.innerHTML = "No mínimo 8 caracteres.";
        resultado.classList.add('verificacao')
        btn_enviar.disabled = true;
        btn_enviar.style.opacity = "50%";
    }
    else
    {
        resultado.innerHTML = "";
        btn_enviar.style.opacity = "100%";
    }
}