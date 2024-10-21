import dayjs from "dayjs"
import {apiConfig} from "./api-config.js"

export async function scheduleFetchByDay({date}){

    try{
        // Requisitando 
        const response = await fetch(`${apiConfig.baseURL}/schedules`)

        //Converte para json
        const data = await response.json()
      
        //Filtra os agendamentos pelo dia selecionado
        const dailySchedules = data.filter((schedule)=> dayjs(date).isSame(schedule.when, "day"))

        return dailySchedules

    }catch(error){
        console.log(error)
        alert("Não foi possível buscar o agendamentos do dias selecionado")
    }
}

