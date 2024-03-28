<?php
include 'connect.php';
if (isset ($_POST['submit'])){
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $insertdata = "INSERT INTO `enquired_users`( `Name`, `Email`, `Phone`) VALUES ('".$name."','".$email."','".$phone."')";
    if ($conn->query($insertdata) === TRUE){
        echo "New record created successfully";
    }else{
        echo "Error:" . $insertdata . "<br>" . $conn->error;
    }
} 
?>