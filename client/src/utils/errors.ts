interface StandardErrors {
  [statusText: string]: string
}

export const objError: StandardErrors = {
  'Conflict': 'Email já cadastrado!',
  'Bad Request': 'Verifique os dados informados e tente novamente!',
  'Not Found': 'Usuário não encontrado!',
  'Internal Server Error': 'Erro interno do servidor! Tente novamente mais tarde!',
}
