Feature: Testing example with cucumber Version: 0.0.1

Scenario Outline: Search something in google and check if the result it's ok.

Given "<url>" is open in "<browser>" and set the emulation to device "<device>" 
When I type "<string to search>" in the search field
And I click the search button
Then I see the results for Java

Examples:

| url	 						| browser 	| string to search	| device					|
| https://www.google.com.ar/ 	| chrome  	| java				| Google Nexus 5			|
| https://www.google.com.ar/ 	| chrome	| kiwi				| Apple iPhone 5			|
| https://www.google.com.ar/ 	| chrome	| compu				| Apple iPhone 6			|
| https://www.google.com.ar/ 	| chrome	| compu				||
| https://www.google.com.ar/ 	| firefox	| compu				||
| https://www.google.com.ar/ 	| chrome	| kiwi				| Apple iPhone 6 Plus		|
| https://www.google.com.ar/ 	| chrome	| kiwi				| Google Nexus 10			|
| https://www.google.com.ar/ 	| chrome	| kiwi				| Google Nexus 4			|
| https://www.google.com.ar/ 	| chrome	| compu				| Google Nexus 5			|
| https://www.google.com.ar/ 	| chrome	| kiwi				| Google Nexus 7			|
| https://www.google.com.ar/ 	| chrome	| compu				| Samsung Galaxy Note 3 	|
| https://www.google.com.ar/ 	| chrome	| compu				| Samsung Galaxy Note II	|
| https://www.google.com.ar/ 	| chrome	| compu				| Samsung Galaxy S4 		|
##| https://www.google.com.ar/ 	| chrome	| kiwi				| Amazon Kindle Fire HDX	| #not support
##| https://www.google.com.ar/ 	| chrome	| kiwi				| Apple iPad				| #not support
##| https://www.google.com.ar/ 	| chrome	| compu				| Apple iPad Mini			| #not support
##| https://www.google.com.ar/ 	| chrome	| compu				| Samsung Galaxy S III 		| #not support
##| https://www.google.com.ar/ 	| chrome	| kiwi				| Laptop with HiDPI screen	| #not support
##| https://www.google.com.ar/ 	| chrome	| compu				| Laptop with MDPI screen 	| #not support
##| https://www.google.com.ar/ 	| chrome	| compu				| Laptop with touch 		| #not support
##| https://www.google.com.ar/ 	| chrome	| compu				| Nokia Lumia 520 			| #not support
##| https://www.google.com.ar/ 	| chrome	| kiwi				| BlackBerry PlayBook		| #not support
##| https://www.google.com.ar/ 	| chrome	| kiwi				| Apple iPhone 4			| #is supported but is not working
##| https://www.google.com.ar/ 	| chrome	| compu				| BlackBerry Z30			| #is supported but is not working