import { app } from "./conection.js"
import { getDatabase, ref, get, onValue } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";

function getData(){
    // Obtiene una referencia a tu base de datos
    const db = getDatabase();
    // Obtén una referencia a la tabla "usuarios"
    const usuariosRef = ref(db, '/Archivos');
    // Lee los datos de la tabla "usuarios" una vez
    get(usuariosRef).then((snapshot) => {
    if (snapshot.exists()) {
        dataInsertDOM(snapshot.val())
    } else {
        console.log("No hay datos disponibles");
    }
    }).catch((error) => {
    console.error("Error al obtener datos:", error);
    });

}

function dataInsertDOM(data){
    var datasets = Object.values(data)
    datasets.reverse()
    datasets.forEach(item => {
        let nombre = item['nombre']
        let tamano = item['tamano']
        let fecha = item['fecha']
        let estado = item['estado']
        let part
        if(estado == "si"){
            part = 'checked=""'
        }

        const tbody = document.querySelector("tbody")
        const tr = document.createElement("tr")
        tr.classList.add("odd:bg-white")
        tr.classList.add("even:bg-gray-100")
        tr.classList.add("hover:bg-gray-100")
        tr.classList.add("dark:odd:bg-neutral-800")
        tr.classList.add("dark:even:bg-neutral-700")
        tr.classList.add("dark:hover:bg-neutral-700")
        var element = `
            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">${nombre}</td>
            <td class="px-3 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">${tamano}</td>
            <td class="px-3 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                ${fecha}
            <td class="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                <div class="">
                    <input type="checkbox" class="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="hs-checked-checkbox" ${part}>
                </div>
            </td>
        `
        tr.innerHTML = element
        tbody.append(tr)
    });
}

getData()