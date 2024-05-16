import { getDatabase, ref, push} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";

function registerInfoFile(){
    const db = getDatabase();
    const input_file = document.getElementById("input_files")

    // Obtén una referencia a la tabla "usuarios"
    const refe = ref(db, '/Archivos');
    const nombreArchivo = input_file.files[0].name;
    const pesoArchivoBytes = input_file.files[0].size;
    // Convierte el tamaño a kilobytes
    const pesoArchivoKB = pesoArchivoBytes / 1024;
    const fechaActual = new Date();

    // Obtiene el año actual
    const anio = fechaActual.getFullYear();

    // Obtiene el mes actual (los meses son indexados desde 0)
    const mes = fechaActual.getMonth() + 1; // Se suma 1 porque los meses son indexados desde 0

    // Obtiene el día del mes actual
    const dia = fechaActual.getDate();

    // Formatea la fecha como "DD/MM/YYYY"
    const fechaFormateada = `${dia.toString().padStart(2, '0')}/${mes.toString().padStart(2, '0')}/${anio}`;

    // Ejemplo de datos a insertar
    const nuevosDatos = {
        'nombre': nombreArchivo,
        'tamano': pesoArchivoKB,
        'fecha': fechaFormateada,
        'estado':'no'
    }

    // Realiza un push() para agregar los nuevos datos a la lista "usuarios"
    push(refe, nuevosDatos)
    .then((newChildRef) => {
        console.log("Nuevos datos agregados con la clave:", newChildRef.key);
        
        const tbody = document.querySelector("tbody")
        const tr = document.createElement("tr")
        tr.classList.add("odd:bg-white")
        tr.classList.add("even:bg-gray-100")
        tr.classList.add("hover:bg-gray-100")
        tr.classList.add("dark:odd:bg-neutral-800")
        tr.classList.add("dark:even:bg-neutral-700")
        tr.classList.add("dark:hover:bg-neutral-700")
        var element = `
            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">${nombreArchivo}</td>
            <td class="px-3 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">${pesoArchivoKB}</td>
            <td class="px-3 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                ${fechaFormateada}
            <td class="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                <div class="">
                    <input type="checkbox" class="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="hs-checked-checkbox">
                </div>
            </td>
        `
        tr.innerHTML = element
        tbody.prepend(tr)



    })
    .catch((error) => {
        console.error("Error al agregar nuevos datos:", error);
    });
}

export { registerInfoFile }