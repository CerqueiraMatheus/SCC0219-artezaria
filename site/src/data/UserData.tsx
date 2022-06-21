import { Address } from "../domain/Adress";
import {User} from "../domain/User";

export const addresses = [ new Address({
        street: "Rua 2",
        houseNumber: "1",
        complement: "Apto 1",
        cep: "13561-130",
        city: "São Carlos",
        state: "São Paulo",
    }),
    new Address({
        street: "Rua 3",
        houseNumber: "2",
        complement: "Apto 10",
        cep: "13151-198",
        city: "São Carlos",
        state: "São Paulo",
    }),
]

// Fake user data
export const user = new User({
        id: 1,
        name: "Matheus",
        lastName: "Cerqueira",
        email: "matheuscerqueira@usp.br",
        address: addresses
    }
);