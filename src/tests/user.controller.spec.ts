import { Request, Response } from 'express';
import UserController from '../controllers/user.controller';

const mockUser = {
  name: 'John',
  last_name: 'Doe',
};

jest.mock('../services/user.service', () => {
  return jest.fn().mockImplementation(() => {
    return { createUser: () => mockUser };
  });
});

const req: Partial<Request> = {};
const res = {} as Partial<Response>;
res.status = jest.fn().mockReturnValue(res);
res.json = jest.fn().mockReturnValue(res);

test('should return insufficient parameters error', async () => {
  const controller = new UserController();
  req.body = {
    name: 'John',
  };
  await controller.createUser(req as Request, res as Response);
  expect(res.json).toHaveBeenCalledWith({
    STATUS: 'FAILURE',
    MESSAGE: 'Insufficient parameters',
    DATA: {},
  });
});

test('should return the created user', async () => {
  const controller = new UserController();
  req.body = mockUser;
  await controller.createUser(req as Request, res as Response);
  expect(res.json).toHaveBeenCalledWith({
    STATUS: 'SUCCESS',
    MESSAGE: 'User successfully created',
    DATA: mockUser,
  });
});
