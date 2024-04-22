<?php 

include 'connect.php';
if (isset($_GET['id'])) {
    $id = (int)$_GET['id'];

  
    if (!is_int($id)) {
        die("Invalid ID");
    }
    $sql = "DELETE FROM enquired_users WHERE Id = $id";
    if ($conn->query($sql) === TRUE){
        echo " Record deleted successfully";
    }else{
        echo "Error:" . $sql . "<br>" . $conn->error;
    }
} 

    ?>