export default class DateHelper {

    // Static method to get the current date as a Date object
    static getCurrentDate(): Date {
        return new Date();
    }

    // Static method to get the current date and time as a string
    static getCurrentDateTime(): string {
        return new Date().toISOString();
    }

    // Static method to format a date as 'YYYY-MM-DD'
    static formatDateAsString(date: Date): string {
        const year = date.getFullYear();
        const month = ('0' + (date.getMonth() + 1)).slice(-2);
        const day = ('0' + date.getDate()).slice(-2);
        return `${year}-${month}-${day}`;
    }

    // Static method to get the number of days between two dates
    static getDaysDiff(date1: Date, date2: Date): number {
        // Calculate the difference in milliseconds between the two dates
        const timeDiff = Math.abs(date2.getTime() - date1.getTime());
        // Convert milliseconds to days and round up to the nearest integer
        const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
        return daysDiff;
    }


    // Static method to check if a year is a leap year
    static isLeapYear(year: number): boolean {
        return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    }

    // Method to get the number of days in a month for the given year and month
    static getDaysInMonth(month: number, year: number): number {
        // JavaScript months are zero-based, so we need to subtract 1 from the month parameter
        // Handle February separately to account for leap years
        return new Date(year, month, 0).getDate();
    }

    // Method to check if two dates represent the same day (ignoring time)
    static isSameDay(date1: Date, date2: Date): boolean {
        // Compare day, month, and year of the two dates
        return date1.getDate() === date2.getDate() &&
               date1.getMonth() === date2.getMonth() &&
               date1.getFullYear() === date2.getFullYear();
    }

    // Method to add specified number of days to a given date
    static addDays(date: Date, days: number): Date {
        const result = new Date(date); // Create a new Date object to avoid mutating the original date
        result.setDate(result.getDate() + days); // Add specified number of days
        return result; // Return the new date object
    }

    // Method to get the day of the week (0 for Sunday, 1 for Monday, etc.) for the given date
    static getDayOfWeek(date: Date): number {
        return date.getDay(); // Returns the day of the week (0-6)
    }

    // Method to check if the given date falls on a weekend (Saturday or Sunday)
    static isWeekend(date: Date): boolean {
        const dayOfWeek = date.getDay(); // Get the day of the week
        return dayOfWeek === 0 || dayOfWeek === 6; // Return true if it's Sunday (0) or Saturday (6), otherwise false
    }

    // Static method to check if the given date is a weekday (Monday to Friday)
    static isWeekday(date: Date): boolean {
        return !DateHelper.isWeekend(date);
    }

    // Static method to get the day of the year (1-366) for the given date
    static getDayOfYear(date: Date): number {
        const startOfYear = new Date(date.getFullYear(), 0, 0);
        const diff = date.getTime() - startOfYear.getTime();
        const oneDay = 1000 * 60 * 60 * 24;
        return Math.floor(diff / oneDay);
    }

    // Static method to check if a date falls within a specified range
    static isDateInRange(date: Date, startDate: Date, endDate: Date): boolean {
        return date >= startDate && date <= endDate;
    }

      // Static method to get the first day of the month for the given date
      static getFirstDayOfMonth(date: Date): Date {
        return new Date(Date.UTC(date.getFullYear(), date.getMonth(), 1));
    }

    // Static method to get the last day of the month for the given date
    static getLastDayOfMonth(date: Date): Date {
        return new Date(Date.UTC(date.getFullYear(), date.getMonth() + 1, 0));
    }

    // Static method to get the next day for the given date
    static getNextDay(date: Date): Date {
        const nextDay = new Date(date);
        nextDay.setUTCDate(date.getUTCDate() + 1);
        return nextDay;
    }

    // Static method to get the previous day for the given date
    static getPreviousDay(date: Date): Date {
        const previousDay = new Date(date);
        previousDay.setUTCDate(date.getUTCDate() - 1);
        return previousDay;
    }

    // Static method to check if the given date is today
    static isToday(date: Date): boolean {
        const today = new Date();
        return date.getFullYear() === today.getFullYear() &&
               date.getMonth() === today.getMonth() &&
               date.getDate() === today.getDate();
    }    

    // Static method to check if the given date is in the past
    static isPastDate(date: Date): boolean {
        const now = new Date();
        return date.getTime() < now.getTime();
    }

    // Static method to check if the given date is in the future
    static isFutureDate(date: Date): boolean {
        const now = new Date();
        return date.getTime() > now.getTime();
    }

    // Static method to get the number of years between two dates
    static getYearsDiff(date1: Date, date2: Date): number {
        const diffInMilliseconds = Math.abs(date2.getTime() - date1.getTime());
        const millisecondsInYear = 1000 * 60 * 60 * 24 * 365.25; // Approximate milliseconds in a year (considering leap years)
        return Math.floor(diffInMilliseconds / millisecondsInYear);
    }

    // Static method to get the start of the week for the given date (assuming Sunday as the first day of the week)
    static getStartOfWeek(date: Date): Date {
        const dayOfWeek = date.getDay(); // 0 (Sunday) to 6 (Saturday)
        const diff = date.getDate() - dayOfWeek; // Calculate the difference to get to the start of the week
        return new Date(date.setDate(diff));
    }

    // Static method to get the end of the week for the given date (assuming Saturday as the last day of the week)
    static getEndOfWeek(date: Date): Date {
        const dayOfWeek = date.getDay(); // 0 (Sunday) to 6 (Saturday)
        const diff = 6 - dayOfWeek; // Calculate the difference to get to the end of the week
        return new Date(date.setDate(date.getDate() + diff));
    }

    // Static method to check if the given date is the last day of the month
    static isLastDayOfMonth(date: Date): boolean {
        const nextDay = new Date(date);
        nextDay.setDate(date.getDate() + 1);
        return nextDay.getMonth() !== date.getMonth();
    }

    // Static method to format a date with one or multiple specified formats
    // Accepted Formats are ['Y-m-d','d/m/Y','d-m-Y','Y-m-d H:i:s A','Y-m-d H:i:s',['d/m/Y', 'F d, Y']]
    static formatDate(date: Date, format: string | string[] = 'Y-m-d'): string {
        // Convert format to an array if it's not already an array
        const formats = Array.isArray(format) ? format : [format];

        // Get date components
        const year = String(date.getFullYear());
        const month = ('0' + (date.getMonth() + 1)).slice(-2);
        const day = ('0' + date.getDate()).slice(-2);
        const hours = ('0' + date.getHours()).slice(-2);
        const minutes = ('0' + date.getMinutes()).slice(-2);
        const seconds = ('0' + date.getSeconds()).slice(-2);

        // Replace format placeholders with actual values for each format
        const formattedDates = formats.map(format => {
            let formattedDate = format
                .replace('Y', year)
                .replace('m', month)
                .replace('d', day)
                .replace('H', hours)
                .replace('i', minutes)
                .replace('s', seconds);

            // Replace additional placeholders for month names and AM/PM
            formattedDate = formattedDate.replace('F', this.getMonthName(date.getMonth()));
            formattedDate = formattedDate.replace('A', date.getHours() < 12 ? 'AM' : 'PM');

            return formattedDate;
        });

        // Join multiple formatted dates with a comma (if more than one format is provided)
        return formattedDates.length > 1 ? formattedDates.join(', ') : formattedDates[0];
    }

    // Helper method to get the name of the month based on the month index
    private static getMonthName(month: number): string {
        const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        return monthNames[month];
    }
}


