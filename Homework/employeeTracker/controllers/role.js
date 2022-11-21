const db = require("../db");

async function showRoles() {
    let jobs;
    try {
        jobs = await db.findAllRoles();
    } catch (err) {
        console.log(err)
    }

    console.log('\n');
    console.table(roles);
    promptUser()
}

async function addRole() {
    let departments;
    try {
    departments = await db.findEveryDepartment();
    } catch(err) {
        console.log(err)
    }
    const departmentOptions = departments.map(({ id, title}) => ({
        name: title,
        value: id
    }
    ));

    let job = { job };
    try {
        job = await inquirer.prompt([
            {
                type: 'input',
                message: 'What is the role you want to add?',
                name: 'role'
            },{
                type: 'list',
                message: 'Please choose which department this job is in.',
                name: 'department',
                choices: departmentOptions
            }])
    } catch (err) {
        console.log(err);
    }
    
    let newJob;
    try {
        console.log(job)
        newJob = await db.createRole(job)
    } catch(err) {
        console.log('Could not add Role')
    }

    promptUser();
}

module.exports = { showRoles, addRole };