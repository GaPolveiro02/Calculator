class CalcController {
   
    constructor() {

       this._operation = [];
       this._displayCalcEl = document.querySelector('#display');
       this.initialize();
       this.initButtonsEvents();
       console.log(this._operation)
       this._numbers = [];

    }


    initButtonsEvents() {

        let buttons = document.querySelectorAll(".row > button")

        buttons.forEach((btn, index) => {

            btn.addEventListener('click', e => {

                const buttonValue = e.target.innerText

                this.execBtn(buttonValue)

            })
        })

    }

    initialize() {

    }

    execBtn(x) {

        switch (x) {
            case 'C':
                this.clear();
                break;
            case 'CE':
                this.clearEntry();
                break;
            case '=':
                this.getResult(x)
                break;
            case '√':
                this.raizV(this._operation[0])
                break;
            case '+':
                this.pushOperation('+');
                break;
            case 'x²':
                this.pushOperation('x²');
                break;
            case '-':
                this.pushOperation('-');
                break;
            case '÷':
                this.pushOperation('/');
                break;
            case 'X':
                this.pushOperation('*');
                break;
            case '%':
                this.pushOperation('/100');
                break;
            case '±':
                this.pushOperation()
                break;
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
            case '0':
                this.pushOperation(parseInt(x));
                this.setNumberToDisplay(x);
                console.log(x)
                break; 

        }
    
    }

    get displayCalc() {
        return this._displayCalcEl;
    }

    set displayCalc(x) {
        this._displayCalcEl.innerHTML = value;
    }
     
    setError() {
        this.displayCalc = 'error';
    }

    getResult() {

        let result = eval(this._numbers.join(""));

        console.log(result)

        this._operation = [result]

        console.log(this._operation)

        this.setNumberToDisplay(result)

    }

    pushOperation(x) {

        let value = x

        if (isNaN(value)) {

            let number = this._numbers.join("")
            console.log(this._numbers.join(""))
            this._operation.push(value)
            let arrayConcat = number.concat(this._operation)
            console.log(arrayConcat)
            
            
        }else  {

            console.log('else if')

            this._numbers.push(value)

            console.log(this._numbers)
            
            
        } 

    }

    concatenar() {

    }

    clearEntry() {

        this._operation.pop();

    }

    clear() {

        this._operation = ['0'];
        this.setNumberToDisplay('0');
    }

    setNumberToDisplay(value) {

        this._displayCalcEl.innerText = value

    }

    raizV(value) {

        let raiz =  Math.sqrt(value)

        console.log(raiz)

        this.setNumberToDisplay(raiz);

        this._operation = [raiz]

    } 



};