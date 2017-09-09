"use strict"
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
         countries.sort(function states (a,b) {
        var state1 = a.employeeAddress.state;
        var state2 = b.employeeAddress.state;
             if(state1 === state2){
                return 0
             }
             if ( state1 < state2) {
                return -1
             }
             if ( state1 > state2) {
                return 1
             }
         }); 
         
    
    console.log(countries);
   