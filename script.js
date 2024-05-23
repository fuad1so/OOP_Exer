// // var outResult= document.getElementById("output")



// class User {
//     constructor(firstName,lastName) {
//       this.firstName= firstName;
//       this.lastName= lastName;
//     }
//     welcome() {
//        console.log(`Hello ${this.firstName} ${this.lastName}`)
//     }
// }

// let user1 = new UserApplication("Fuad","Alsohli");
//  user1.welcome()

//  let user2 = new UserApplication("John","Kins");
//  user2.welcome()





//  class UserN {
//     constructor(firstName,lastName) {
//       this.firstName= firstName;
//       this.lastName= lastName;
//     }

//     get (firstName,lastName)  {
//         this._firstName=firstName;
//         this._lastName=lastName;
//     }

//     set (firstName,lastName)  {
//         this._firstName=firstName;
//         this._lastName=lastName;
//     }

//     welcome() {
//        console.log(`Hello ${this.firstName} ${this.lastName}`)
//     }
// }

// let user = new UserN("Fuad","Alsohli");
//  user.welcome()
//  user._firstName="Sara";
//  user._lastName="Gano";
 
//  console.log("Hello",user._firstName,user._lastName)


//  class User {
//     constructor(userName) {
//       this.userName = userName;
//     }
//     set (userName)  {
//         this._userName=userName;
//     }
// }

// class Admin extends User {
//     expressYourRole(){
//             return("Admin") 
//     }
//     sayHello(){
//       return(`Hello ${this.userName} ` )
//     }
// }

// let newUser = new Admin("Balthazar");
// console.log(newUser.sayHello())

// class User {
//     constructor() {
//          this.numberofArticle = 0
//     }
// }

// class Author extends User {
//     calcScores(){
//         return (this.numberofArticle * 10 + 20)
//     }
// }

// class Editor extends User {
    
//     calcScores(){
//         return (this.numberofArticle * 6 + 15)
//     }
// } 

// const author = new Author(8)

// console.log( `number of scors = ${author.calcScores()} `)



// let editor = new Editor(8)

// console.log( `number of scors = ${editor.calcScores()} `)


class User {
constructor(userName){
    this.userName= userName
    if (this.constructor === User) {
        throw new TypeError("Cannot construct Abstract instances directly.");
      }
}
stateYourRole(){ 
    throw new TypeError("Do not call abstract method deposit from child.");
}
}

class Admin extends User {
    stateYourRole() {
        return ( "Admin")
    }
}

class Viewer extends User {
    stateYourRole() {
        return ( "Viewer")
    }
}

let viewer = new Viewer("Melchior");
console.log(viewer.stateYourRole())
let admin = new Admin("Balthazar") ;
console.log(admin.stateYourRole())