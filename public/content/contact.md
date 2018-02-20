+++
title = "Contact"
weight = 40
draft = false
+++
<form id="jcbcontactform" method="POST">
	<div class="field half first">
		<label for="name">Your Name</label>
		<input type="text" name="name" id="name" />
	</div>
	<div class="field half">
		<label for="email">Your Email</label>
		<input type="text" name="_replyto" id="email" />
	</div>
	<div class="field">
		<label for="message">Message</label>
		<textarea name="message" id="message" rows="4"></textarea>
		<input type="text" name="_gotcha" style="display:none" />
	</div>
	<ul class="actions">
		<li><input type="submit" value="Send Message" class="special" /></li>
		<li><input type="reset" value="Reset" /></li>
	</ul>
</form>
<script>
    var jcbcontactform =  document.getElementById('jcbcontactform');
    jcbcontactform.setAttribute('actions', '//formspree.io/' + 'janchristianbernabe' + '@' + 'gmail' + '.' + 'com');
</script>

{{< socialLinks >}}
