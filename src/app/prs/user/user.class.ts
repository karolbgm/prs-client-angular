export class User {
    id: number = 0;
    username: string = "";
    password: string = "";
    firstname: string = "";
    lastname: string = "";
    phone: string | null = null;
    email: string | null = null;
    isReviewer: boolean = false;
    isAdmin: boolean = false;
}

// remember to match the exact name of the properties in c# but the first letter is always lowercase!