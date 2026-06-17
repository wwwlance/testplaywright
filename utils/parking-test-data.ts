export const parkingScenarios = [

    // =========================
    // VALET PARKING
    // =========================

    {
        name: 'Valet - 5 hours exactly',
        parkingLot: 'Valet',
        entryDate: '2026-06-17',
        exitDate: '2026-06-17',
        entryTime: '08:00',
        exitTime: '13:00',
        expectedCost: '12.00€',
        expectedDuration: '0 Day(s), 5 Hour(s), 0 Minute(s)'
    },

    {
        name: 'Valet - 5 hours 1 minute',
        parkingLot: 'Valet',
        entryDate: '2026-06-17',
        exitDate: '2026-06-17',
        entryTime: '08:00',
        exitTime: '13:01',
        expectedCost: '18.00€',
        expectedDuration: '0 Day(s), 5 Hour(s), 1 Minute(s)'
    },

    {
        name: 'Valet - 1 day',
        parkingLot: 'Valet',
        entryDate: '2026-06-17',
        exitDate: '2026-06-18',
        entryTime: '08:00',
        exitTime: '08:00',
        expectedCost: '18.00€',
        expectedDuration: '1 Day(s), 0 Hour(s), 0 Minute(s)'
    },

    {
        name: 'Valet - 1 day 1 minute',
        parkingLot: 'Valet',
        entryDate: '2026-06-17',
        exitDate: '2026-06-18',
        entryTime: '08:00',
        exitTime: '08:01',
        expectedCost: '36.00€',
        expectedDuration: '1 Day(s), 0 Hour(s), 1 Minute(s)'
    },


    // =========================
    // SHORT TERM PARKING
    // =========================

    {
        name: 'Short-Term - 1 hour',
        parkingLot: 'ShortTerm',
        entryDate: '2026-06-17',
        exitDate: '2026-06-17',
        entryTime: '08:00',
        exitTime: '09:00',
        expectedCost: '2.00€',
        expectedDuration: '0 Day(s), 1 Hour(s), 0 Minute(s)'
    },

    {
        name: 'Short-Term - 1 hour 1 minute',
        parkingLot: 'ShortTerm',
        entryDate: '2026-06-17',
        exitDate: '2026-06-17',
        entryTime: '08:00',
        exitTime: '09:01',
        expectedCost: '3.00€',
        expectedDuration: '0 Day(s), 1 Hour(s), 1 Minute(s)'
    },

    {
        name: 'Short-Term - 1 hour 31 minutes',
        parkingLot: 'ShortTerm',
        entryDate: '2026-06-17',
        exitDate: '2026-06-17',
        entryTime: '08:00',
        exitTime: '09:31',
        expectedCost: '4.00€',
        expectedDuration: '0 Day(s), 1 Hour(s), 31 Minute(s)'
    },

    {
        name: 'Short-Term - 1 day 1 minute',
        parkingLot: 'ShortTerm',
        entryDate: '2026-06-17',
        exitDate: '2026-06-18',
        entryTime: '08:00',
        exitTime: '08:01',
        expectedCost: '25.00€',
        expectedDuration: '1 Day(s), 0 Hour(s), 1 Minute(s)'
    },


    // =========================
    // LONG TERM GARAGE PARKING
    // =========================

    {
        name: 'Garage - 59 minutes',
        parkingLot: 'LongTermGarage',
        entryDate: '2026-06-17',
        exitDate: '2026-06-17',
        entryTime: '08:00',
        exitTime: '08:59',
        expectedCost: '2.00€',
        expectedDuration: '0 Day(s), 0 Hour(s), 59 Minute(s)'
    },

    {
        name: 'Garage - 1 day',
        parkingLot: 'LongTermGarage',
        entryDate: '2026-06-17',
        exitDate: '2026-06-18',
        entryTime: '08:00',
        exitTime: '08:00',
        expectedCost: '12.00€',
        expectedDuration: '1 Day(s), 0 Hour(s), 0 Minute(s)'
    },

    {
        name: 'Garage - 1 day 1 minute',
        parkingLot: 'LongTermGarage',
        entryDate: '2026-06-17',
        exitDate: '2026-06-18',
        entryTime: '08:00',
        exitTime: '08:01',
        expectedCost: '14.00€',
        expectedDuration: '1 Day(s), 0 Hour(s), 1 Minute(s)'
    },

    {
        name: 'Garage - 7 days',
        parkingLot: 'LongTermGarage',
        entryDate: '2026-06-17',
        exitDate: '2026-06-24',
        entryTime: '08:00',
        exitTime: '08:00',
        expectedCost: '72.00€',
        expectedDuration: '7 Day(s), 0 Hour(s), 0 Minute(s)'
    },

    {
        name: 'Garage - 7 days 1 minute',
        parkingLot: 'LongTermGarage',
        entryDate: '2026-06-17',
        exitDate: '2026-06-24',
        entryTime: '08:00',
        exitTime: '08:01',
        expectedCost: '74.00€',
        expectedDuration: '7 Day(s), 0 Hour(s), 1 Minute(s)'
    },


    // =========================
    // LONG TERM SURFACE PARKING
    // =========================

    {
        name: 'Surface - 59 minutes',
        parkingLot: 'LongTermSurface',
        entryDate: '2026-06-17',
        exitDate: '2026-06-17',
        entryTime: '08:00',
        exitTime: '08:59',
        expectedCost: '2.00€',
        expectedDuration: '0 Day(s), 0 Hour(s), 59 Minute(s)'
    },

    {
        name: 'Surface - 1 day',
        parkingLot: 'LongTermSurface',
        entryDate: '2026-06-17',
        exitDate: '2026-06-18',
        entryTime: '08:00',
        exitTime: '08:00',
        expectedCost: '10.00€',
        expectedDuration: '1 Day(s), 0 Hour(s), 0 Minute(s)'
    },

    {
        name: 'Surface - 7 days',
        parkingLot: 'LongTermSurface',
        entryDate: '2026-06-17',
        exitDate: '2026-06-24',
        entryTime: '08:00',
        exitTime: '08:00',
        expectedCost: '60.00€',
        expectedDuration: '7 Day(s), 0 Hour(s), 0 Minute(s)'
    },

    {
        name: 'Surface - 7 days 1 minute',
        parkingLot: 'LongTermSurface',
        entryDate: '2026-06-17',
        exitDate: '2026-06-24',
        entryTime: '08:00',
        exitTime: '08:01',
        expectedCost: '62.00€',
        expectedDuration: '7 Day(s), 0 Hour(s), 1 Minute(s)'
    },


    // =========================
    // ECONOMY LOT PARKING
    // =========================

    {
        name: 'Economy - 59 minutes',
        parkingLot: 'Economy',
        entryDate: '2026-06-17',
        exitDate: '2026-06-17',
        entryTime: '08:00',
        exitTime: '08:59',
        expectedCost: '2.00€',
        expectedDuration: '0 Day(s), 0 Hour(s), 59 Minute(s)'
    },

    {
        name: 'Economy - 1 day',
        parkingLot: 'Economy',
        entryDate: '2026-06-17',
        exitDate: '2026-06-18',
        entryTime: '08:00',
        exitTime: '08:00',
        expectedCost: '9.00€',
        expectedDuration: '1 Day(s), 0 Hour(s), 0 Minute(s)'
    },

    {
        name: 'Economy - 7 days',
        parkingLot: 'Economy',
        entryDate: '2026-06-17',
        exitDate: '2026-06-24',
        entryTime: '08:00',
        exitTime: '08:00',
        expectedCost: '54.00€',
        expectedDuration: '7 Day(s), 0 Hour(s), 0 Minute(s)'
    },

    {
        name: 'Economy - 7 days 1 minute',
        parkingLot: 'Economy',
        entryDate: '2026-06-17',
        exitDate: '2026-06-24',
        entryTime: '08:00',
        exitTime: '08:01',
        expectedCost: '56.00€',
        expectedDuration: '7 Day(s), 0 Hour(s), 1 Minute(s)'
    }

];