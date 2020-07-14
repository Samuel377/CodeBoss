<?php

//Connect to the database
$conn = mysqli_connect('localhost', 'root', '', 'subscribe');

if (isset($_POST['email'])) {
    # code...
    // echo 'POST: Your email is '. $_POST['email'];
    $email = mysqli_real_escape_string($conn, $_POST['email']);
    $query = "INSERT INTO subscribers(email) VALUES('$email')";
    if (mysqli_query($conn, $query)) {
        # code...
        echo 'User Added...';
    }else {
        
        echo 'Error: '.mysqli_error($conn);
    }
}
?>