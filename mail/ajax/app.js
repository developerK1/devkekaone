let name;

document.getElementById('submit').addEventListener('click', function(e) {
    e.preventDefault();


    name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const body = document.getElementById('body').value;
    const subject = document.getElementById('subject').value;

    let params = {
        name : 'name=' + name ,
        email : '&email=' + email,
        phone : '&phone=' + phone,
        body : '&body=' + body,
        subject : '&subject=' + subject
    }

    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'validator.php', true);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.onreadystatechange = function() {

      if (xhr.readyState === 4 && xhr.status === 200) {
        showModal(xhr.responseText);
      }
    };
xhr.send(params.name + params.email + params.body + params.phone + params.subject);


  });
  
 function showModal(content){
    let modal = `<div class="flexy-col">
		<h3>Message Send</h3>
		
		<div class="emoji">
            <h5>HAPPY</h5>
		</div>

        <h6>We will get back to you ${name} </h6>
    <div>`;  
 } 