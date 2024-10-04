function sayHello() {
    console.log("Hello")
    const username = document.getElementById("username").value 
    const password = document.getElementsById("password").value 
    if (username == "admin" && password == "admin") {
        alert("Welcome")
    } else {
        alert("Wrong ID/username!!!")
    }

}

sayHello()

function checkEvenNumber(x) {
    if (x % 2 == 0) {
        console.log("Even")
    }
    else {
        console.log("Odd")
    }
    console.log(x)
}

checkEvenNumber(1)
checkEvenNumber(2)
checkEvenNumber(11)