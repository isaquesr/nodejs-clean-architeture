import { HttpRequest, HttpResponse } from '../protocols/http'
import { MissingParamError } from '../erros/missing-param-erro'
import { badRequest } from '../helpers/helper-http'

export class SignUpController {
  handle (httpRequest: HttpRequest): HttpResponse {
    if (!httpRequest.body.name) {
      return badRequest(new MissingParamError('name'))
    } else if (!httpRequest.body.email) {
      return badRequest(new MissingParamError('email'))
    }
  }
}
