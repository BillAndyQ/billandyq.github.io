import { app } from "./conection.js"
import { registerInfoFile } from "./registerInfoFile.js";

// import { getStorage, ref, uploadBytes } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getStorage, ref, uploadBytes } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-storage.js";

const input_file = document.getElementById("input_files")
const btn_uploadFile = document.querySelector(".uploadFile")
const btnOpenConfirm = document.getElementById("btnOpenConfirm")

btn_uploadFile.addEventListener('click', function() {
    // Simular clic en el input de tipo archivo al hacer clic en el botón
    input_file.click();
});

input_file.addEventListener('change', function(){
    var files = this.files; // Obtiene los archivos seleccionados
    if (files.length > 0) {
        // Se seleccionó al menos un archivo
        // btnOpenConfirm.click()
        const file = files[0]; // Obtiene el archivo seleccionado
        subirArchivo(file);
    } else {
        // No se seleccionó ningún archivo
        console.log("No se seleccionó ningún archivo.");
    }
})


// Función para subir un archivo
function subirArchivo(file) {
    const storage = getStorage(app);
  // Genera un nombre único para el archivo
  const nombreArchivo = file.name;
  
  // Referencia al archivo en Firebase Storage
  const referenciaArchivo = ref(storage, nombreArchivo);
  
    // Sube el archivo a Firebase Storage
    uploadBytes(referenciaArchivo, file)
      .then(snapshot => {
        registerInfoFile()
        console.log('Archivo subido exitosamente:', snapshot);
      })
      .catch(error => {
        console.error('Error al subir el archivo:', error);
      });
}



