import { Role } from './role';
export interface User {
    idUser:     number;
    names:      string;
    email:      string;
    userName:   string;
    password:   string;
    telephone:  string;
    active:     boolean;
    role:       Role;
    foundation: null;
    createAt:   Date;
}
