<template>
  <form name="contact-form" method="POST" action="https://api.web3forms.com/submit" @submit="handleSubmit">
    <input type="hidden" name="access_key" id="key">
    <div class="form-row">
      <div class="form-group">
        <label for="name">Your Name</label>
        <input required type="text" class="form-control" id="name" name="name">
      </div>
    </div>
    <div class="form-row">
      <div class="form-group">
        <label for="inputEmail">Email</label>
        <input required type="email" class="form-control" id="inputEmail" name="email">
      </div>
    </div>
    <div class="form-row">
      <div class="form-group">
        <label for="inputMessage">Message</label>
        <input required type="textarea" class="form-control" id="inputMessage" name="message" />
      </div>
    </div>
    <button v-b-modal.modal-1 type="submit" class="btn btn-outline-light btn-lg mt-3" data-bs-toggle="modal"
      data-bs-target="#contactConfirmation">Send</button>
  </form>
</template>
<script setup>
document.getElementById('key').value = process.env.WEBFORM; 

function handleSubmit(e) {
  const form = e.currentTarget;
  const modalTitle = document.querySelector(".modal-title");
  const modalBody = document.querySelector(".modal-body");
  const modalButton = document.querySelector(".modal-footer button");
  e.preventDefault();
  const formData = new FormData(form);
  const object = Object.fromEntries(formData);
  const json = JSON.stringify(object);
  fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: json,
  })
    .then(async (response) => {
      let json = await response.json();
      if (response.status == 200) {
        modalTitle.innerHTML = 'Success!';
        modalBody.innerHTML = json.message + '\r\n' + "Thanks for getting in touch! I will get back to you soon.";
        modalButton.classList.add("btn-success")
      } else {
        console.log(response);
        modalTitle.innerHTML = 'There was an error!';
        modalBody.innerHTML = 'Please try again, or email me directly at N dot STEBBINGS at GMAIL dot COM. Cheers!';
        modalButton.classList.add("btn-warning")
      }
    })
    .catch((error) => {
      console.log(error);
      modalTitle.innerHTML = 'There was an error!';
      modalBody.innerHTML = 'Please try again, or email me directly at N dot STEBBINGS at GMAIL dot COM. Cheers!';
      modalButton.classList.add("btn-danger")
    })
    .then(function () {
      form.reset();
      setTimeout(() => {
        modalTitle.innerHTML = 'Contact has been made';
        modalBody.innerHTML = 'Pending...';
        modalButton.classList.remove("btn-success")
        modalButton.classList.remove("btn-warning")
      }, 5000);
      document.getElementById('return-home')?.click();
    });
}
</script>
<style>
form {
  flex-basis: 66%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-bottom: var(--margin-y);
}

form .form-row:first-of-type {
  margin: var(--margin-y) 0 0 0
}

form label {
  color: #fefefe;
  margin: 0 0 .5rem 0;
  font-size: 1.5em;
}

form .form-row {
  margin: 0;
  padding: 0;
  display: flex;
  flex-basis: 100%;
}

form input {
  font-size: 1.5rem;
}

form input[type=textarea] {
  height: 12rem;
  font-size: 1.5rem;
}
</style>
