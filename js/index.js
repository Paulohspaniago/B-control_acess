
async function getCurrentPosition() {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition((position) => {
            let userLocation = {
                "latitude": position.coords.latitude,
                "longitude": position.coords.longitude
            }
            resolve(userLocation);
        },
        (error) => {
            reject("Erro ao recuperar a localização " + error);
        });
    });
}
const diaSemana = document.getElementById("dia-semana");
const diaMesAno = document.getElementById("dia-mes-ano");
const horaMinSeg = document.getElementById("hora-min-seg");


diaMesAno.textContent = getCurrentDay();
diaSemana.textContent = getWeekDay();


//////////////////////////////////////////////////////
const divAlertaRegistroPonto = document.getElementById("alerta-registro-ponto");

const dialogPonto = document.getElementById("dialog-ponto");

const btnBaterPonto = document.getElementById("btn-bater-ponto");
btnBaterPonto.addEventListener("click", register);

const btnDialogFechar = document.getElementById("btn-dialog-fechar");
btnDialogFechar.addEventListener("click", () => {
    dialogPonto.close();
});

const dialogData = document.getElementById("dialog-data");
dialogData.textContent = "Data : " + getCurrentDay();

const dialogHora = document.getElementById("dialog-hora");
dialogHora.textContent = "Hora : " + getCurrentHour();

const btnDialogBaterPonto = document.getElementById("btn-dialog-bater-ponto");
btnDialogBaterPonto.addEventListener("click", ()=>{
    
    let typeRegister = document.getElementById("tipos-ponto").value;
    
    let ponto ={ 
        "data": getCurrentDay(),
        "hora": getCurrentHour(),
        "localizacao": getCurrentPosition(),
        "id": 1,
        "tipo": typeRegister
    }

    console.log(ponto);

    saveRegisterLocalStorage(ponto);
    localStorage.setItem("lastDateRegister", ponto.data);
    localStorage.setItem("lastTimeRegister", ponto.hora);

    dialogPonto.close();
    divAlertaRegistroPonto.classList.remove("hidden");
    divAlertaRegistroPonto.classList.add("show");

    setTimeout(() => {
        divAlertaRegistroPonto.classList.remove("show");
        divAlertaRegistroPonto.classList.add("hidden");
    }, 5000);

});

const nextRegister = {
    "entrada": "intervalo",
    "intervalo": "volta-intervalo", 
    "volta-intervalo": "saida", 
    "saida": "entrada"
}

const btnCloseAlertRegister = document.getElementById("alerta-registro-ponto-fechar");
btnCloseAlertRegister.addEventListener("click", () => {
    divAlertaRegistroPonto.classList.remove("show");
    divAlertaRegistroPonto.classList.add("hidden");
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

printCurrentHour();
setInterval(printCurrentHour, 1000);

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

function saveRegisterLocalStorage(register) {
    const typeRegister = document.getElementById("tipos-ponto");
    registerLocalStorage.push(register); // Array
    localStorage.setItem("register", JSON.stringify(registerLocalStorage));
    localStorage.setItem("lastTypeRegister", typeRegister.value);
} 

function getRegisterLocalStorage() {
    let registers = localStorage.getItem("register");

    if(!registers) {
        return [];
    }

    return JSON.parse(registers); 
}

function register() {
    console.log("Botão clicado!");
    
    dialogData.textContent = "Data: " + getCurrentDay();
    dialogHora.textContent = "Hora: " + getCurrentHour();
    
    let lastTypeRegister = localStorage.getItem("lastTypeRegister");
    if(lastTypeRegister) {
        const typeRegister   = document.getElementById("tipos-ponto");
        typeRegister.value   = nextRegister[lastTypeRegister];
        let lastRegisterText = "Último registro: " + localStorage.getItem("lastDateRegister") + " - " + localStorage.getItem("lastTimeRegister") + " | " + localStorage.getItem("lastTypeRegister")
        document.getElementById("dialog-last-register").textContent = lastRegisterText;
    }

    setInterval(() => {
        dialogHora.textContent = "Hora: " + getCurrentHour();
    }, 1000);

    dialogPonto.showModal();
}

function closing (){
    dialogPonto.close();
}