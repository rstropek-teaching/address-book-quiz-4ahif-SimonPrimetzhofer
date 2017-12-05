export interface IContact {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
}

export const contacts: IContact[] = [
    { id: 1, firstName: "Nikolaus", lastName: "Engelschall", email: "12345678" },
    { id: 2, firstName: "Kaan", lastName: "Baylan", email: "87654321" }
];