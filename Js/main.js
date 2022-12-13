let frm_login, frm_registro, home;
let btn_ir_a_registro, btn_enviar_registrar,btn_enviar;
let correo;
let img_perfil = "https://icons.iconarchive.com/icons/goodstuff-no-nonsense/free-space/72/space-ship-1-icon.png";

window.onload = function(){
  frm_login = document.getElementById("frm_login");
  btn_enviar = document.getElementById("btn_enviar");
  btn_enviar_registrar = document.getElementById("btn_enviar_registrar");
  frm_registro = document.getElementById("frm_registro");
  home = document.getElementById("home");
  btn_ir_a_registro = document.getElementById("btn_ir_a_registro");
  btn_ir_a_registro.addEventListener("click",irARegistro);
  //btn_enviar.addEventListener("click",validar);
  btn_enviar_registrar.addEventListener("click",registrar);
  configurar_login();
}

function configurar_login(){
  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }
      compararClave();
      form.classList.add('was-validated')
    }, false)
  });
}

function irARegistro(event){
  frm_login.reset();
  cambiarFormulario();
}

function cambiarFormulario()
{
  frm_login.classList.toggle("ocultar");
  frm_registro.classList.toggle("ocultar");
}

function guardar(event){
  let correo = document.getElementById("correo");
  let clave = document.getElementById("clave");
  event.preventDefault();
  localStorage.setItem("correo",correo.value);
  localStorage.setItem("clave",clave.value);
}

function compararClave(){
  
  let correo = document.getElementById("correo");
  let clave = document.getElementById("clave");
  event.preventDefault();
  let usuario = JSON.parse(localStorage.getItem("usuario"));
  let html;
  if(correo.value==usuario.correo && clave.value== usuario.clave)
  {
    frm_login.classList.add("ocultar");
    home.classList.remove("ocultar");
    html = `
      <nav>
        <img src="${img_perfil}" />
        <a href="javascript:void(0);" id="btn_cerrar_sesion" onclick="cerrarSesion();">Cerrar sesion</a>
      </nav>
      <h2>Pagina principal </h2> 
      <br>Hola ${usuario.nombre}
     `;
    home.innerHTML = html;
  }
  else{
    alert("Datos incorrectos");
  }
}

function cerrarSesion(event){
  frm_login.classList.remove("ocultar");
  home.classList.add("ocultar");
}

function registrar(event){
 
  let nombre = document.getElementById("nombre");
  let apellido = document.getElementById("apellido");
  let celular = document.getElementById("celular");
  let direccion = document.getElementById("direccion");
  let correo = document.getElementById("correo1");
  let clave = document.getElementById("clave1");
  let usuario = {
    nombre:nombre.value,
    apellido:apellido.value,
    celular:celular.value,
    direccion:direccion.value,
    correo:correo.value,
    clave:clave.value
  };
  event.preventDefault();
  
  localStorage.setItem("usuario",JSON.stringify(usuario));
  alert("¡Muy bien, registro exitoso!")
  cambiarFormulario();
}