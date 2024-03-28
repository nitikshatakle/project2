<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Updated Form</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous">
    <style>
        form {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    padding: 20px;
    border: none;
    z-index: 2; 
    /* display: none;  */
    width: 600px;
    height: 400px;
    padding-top: 30px;
}

form.visible {
    display: block;
}

.myForm {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white; 
    padding: 20px;
    z-index: 1001; 
}

.myForm button {
    background-color: #0f1324;
    color: white;
    padding: 10px 15px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

.contact{
    font-size: 20px;
    color: gray;
}

.close-button{
    margin-left: 95%;
    top: -10px;
}

.submit{
    border: 1px solid gray;
    padding: 3px;
    background-color: white;
}
    </style>
</head>
<body>
<?php
include 'connect.php';

if (isset($_GET['id'])) {
    $id = (int)$_GET['id'];
    // $id = (char)$_GET['name'];
    // $id = (int)$_GET['email'];
    // $id = (int)$_GET['phone'];
  
    if (!is_int($id)) {
        die("Invalid ID");
    }
  $sql = "SELECT * FROM `enquired_users` WHERE ID = $id";
//   echo $sql;
  $result = $conn->query($sql);
// print_r(  $result);
  if ($result->num_rows > 0){
    $row = $result->fetch_assoc();
    // print_r ($row);
?>
<form  action="" method="post" class="myForm" id="modal">
   <span class="close-button" onclick="closeModal()">X</span>
  <p class="contact">CONTACT FROM</p>
    <div class="form-group">
        <label for="name">Name</label>
        <input type="text" class="form-control" id="name" placeholder="name" value="<?php echo $row['Name'] ?>" name="name">
    </div>
    <div class="form-group">
        <label for="exampleInputEmail1">Email </label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value="<?php echo $row['Email']?>" placeholder="email" name="email">
    </div>
    <div class="form-group">
        <label for="phone">Phone</label><br>
       <div class="d-inline-flex">
        <select name="country-code" id="">
          <option value="+91"> +91 <span class="iconify"></span></option>
          <option value="+1"> +1</option>
          <option value="+1"> +44</option>
      </select><br>
      <input type="tel" id="phone" placeholder="phone number" value="<?php echo $row['Phone'] ?>" name="phone">
       </div>
    </div>
    <input type="submit" name="submit" id="submit" value="submit" class="submit">
</form>
<?php
    } else {
        echo "No record found with ID: $id";
    }
}
?>
<?php
   if (isset($_POST['submit'])) {
    $newName = $_POST['name'];
    $email = $_POST['email'];
    $id = (int)$_GET['id'];
    $phone = $_POST['phone'];
    $sql = "UPDATE enquired_users SET Name ='".$newName ."', Email = '".$email."', Phone = '".$phone."' WHERE ID = $id ";
    echo $sql;
    if ($conn->query($sql) === TRUE){
        echo " Record updated successfully";
    }else{
        echo "Error:" . $sql . "<br>" . $conn->error;
    }
   }
?>

    
</body>
</html>