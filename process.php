<?php
$email = filter_input(INPUT_POST, 'email');
if (!empty($email)){
    $host = "us-cdbr-east-02.cleardb.com";
    $dbusername = "b20f332d2bbfc5";
    $dbpassword = "2e262819";
    $dbname = "heroku_f954f3b3a98254a";
    // Create connection
    $conn = new mysqli ($host, $dbusername, $dbpassword, $dbname);


    if (mysqli_connect_error()){
        die('Connect Error ('. mysqli_connect_errno() .') '
        . mysqli_connect_error());
    }
    else{
        $sql = "INSERT INTO subscribers(email)
        VALUES('$email')";
        if ($conn->query($sql)){
            echo "Subscribed Successfully";
    }
    else{
        echo "Error: ". $sql ."
        ". $conn->error;
    }
        $conn->close();
    }
}
?>
