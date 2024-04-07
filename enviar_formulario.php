<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST["nombre"];
    $email = $_POST["email"];
    $mensaje = $_POST["mensaje"];
    
    // Dirección de correo a la que se enviará el formulario
    $destinatario = "santiago.esc23@hotmail.com";
    
    $asunto = "Nuevo mensaje desde el formulario de contacto";
    
    // Construye el cuerpo del correo
    $contenido = "Nombre: $nombre\n";
    $contenido .= "Correo electrónico: $email\n\n";
    $contenido .= "Mensaje:\n$mensaje\n";
    
    // Envía el correo
    mail($destinatario, $asunto, $contenido);
    
    // Redirige a una página de confirmación
    header("Location: confirmacion.html");
    exit;
}
?>
