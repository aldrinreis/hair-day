import {scheduleFetchByDay} from "../../services/schedule-fetch-by-day.js"
import {hoursLoad} from "../form/hours-load.js"
import {schedulesShow} from "../schedules/show.js"

//Seleciona o input de data
const selectedDate = document.getElementById("date")


export async function schedulesDay(){
    //Obtem a data do input
    const date = selectedDate.value

    //Buscando na Api os agendamento
    const dailySchedules = await scheduleFetchByDay({date})
   // console.log(dailySchedules)

   //Exibe os agendamento
   schedulesShow({dailySchedules})

    //Renderiza as horas disponíveis
    hoursLoad({date, dailySchedules})



}