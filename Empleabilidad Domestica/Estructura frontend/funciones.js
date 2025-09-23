  // Referencias a elementos del DOM
        const registerModal = document.getElementById('register-modal');
        const headerRegisterBtn = document.getElementById('header-register-btn');
        const sidebarRegisterBtn = document.getElementById('sidebar-register-btn');
        const closeModalBtn = document.getElementById('close-modal');
        const viewProfileBtns = document.querySelectorAll('.view-profile-btn');
        const modalForm = document.querySelector('.modal-form');


        function openModal(){
            registerModal.classList.add('active');
            document.body.style.overflow = 'hidden'; 
        }

        // Función para cerrar el modal
        function closeModal(){
            registerModal.classList.remove('active');
            document.body.style.overflow = 'auto'; // Restaura el scroll del body
        }

        // Event Listeners
        headerRegisterBtn.addEventListener('click', openModal);
        sidebarRegisterBtn.addEventListener('click', openModal);
        closeModalBtn.addEventListener('click', closeModal);

        // Cerrar modal al hacer clic fuera del contenido
        registerModal.addEventListener('click', function(e) {
            if (e.target === registerModal) {
                closeModal();
            }
        });

        // Cerrar modal con la tecla Escape
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && registerModal.classList.contains('active')) {
                closeModal();
            }
        });

        // Abrir modal al hacer clic en "Ver perfil"
        viewProfileBtns.forEach(button => {
            button.addEventListener('click', openModal);
        });

        // Manejar envío del formulario
        modalForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Aquí iría la lógica para procesar el registro
            alert('¡Formulario enviado! En una implementación real, esto conectaría con el backend.');
            closeModal();
        });

        // Funcionalidad para las imágenes
        document.querySelectorAll('.worker-image').forEach(image => {
            image.addEventListener('click', function() {
                openModal();
            });
        });