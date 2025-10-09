const button = document.querySelector("button")
const main = document.querySelector("main")
button.addEventListener("click", buscarInfoBackend)

async function buscarInfoBackend() {
    const persons = await fetch("http://localhost:3333").then((response) => response.json())

    console.log(persons)

    persons.map((person) => {
        main.innerHTML += `
        <section>
            <h2>Nome: ${person.name}</h2>
            <h3>Apelido: ${person.nickname}</h3>
            <h3>Idade: ${person.age} anos</h3>
            <h3>Email: ${person.email}</h3>
        </section>
        <hr>
        `
    })
}
