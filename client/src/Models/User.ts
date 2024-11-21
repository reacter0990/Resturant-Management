class User {
    firstName: string;
    lastName: string;
    role: number;
    password: string;
    companyId: object;


    
    constructor(firstName: string, lastName: string, role: number, password: string, 
        companyId: object) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.role = role;
        this.password = password;
        this.companyId = companyId;
    }
 
}

export default User;