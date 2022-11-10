import React from 'react'
import { useState, useEffect } from 'react'

export default function Calculator(props) {
    const [firstNum, setFirstNum] = useState(0);
    const [secondNum, setSecondNum] = useState(0);
    const [operator, setOperator] = useState(null);

    useEffect(() => {
        props.flashMessage('Calculator 1.0', 'success')
    },[])

    const numberClickHandler = e => {
        if(operator){
            if(e.target.innerHTML != "." || (e.target.innerHTML == '.' && !(secondNum.includes('.')))){
                secondNum == 0 ? setSecondNum(e.target.innerHTML) : setSecondNum(secondNum+e.target.innerHTML)
            }
        }
        else{
            if(e.target.innerHTML != '.' || (e.target.innerHTML == '.' && !(firstNum.includes('.')))){
                firstNum == 0 ? setFirstNum(e.target.innerHTML) : setFirstNum(firstNum+e.target.innerHTML);
            }
        }
    }

    const operatorClickHandler = e => {
        if(operator) 
            calculationHandler();
        
        setOperator(e.target.innerHTML);
    }

    const calculationHandler = () => {
        switch(operator){
            case '÷':
                setFirstNum(firstNum/secondNum);
                setSecondNum(0);
                setOperator(null);
                break;
            
            case '*':
                setFirstNum(firstNum*secondNum);
                setSecondNum(0);
                setOperator(null);
                break;    

            case '-':
                setFirstNum(firstNum-secondNum);
                setSecondNum(0);
                setOperator(null);
                break;

            case '+':
                setFirstNum(Number(firstNum)+Number(secondNum));
                setSecondNum(0);
                setOperator(null);
                break;
        }
    } 

    const clear = () => {
        setFirstNum(0);
        setSecondNum(0)
    }

    const negate = () => {
        operator ?  setSecondNum(secondNum*-1): setFirstNum(firstNum*-1)
    }

    const percent = () => {
        setFirstNum(firstNum/100)
    }

    
    
    return (
    <>
        <h1>Simple React Calculator</h1>
        <div className='calculator'>
            <div className='display'>
                <p className='display-text'>{secondNum!=0 ?  secondNum: firstNum}</p>
            </div>
            <div className='keypad'>
                <div className="row">
                    <div className='key top' onClick={clear}>C</div>
                    <div className='key top negate' onClick={negate}>+/-</div>
                    <div className='key top' onClick={percent}>%</div>
                    <div className='key opr' onClick={operatorClickHandler}>÷</div>
                </div>
                <div className="row">
                    <div className='key num' onClick={numberClickHandler}>1</div>
                    <div className='key num' onClick={numberClickHandler}>2</div>
                    <div className='key num' onClick={numberClickHandler}>3</div>
                    <div className='key opr' onClick={operatorClickHandler}>*</div>
                </div>
                <div className="row">
                    <div className='key num' onClick={numberClickHandler}>4</div>
                    <div className='key num' onClick={numberClickHandler}>5</div>
                    <div className='key num' onClick={numberClickHandler}>6</div>
                    <div className='key opr' onClick={operatorClickHandler}>-</div>
                </div>
                <div className="row">
                    <div className='key num' onClick={numberClickHandler}>7</div>
                    <div className='key num' onClick={numberClickHandler}>8</div>
                    <div className='key num' onClick={numberClickHandler}>9</div>
                    <div className='key opr' onClick={operatorClickHandler}>+</div>
                </div>
                <div className="row">
                    <div className='key num num0' onClick={numberClickHandler}>0</div>
                    <div className='key num' onClick={numberClickHandler}>.</div>
                    <div className='key opr' onClick={calculationHandler}>=</div>
                </div>
            </div>
        </div>
    </>
    )
}
