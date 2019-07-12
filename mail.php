<?php
    $recep = 'deepakhr1999@gmail.com';
    $firstname = $_POST["name"];
    $sender= $_POST["email"];
    $text= $_POST["message"];
    $subject = $_POST["subject"];


    $headers = 'MIME-Version: 1.0' . "\r\n"
    ."From: " . $sender . "\r\n" 
    .'Content-type: text/html; charset=iso-8859-1' . "\r\n";

    $message ='<table style="width:100%">
        <tr>
            <td>'.$firstname.'  '.$subject.'</td>
        </tr>
        <tr><td>Email: '.$sender.'</td></tr>
        <tr><td>Text: '.$text.'</td></tr>
        
    </table>';

    if (mail($recep, $sender, $message, $headers))
    {
        echo 'The message has been sent.';
    }else{
        echo 'failed';
    }

?>
