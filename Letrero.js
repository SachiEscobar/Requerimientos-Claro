const inputContainers = document.querySelectorAll('.input-container');

  // Iterar sobre cada elemento y agregar eventos de mouse
  inputContainers.forEach(container => {
    const inputField = container.querySelector('input, textarea');
    const placeholderMessage = container.querySelector('.placeholder-message');

    // Mostrar el mensaje cuando el mouse entra al campo de entrada
    inputField.addEventListener('mouseover', () => {
      placeholderMessage.style.display = 'block';
    });

    // Ocultar el mensaje cuando el mouse sale del campo de entrada
    inputField.addEventListener('mouseout', () => {
      placeholderMessage.style.display = 'none';
    });
  });