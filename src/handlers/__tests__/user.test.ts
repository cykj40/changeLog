 import * as user from '../user';

describe('user', () => {
  it('should create a new user', async () => {
    const req = {
      body: {
        name: 'John Doe',
        password: 'password',
      },
    };
    const res = {
      json: jest.fn(),
    };
    await user.createNewUser(req, res);
    expect(res.json).toHaveBeenCalledWith({ name: 'John Doe' });
  });
});

