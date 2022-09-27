import '../assets/style/body.css'
import background from '../assets/img/background.jpg'

function Body() {
    return ( 
        <body>
            <img id="logoBody" src={background}></img>
            <h1 id="tituloHome">ENGLISH: TOPICS</h1>
            <div class="contenedor">
                <div class="contenedor-conciertos">                   
                    <div class="card">
                        <a id="link" href="https://www.realgrammar.com/present-simple-vs-past-simple/">
                            <div class="textos">
                                <h3 href="youtube.com">Present and Past</h3>
                                <p id="cardsDescription">You'll be able to solve sentences in present and past simple.</p>
                            </div>
                        </a>
                    </div>                    
                    <div class="card">
                        <a id="link" href="https://www.ef.com.mx/recursos-aprender-ingles/gramatica-inglesa/present-perfect-simple-past/">
                            <div class="textos">
                                <h3>Present perfect and past</h3>
                                <p id="cardsDescription">This is the next level of the previous level.</p>
                            </div>
                        </a>
                    </div>
                    <div class="card">
                        <a id="link" href="https://www.britishcouncil.org.mx/blog/future-simple">
                            <div class="textos">
                                <h3>Future</h3>
                                <p id="cardsDescription">You can make sentences like predictions or events at the future.</p>
                            </div>
                        </a>
                    </div>
                    <div class="card">
                        <a id="link" href="https://www.britishcouncil.org.mx/blog/modal-verbs">
                            <div class="textos">
                                <h3>Modals</h3>
                                <p id="cardsDescription">Different ways of saying something with different meanings.</p>
                            </div>
                        </a>
                    </div>
                    <div class="card" >
                        <a id="link" href="https://www.britishcouncil.org.mx/blog/i-wish-if-only">   
                            <div class="textos">
                                <h3>If and wish</h3>
                                <p id="cardsDescription">How to express any thing you would like to have one day.</p>
                            </div>
                        </a>
                    </div>
                    <div class="card" >
                        <a id="link" href="https://www.lewolang.com/gramatica-inglesa/102/the-passive-voice#:~:text=La%20oraci%C3%B3n%20pasiva%20se%20construye,si%20el%20verbo%20es%20irregular.">
                            <div class="textos">
                                <h3>Passive</h3>
                                <p id="cardsDescription">Another way of writing the same thing, but specifying the subject.</p>
                            </div>
                        </a>
                    </div>
                </div>

	        </div>        
        </body>
                );
}

export default Body;