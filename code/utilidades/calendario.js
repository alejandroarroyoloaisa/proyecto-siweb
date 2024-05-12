function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}
function initCalendar() {

    const date = new Date();

    const renderCalendar = () => {
        date.setDate(1);

        const monthNames = [
            "Enero",
            "Febrero",
            "Marzo",
            "Abril",
            "Mayo",
            "Junio",
            "Julio",
            "Agosto",
            "Septiembre",
            "Octubre",
            "Noviembre",
            "Diciembre"
        ];

        console.log(`---------- NEW CONSOLE LOG ----------`);

        const currentMonthIndex = date.getMonth();
        console.log(`Month Index of ${monthNames[date.getMonth()]} is ${currentMonthIndex}`);

        const currentMonthLastDate = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
        console.log(`last day of ${monthNames[date.getMonth()]} is ${currentMonthLastDate}`);

        const prevMonthLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate();
        console.log(`last day of ${monthNames[date.getMonth() - 1]} is ${prevMonthLastDay}`);

        const currentMonthFirstDayIndex = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
        console.log(`First day index of ${monthNames[date.getMonth()]} is ${currentMonthFirstDayIndex}`);

        const currentMonthLastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay();
        console.log(`Last day index of ${monthNames[date.getMonth()]} is ${currentMonthLastDay}`);

        const curMonthLastWeekDaysRemaining = 7 - 1 - currentMonthLastDay;
        console.log(`We need to input ${curMonthLastWeekDaysRemaining} days of the next month into current month's calendar`);

        document.querySelector('.month-name').textContent = monthNames[currentMonthIndex];





        const calContainer = document.querySelector('.calendar-container');

        let day = "";

        for (let x = currentMonthFirstDayIndex; x > 0; x--) {
            day += `<div class="prev-day">${prevMonthLastDay - x + 1}</div>`;
            calContainer.innerHTML = day;
        };

        for (let i = 1; i <= currentMonthLastDate; i++) {
            const currentDate = new Date(date.getFullYear(), date.getMonth(), i);
            const today = new Date();
            today.setHours(0, 0, 0, 0); // to ignore time in comparison

            if (currentDate.getTime() === today.getTime()) {
                day += `<div class="current-day">${i}</div>`;
            } else if (currentDate.getTime() < today.getTime()) {
                day += `<div class="calendar-day past-day">${i}</div>`;
            } else {
                day += `<div class="calendar-day">${i}</div>`;
            }
            calContainer.innerHTML = day;
        }

        for (let j = 1; j <= curMonthLastWeekDaysRemaining; j++) {
            day += `<div class="next-day">${j}</div>`;
            calContainer.innerHTML = day;
        }



        let leftBox = document.getElementById('left-box');
        if (!leftBox) {
            leftBox = document.createElement('div');
            leftBox.id = 'left-box';
            document.body.appendChild(leftBox);
            // Add the text at the top of left-box
            let username = getCookie('username'); // replace with the actual username
            leftBox.innerHTML = `<h2>Citas próximas de ${username}</h2>`;

            $.ajax({
                url: 'http://localhost:3000/citas/usuario',
                type: 'GET',
                data: {
                    username: username
                },
                success: function (response) {
                    // handle success
                    console.log(response);
                    let citas = '';
                    response.forEach(cita => {
                        citas += `<p>${cita.fecha} - ${cita.hora}</p>`;
                    });
                    leftBox.innerHTML += citas;
                },
                error: function (error) {
                    // handle error
                    console.log(error);
                }
            });
        }



        // Add click events after the days have been rendered
        const currentDays = document.querySelectorAll('.current-day');
        const calendarDays = document.querySelectorAll('.calendar-day');
        let selectedDay = document.querySelector('.current-day'); // selectedDay starts as current-day
        // Create and display the box with the selected day and the list of hours
        let selectedDayBox = document.getElementById('selected-day-box');
        if (!selectedDayBox) {
            selectedDayBox = document.createElement('div');
            selectedDayBox.id = 'selected-day-box';
            document.body.appendChild(selectedDayBox);

            // Add a click event to the selectedDayBox
            selectedDayBox.addEventListener('click', function (event) {
                // Check if the clicked element is a button
                if (event.target.tagName === 'BUTTON') {
                    const selectedHour = event.target.textContent; // Get the selected hour
                    const selectedDate = selectedDayBox.querySelector('h2').textContent.split(' ')[0]; // Get the selected date
                    const selectedMonth = selectedDayBox.querySelector('h2').textContent.split(' ')[1];
                    const currentYear = new Date().getFullYear(); // Get the current year
                    const selectedYear = currentYear; // Get the selected year
                    const confirmed = window.confirm(`¿Estás seguro de que quieres reservar cita el ${selectedDate} de ${selectedMonth} de ${selectedYear} a las ${selectedHour}?`);
                    if (confirmed) {
                        let selectedDatePadded = String(selectedDate).padStart(2, '0');
                        let currentMonthPadded = String(monthNames.indexOf(selectedMonth) + 1).padStart(2, '0');

                        $.ajax({
                            url: 'http://localhost:3000/citas',
                            type: 'POST',
                            data: {
                                fecha: `${selectedDatePadded}-${currentMonthPadded}-${selectedYear}`, // format the date as DD/MM/YYYY
                                hora: selectedHour,
                                username: getCookie('username') // replace with the actual username
                            },
                            success: function (response) {
                                // handle success
                                console.log(response);
                                setTimeout(function () {
                                    location.reload();
                                }, 1000);
                            },
                            error: function (error) {
                                // handle error
                                console.log(error);
                            }
                        });
                    }
                }
            });
        }
        currentDays.forEach(day => {
            day.addEventListener('click', function () {
                // If there's a previously selected day, change its color back to white
                if (selectedDay) {
                    selectedDay.style.backgroundColor = 'white';
                    selectedDay.style.color = '#435165';
                }

                // Change the background color of the day to #69c4fd
                this.style.backgroundColor = '#69c4fd';
                this.style.color = 'white';

                // Update the selected day
                selectedDay = this;


                const morningHours = Array.from({ length: 5 }, (_, i) => `<div class="hour-set"><button>${9 + i}:00</button><button>${9 + i}:30</button></div>`).join('');
                const afternoonHours = Array.from({ length: 4 }, (_, i) => `<div class="hour-set"><button>${17 + i}:00</button><button>${17 + i}:30</button></div>`).join('');

                selectedDayBox.innerHTML = `
                    <h2>${this.textContent} ${monthNames[currentMonthIndex]}</h2>
                    <ul class="hour-selector">
                        ${morningHours}
                        ${afternoonHours}
                    </ul>
                `;

                const day = this.textContent.padStart(2, '0');
                const month = (monthNames.indexOf(monthNames[currentMonthIndex]) + 1).toString().padStart(2, '0');

                // Fetch appointments for the selected day
                $.ajax({
                    url: 'http://localhost:3000/citas',
                    type: 'GET',
                    data: {
                        date: `${day}-${month}-${new Date().getFullYear()}`
                    },
                    success: function (appointments) {
                        appointments.forEach(appointment => {
                            // Find the button for the appointment hour
                            const appointmentButton = $(`.hour-selector button`).filter(function () {
                                return $(this).text() === appointment.hora;
                            });
                            if (appointmentButton.length) {
                                // Change the button color to red
                                appointmentButton.css('background-color', '#fc4e5f');
                                appointmentButton.prop('disabled', true);
                            }
                        });
                    }
                });
            });
        });

        calendarDays.forEach(day => {
            day.addEventListener('click', function () {
                // If there's a previously selected day, change its color back to white
                if (selectedDay) {
                    selectedDay.style.backgroundColor = 'white';
                    selectedDay.style.color = '#435165';
                }

                // Change the background color of the day to #69c4fd
                this.style.backgroundColor = '#69c4fd';
                this.style.color = 'white';

                // Update the selected day
                selectedDay = this;

                // Create and display the box with the selected day and the list of hours
                let selectedDayBox = document.getElementById('selected-day-box');
                if (!selectedDayBox) {
                    selectedDayBox = document.createElement('div');
                    selectedDayBox.id = 'selected-day-box';
                    document.body.appendChild(selectedDayBox);
                }

                const morningHours = Array.from({ length: 5 }, (_, i) => `<div class="hour-set"><button>${9 + i}:00</button><button>${9 + i}:30</button></div>`).join('');
                const afternoonHours = Array.from({ length: 4 }, (_, i) => `<div class="hour-set"><button>${17 + i}:00</button><button>${17 + i}:30</button></div>`).join('');

                selectedDayBox.innerHTML = `
                    <h2>${this.textContent} ${monthNames[currentMonthIndex]}</h2>
                    <ul class="hour-selector">
                        ${morningHours}
                        ${afternoonHours}
                    </ul>
                `;


                const day = this.textContent.padStart(2, '0');
                const month = (monthNames.indexOf(monthNames[currentMonthIndex]) + 1).toString().padStart(2, '0');

                // Fetch appointments for the selected day
                $.ajax({
                    url: 'http://localhost:3000/citas',
                    type: 'GET',
                    data: {
                        date: `${day}-${month}-${new Date().getFullYear()}`
                    },
                    success: function (appointments) {
                        appointments.forEach(appointment => {
                            // Find the button for the appointment hour
                            const appointmentButton = $(`.hour-selector button`).filter(function () {
                                return $(this).text() === appointment.hora;
                            });
                            if (appointmentButton.length) {
                                // Change the button color to red
                                appointmentButton.css('background-color', '#fc4e5f');
                                appointmentButton.prop('disabled', true);
                            }
                        });
                    }
                });
            });
        });




    }

    document.querySelector('.left-arrow').addEventListener("click", () => {
        if (date.getFullYear() > new Date().getFullYear() || (date.getFullYear() === new Date().getFullYear() && date.getMonth() > 0)) {
            date.setMonth(date.getMonth() - 1);
            renderCalendar();
        }
    })

    document.querySelector('.right-arrow').addEventListener("click", () => {
        if (date.getFullYear() < new Date().getFullYear() || (date.getFullYear() === new Date().getFullYear() && date.getMonth() < 11)) {
            date.setMonth(date.getMonth() + 1);
            renderCalendar();
        }
    })

    renderCalendar();
}


