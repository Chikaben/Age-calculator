function ageCalculator() {  
    var userinput = document.getElementById("date").value;
    CarName = document.getElementById("carname").value
    var dob = new Date(userinput);
  
    if (userinput == null || userinput == '') {
        document.getElementById("message").innerHTML = "**Choose a date please!";
        return false;
    }   
    else { 
        var dobYear = dob.getYear();
        var dobMonth = dob.getMonth();
        var dobDate = dob.getDate();

        //get the current date from the system  
        var now = new Date();  
        var currentYear = now.getYear();
        var currentMonth = now.getMonth();
        var currentDate = now.getDate();

        //declare a variable to collect the age in year, month, and days  
        var age = {};
        var ageString = "";

        //get years  
        yearAge = currentYear - dobYear;

        //get months  
        if (currentMonth >= dobMonth) 
            var monthAge = currentMonth - dobMonth;
        else {
            yearAge--;
            var monthAge = 12 + currentMonth - dobMonth;
        }

        //get days  
        if (currentDate >= dobDate) 
            var dateAge = currentDate - dobDate;
        else {
            monthAge--;
            var dateAge = 31 + currentDate - dobDate;

            if (monthAge < 0) {
                monthAge = 11;
                yearAge--;
            }
        }
        //group the age in a single variable  
        age = {
            years: yearAge,
            months: monthAge,
            days: dateAge
        };


        if ((age.years > 0) && (age.months > 0) && (age.days > 0))
            ageString = " Your " + CarName + " is " + age.years + " years, " + age.months + " months, and " + age.days + " days old.";
        else if ((age.years == 0) && (age.months == 0) && (age.days > 0))
            ageString = " Your " + CarName + " is " + "Only " + age.days + " days old!";  
        else if ((age.years > 0) && (age.months == 0) && (age.days == 0))
            ageString = " Your " + CarName + " is " + age.years + " years old. Happy Birthday!!";
        else if ((age.years > 0) && (age.months > 0) && (age.days == 0))
            ageString = " Your " + CarName + " is " + age.years + " years and " + age.months + " months old.";
        else if ((age.years == 0) && (age.months > 0) && (age.days > 0))
            ageString = " Your " + CarName + " is " + age.months + " months and " + age.days + " days old.";
        else if ((age.years > 0) && (age.months == 0) && (age.days > 0))
            ageString = " Your " + CarName + " is " + age.years + " years, and " + age.days + " days old.";
        else if ((age.years == 0) && (age.months > 0) && (age.days == 0))
            ageString = " Your " + CarName + " is " + age.months + " months old."; 
        else if ((age.years == 0) && (age.months == 0) && (age.days == 0))
            ageString = "Welcome to Earth! <br> It's first day on Earth!";
        //when current date is less than dob(date of birth)
        else ageString = "**Invalid date input - Please try again!"
 
        return document.getElementById("result").innerHTML = ageString;

    }
}  