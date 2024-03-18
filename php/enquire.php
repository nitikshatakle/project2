<?php
include 'connect.php';
if (isset ($_POST['submit'])){
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
   // $data = array(
    //     'name' => $name,
    //     'email' => $email,
    //     'phone' => $phone
    // );
    // print_r ($data);
    // $sql = "SELECT `Id`, `Name`, `Email`, `Phone` FROM `enquired users`";
    $insertdata = "INSERT INTO `enquired_users`( `Name`, `Email`, `Phone`) VALUES ('".$name."','".$email."','".$phone."')";
    if ($conn->query($insertdata) === TRUE){
        echo "New record created successfully";
    }else{
        echo "Error:" . $insertdata . "<br>" . $conn->error;
    }
} 
?>