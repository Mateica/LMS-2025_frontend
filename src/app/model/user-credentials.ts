export interface UserCredentials {
    email : string;
    password : string;
}

export interface SignupCredentials {
    firstName : string;
    lastName : string;
    dateOfBirth : Date;
    email : string;
    password: string;
}

export interface LoginResponse {
    jwtToken : string;
    roles : string[];
}