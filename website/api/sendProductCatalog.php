<?php
// require("connection.php");
$response = new \stdClass();
session_start();

if (
    isset($_POST['email']) &&
    isset($_POST['token'])
) {
    $email = $_POST["email"];
    $token =  $_POST["token"];
    $year = date("Y");

    if ($token === "HadksljlHKASdj123SDLAJFD!133") {
        $headers = "From: RWAD Seafood Website<admin@rwadseafood.com>\r\n";
        $headers .= "Reply-To: admin@rwadseafood.com\r\n";
        $headers .= "Return-Path: admin@rwadseafood.com\r\n";
        $headers .= "Content-Type: text/html; charset=UTF-8\r\n";
        $subject = "RWAD Seafood Product Catalog";

        $email_message = "Hello, thank you for requesting product catalog from RWAD seafood.\n\n
        Click on the link below to download and save the PDF file.\n\r\n\r
        <div style='padding:50px 0;'>
            <a href='https://rwadseafood.com/assets/pdf/rwad-product-catalog.pdf' style='padding: 8px 12px; background:dodgerblue; color:white; text-decoration:none;'>
                DOWNLOAD PDF
            </a>
        </div>
        \r\n\r\n";
        $email_message .= "Copyright RWAD Seafood $year \r\n";


        if (mail($email, $subject, "$email_message", $headers)) {
            mail("athmanmbwana619@gmail.com", $subject, "Sent product catalog to $email", $headers);
            mail("sales@rwadseafood.com", $subject, "Sent product catalog to $email", $headers);
            $response->message = "success";
            $response->data = "Thanks for requesting our product catalog. Please check your email for the download link";
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
