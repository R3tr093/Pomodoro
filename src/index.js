let m = 25;
let s = 0;

let clock = false;
var playBtn = null;

function sum() {
    s = Number(s);
    m = Number(m);
    m++;

    if (m < 10) {
        m = `0${String(m)}`;
    } else {
        m = String(m);
    }

    if (s < 10) {
        s = `0${String(s)}`;
    } else {
        s = String(s);
    }

    document.querySelector("#count").textContent = `${m} : ${s}`;
}

function dec() {
    s = Number(s);
    m = Number(m);
    
    
    if(m > 0)
    {
        m--;
    }
   

    if (m < 10) {
        m = `0${String(m)}`;
    } else {
        m = String(m);
    }

    if (s < 10) {
        s = `0${String(s)}`;
    } else {
        s = String(s);
    }

    document.querySelector("#count").textContent = `${m} : ${s}`;
}

function base() {
    
    playBtn = document.getElementById('play');
    s = 0;
    m = 25;
    
    const element = (
        <div>  
          
            <span id={"count"}> {m} : 0{s}
            </span>
            <div id={"wrapBtn"}>
                <button onClick={sum}>Plus</button>
                <br />

                <button id="play" onClick={start}>Play</button>
                <br />

                <button onClick={reset}>Reset</button>
                <br />

                <button onClick={dec}>Minus</button>
                <br />
            </div>
        </div>
    );

    ReactDOM.render(element, document.querySelector("#root"));
}

// Init dom at this state

base();

function reset() {
    document.querySelector("#count").textContent = "25 : 00";
    clearInterval(clock);
    s = 0;
    m = 25;
}

function start() {
    
    
    if(!clock)
    {
        clock = setInterval(tick, 1000);
        var playBtn = <button id="play" onClick={start}>Stop</button>
    }

    else
    {
        clearInterval(clock);
        clock = false;
        var playBtn = <button id="play" onClick={start}>Play</button>
    }

    if(s < 10)
    {
        s = "0" + s;
    }
    
    
    const element = (
        <div>
          
            <span id={"count"}> {m} : {s}
            </span>
            <div id={"wrapBtn"}>
                <button onClick={sum}>Plus</button>
                <br />

                {playBtn}
                <br />

                <button onClick={reset}>Reset</button>
                <br />

                <button onClick={dec}>Minus</button>
                <br />
            </div>
        </div>
    );

    ReactDOM.render(element, document.querySelector("#root"));  
    
}

function showTime() {
    m = Number(m);
    s = Number(s);

       
        end = false;
       
        if (s > 0) {
            s--;
        } else {
            m--;
            s = 59;
        }

        if (s === 0 && m > 0) {
            m--;
            s = 59;
        }

        if (s === 0 && m === 0) {
            clearInterval(clock);
      
        }
        
        if (m < 10)
         {
            m = `0${String(m)}`;
         } 
         
        else
        {
            m = String(m);
        }

    if (s < 10) 
    {
        s = `0${String(s)}`;
    }
    
    else
    {
        s = String(s);
    }

    return `${m} : ${s}`;
}

// Refresh the dom

function tick() {
      
        if(s <= 1 && m <= 1)
        {
            console.log("pas fini")
            console.log(s)
            var info = "FIIIIIIIIIINI";

            const element = (
                <div> <p id={"report"}>{info}</p>
                    
        
                    <div id={"wrapBtn"}>
                        <button onClick={base}>Restart</button>
                        <br />

                    </div>
                </div>
            );
            ReactDOM.render(element, document.querySelector("#root"));
        }
        
        if(m > 1 || s > 1)
        {
       
            var info = "PAS FIIIIIIIIIINI";

            if(!clock)
            {
                const element = (
                    <div> <p id={"report"}>{info}</p>
                        <span id={"count"}>{showTime()}</span>
            
                        <div id={"wrapBtn"}>
                            <button onClick={sum}>Plus</button>
                            <br />
                            
                            <button id="play" onClick={start}>Stop</button>
                            <br />
            
                            <button onClick={reset}>Reset</button>
                            <br />
            
                            <button onClick={dec}>Minus</button>
            
            
                            
                            <br />
                        </div>
                    </div>
                );
                ReactDOM.render(element, document.querySelector("#root"));
            }

            else
            {
                const element = (
                    <div> <p id={"report"}>{info}</p>
                        <span id={"count"}>{showTime()}</span>
            
                        <div id={"wrapBtn"}>
                            <button>Plus</button>
                            <br />
                            
                            <button id="play" onClick={start}>Stop</button>
                            <br />
            
                            <button onClick={reset}>Reset</button>
                            <br />
            
                            <button >Minus</button>
            
            
                            
                            <br />
                        </div>
                    </div>
                );
                ReactDOM.render(element, document.querySelector("#root"));
            }

            
        }
 

   


    
       
}


