const {sendWelcomeEmail} = require('./notification')

describe('sendWelcomeEmail', () => {
  test('should send a welcome email', () => {
    const emailService = {
      send: jest.fn()
    };

    const user = {
      email: 'test@example.com'
    };

    sendWelcomeEmail(emailService, user);

    expect(emailService.send).toHaveBeenCalled();
    expect(emailService.send).toHaveBeenCalledTimes(1);
    expect(emailService.send).toHaveBeenCalledWith(
      'test@example.com',
      'Welcome!'
    );
  });
});