grammar Koder;

programa: (linha NEWLINE?)+ EOF;
linha: comando (' ' parametro)*;
comando: CMD_DIREITA | CMD_ESQUERDA | CMD_ACIMA | CMD_ABAIXO;
parametro: INT;

NEWLINE: [\r\n]+;
CMD_DIREITA: 'direita';
CMD_ESQUERDA: 'esquerda';
CMD_ACIMA: 'para cima';
CMD_ABAIXO: 'para baixo';
INT: [0-9]+;