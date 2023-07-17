<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Process the form data
    $mobile = $_POST['mobile'];
    $password = $_POST['password'];

    // Perform authentication or any other desired actions
    // You can replace the following conditional statement with your authentsication logic
    if (/* Check if the user has an account */) {
        // User has an account, perform login logic here
        echo "Logged in successfully!";
    } else {
        // User doesn't have an account, redirect to signup page
        header("Location: signup.html");
        exit;
    }
}
?> 
