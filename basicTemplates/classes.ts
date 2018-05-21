interface UserInterface{
    name:string;
    email:string;
    age:number;
    register();
    payInvoice();
}

class User implements UserInterface{

    name:string;
    email:string;
    age:number;

    constructor(name:string, email:string, age:number) {
        this.name = name;
        this.email = email;
        this.age = age;
        console.log("User created ");
    }

    register(){  // метод
        console.log(this.name+' is registered');
    }
    payInvoice(){
        console.log(this.name+ ' paid invoice');
    }
}

class Member extends User{  // extends - допълва информация към класс User
    id:number;
    constructor(id:number,name:string, email:string, age:number){
        super(name, email,age);
        this.id = id;
    }

    payInvoice(){
        super.payInvoice();
    }
}


//let John = new User("John Doe", 'john@google.com', 35);

// console.log(John.email);  // мога да викам информацията по всяко време
// John.register(); // викаме метод


let mike: User = new Member(1, "Mike Smith", 'mike@google.com', 35);
mike.payInvoice();