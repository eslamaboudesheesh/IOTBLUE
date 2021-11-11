
export interface ListViewModel {
    data: UserPerviewViewModel[],
    total: number,
    page?: number,
    limit?: number
}
export interface UserPerviewViewModel {
    id: string,
    title: string,
    firstName: string,
    lastName: string,
    picture: any,
}

export interface UserFullViewModel {
    id: string,
    title: string,
    firstName: string,
    lastName: string,
    gender: string,
    email: string,
    dateOfBirth: Date,
    registerDate: string,
    phone: string,
    picture: any,
    location: object,
}

export interface MyFormValues {
    firstName: string;
    lastName: string,
    email: string,
}
