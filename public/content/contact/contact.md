+++
title = "Contact"
markup = "md"
weight = 40
draft = false
+++

<form id="contactform" method="POST">
	<div class="field half first">
		<label for="name">Your Name</label>
		<input type="text" name="name" id="name" />
	</div>
	<div class="field half">
		<label for="email">Your Email</label>
		<input type="text" name="_replyto" id="email" />
	</div>
	<div class="field">
		<label for="message">Your Message</label>
		<textarea name="message" id="message" rows="4"></textarea>
	</div>
	<ul class="actions">
		<li><input type="submit" value="Send Message" class="special" /></li>
		<li><input type="reset" value="Reset" /></li>
	</ul>
	<input type="hidden" name="_format" value="plain" />
	<input type="hidden" name="_next" value="/" />
	<input type="hidden" name="_subject" value="New Message from JanChristianBernabe.Com!" />
	<input type="text" name="_gotcha" style="display:none" />
	</form>
	<h3>Thank you for your message.</h3>

<script>
    var contactform =  document.getElementById('contactform');
    contactform.setAttribute('action', '//formspree.io/' + 'janchristianbernabe' + '@' + 'gmail' + '.' + 'com');
</script>

<table>
<tr><td class="icons"><a href="/#blog"><i class="far fa-arrow-alt-circle-left fa-lg"></i></a><a href="/#about"><i class="far fa-arrow-alt-circle-right fa-lg"></i></a></td></tr>
</table>
