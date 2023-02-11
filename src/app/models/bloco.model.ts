export class Bloco {
  id?: number;
  status?: string;
  nonce?: bigint;
  chaveMinerador?: any;
  hashBlocoAnterior?: any;

  static AG_VALIDACAO = 'AG_VALIDACAO';
  static AG_BLOCO = 'AG_BLOCO';
  static BLOCO_EM_VALIDACAO = 'BLOCO_EM_VALIDACAO';
  static VALIDO = 'VALIDO';
  static INVALIDO = 'INVALIDO';
}
