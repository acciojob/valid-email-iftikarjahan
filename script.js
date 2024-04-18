function validEmail(str) {
	// Regular expression pattern to validate email addresses
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    // Test the email against the pattern and return the result
    return emailPattern.test(str);
}

// Do not change the code below.
const str = prompt("Enter an email address.");
alert(validEmail(str));
