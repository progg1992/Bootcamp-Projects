const db_connection = require('./connection');

class Database {
    
    constructor(db_connection) {
    this.db_connection = db_connection;
    }

    findEveryEmployee() {
        return this.db_connection.query(
            "SELECT * FROM employee"
        )
    }

    insertEmployee(worker) {
        return this.db_connection.query("INSERT INTO employee SET ?", worker);
    }

    updateEmployeeJob(jobId, workerId) {
        return this.db_connection.query(
            "UPDATE employee SET role_id = ? WHERE id = ?", [jobId, workerId]
        );
    }

    findAllRoles() {
        return this.db_connection.query(
            "SELECT * FROM role"
        );
    }

    createRole(role) {
        return this.db_connection.query("INSERT INTO role SET ?", role);
    }

    findEveryDepartment() {
        return this.db_connection.query(
            "SELECT * FROM department"
        );
    }

    insertDepartment(department) {
        return this.db_connection.query("INSERT INTO department SET ?", department);
    }
}

module.exports = new Database(db_connection);