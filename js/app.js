// ==========================================
// 1. FUNCIÓN CORRESPONDIENTE (LÓGICA PURA)
// ==========================================

/**
 * Función flecha encargada de fragmentar el texto por parámetro.
 * 
 * @param {string} textoCompleto - La cadena de texto recibida por parámetro.
 * @param {string} separador - El carácter de corte recibido por parámetro.
 * @returns {Array} Devuelve el Array generado usando la sentencia return.
 */
const generarArrayPorSeparador = (textoCompleto, separador) => {
    const arrayResultado = textoCompleto.split(separador);
    return arrayResultado;
};


// ==========================================
// 2. FUNCIÓN CONTROLADORA CENTRAL (MAIN)
// ==========================================

/**
 * Función Main: Motor central de la aplicación.
 * Se activa únicamente al pulsar el botón de Ejecutar.
 */
const main = () => {
    // Captura de los elementos de la pantalla (DOM)
    const inputTexto = document.getElementById("input-texto");
    const resultadoPantalla = document.getElementById("resultado-pantalla");
    const contenedorResultado = document.getElementById("contenedor-resultado");
    const tituloResultado = document.getElementById("titulo-resultado");

    // REQUISITO A: Lectura de datos desde la interfaz gráfica
    const textoLeido = inputTexto.value;
    
    // Asignamos el espacio en blanco de forma fija e interna según tu ejemplo
    const separadorFijo = " "; 

    // Restablecer estilos visuales base antes de cada procesamiento
    contenedorResultado.className = "border border-gray-200 bg-gray-50 rounded-lg p-4 font-mono";
    tituloResultado.textContent = "Resultado del Array en Pantalla:";
    tituloResultado.className = "block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1";

    // REQUISITO B: Validación estricta de datos
    if (textoLeido.trim() === "") {
        resultadoPantalla.textContent = "Error: El texto principal no puede estar vacío.";
        contenedorResultado.classList.add("border-red-300", "bg-red-50");
        tituloResultado.classList.add("text-red-400");
        return; // Frena el flujo del programa
    }

    // REQUISITO C y D: Pasa parámetros a la función y almacena el 'return' en una variable
    const resultadoRecibido = generarArrayPorSeparador(textoLeido, separadorFijo);

    // REQUISITO E: Muestra la variable que contiene el resultado por pantalla
    resultadoPantalla.textContent = JSON.stringify(resultadoRecibido);
};


// ==========================================
// 3. ENTORNO DE ARRANQUE Y ESCUCHADORES (LISTENERS)
// ==========================================

document.addEventListener("DOMContentLoaded", () => {
    const btnProcesar = document.getElementById("btn-procesar");
    const btnLimpiar = document.getElementById("btn-limpiar");
    const inputTexto = document.getElementById("input-texto");
    const resultadoPantalla = document.getElementById("resultado-pantalla");

    /**
     * Resetea el formulario de la interfaz a su estado limpio original
     */
    const limpiarCamposFormulario = () => {
        inputTexto.value = "";
        resultadoPantalla.textContent = "...";
        
        const contenedor = document.getElementById("contenedor-resultado");
        const titulo = document.getElementById("titulo-resultado");
        contenedor.className = "border border-gray-200 bg-gray-50 rounded-lg p-4 font-mono";
        titulo.className = "block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1";
        titulo.textContent = "Resultado del Array en Pantalla:";
    };

    // --- ASIGNACIÓN DE LOS ESCUCHADORES NATIVOS ---
    
    // Ahora 'main' solo se ejecuta de forma manual mediante el clic de este botón
    btnProcesar.addEventListener("click", main);
    
    // Escuchador para vaciar la pantalla
    btnLimpiar.addEventListener("click", limpiarCamposFormulario);
});
