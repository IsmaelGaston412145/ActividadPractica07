const clientes = [
    c1="cliente 1",
    c2="cliente 2",
    c3="cliente 3",
    c4="cliente 4",
    c5="cliente 5"
]

const login={
    email: 'correo123@gmail.com',
    clave: 'clave123'
}

function verificar_login(){
    const $email = document.getElementById('email')
    const $clave = document.getElementById('clave')

    if($email.value === ''){
        alert('Debe ingresar in email!')
        return false
    }
    if($clave.value === ''){
        alert('Debe ingresar in contraseña!')
        return false
    }
    if($email.value != login.email || $clave.value != login.clave){
        alert('Email o contraseña incorrectas!')
        return false
    }

    return true
}

function ingresar_turnos(){
    const $div = document.getElementById('contenido');
    $div.innerHTML = '';
    let items = '';
    for (let i = 0; i < clientes.length; i++) {
        let cliente = clientes[i];
        let cTurnos = '';
        turnos.forEach(t => {
            if(t.cliente === cliente){
                cTurnos +=
                `
                    <br>
                    (Id turno: ${t.idTurno}|
                    Fecha: ${t.fecha}|
                    Hora: ${t.hora})
                `
            }
        })

        if(cTurnos != ''){
            items +=
            `
                <li>${cliente} : ${cTurnos}</li>
            `
        }
    }

    $div.innerHTML =
    `
    <p>Total de turnos por cliente: ${turnos.length}</p>
    <ul>
        ${items}
    </ul>
    `
}

function validar_turno(){
    const $idTurno = document.getElementById('idTurno')
    const $fecha = document.getElementById('fechaTurno')
    const $hora = document.getElementById('horaTurno')
    const $clente = document.getElementById('clienteTurno')
    let verifId = true;
    turnos.forEach(t => {
        if(parseInt($idTurno.value) === t.idTurno)
            verifId = false;
    });

    if(verifId === false){
        alert('El id ya está en uso!')
        return false
    }
    if($idTurno.value === '' || $idTurno.value<1){
        alert('Debe ingresar un id valido!')
        return false
    }
    if($fecha.value === ''){
        alert('Debe ingresar una fecha!')
        return false
    }
    if($hora.value === ''){
        alert('Debe ingresar una hora valida!')
        return false
    }

    let nuevoTurno={
        idTurno: parseInt($idTurno.value),
        fecha: $fecha.value,
        hora: $hora.value,
        cliente: $clente.value
    }

    turnos.push(nuevoTurno);

    alert('Datos agregados con exito!')
    ingresar_turnos()
    return true
}