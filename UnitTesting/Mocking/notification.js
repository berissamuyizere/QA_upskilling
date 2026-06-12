function sendWelcomeEmail(emailService, user) {
 emailService.send(
   user.email,
   'Welcome!'
 );
}
module.exports = {sendWelcomeEmail};