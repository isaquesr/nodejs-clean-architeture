import { DbAddAccount } from './db-add-account'

describe('DbAddAccount UseCase', () => {
  test('Show call Encrypter with correct password', async () => {
    class EncripterStub {
      async encrypt (value: string): Promise<string> {
        return new Promise(resolve => resolve('hashed_password'))
      }
    }

    const encripterStub = new EncripterStub()
    const sut = new DbAddAccount(encripterStub)
    const encryptSpy = jest.spyOn(encripterStub, 'encrypt')
    const accountData = {
      name: 'valid_name',
      email: 'valid_email',
      password: 'valid_password'
    }
    await sut.add(accountData)
    expect(encryptSpy).toHaveBeenCalledWith('valid_password')
  })
})
