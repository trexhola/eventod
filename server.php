<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recibe datos del formulario
    $nombre = $_POST['nombre'];
    $email = $_POST['email'];

    // Valida y procesa la información
    if (!empty($nombre) && !empty($email)) {
        echo "Nombre: " . htmlspecialchars($nombre) . "<br>";
        echo "Email: " . htmlspecialchars($email);
    } else {
        echo "Por favor, completa todos los campos.";
    }
}
?>
