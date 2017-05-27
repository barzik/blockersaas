# blockersaas
Node.js express based API for checking if site contains iframe that redirect to some other forbidden site. The site contains page in hebrew with explanation and the API.

The API signature is basic just send GET to /isitforbidden with two GET parameters:

- url - The URL of the site to test.

- badURL - The URL of the bad site.

The API will test if the URL contains iframe with src to the badURL.

The API is deployed to [Heroku](http://secure-mountain-52911.herokuapp.com), click on the link or just send
an [API DEMO GET request](http://secure-mountain-52911.herokuapp.com/isItForbidden?url=http://mizbalax.com/sue-facebook&badURL=mizbala.com).

## The reason behind this API

TL;DR Facebook Israel sucks.

Facebook, by its Israeli branch is being sued by Israeli blogger Dori Ben Israel Kario after he was blocked and harassed by Facebook. His blog, was blocked even in Facebook messenger. Just try to share [Mizbala.com](http://mizbala.com) over ANY of Facebook's application and see for yourself.
Why He was blocked? because he wrote critical articles about Facebook Israel local Facebook director (I shit you not). In Facebook statement of defense, Facebook stated that Dori created elaborate mechanism to avoid link detection. This mechanism was above Facebook programmers technical ability. What was this mechanism? Use alternative domain to his blog with iframe src.
For helping poor Facebook programmers, I've created an SAAS Block API for detecting "malicious" sites. Here, Facebook programmers - in less than 30 lines I just solved your issue.