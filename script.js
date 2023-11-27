mycanvas.width=400;
mycanvas.height=300;
const margin=30;
const n = 20;
const array = [];
for (let i = 0; i < n; i++) {
    array[i] = Math.random();
}
const cols = [];
const spacing = (mycanvas.width-margin*2) / n;
const ctx = mycanvas.getContext("2d");
const maxcolheight=200;
for (let i = 0; i < array.length; i++) {
    const x = i * spacing + spacing / 2+margin;
    const y = mycanvas.height-margin-i*3;
    const width = spacing-4;
    const height = maxcolheight*array[i];
    cols[i] = new Column(x, y, width, height);
   
}
animate();
function animate(){
    ctx.clearRect(0,0,mycanvas.width,mycanvas.height);
    for(let i=0;i<cols.length;i++){
        cols[i].draw(ctx);

    }
    requestAnimationFrame(animate);
}