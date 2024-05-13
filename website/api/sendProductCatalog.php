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
        $headers = "From: RWAD Seafood Website<sales@rwadseafood.com>\r\n";
        $headers .= "Reply-To: sales@rwadseafood.com\r\n";
        $headers .= "Return-Path: sales@rwadseafood.com\r\n";
        $subject = "RWAD Seafood Product Catalog";

        $email_message = "Hello, thank you for requesting product catalog from RWAD seafood.\n\n
        Click on the link below to download and save the PDF file.\n\n
        <html>
            <body>
                <center>
                    <a  style='text-decoration:none' href='https://rwadseasood.com/assets/pdf/rwad-product-catalog.pdf' >
                        <button style='height:80px; width:100px; padding:10px; background:dodgerblue; color:white; border-radius:10px' >
                            Download
                        </button>
                    </a>
                </center>
            </body>
        </html>
        \r\n\r\n";
        $email_message .= "Copyright RWAD Seafood $year \r\n";


        if (mail($email, $subject, "$email_message", $headers)) {
            mail("athmanmbwana619@gmail.com", $subject, "Sent product catalog to $email", $headers);
            mail("sales@rwadseafood.com", $subject, "Sent product catalog to $email", $headers);
            $response->message = "success";
            $response->data = "Thank requesting product catalog. Please check your email for the download link";
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
