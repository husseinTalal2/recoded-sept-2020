const post_form = $("#profile_info_form");
const username = $("#username");
const firstname = $("#firstname");
const lastname = $("#lastname");
const dob = $("#dob");
const bio = $("#bio");
const change_info_error = $("change_user_error");

login_form.on("submit", (event) => {
    var username = username.val();
    var firstname = firstname.val();
    var lastname = lastname.val();
    var bio = bio.val();
    var dob = dob.val();

    change_info_error.hide();

    console.log(username);
    console.log(firstname);
    console.log(lastname);
    console.log(bio);
    console.log(dob);

    event.preventDefault();
});
