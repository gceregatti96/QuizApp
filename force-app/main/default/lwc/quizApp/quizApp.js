import { LightningElement } from 'lwc';

export default class QuizApp extends LightningElement {
    selected={} //SALVA AS RESPOSTAS
    correctAnswer = 0 //para mostrar as respostas certas
    isSubmitted = false //para mostrar o resultado
    myQuestions=[
        {
            id:'Questao1',
            question:'Which one of the following is not a template loop?',
            answers: {
                a:"for:each",
                b:"iterator",
                c:"map loop"
            },
            correctAnswer:"c"
        },
        {
            id:'Questao2',
            question:'Which of the file is invalid in LWC component folder?',
            answers: {
                a:".svg",
                b:".apex",
                c:".js"
            },
            correctAnswer:"b"
        },
        {
            id:'Questao3',
            question:'Which one of the following is not a directive?',
            answers: {
                a:"for:each",
                b:"if:true",
                c:"@track"
            },
            correctAnswer:"c"
        }
    ]

    //Método para deixar o botão SUBMIT disabled até todas as respostas serem selecionadas
    get allNotSelected() {
        return !(Object.keys(this.selected).length === this.myQuestions.length)
    }

    //Aplicando dynamic style, caso acerte as questoes = verde, caso erre = vermelho
    get isScore() {
        return `slsd-text-heading_large ${this.myQuestions.length === this.correctAnswer ? 'slds-text-color_success':'slds-text-color_error'}`
    }

    //change handler chamando a cada click option
    changeHandler(event) {
        console.log("name", event.target.name);
        console.log("value", event.target.value);
        const {name, value} = event.target
        //const name = event.target.name
        //const value = event.target.value
        this.selected = {...this.selected, [name]:value}
    }

    //marcando as checkboxes
    submitHandler(event) {
        event.preventDefault()
        let correct = this.myQuestions.filter(item=>this.selected[item.id] === item.correctAnswer);
        this.correctAnswer = correct.length;
        this.isSubmitted = true;
        console.log(this.correctAnswer);
    }

    //Resetando as checkboxes
    resetHandler() {
        this.selected = {};
        this.correctAnswer = 0;
        this.isSubmitted = false;
    }
}