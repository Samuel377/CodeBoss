<?php

//Connect to the database
$conn = mysqli_connect('k2fqe1if4c7uowsh.cbetxkdyhwsb.us-east-1.rds.amazonaws.com', 'mlz2y2trsxppp424', 's0y2k3sw1dmzxiqq', 'dr5umle9airr4q7s');

if (isset($_POST['email'])) {
    # code...
    // echo 'POST: Your email is '. $_POST['email'];
    $email = mysqli_real_escape_string($conn, $_POST['email']);
    $query = "INSERT INTO VALUES('$email')";
    if (mysqli_query($conn, $query)) {
        # code...
        echo 'User Added...';
    }else {
        
        echo 'Error: '.mysqli_error($conn);
    }
}
?>
