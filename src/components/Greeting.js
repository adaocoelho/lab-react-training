import React from 'react';
import './Greeting.css';

function sayHello(lang){
    switch(lang) {
        case 'de':
            return 'Hallo';
                case 'en':
                    return 'Hello';
                        case 'es':
                            return 'Hola';
                                case 'fr':
                                    return 'salut';
    }
}
        

function Greetings(props) {

    return(
        <div className='greetings'>
            <p>{sayHello(props.lang)} {props.children}</p>
        </div>
    )

}


export default Greetings