const BASE_URL = "http://localhost:8080/orcamento";

export async function adicionarLancamento(lancamento) {
    await fetch(`${BASE_URL}/lancamento`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(lancamento)
    })
}

export async function getLancamentos() {
    const res = await fetch(`${BASE_URL}/lancamento`)
    return res.json()
}

export async function getTotalEntradas() {
    const res = await fetch(`${BASE_URL}/entradas`)
    return res.json()
}

export async function getTotalSaidas() {
    const res = await fetch(`${BASE_URL}/saidas`)
    return res.json()
}

export async function getSaldo() {
    const res = await fetch(`${BASE_URL}/saldo`)
    return res.text()
}

export async function getMedias() {
    const res = await fetch(`${BASE_URL}/media`)
    return res.json()
}