document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("subscriptionForm");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const successMessage = document.getElementById("successMessage");

    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Evita el envío del formulario para validar

        let isValid = true;
        nameError.textContent = "";
        emailError.textContent = "";
        successMessage.textContent = "";

        // Validación del nombre
        if (nameInput.value.trim() === "") {
            nameError.textContent = "El nombre es obligatorio.";
            isValid = false;
        }

        // Validación del email con expresión regular
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailInput.value)) {
            emailError.textContent = "Ingresa un correo válido.";
            isValid = false;
        }

        // Si es válido, mostrar mensaje de éxito
        if (isValid) {
            successMessage.textContent = "¡Suscripción exitosa!";
            form.reset();
        }
    });
});