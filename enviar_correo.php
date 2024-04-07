<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Verifica si se ha enviado un archivo
    if(isset($_FILES['archivo']) && $_FILES['archivo']['error'] === UPLOAD_ERR_OK) {
        // Configuración del correo
        $destinatario = $_POST['correo'];
        $asunto = "Archivo adjunto desde el formulario";
        $mensaje = "Se ha adjuntado un archivo desde el formulario.";
        $archivo_tmp = $_FILES['archivo']['tmp_name'];
        $archivo_nombre = $_FILES['archivo']['name'];
        
        // Contenido del correo
        $contenido_correo = chunk_split(base64_encode(file_get_contents($archivo_tmp)));
        
        // Encabezados del correo
        $headers = "From: tu_correo@example.com" . "\r\n";
        $headers .= "MIME-Version: 1.0" . "\r\n";
        $headers .= "Content-Type: multipart/mixed; boundary=\"boundary=\"" . "\r\n";
        
        // Archivo adjunto
        $contenido_correo = "--boundary=\r\n";
        $contenido_correo .= "Content-Type: text/plain; charset=\"UTF-8\"\r\n";
        $contenido_correo .= "Content-Transfer-Encoding: 7bit\r\n\r\n";
        $contenido_correo .= $mensaje . "\r\n\r\n";
        $contenido_correo .= "--boundary=\r\n";
        $contenido_correo .= "Content-Type: application/octet-stream; name=\"$archivo_nombre\"\r\n";
        $contenido_correo .= "Content-Transfer-Encoding: base64\r\n";
        $contenido_correo .= "Content-Disposition: attachment\r\n\r\n";
        $contenido_correo .= chunk_split(base64_encode(file_get_contents($archivo_tmp))) . "\r\n\r\n";
        $contenido_correo .= "--boundary=--\r\n";

        // Envía el correo
        if(mail($destinatario, $asunto, $contenido_correo, $headers)) {
            echo "El archivo se ha enviado correctamente a $destinatario.";
        } else {
            echo "Error al enviar el archivo.";
        }
    } else {
        echo "Error al procesar el archivo.";
    }
} else {
    echo "Acceso no autorizado.";
}
?>
