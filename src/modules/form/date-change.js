import {schedulesDay} from "../schedules/load.js"

//Selecionando o input de data
const selectedDate = document.getElementById("date")

//Recarregando a lista de horários quando o input de data mudar

selectedDate.onchange = () => schedulesDay()