const leapYears = function(argYear) {

    if(argYear % 4 === 0 && (argYear % 100 !== 0 || argYear % 400 === 0))
    {
        return true;
    }else
    {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
