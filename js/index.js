
function getCurrentPosition(){
    navigator.geolocation.getCurrentPosition((position)=> {
        return position;

    });
}

const diaSemana = document.getElementById("dia-semana");
const diaMesAno = document.getElementById("dia-mes-ano");
const horaMinSeg = document.getElementById("hora");


diaMesAno.textContent = getCurrentDay();
diaSemana.textContent = getWeekDay();


//////////////////////////////////////////////////////

const dialogPonto = document.getElementById("dialog-ponto");

const btnBaterPonto = document.getElementById("btn-bater-ponto");
btnBaterPonto.addEventListener("click", register);

const btnSairModal = document.getElementById("btn-saida");
btnSairModal.addEventListener("click", closing );

const dialogData = document.getElementById("dialog-data");
dialogData.textContent = "Data : " + getCurrentDay();

const dialogHora = document.getElementById("dialog-hora");
dialogHora.textContent = "Hora : " + getCurrentHour();

const btnDialogBaterPonto = document.getElementById("btn-dialgo-bater-ponto");
btnDialogBaterPonto.addEventListener("click", ()=>{
    
    let typeregister = document.getElementById("tipos-ponto").value;
    
    let ponto ={ 
        "data": getCurrentDay(),
        "hora": getCurrentHour(),
        "localizacao": getCurrentPosition(),
        "id": 1,
        "tipo": typeRegister
    }

    console.log(ponto);

    saveRegisterLocalStorage(ponto);
    localStorage.set


    dialogPonto.close();

});

///to-do

let registerLocalStorage = getRegisterLocalStorage();


//////////////////////////////////////////////////////

 
function getWeekDay() {
    const date= new Date();
    let days = ["Domingo", "Segunda-feira", "Terca-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira","Sabado"];
    return days[date.getDay()];

}

function printCurrentHour(){
    horaMinSeg.textContent = getCurrentHour();
}

setInterval(printCurrentHour,1000);

function getCurrentDay(){
    const date = new Date();
    
    let dia = date.getDate();
    let mes = date.getMonth() + 1;

    if (dia <10 ) {
        dia = "0" + dia;
    }

    if ( mes < 10 ){
        mes = "0" + mes ;
    }


    return dia + "/" + mes + "/" + date.getFullYear();
    
}

function getCurrentHour(){
    const date = new Date();

    let hora = date.getHours();
    let min = date.getMinutes();
    let seg = date.getSeconds();

    if (hora < 10) {
        hora = "0" + hora;
    }

    if (min < 10 ) {
        min = "0" + min;
    }

    if (seg < 10) {
        seg = "0" + seg;
    }

    return hora + ":" + min +  ":" + seg;
}

function saveRegisterLocalStorage(register){
    registerLocalStorage.push(register);
    localStorage.setItem("register", JSON.stringify(registerLocalStorage));
}

function getRegisterLocalStorage(){
    let registers = localStorage.getItem("register");

    if(!registers) {
        return [];
    }
}



function register(){
    dialogPonto.showModal();
}

function closing (){
    dialogPonto.close();
}