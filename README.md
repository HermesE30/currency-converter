# Conversor de moedas para Real Brasileiro (BRL)
Este projeto foi desenvolvido em Angular 15.2.1 e tem como objetivo mostrar
a conversão de três moedas para Real Brasileiro (BRL) de forma automática.

---
## Requisitos

- Mostrar a quantia equivalente de uma unidade de cada moeda abaixo em Real
  Brasileiro (BRL):
  - Dólar Canadense (CAD)
  - Peso Argentino (ARS)
  - Libra Esterlina (GBP)
- Visualizar a variação em porcentagem;
- Visualizar a hora da atualização;
- Manter cache das informações no front-end por 3 minutos;
- Atualizar automaticamente as informações a cada 3 minutos;
- Apresentar valores menores ou igual a R$1,00 em vermelho;
- Apresentar valores maiores que R$1,00 e menores ou igual a R$5,00 em verde;
- Apresentar valores maiores que R$5,00 em azul;


## API

A API utilizada é a da AwesomeAPI para buscar as informações:
[AwesomeAPI](https://docs.awesomeapi.com.br/api-de-moedas);

## Como executar

1. Clone o repositório
2. Execute `npm install` para instalar as dependências
3. Execute `ng serve` para iniciar a aplicação
4. Acesse `http://localhost:4200/` no seu navegador

## Como funciona

A aplicação faz uma chamada para a API da AwesomeAPI para obter as informações
das moedas e as armazena em cache no front-end por 3 minutos. A cada 3 minutos
a aplicação atualiza as informações automaticamente. As informações exibidas
incluem a quantia equivalente de uma unidade de cada moeda em Real Brasileiro (BRL),
a variação em porcentagem e a hora da atualização.


## Autor
Desenvolvido por Hermes Emmanuel.