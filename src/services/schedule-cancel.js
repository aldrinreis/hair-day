import { apiConfig } from "./api-config.js";

export async function scheduleCancel({id}){
    try{
        await fetch(`${apiConfig.baseURL}/schedules/${id}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
            }
        });
        
         alert("Agendamento cancelado com sucesso.")
    }catch(error){
        console.log(error)
        alert("Não foi possível cancelar o agendamento.")
    }
}