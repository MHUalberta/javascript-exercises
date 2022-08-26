const findTheOldest = function(array) {
        return array.reduce((oldest, current) => {
            let oldestAge;
            let currentAge;
            if (!oldest.yearOfDeath) {
                const currentYear = new Date().getFullYear();
                oldestAge = currentYear - oldest.yearOfBirth;
            }
            else {
                oldestAge = oldest.yearOfDeath - oldest.yearOfBirth;
            }

            if (!current.yearOfDeath) {
                const currentYear = new Date().getFullYear();
                currentAge = currentYear - current.yearOfBirth;
            }
            else {
                currentAge = current.yearOfDeath - current.yearOfBirth;
            }

            return oldestAge > currentAge ? oldest: current;
        });
    };

// Do not edit below this line
module.exports = findTheOldest;
