<?php
// require("connection.php");
$response = new \stdClass();
session_start();

if (
    isset($_POST['message']) &&
    isset($_POST['email']) &&
    isset($_POST['phone']) &&
    isset($_POST['firstName']) &&
    isset($_POST['address']) &&
    isset($_POST['lastName']) &&
    isset($_POST['token']) &&
    isset($_POST['enquiryType'])
) {
    $email = $_POST["email"];
    $phone = $_POST["phone"];
    $message = $_POST["message"];
    $firstName = $_POST["firstName"];
    $lastName = $_POST["lastName"];
    $address = $_POST["address"];
    $enquiryType = $_POST["enquiryType"];
    $year = date("Y");
    $token =  $_POST["token"];

    if ($token === "3123tREARJajdhdQWajZZE") {
        $headers = "From: RWAD Seafood Website<admin@rwadseafood.com>\r\n";
        $headers .= "Reply-To: admin@rwadseafood.com\r\n";
        $headers .= "Return-Path: admin@rwadseafood.com\r\n";
        $subject = "RWAD Seafood Website User Enquiry";

        $email_message = "Hello, a user wrote an enquiry of type \"$message\" from the website.\n\n 
        User Particulars :\r\n 
        Name : $firstName $lastName\n
        Email address : $email\n
        Phone : $phone\n
        Address : $address\r\n\r\n

        Message :\r\n
        $message.
        \r\n\r\n";
        $email_message .= "$firstName $lastName said:\r\n\"$message\" \r\n\r\n";
        $email_message .= "Copyright RWAD Seafood $year \r\n";


        if (mail("sales@rwadseafood.com", $subject, "$email_message", $headers)) {
            mail("athmanmbwana619@gmail.com", $subject, "$email_message", $headers);
            $response->message = "success";
            $response->data = "Thank you for sending your enquiry. We will get back to you soon!";
        } else {
            $response->message = "error";
            $response->data = "Error, mail service unavailable.";
        }
    } else {
        $response->message = "error";
        $response->data = "Unauthenticated";
    }
} else {
    $response->message = "error";
    $response->data = "Invalid parameters";
}

// $conn->close();
echo json_encode($response);
