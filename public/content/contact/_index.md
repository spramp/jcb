+++
title = "Contact"
menuname = "Contact"
weight = 40
draft = false
slug: "contact"
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
	<input type="hidden" name="_next" value="/layouts/thankyou.html" />
	<input type="hidden" name="_subject" value="New Message from Personal Website!" />
	<input type="text" name="_gotcha" style="display:none" />
</form>
<span id="contactformsent">Thank you for your message</span>

<script>
    var contactform =  document.getElementById('contactform');
    contactform.setAttribute('action', '//formspree.io/' + 'janchristianbernabe' + '@' + 'gmail' + '.' + 'com');
</script>

{{< socialLinks >}}