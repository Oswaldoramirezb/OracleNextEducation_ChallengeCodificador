document.addEventListener('DOMContentLoaded', function () {
    // Navigation handling
    const navItems = document.querySelectorAll('.nav-menu li');
    const contentSections = document.querySelectorAll('.content-section');

    navItems.forEach(item => {
        item.addEventListener('click', function () {
            const targetSection = this.getAttribute('data-section');

            // Update active state
            navItems.forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');

            // Show target section
            contentSections.forEach(section => {
                section.style.display = section.id === targetSection ? 'block' : 'none';
            });

            // Initialize specific section if needed
            if (targetSection === 'reports') {
                initializeCharts();
            }
        });
    });

    // Initialize charts
    function initializeCharts() {
        // Occupancy Chart
        const occupancyCtx = document.getElementById('occupancyChart').getContext('2d');
        new Chart(occupancyCtx, {
            type: 'line',
            data: {
                labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun'],
                datasets: [{
                    label: 'Ocupación (%)',
                    data: [65, 75, 80, 85, 70, 90],
                    borderColor: '#3498db',
                    tension: 0.1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'top',
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 100
                    }
                }
            }
        });

        // Revenue Chart
        const revenueCtx = document.getElementById('revenueChart').getContext('2d');
        new Chart(revenueCtx, {
            type: 'bar',
            data: {
                labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun'],
                datasets: [{
                    label: 'Ingresos ($)',
                    data: [12000, 15000, 18000, 16000, 14000, 20000],
                    backgroundColor: '#2ecc71'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'top',
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }

    // Load initial data
    loadReservations();
    loadRooms();
    loadGuests();

    // Function to load reservations
    function loadReservations() {
        // This would be replaced with actual AJAX call
        const reservations = [
            {
                id: 1,
                guest: 'Juan Pérez',
                room: '101',
                checkIn: '2024-03-15',
                checkOut: '2024-03-20',
                status: 'Activa'
            },
            // Add more sample data
        ];

        const tbody = document.querySelector('#reservationsTable tbody');
        tbody.innerHTML = reservations.map(reservation => `
            <tr>
                <td>${reservation.id}</td>
                <td>${reservation.guest}</td>
                <td>${reservation.room}</td>
                <td>${reservation.checkIn}</td>
                <td>${reservation.checkOut}</td>
                <td>${reservation.status}</td>
                <td>
                    <button class="btn" onclick="editReservation(${reservation.id})">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button class="btn" onclick="deleteReservation(${reservation.id})">
                        <i class="fas fa-trash"></i>
                    </button>
                </td>
            </tr>
        `).join('');
    }

    // Function to load rooms
    function loadRooms() {
        const rooms = [
            {
                id: 1,
                number: '101',
                type: 'Individual',
                status: 'Disponible',
                price: 100
            },
            // Add more sample data
        ];

        const roomsGrid = document.querySelector('.rooms-grid');
        roomsGrid.innerHTML = rooms.map(room => `
            <div class="room-card">
                <h3>Habitación ${room.number}</h3>
                <p>Tipo: ${room.type}</p>
                <p>Estado: ${room.status}</p>
                <p>Precio: $${room.price}/noche</p>
                <button class="btn" onclick="editRoom(${room.id})">
                    <i class="fas fa-edit"></i> Editar
                </button>
            </div>
        `).join('');
    }

    // Function to load guests
    function loadGuests() {
        const guests = [
            {
                id: 1,
                name: 'Juan Pérez',
                email: 'juan@example.com',
                phone: '555-1234',
                status: 'Activo'
            },
            // Add more sample data
        ];

        const tbody = document.querySelector('#guestsTable tbody');
        tbody.innerHTML = guests.map(guest => `
            <tr>
                <td>${guest.id}</td>
                <td>${guest.name}</td>
                <td>${guest.email}</td>
                <td>${guest.phone}</td>
                <td>${guest.status}</td>
                <td>
                    <button class="btn" onclick="editGuest(${guest.id})">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button class="btn" onclick="deleteGuest(${guest.id})">
                        <i class="fas fa-trash"></i>
                    </button>
                </td>
            </tr>
        `).join('');
    }

    // Event listeners for new buttons
    document.getElementById('newReservation').addEventListener('click', () => {
        // Implement new reservation modal/form
        alert('Nueva reservación');
    });

    document.getElementById('newRoom').addEventListener('click', () => {
        // Implement new room modal/form
        alert('Nueva habitación');
    });

    document.getElementById('newGuest').addEventListener('click', () => {
        // Implement new guest modal/form
        alert('Nuevo huésped');
    });
});

// Global functions for edit/delete operations
function editReservation(id) {
    // Implement edit reservation
    alert(`Editar reservación ${id}`);
}

function deleteReservation(id) {
    // Implement delete reservation
    alert(`Eliminar reservación ${id}`);
}

function editRoom(id) {
    // Implement edit room
    alert(`Editar habitación ${id}`);
}

function editGuest(id) {
    // Implement edit guest
    alert(`Editar huésped ${id}`);
}

function deleteGuest(id) {
    // Implement delete guest
    alert(`Eliminar huésped ${id}`);
} 