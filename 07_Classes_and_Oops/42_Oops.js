const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        //console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }

}



//console.log(user.username)
//console.log(user.getUserDetails());
// console.log(this);


function User(username, loginCount, isLoggedIn){
    this.username = username;       // 1. left side username is variable and right Arguments ****************|
    this.loginCount = loginCount;   
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    return this;  // this line write or not (It will return implicitly object)
}

const userOne = new User("hitesh", 12, true)      // 1. Create copy of object (if not use new keyword userTwo will override userOne )
const userTwo = new User("ChaiAurCode", 11, false)// 2. argumetns pass in object
console.log(userOne.constructor);                 // 3. 
//console.log(userTwo);
