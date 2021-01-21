// Select form
let años = document.querySelector('#form-anios');

for (let index = 1; index < 23; index++) {
    let inicio=1999;
    let resul=parseInt(inicio+index);
    let form = `<option class="form-option" id="anio" value=${resul} >${resul}</option>`;
    años.innerHTML += form;
}

// Form Validation
let form=document.querySelector('#form');

window.addEventListener('load',()=>{
    form.addEventListener('submit', validar);
})
function validar(e){
    e.preventDefault();

    //validar
    const pais=document.querySelector('#form-datos').value;
    const anio=document.querySelector('#form-anios').value;
    console.log("pais: "+pais);
    console.log("año: "+anio);
    if(pais==='' || anio===''){
        // Hubo un error
        error('ambos campos son abligatorios');
        return;
    }
    consultarApi(pais,anio);

}
function error(mensaje){
    const alerta = document.querySelector('.form-alerta');
    if (!alerta) {
        const form = document.querySelector('#form');
        let alerta = document.createElement('div');
        let error='<p class="form-alerta">'+mensaje+'</p>';
        alerta.innerHTML=error,
        form.appendChild(alerta);
        // Eliminar error
        setTimeout(()=>{
            alerta.remove();
        },5000);
    }
    
}
function consultarApi(pais,anio){
    const apiKy='fb80ba07b82c6f80e20db08cb26a01df1fed231e'
    const url=`https://calendarific.com/api/v2/holidays?&api_key=${apiKy}&country=${pais}&year=${anio}`
    fetch(url)
        .then(res=>res.json())
        .then(datos=>mostrar(datos.response.holidays));
}

function mostrar(datos){
    const {holidays} = datos;
    datos.forEach(dato => {
        const {name, date:{datetime:{day, month, year}}, description} = dato;
        const contenedor=document.querySelector('#container');
        const informacion=document.createElement('div');
        informacion.classList.add('container-contenido');
        informacion.innerHTML=`
            <ul class="container-lista">
                <li class="container-item" >${day}</li>
                <li class="container-item" >month: ${month}</li>
                <li class="container-item" >${name}</li>
            </ul>
            <div class="container-parragraph">
                    <p>
                        ${description}
                    </p>
            </div>
        `
        contenedor.appendChild(informacion);
    });
}