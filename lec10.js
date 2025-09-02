//memory-two types 1 stack(primitive)here we get a copy of memory where we can make changes 2 heap here we have reference we make changes directly
//into the original value

//stack example
myYTname="anushkainthehouse";
let anothername=myYTname
anothername="anushka"
console.log(myYTname);
console.log(anothername);

//heap example
let userone={
    email: "gmail.com",
    upi: "@upiid"
}
let usertwo=userone 
usertwo.email="yahoo.com"
console.log(userone.email);
console.log(usertwo.email);   // both gives same value qki value heap s chng hui h direct
