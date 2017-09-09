'use strict'
var person = {
        "permittedCountries": [{
                "employeeId": "1",
                "employeeAddress": {
                    "city": "Bangalore",
                    "state": "Karnataka"
                }
            },
            {
                "employeeId": "2",
                "employeeAddress": {
                    "city": "Chennai",
                    "state": "TamilNadu"
                }
            },
            {
                "employeeId": "4",
                "employeeAddress": {
                    "city": "Bangalore",
                    "state": "Karnataka"
                }
            },
            {
                "employeeId": "5",
                "employeeAddress": {
                    "city": "Chennai",
                    "state": "TamilNadu"
                }
            }
        ]
    }
    var countries = person.permittedCountries;
    countries.sort((c , d) => ((c.employeeAddress.state === d.employeeAddress.state) ? 0 : ((c.employeeAddress.state < d.employeeAddress.state) ? 1 : -1)));
    console.log(countries)