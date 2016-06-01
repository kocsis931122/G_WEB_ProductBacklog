var count = 2;
function validate() {
    var un = document.login.username.value;
    var pw = document.login.password.value;
    var valid = false;

    var unArray = ["Peter", "Viktor", "Mate", "Krisztian"];  // as many as you like - no comma after final entry
    var pwArray = ["Password1", "Password2", "Password3", "Password4"];  // the corresponding passwords;

    for (var i = 0; i < unArray.length; i++) {
        if ((un == unArray[i]) && (pw == pwArray[i])) {
            valid = true;
            break;
        }
    }

    if (valid) {
        alert("Login was successful");
        window.location = "view_items.html";
        return false;
    }

    var t = " tries";
    if (count == 1) {
        t = " try"
    }

    if (count >= 1) {
        alert("Invalid username and/or password.  You have " + count + t + " left.");
        document.login.username.value = "";
        document.login.password.value = "";
        setTimeout("document.login.username.focus()", 25);
        setTimeout("document.login.username.select()", 25);
        count--;
    } else {
        alert("Still incorrect! You have no more tries left!");
        document.login.username.value = "No more tries allowed!";
        document.login.password.value = "";
        document.login.username.disabled = true;
        document.login.password.disabled = true;
        return false;
    }
}
