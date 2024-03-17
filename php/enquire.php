<?php
include 'connect.php';
if (isset ($_POST['submit'])){
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $sql = "SELECT `Id`, `Name`, `Email`, `Phone` FROM `enquired users`";
    $insertdata = "INSERT INTO `enquired users`(`Id`, `Name`, `Email`, `Phone`) VALUES ('".$name."','".$email."','".$phone."')";
    if ($conn->query($insertdata) === TRUE){
        echo "New record created successfully";
    }else{
        echo "Error:" . $insertdata . "<br>" . $conn->error;
    }
} 
?>