import DateHelper from "../helpers/date-helpers";

export default class DateHelperMock {
    runMethod() {
        // Example usage
        const date1 = new Date('2024-02-29');
        const date2 = new Date('2024-02-29');
        console.log('Current Date:', DateHelper.getCurrentDate());
        console.log('Current Date and Time:', DateHelper.getCurrentDateTime());
        console.log('Formatted Date:', DateHelper.formatDateAsString(date1));
        
        console.log('Format date with multiple formats');
        console.log(DateHelper.formatDate(date1, 'Y-m-d')); // Output Sample: '2024-04-27'
        console.log(DateHelper.formatDate(date1, 'd/m/Y')); // Output Sample: '27/04/2024'
        console.log(DateHelper.formatDate(date1, 'd-m-Y')); // Output Sample: '27-04-2024'
        console.log(DateHelper.formatDate(date1, 'Y-m-d H:i:s A')); // Output Sample: '2024-04-27 01:30:45 PM'
        console.log(DateHelper.formatDate(date1, 'Y-m-d H:i:s')); // Output Sample: '2024-04-27 13:30:45'
        console.log(DateHelper.formatDate(date1, ['d/m/Y', 'F d, Y'])); // Output Sample: '27/04/2024 April 27, 2024'
        
        
        console.log('Days Difference:', DateHelper.getDaysDiff(date1, date2));
        console.log('Is Leap Year (2024):', DateHelper.isLeapYear(2024));
        console.log('Days in February 2023:', DateHelper.getDaysInMonth(2023, 1));
        console.log('Is Same Day:', DateHelper.isSameDay(date1, date2));
        console.log('Date after adding 5 days:', DateHelper.addDays(date1, 5));
        console.log('Day of the Week:', DateHelper.getDayOfWeek(date1));
        console.log('Is Weekend?:', DateHelper.isWeekend(date1));
        console.log('Is weekday?', DateHelper.isWeekday(date1));

        const startDate = new Date(2024, 0, 1); // January 1, 2024
        const endDate = new Date(2024, 11, 31); // December 31, 2024
        const dateToCheck = new Date(2024, 6, 15); // July 15, 2024
        const isInRange = DateHelper.isDateInRange(dateToCheck, startDate, endDate);
        console.log('isDateInRange:',isInRange);

        const today = new Date('2024-04-27');
        console.log('Today:', today);
        console.log('First Day of the Month:', DateHelper.getFirstDayOfMonth(today));
        console.log('Last Day of the Month:', DateHelper.getLastDayOfMonth(today));
        console.log('Next Day:', DateHelper.getNextDay(today));
        console.log('Previous Day:', DateHelper.getPreviousDay(today));
        console.log('Is Today:', DateHelper.isToday(today));        
        console.log('Is past date?', DateHelper.isPastDate(date1)); 
        console.log('Is future date?', DateHelper.isFutureDate(date2));

        const birthDate = new Date(1995, 3, 17); // January 1, 1990
        const currentDate = new Date(); // Current date
        console.log('Years difference between birthDate and currentDate:', DateHelper.getYearsDiff(birthDate, currentDate)); // Output: Approximately 34

        console.log('Start of the week:', DateHelper.getStartOfWeek(date1)); 
        console.log('End of the week:', DateHelper.getEndOfWeek(date1));
        console.log('Is last day of month?', DateHelper.isLastDayOfMonth(date1));
    }
}

const mock = new DateHelperMock()
mock.runMethod()