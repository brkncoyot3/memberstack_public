!window.addEventListener('DOMContentLoaded', (e) => {
	MemberStack.onReady.then(function(member) {
	  
		// if member is logged in
		if(member.loggedIn){
	   
			// grab member "iscustomer" value
			var iscustomer = member["iscustomer"]
			
			// if member "iscustomer" == true, log it
			if(iscustomer == "true")
			     console.log("User iscustomer == true");
			
			// else "iscustomer" !== true, hide customer elements and set links to #
            else {
				console.log("User iscustomer !== true")
                document.querySelectorAll("[customer_element]").forEach(el => el.style.display = "none");
				document.querySelectorAll("[customer_link]").forEach(el => el.href = "#");
            }
		}
		// user not logged in hide customer elements and set links to #
		else{
			console.log("User is not logged in.")
            document.querySelectorAll("[customer_element]").forEach(el => el.style.display = "none");
			document.querySelectorAll("[customer_link]").forEach(el => el.href = "#");
		}
	});
});
