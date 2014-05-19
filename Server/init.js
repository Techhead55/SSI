var dbController = require('nstore'),
    database = dbController.new('data.db', function(){
        database.save("data", {
            rooms: {
                51 : {
                    monday: {
                        advisory: "MSGG9A",
                        sessionOne: "",
                        sessionTwo: "",
                        morningTea: "",
                        sessionThree: "",
                        lunch: "",
                        sessionFour: ""
                    },
                    tuesday: {
                        advisory: "MSGG9A",
                        sessionOne: "",
                        sessionTwo: "",
                        morningTea: "",
                        sessionThree: "",
                        lunch: "",
                        sessionFour: ""
                    },
                    wednesday: {
                        sessionOne: "",
                        morningTea: "",
                        sessionTwo: "",
                        assembly: "",
                        lunch: "",
                        sessionThree: "",
                    },
                    thursday: {
                        advisory: "MSGG9A",
                        sessionOne: "",
                        sessionTwo: "",
                        morningTea: "",
                        sessionThree: "",
                        lunch: "",
                        sessionFour: ""
                    },
                    friday: {
                        advisory: "MSGG9A",
                        sessionOne: "",
                        sessionTwo: "",
                        morningTea: "",
                        sessionThree: "",
                        lunch: "",
                        sessionFour: ""
                    }
                },
                52 : {
                    
                },
                53 : {
                    
                },
                54 : {
                    
                }
            }
        }, function(){})
    });