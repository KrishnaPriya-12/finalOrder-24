export class CustomerDTO {
    firstName: string;
    lastName: string;
    phoneNumber: number;
    emailId: number;
    address: string;


    constructor(
        firstName: string,
        lastName: string,
        phoneNumber: number,
        emailId: number,
        address: string



    ) {

        this.firstName = firstName;
        this.lastName = lastName;
        this.phoneNumber = phoneNumber;
        this.emailId = emailId;
        this.address = address;

    }
}
