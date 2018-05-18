$('form[name="sic-contact-form"]').validate({
  name: 'required',
  email: 'required',
  messages: {
   name: "Por favor, introduce tu nombre",
   email: "Por favor introduce tu correo electrónico",
  },
  submitHandler: function(form) {
   var data = $('form[name="sic-contact-form"]').serialize();
   console.log(data);
   $.ajax({
     url: 'http://integrations.blick.mx/sic/contact/form/',
     method: 'POST',
     data: data
   }).done(function(data) {
     if (parseInt(data) === 1) {
       alertify.logPosition("bottom right");
       alertify.success("Se ha enviado el email. Gracias por contactarnos!.");
       $('form[name="sic-contact-form"]')[0].reset();
     }
   });
  },
  invalidHandler: function(event, validator) {
   var errors = validator.numberOfInvalids();
   alertify.logPosition("bottom right");
   alertify.error("Verifica la información. Tienes " + errors + " errores.");
  }
});
