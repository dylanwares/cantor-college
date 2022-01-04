// (function(){
//     var form = document.getElementById("form");
//     var msg = document.getElementById("msg");

//     form.addEventListener("submit", function(ev){
//         ev.preventDefault();
//         var name = document.getElementById("name").value;
//         var email = document.getElementById("email").value;
//         var message = document.getElementById("message").value;
//         if (name == ""){
//             alert("Test");
//         }
//     })
// })

(function(){
    var convertForm = document.getElementById("contactForm");
    var msg = document.getElementById("msg");

    convertForm.addEventListener("submit", function(ev){
        ev.preventDefault();
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var message = document.getElementById("message").value;

        if (name == "" || email == "" || message == ""){
            msg.innerHTML = "Please fill out all fields."
        }
        else if (!email.includes("@") || !email.includes(".")){
            msg.innerHTML = "Please enter a valid email."
        }
        else{
            alert("Thank you for your query. We will contact you via the email provided.")
        }
    })

    var priceEuros2;
    var pricePounds2;
    var exchangeRate2;

    var convertForm = document.getElementById("euroConverter")
    

})()