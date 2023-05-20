// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];


function returnFirstTwoDrivers(drivers){
    return drivers.slice(0,2);
}

function returnLastTwoDrivers(drivers){
    return drivers.slice(-2);
}

const selectingDrivers =  [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multipler){
    return (value)=>{
            return multipler*value;
        }
    };

const fareDoubler = createFareMultiplier(2);


const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers,driversToReturn) {
    return driversToReturn(drivers);
}