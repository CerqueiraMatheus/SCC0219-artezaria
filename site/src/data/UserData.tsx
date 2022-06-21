import {User} from "../domain/User";

// Fake user data
export const user = new User({
        id: 1,
        name: "Matheus",
        lastName: "Cerqueira",
        email: "matheuscerqueira@usp.br",
        address: "Rua dos bobos, 0"
    }
);

export const Users = [
    user,
    new User({id: 2, name: 'Matheus', lastName: 'Sousa', email: 'matheus.ventura_de_sousa007@usp.br', address: 'Rua do balacobaco, 007' }),
]