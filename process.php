<?php
$servername = "k2fqe1if4c7uowsh.cbetxkdyhwsb.us-east-1.rds.amazonaws.com";
$username = "mlz2y2trsxppp424";
$password = "xf080icpf8q4qpip";
$dbname = "dr5umle9airr4q7s";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
if (isset($_POST['email'])){
        $email = mysqli_real_escape_string($conn, $_POST['email']);
        $sql = "INSERT INTO 3306(email)
        VALUES ('$email')";

        if ($conn->query($sql) === TRUE) {
          echo "New record created successfully";
        } else {
          echo "Error: " . $sql . "<br>" . $conn->error;
        }
}

$conn->close();
?>
