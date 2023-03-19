function findMatching(drivers, name) {
    return drivers.filter(function (driver) {
        return driver.toLowerCase() === name.toLowerCase();
    })
}

function fuzzyMatch(drivers, letters) {
    return drivers.filter(function (driver) {       
        const beginningName = driver.slice(0, letters.length);
        return beginningName === letters;
    })
}

function matchName(drivers, name) {
    return drivers.filter(function (driver) {
        return driver.name === name;
    })
}