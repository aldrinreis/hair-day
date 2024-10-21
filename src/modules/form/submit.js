import dayjs from "dayjs"
import {scheduleNew} from "../../services/schedule-new.js"
import {schedulesDay} from "../schedules/load.js"

const form = document.querySelector("form")
const selectedDate = document.getElementById("date")
const clientName = document.getElementById("client")


// Data atual para formatar o input

const inputToday = dayjs(new Date()).format("YYYY-MM-DD")

//Carregando a data atual e define a data mínima como sendo a data atual.
selectedDate.value = inputToday
selectedDate.min = inputToday

form.onsubmit = async (event)=>{
    //Previne o comportamento padrão de carregar a página
    event.preventDefault()

    try{
        //Recuperando o nome do cliente
        const name =clientName.value.trim()
        if(!name){
            return alert("Informe o nome do cliente")
            
        }

        //Recuperando o horário selecionado

        const hourSelected = document.querySelector(".hour-selected")
        if(!hourSelected){
            return alert("Selecione o horário")
        }

        //Recuperando somente a hora
        const [hour] = hourSelected.innerText.split(":")
        
        //Inserindo a hora na da
        const when = dayjs(selectedDate.value).add(hour, "hour")
        
        //Gera um Id
        const id = new Date().getTime()

        //Faz o agendamento
        await scheduleNew({
            id,
            name,
            when,
        })


        //Recarregando o agendamento
        await schedulesDay()

        // Limpando o input de nome
        clientName.value = ""

    }catch(error){
        alert("Não foi possível realizar o agendamento")
        console.log(error)
    }
}