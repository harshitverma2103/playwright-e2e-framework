import {faker} from '@faker-js/faker';

export const userData = {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    DOb: faker.date.birthdate({ min: 18, max: 65, mode: 'age' }).toISOString().split('T')[0],
    country: faker.location.countryCode(),
    postalCode: faker.location.zipCode(),
    houseNumber: faker.location.buildingNumber(),
    streetName: faker.location.street(),
    city: faker.location.city(),
    state: faker.location.state(),
    phoneNumber: faker.string.numeric(10),
    email: faker.internet.email(),
    password: `${faker.string.alpha({ length: 6, casing: 'mixed' })}${faker.number.int({ min: 10, max: 99 })}!`,
};