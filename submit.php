<?php

// if the url field is empty, but the message field isn't
if(isset($_POST['url']) && $_POST['url'] == '' && $_POST['message'] != ''){

	// put your email address here
	$youremail = 'nathanbritten.nb@gmail.com';

	// prepare a "pretty" version of the message
	// Important: if you added any form fields to the HTML, you will need to add them here also
	$body = "This was just submitted on the websites contact form:
  Name:  $_POST[name]
  E-Mail: $_POST[email]
  Phone Number: $_POST[phone]
	Message: $_POST[message]";

	// Use the submitters email if they supplied one
	// (and it isn't trying to hack your form).
	// Otherwise send from your email address.
	if( $_POST['email'] && !preg_match( "/[\r\n]/", $_POST['email']) ) {
	  $headers = "From: $_POST[email]";
	} else {
	  $headers = "From: $youremail";
	}

	// finally, send the message
	mail($youremail, 'Website Contact Form', $body, $headers );

}

// otherwise, let the spammer think that they got their message through

// uncomment these lines to redirect instead of displaying HTML
header('Location: https://www.airliebeachconstructions.com.au/');
exit('Redirecting you to https://www.airliebeachconstructions.com.au/');

?>
<!DOCTYPE HTML>
<html>
<head>

<title>Thanks!</title>

</head>
<body>

<h1>Thanks</h1>
<p>We'll get back to you as soon as possible.</p>

</body>
</html>