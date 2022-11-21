const answers = {
        message: "What would you like to Do?",
        name: 'usersChoice',
        type: 'list',
        choices: [{
                name: "View All Employees",
                value: 1
            },{
                name: "Add Employee",
                value: 2
            },{
                name: "Update Employee Role",
                value: 3
            },{
                name: "Show All Roles",
                value: 4
            },{
                name: "Add Role",
                value: 5
            },{
                name: "Show All Departments",
                value: 6
            },{
                name: "Add Deparment",
                value: 7
            },{
                name: "End Application",
                value: 8
            },
        ]
    };

module.exports = { answers }