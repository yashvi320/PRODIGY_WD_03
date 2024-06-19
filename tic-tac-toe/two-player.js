let boxes = document.querySelectorAll(".box");


let turnO = true;

const wincondition = [[0, 1, 2],
                    [0, 3, 6],
                    [0, 4, 8],
                    [1, 4, 7],
                    [2, 4, 6],
                    [2, 5, 8],
                    [3, 4, 5],
                    [6, 7, 8]];

let winLines = Array.from(document.getElementsByClassName("line"))

boxes.forEach(box => {
    box.addEventListener("click",() => {
        if(turnO===true) //player O
        {
            document.getElementById("float-left").style.display = "none";
            box.innerText = "O";
            turnO = false;
            document.getElementById("float-right").style.display = "inline";
        }
        else //player X
        {
            document.getElementById("float-right").style.display = "none";
            box.innerText = "X";
            turnO = true;
            document.getElementById("float-left").style.display = "inline";
        }

        box.disabled = true;
        
        checkwinner();
        checkDraw();
                           
    })
}); 


function checkwinner()
{
    for(let pattern of wincondition)
        {
            let p1 = boxes[pattern[0]].innerHTML;
            let p2 = boxes[pattern[1]].innerHTML;
            let p3 = boxes[pattern[2]].innerHTML;

            if(p1 != "" && p2 != "" && p3 != "")
                {
                    if(p1==p2&&p2==p3)
                        {
                            finish = true;
                            

                            let lineIndex = wincondition.indexOf(pattern)
                            winLines[lineIndex].style.display = "block"
                            console.log(winLines[lineIndex])

                            

                            document.getElementById("float-right").style.display = "none";
                            document.getElementById("float-left").style.display = "none";
                            
                            boxes.forEach(box => {
                                box.disabled = true;
                                
                            })

                            setInterval(()=>{resultModal(p1)},700)
                        }
                }
        }
}

    function checkDraw(){
        let flag=0;
        for(i=0;i<boxes.length;i++){
            if(boxes[i].innerHTML==""){
                flag=1;
            }
        }
        if(flag==0){
            document.getElementsByClassName("container")[0].classList.add("inactive")
          
            console.log("hogya");
            resultModal()
            resultText.innerHTML = "DRAW";
        }
            
    }

    let result = document.getElementsByClassName("result")[0]
    let resultText = document.getElementById("result-text")
    function resultModal(winner){
    result.classList.remove("inactive")
    resultText.innerHTML = winner + " Wins";
    document.getElementsByClassName("entire")[0].style.display = "none";
}