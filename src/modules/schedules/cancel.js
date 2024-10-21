import {schedulesDay} from "./load.js"

import {scheduleCancel} from "../../services/schedule-cancel.js"

const periods = document.querySelectorAll(".period")

//Gerar evento de click para cada lista (manhã, tarde e noite)
periods.forEach((period)=>{
    //Captura o evento de clique na lista
    
    period.addEventListener("click", async (event)=>{
        if(event.target.classList.contains("cancel-icon")){
            //Obtendo a li pai do elemento clicado.
            
            const item = event.target.closest("li")
          
            //Pega o Id do agendamento para remover
            const {id} = item.dataset
           
            //Confirma que o Id foi selecionado.
            if (id){
                //Confirma se o usuário que cancelar.
                const isConfirm = confirm("Tem certeza que deseja cancelar o agendamento?")
            
                if(isConfirm){
                    // faz a requisição de cancelamento
                    await scheduleCancel({id})
                    //recarregando os agendamentos
                    schedulesDay()
                }
            }
        }


    })
})