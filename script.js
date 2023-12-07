mycanvas.width=400;
mycanvas.height=300;
const margin=30;
const n = 20;
const array = [];
const cols = [];
const spacing = (mycanvas.width-margin*2) / n;
const ctx = mycanvas.getContext("2d");
const maxcolheight=200;
let moves=[];
function init(){
    for (let i = 0; i < n; i++) {
        array[i] = Math.random();
    }
    moves=[];
    for (let i = 0; i < array.length; i++) {
        const x = i * spacing + spacing / 2+margin;
        const y = mycanvas.height-margin-i*3;
        const width = spacing-4;
        const height = maxcolheight*array[i];
        cols[i] = new Column(x, y, width, height);
       
    }
}
function play(){
    moves=bubblesort(array);
}

animate();
function bubblesort(){
    const moves=[];
    do{
        var swapped =false ;
        for (let i=0;i<array.length;i++){
            if(array[i-1]>array[i]){
                swapped=true;
                [array[i-1],array[i]]=[array[i],array[i-1]];
                moves.push(
                    {indices:[i-1,i],swap:true}
                );

            }else{
                moves.push({
                    indices:[i-1,i],swap:false
                });
            }
        }
    }while(swapped);
    return moves;
}

function animate(){
    ctx.clearRect(0,0,mycanvas.width,mycanvas.height);
    let changed =false;
    for(let i=0;i<cols.length;i++){
        changed=cols[i].draw(ctx)||changed;
    }
    if(!changed && moves.length>0){
        const move =moves.shift();
        const [i,j]=move.indices;
        if(move.swap){
            cols[i].moveTo(cols[j]);
            cols[j].moveTo(cols[i],-1);
            [cols[i],cols[j]]=[cols[j],cols[i]];
        }else{
            cols[i].jump();
            cols[j].jump();
        }
    }
    requestAnimationFrame(animate);
}