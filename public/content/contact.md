+++
title = "Contact"
weight = 40
draft = false
+++

import fontawesome from '@fortawesome/fontawesome'
import faLinkedin from '@fortawesome/fontawesome-free-solid/faLinkedin'
import faQuora from '@fortawesome/fontawesome-free-solid/faQuora'
import faAmazon from '@fortawesome/fontawesome-free-solid/faAmazon'
import faGithub from '@fortawesome/fontawesome-free-solid/faGithub'
import faTwitter from '@fortawesome/fontawesome-free-solid/faTwitter'
import faSpotify from '@fortawesome/fontawesome-free-solid/faSpotify'


fontawesome.library.add(faLinkedin)
fontawesome.library.add(faQuora)
fontawesome.library.add(faAmazon)
fontawesome.library.add(faGithub)
fontawesome.library.add(faTwitter)
fontawesome.library.add(faSpotify)


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
    var contactform = document.getElementById('contactform');
    contactform.setAttribute('actions', '//formspree.io/' + 'janchristianbernabe' + '@' + 'gmail' + '.' + 'com');
</script>

{{< socialLinks >}}
