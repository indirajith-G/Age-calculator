function show() {
    if (document.getElementById('show-container')) {

        if (document.getElementById('show-container').style.display !== 'none') {

            document.getElementById('show-container').style.display = 'none';
            document.getElementById('age-container').style.display = 'block';
            document.body.style.background = 'linear-gradient(-45deg,#f103ca, #462ea0)';
            
        }
    }
}

function age() {
    var date = parseInt(document.getElementById("date").value);
    var month = parseInt(document.getElementById("month").value);
    var year = parseInt(document.getElementById("year").value);
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    var currentMonth = currentDate.getMonth() + 1;
    var currentDay = currentDate.getDate();

    var isValid = true;
    var Error = document.getElementById("Error");

    Error.innerHTML = "";
    Error.style.display = "none"; // Hide the error div by default

    if (isNaN(date) && isNaN(month) && isNaN(year)) {
        Error.style.display = "block";
        Error.innerHTML = "Input's Cannot be Empty." + "<br>";
        isValid = false;
    } else {
        if (isNaN(date)) {
            Error.style.display = "block";
            Error.innerHTML += "Date Cannot be Empty." + "<br>";
            isValid = false;
        } else if (date < 1 || date > 31) {
            Error.style.display = "block";
            Error.innerHTML += "Day must be between 1 and 31." + "<br>";
            isValid = false;
        }

        if (isNaN(month)) {
            Error.style.display = "block";
            Error.innerHTML += "Month Cannot be Empty." + "<br>";
            isValid = false;
        } else if (month < 1 || month > 12) {
            Error.style.display = "block";
            Error.innerHTML += "Month must be between 1 and 12." + "<br>";
            isValid = false;
        }

        if (isNaN(year)) {
            Error.style.display = "block";
            Error.innerHTML += "Year Cannot be Empty.";
            isValid = false;
        } else if (year < 1900 || year > currentYear) {
            Error.style.display = "block";
            Error.innerHTML += "Year must be between 1900 and the current year." + "<br>";
            isValid = false;
        }
        if (year === currentYear && month > currentMonth) {
            Error.style.display = "block";
            Error.innerHTML += "Month cannot be in the future." + "<br>";
            isValid = false;
        } else if (year === currentYear && month === currentMonth && date > currentDay) {
            Error.style.display = "block";
            Error.innerHTML += "Day cannot be in the future." + "<br>";
            isValid = false;
        }
    }

    var ageOutput;
    if (isValid) {
        var ageYear = currentYear - year;
        var ageMonth = currentMonth - month;
        var ageDay = currentDay - date;

        if (ageDay < 0) {
            ageMonth--;
            ageDay += 30; // Assuming each month has 30 days
        }

        if (ageMonth < 0) {
            ageYear--;
            ageMonth += 12;
        }

        ageOutput = ageYear + " years, " + ageMonth + " months, " + ageDay + " days";
    } else {
        ageOutput = "Please provide valid input.";
    }

    document.getElementById("age").textContent = ageOutput;
    document.getElementById("age").style.display = isValid ? "block" : "none";
}



