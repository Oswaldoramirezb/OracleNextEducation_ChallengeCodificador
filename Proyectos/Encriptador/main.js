document.addEventListener('DOMContentLoaded', () => {
    const inputText = document.getElementById('input-text');
    const outputText = document.getElementById('output-text');
    const encryptBtn = document.getElementById('encrypt-btn');
    const decryptBtn = document.getElementById('decrypt-btn');
    const copyBtn = document.getElementById('copy-btn');

    // Matriz de reemplazo para el cifrado
    const encryptionMatrix = {
        'a': 'ai',
        'e': 'enter',
        'i': 'imes',
        'o': 'ober',
        'u': 'ufat'
    };

    // Matriz inversa para el descifrado
    const decryptionMatrix = {
        'ai': 'a',
        'enter': 'e',
        'imes': 'i',
        'ober': 'o',
        'ufat': 'u'
    };

    // Función para encriptar el texto
    function encrypt(text) {
        return text.split('').map(char => {
            return encryptionMatrix[char] || char;
        }).join('');
    }

    // Función para desencriptar el texto
    function decrypt(text) {
        let result = text;
        for (const [key, value] of Object.entries(decryptionMatrix)) {
            result = result.replace(new RegExp(key, 'g'), value);
        }
        return result;
    }

    // Función para validar el texto
    function validateText(text) {
        return /^[a-z\s]+$/.test(text);
    }

    // Función para mostrar notificaciones
    function showNotification(message, type = 'success') {
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.innerHTML = `
            <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i>
            <span>${message}</span>
        `;
        document.body.appendChild(notification);

        setTimeout(() => {
            notification.classList.add('show');
        }, 100);

        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => {
                notification.remove();
            }, 300);
        }, 3000);
    }

    // Función para guardar mensaje encriptado
    async function saveEncryptedMessage(encryptedText) {
        try {
            const response = await fetch('https://api.example.com/messages', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    message: encryptedText,
                    timestamp: new Date().toISOString()
                })
            });

            if (!response.ok) {
                throw new Error('Error al guardar el mensaje');
            }

            const data = await response.json();
            showNotification('Mensaje guardado exitosamente');
            return data;
        } catch (error) {
            showNotification('Error al guardar el mensaje', 'error');
            console.error('Error:', error);
        }
    }

    // Función para cargar mensajes guardados
    async function loadSavedMessages() {
        try {
            const response = await fetch('https://api.example.com/messages');

            if (!response.ok) {
                throw new Error('Error al cargar los mensajes');
            }

            const data = await response.json();
            return data;
        } catch (error) {
            showNotification('Error al cargar los mensajes', 'error');
            console.error('Error:', error);
            return [];
        }
    }

    // Evento para el botón de encriptar
    encryptBtn.addEventListener('click', async () => {
        const text = inputText.value.toLowerCase();

        if (!validateText(text)) {
            showNotification('Por favor, ingresa solo letras minúsculas y espacios.', 'error');
            return;
        }

        const encryptedText = encrypt(text);
        outputText.value = encryptedText;

        // Guardar el mensaje encriptado
        await saveEncryptedMessage(encryptedText);
    });

    // Evento para el botón de desencriptar
    decryptBtn.addEventListener('click', async () => {
        const text = inputText.value.toLowerCase();

        if (!validateText(text)) {
            showNotification('Por favor, ingresa solo letras minúsculas y espacios.', 'error');
            return;
        }

        outputText.value = decrypt(text);
    });

    // Evento para el botón de copiar
    copyBtn.addEventListener('click', async () => {
        if (outputText.value) {
            outputText.select();
            document.execCommand('copy');

            // Animación de feedback
            copyBtn.innerHTML = '<i class="fas fa-check"></i> Copiado';
            copyBtn.style.backgroundColor = '#27ae60';

            setTimeout(() => {
                copyBtn.innerHTML = '<i class="fas fa-copy"></i> Copiar';
                copyBtn.style.backgroundColor = '';
            }, 2000);

            showNotification('Texto copiado al portapapeles');
        } else {
            showNotification('No hay texto para copiar', 'error');
        }
    });

    // Cargar mensajes guardados al iniciar
    loadSavedMessages().then(messages => {
        if (messages.length > 0) {
            showNotification(`${messages.length} mensajes cargados`);
        }
    });
});
