import { Address } from "../domain/Adress";
import {User} from "../domain/User";

export const address = new Address({
    street: "Rua 2",
    houseNumber: "1",
    complement: "Apto 1",
    cep: "13561-130",
    city: "São Carlos",
    state: "São Paulo",
})

// Fake user data
export const user = new User({
        id: 1,
        name: "Matheus",
        lastName: "Cerqueira",
        email: "matheuscerqueira@usp.br",
        address: [address]
    }
);