function campoAdicionarTarefa () {
    const campo_adicionar_tarefa = document.getElementById("adicionar-tarefa")
    campo_adicionar_tarefa.style.display = "block"
    const botao_adicionar_tarefa = document.getElementById("adicionar-tarefa1")
    botao_adicionar_tarefa.style.display = "none"
}

let cont = 0

function AdicionarTarefa() {
    cont++
    const campo_nome_tarefa = document.getElementById("text")
    const nome_tarefa = campo_nome_tarefa.value || "Sem nome"
    campo_nome_tarefa.value = ""
    const campo_adicionar_tarefa = document.getElementById("adicionar-tarefa")
    const botao_adicionar_tarefa = document.getElementById("adicionar-tarefa1")
    campo_adicionar_tarefa.style.display = "none"
    campo_adicionar_tarefa.style.marginBottom = "50px"
    botao_adicionar_tarefa.style.display = "flex"

    if (nome_tarefa != "Sem nome") {
        (function CriarTarefa() {
            const tarefa = document.createElement("div")
            const id_tarefa = `tarefa-${cont}`
            tarefa.id = id_tarefa
            tarefa.className = "pendente"
            tarefa.style = "display: flex; align-items: center; justify-content: space-between;"

            const div2 = document.createElement("div")
            div2.style = "display: flex; align-items: center;"
            const checkbox = document.createElement("input")
            checkbox.type = "checkbox"
            checkbox.id = `checkbox-tarefa${cont}`
            checkbox.style = "margin-left: 5px;"
            checkbox.setAttribute("onclick", `concluir(${cont})`)
            const span = document.createElement("span")
            span.style = "font-size: 21px; margin-left: 5px;"
            span.innerText = nome_tarefa
            span.id = `span-nome-tarefa${cont}`
            div2.append(checkbox, span)

            const botao_lixeira = document.createElement("button")
            botao_lixeira.id = "botao-lixeira"
            botao_lixeira.setAttribute("onclick", `excluir(${cont})`)
            const lixeira = document.createElement("img")
            botao_lixeira.append(lixeira)
            lixeira.setAttribute("src", "trash.svg")
 
            const tarefas = document.getElementById("tarefas")
            tarefas.append(tarefa)
            tarefa.append(div2, botao_lixeira)
        })()
    }
}

function concluir(o) {
    const span_nome_tarefa = document.getElementById(`span-nome-tarefa${o}`)
    const id_tarefa = document.getElementById(`tarefa-${o}`)
    const nome_tarefa_style = window.getComputedStyle(span_nome_tarefa)
   
    if (nome_tarefa_style.textDecorationLine == "none") {
        span_nome_tarefa.style.textDecoration = "line-through"
        id_tarefa.className = "concluido"
    }

    else if (nome_tarefa_style.textDecorationLine == "line-through") {
        span_nome_tarefa.style.textDecoration = "none"
        id_tarefa.className = "pendente"
    }
}

function excluir(o) {
    const id_tarefa = document.getElementById(`tarefa-${o}`)
    id_tarefa.remove()
}

function mostrarTarefas() {
        if (window.valor_concluido == true) {
            mostrarConcluidos()
        }

        if (window.valor_pendente == true) {
            mostrarPendentes()
        }
}

function mostrarConcluidos() {
    const pendentes = document.body.getElementsByClassName("pendente")
    
    if (window.valor_pendente == true) {
        mostrarPendentes()
    }

    for (let i = 0; i < pendentes.length; i++) {
        const display = window.getComputedStyle(pendentes[i])
            
        if (display.display == "flex") {
            pendentes[i].style.display = "none"
            window.valor_concluido = true
        }

        else if (display.display == "none") {
            pendentes[i].style.display = "flex"
            window.valor_concluido = false
        }

    }
}

window.valor_concluido = undefined
window.valor_pendente = undefined

function mostrarPendentes() {
    const concluidos = document.body.getElementsByClassName("concluido")

    if (window.valor_concluido == true) {
        mostrarConcluidos()
    }

    for (let i = 0; i < concluidos.length; i++) {
        const display = window.getComputedStyle(concluidos[i])

        if (display.display == "flex") {
            concluidos[i].style.display = "none"
            window.valor_pendente = true
        }

        else if (display.display == "none") {
            concluidos[i].style.display = "flex"
            window.valor_pendente = false
        }
    }
}

