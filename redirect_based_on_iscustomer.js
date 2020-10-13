!window.addEventListener('DOMContentLoaded', (e) => {
	MemberStack.onReady.then(function(member) {
  	// if member is logged in
		if(member.loggedIn){
        // grab member "iscustomer" value
		        var iscustomer = member["iscustomer"]
	        // if member "iscustomer" == true, log it
			if(iscustomer == "true")
                 console.log("User is a customer")
	        // else "iscustomer" !== true, redirect
            		else {
                window.location.href = "/not-a-customer";
                console.log("User is not a customer")
            }
		}
		// user not logged in
	  	else{
			window.location.href = "/";
		}
	});
});
