// UI Elements
let pw_dailog = $('#pw_dialog');
let pw_form = $('#pw_form');
let old_pw_input = $('#old_pw');
let new_pw_input = $('#new_pw');
let confirm_new_pw_input = $('#con_new_pw');
let save_chages_btn = $('#save_changes');
let discard_btn = $('discard');
let pw_error_div = $('#pw_error');

pw_error_div.hide();
pw_form.on('submit', (event) => {
  event.preventDefault();
  //Reading fields values old, new & confirmed pw
  let oldPw = old_pw_input.val();
  let newPw = new_pw_input.val();
  let confirmPw = confirm_new_pw_input.val();

  //check old pw value with DB returned value
  //..................code here .............

  //check new pw length if it's >= 6 & equals it's confirmation value
  if (newPw >= 6 && newPw === confirmPw) {
    //replace old pw value in DB with the new one
  } else pw_error_div.show();
});
