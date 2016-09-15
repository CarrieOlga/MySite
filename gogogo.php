<?php 
sleep(2);
//Sanitize incoming data and store in variable
$name = trim(stripslashes(htmlspecialchars($_POST['name'])));	  		
$email = trim(stripslashes(htmlspecialchars($_POST['your-email'])));
$message = stripslashes(htmlspecialchars($_POST['text']));	    	
		

			//send to an email
			$to = 'olga_morgunova@ukr.net';
			$from = 'admin@carrie-olga.esy.es';
			$headers = 'MIME-Version: 1.0' . '\n';
			$headers .= 'From: ' . $from . '\n';
			$subject = 'Contact form submission';
			$body = 'Name: ' . $name . '\n';
			$body .= 'Email: ' . $email . '\n';
			$body .= 'Message: ' . $message . '\n';
			
			//send email and return message to the user
			if(mail($to, $subject, $body, $headers, '-f admin@carrie-olga.esy.es')) {
				$return['error'] = false;
				echo $return['msg'] = "<script>alert('Thanks for your question, i will contact you soon.')</script>"; 
				json_encode($return);
			} else {
				$return['error'] = true;
				echo $return['msg'] = "<script>alert('Oops! There was a problem. Please try again.')</script>";	
				json_encode($return);
			} 


echo "<script>document.location.href='http://carrie-olga.esy.es/contact.html';</script>\n";

	
?> 

