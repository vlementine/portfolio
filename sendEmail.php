<?php

$data = json_decode(file_get_contents('php://input'), true);

// --- Variables
$name=$data["name"];
$email=$data["mail"];
$object=$data["object"];
$message=$data["message"];

// --- Recipient
$mailRecipient = 'bertrand_clementine@yahoo.fr'; 

// --- Message
$message_html = '<html>
<head>
</head>

<body>
    <table border="0" cellpadding="0" cellspacing="0" height="100%" width="100%">
        <tr>
            <td align="center" valign="top">
                <table border="0" cellpadding="20" cellspacing="0" width="100%" style="font-family: Helvetica, Arial, sans-serif; color: #6A6C82; font-size: 14px; border: 1px solid #E6E6EA; border-radius: 2px; padding: 50px; margin: 30px auto; max-width: 600px;">
                    <tr>
                        <td align="center" style="padding: 0;">
                            <h1 style="font-size: 48px; color: #000; margin: 0;">🍊</h1>
                            <h2 style="font-size: 13px; font-weight: bold; color: #B4B5C0; text-transform: uppercase; margin: 5px 0 0 0;">What\'s New in your portfolio</h2>
                            <h3 style="font-size: 22px; font-weight: bold; margin: 15px 0 40px 0; color: #383B58;">Nouvelle notification de ' . $name . '</h3>
                        </td>
                    </tr>
                    <tr>
                        <td style="padding: 0;">
                            <span style="font-weight: bold; color: #383B58;">Nom.</span>
                            <p style="margin: 5px 0 20px 0">' . $name . '</p>
                        </td>
                    </tr>
                    <tr>
                        <td style="padding: 0;">
                            <span style="font-weight: bold; color: #383B58;">Objet.</span>
                            <p style="margin: 5px 0 20px 0">' . $object . '</p>
                        </td>
                    </tr>
                    <tr>
                        <td style="padding: 0;">
                            <span style="font-weight: bold; color: #383B58;">Message.</span>
                            <p style="margin: 5px 0 20px 0">' . $message . '</p>
                        </td>
                    </tr>
                    <tr>
                        <td style="padding: 0;">
                            <span style="font-weight: bold; color: #383B58;">Email.</span>
                            <a href="mailto:' . $email . '" style="display: block; margin: 5px 0 0 0; color: #2286B6;">' . $email . '</a>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>

</html>';

// --- Filter of bugs
if (!preg_match("#^[a-z0-9._-]+@(hotmail|live|msn).[a-z]{2,4}$#", $mailRecipient))
{
	$passage_ligne = "\r\n";
}
else
{
	$passage_ligne = "\n";
}

// --- Object
$sujet = "Notification";

// --- Header of email
$header = "From: \"Clementine's portfolio\"<hello@clementinebertrand.fr>".$passage_ligne;
//$header.= "Reply-to: \"Clem\" <plop@mail.fr>".$passage_ligne;
$header.= "MIME-Version: 1.0".$passage_ligne;
$header.= "Content-Type: multipart/alternative;".$passage_ligne." boundary=\"$boundary\"".$passage_ligne;

// --- Message creation
$message.= $passage_ligne."--".$boundary.$passage_ligne;
$message.= "Content-Type: text/html; charset=\"UTF-8\"".$passage_ligne;
$message.= "Content-Transfer-Encoding: 8bit".$passage_ligne;
$message.= $message_html;

// --- Send mail
mail($mailRecipient,$sujet,$message,$header);

?>