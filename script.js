function showimage(imageSrc,event){
    let button=event.currentTarget;
    let dataValue=button.getAttribute('data-value');
    let container=document.getElementById('player-result');
    container.innerHTML = "";
    const content=document.createElement('img');
    content.src=imageSrc;
    content.style.width="300px";
    content.style.height="300px";

    container.appendChild(content);

    

    const choices=["./Assets/fist.png","./Assets/hand-paper.png","./Assets/scissors.png"];
    const choiceNames=["rock","paper","Scissors"];
    let index=Math.floor(Math.random()*choices.length);
    let choice=choices[index];

    let computerContainer=document.getElementById('computer-result');
    computerContainer.innerHTML="";
    computerContainer.innerHTML=`<p>Computer Choice:${choiceNames[index]}<img src="${choice}" width='300px' height='300px'></p>`;

    let resultText = "";
    if(dataValue==index+1){
        resultText = "It's a tie!";
    }
    else if(
        (dataValue==1 && index==2) || (dataValue==2 && index==0) || (dataValue==3 && index==1)
    )
    {
        resultText= "You Won";
    }
    else
    {
        resultText="Computer Won";
    }

    document.getElementById('results').innerText=resultText;

    
    

    

}
