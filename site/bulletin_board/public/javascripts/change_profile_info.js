var profile_info_form = $("#profile_info_form");
var username = $("#username");
var firstname = $("#firstname");
var lastname = $("#lastname");
var dob = $("#dob");
var bio = $("#bio");
var change_info_error = $("change_user_error");
var change_user_error = $("change_user_error");
var change_user_error_message = $("change_user_error_message");

profile_info_form.on("submit", (event) => {
    event.preventDefault();
    var usernameValue = username.val();
    var firstnameValue = firstname.val();
    var lastnameValue = lastname.val();
    var bioValue = bio.val();
    var dobValue = dob.val();

    change_info_error.hide();

    
    console.log(usernameValue);
    console.log(firstnameValue);
    console.log(lastnameValue);
    console.log(bioValue);
    console.log(dobValue);
    console.log("--------------");
});
