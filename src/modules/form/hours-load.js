import {openingHours} from "../../utils/opening-hours.js"
import {hoursClick} from "../form/hours-click.js"
import dayjs from "dayjs"

const hours = document.getElementById("hours")

export function hoursLoad({date, dailySchedules}){
    //Limpando a lista de horários
    hours.innerHTML = ""

    //Obtem a lista de horários ocupados
    const unavailableHours = dailySchedules.map((schedule) => dayjs(schedule.when).format("HH:mm"))

    const opening = openingHours.map((hour) => {
        //Recuperando somente a hora
        const [scheduleHour] = hour.split(":")

        //Adicionando a hora na data e verifica se ta no passado.
        const isHourPast = dayjs(date).add(scheduleHour, "hour").isBefore(dayjs())
        
        const available = !unavailableHours.includes(hour) && !isHourPast

        return {
            hour, 
           available
        }        

    })

    //Renderizar os horários, usando o foreach pois não a necessidade de retornar um novo array.
   opening.forEach(({hour, available})=>{
        const li = document.createElement("li")
        li.classList.add("hour")
        li.classList.add(available ? "hour-available": "hour-unavailable")
        
        li.textContent = hour

        if (hour === "9:00"){
            hourHeaderAdd("Manhã")
        }else if(hour === "13:00"){
            hourHeaderAdd("Tarde")
        }else if(hour === "18:00"){
            hourHeaderAdd("Noite")
        }

        hours.append(li)

   })

   //Adicionando o evento de click nos horários disponíveis

   hoursClick()
}

function hourHeaderAdd(title){
    const header = document.createElement("li")
    header.classList.add("hour-period")

    header.textContent = title

    hours.append(header)
}