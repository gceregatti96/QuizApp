<img src="https://img.shields.io/badge/Salesforce-00A1DF"> <img src="https://img.shields.io/badge/LWC-00A1DF"> <img src="https://img.shields.io/badge/Javascript-EFD81D"> <img src="https://img.shields.io/badge/HTML5-E44D26">

<img src="https://login.salesforce.com/img/logo190.png" align="right" width="300">

# Salesforce Quiz - LWC
##### Este é um projeto Salesforce Lightning Web Component (LWC) que implementa um aplicativo de quiz simples. O objetivo final do aplicativo é permitir que os usuários respondam a perguntas de múltipla escolha e exibir seus resultados.
## Funcionalidades

### O aplicativo Quiz possui as seguintes funcionalidades:

- Exibição de uma lista de perguntas de múltipla escolha.

- Os usuários podem selecionar uma opção de resposta para cada pergunta.

- O botão "Submit" é desabilitado até que todas as perguntas sejam respondidas.

- Quando o usuário clica em "Submit", o aplicativo verifica as respostas selecionadas e exibe o número total de respostas corretas.

- O resultado é exibido em um estilo dinâmico, com a cor do texto verde se todas as respostas estiverem corretas e vermelho se houver respostas incorretas.

- Os usuários podem redefinir as respostas e começar o quiz novamente clicando no botão "Reset".

- Componentes e Estrutura do Aplicativo

- O aplicativo consiste em um componente chamado "QuizApp" que inclui uma estrutura HTML no formato de um cartão Lightning. Dentro desse cartão, há um formulário que exibe as perguntas e opções de resposta.

## Javascript <img src="https://raw.githubusercontent.com/tandpfun/skill-icons/59059d9d1a2c092696dc66e00931cc1181a4ce1f/icons/JavaScript.svg" width="17"> 


###  Propriedades:


-- selected: Objeto que armazena as respostas selecionadas pelo usuário.

-- correctAnswer: Número de respostas corretas.

-- isSubmitted: Indicador de se o quiz foi enviado.

-- myQuestions: Array de objetos que representam as perguntas e opções de resposta.

### Métodos:

-- get allNotSelected(): Retorna um valor booleano indicando se todas as perguntas foram respondidas.

-- get isScore(): Retorna uma classe CSS para estilizar o resultado com base no número de respostas corretas.

-- changeHandler(event): Manipulador de eventos chamado quando uma opção de resposta é selecionada.

-- submitHandler(event): Manipulador de eventos chamado quando o formulário é enviado. Verifica as respostas selecionadas e exibe o resultado.

--resetHandler(): Reinicia o quiz, redefinindo as respostas selecionadas e o resultado.

## Contributing
 1. #### Fork it


2. Create your feature branch 


```
git checkout -b my-new-feature
```

3. Commit your changes
```
git commit -am 'Added some feature'
```

4. Push to the branch
```
git push origin my-new-feature
```


5. Create new Pull Request
