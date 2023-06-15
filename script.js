function getFormvalue() {
    //Write your code here
	var form = document.getElementById("form1")
	var fname =  form.fname.value
	var lname = form.lname.value

	alert(`${fname} ${lname}`)
}
