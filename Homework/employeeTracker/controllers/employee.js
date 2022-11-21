const db = require('../db');


async function showEmployees() {
    let workers;
    try {
        workers = await db.findEveryEmployee();
    } catch(err) {
        console.log(err);
    }
    console.log("\n");
    console.table(workers);
   // promptUser();
};

async function updateEmployeeJob() {
    let workers;
    try {
        workers = await db.findEveryEmployee();
    } catch(err) {
        console.log('Could not find Employees');
    }

    const empolyeeOptions = employees.map(({ id, first_name, last_name }) => ({
        name:  `${first_name} ${last_name}`,
        value: id
    }))

    let workerId = { workerId };
    try {
        workerId = await inquirer.prompt([
        {
            type: "list",
            message: "Which Employee do you want to Delete",
            name: "employeeId",
            choices: empolyeeOptions
        }
    ])} catch(err) {
        console.log('Could not update Job')
    }

    let jobs;
    try {
        jobs = await db.findAllRoles();
    } catch(err) {
        console.log(err);
    }

    const jobOptions = role.map(({ id, title}) => ({
        name: title,
        value: id
    }
    ));

    let jobId = { jobId };
    try {
        jobId = await inquirer.prompt([
        {
            type: "List",
            name: "roleId",
            message: "Which Role do you want to give this employee?",
            choices: jobOptions
        }
    ])} catch(err) {
        console.log(err);
    }

    let updatedJob;
    try {
        updatedJob = await db.updateEmployeeJob(jobId, workerId);

    } catch(err) {
        console.log("Couldn't Update Job")
    }

    console.log("Updated Job");
    

    promptUser();
};

async function addEmployee() {
    let jobs;
    try {
    jobs = await db.findAllRoles();
    } catch(err) {
        console.log(err)
    }
    const jobOptions = roles.map(({ id, title}) => ({
        name: title,
        value: id
    }
    ));    

    let worker = { worker };
    try {
        worker = await inquirer.prompt([
        {
            type: "input",
            message: "Which is the Employee's first name that you want to add?",
            name: "firstName"
        },{
            type: "input",
            message: "Which is the Employee's last name that you want to add?",
            name: "lastName"
        },{
            type: "list",
            message: "What role do you want to give this employee?",
            name: "roleId",
            choices: jobOptions
        }
    ])} catch(err) {
        console.log(err)
    }

    let newWorker;
    try {
        newWorker = await db.insertEmployee(worker);
    } catch(err) {
        console.log("Couldn't Add Employee");
    }
    console.log("Successfully Added Employee to the Database");
    
    promptUser();
};

module.exports = { showEmployees, updateEmployeeJob, addEmployee };