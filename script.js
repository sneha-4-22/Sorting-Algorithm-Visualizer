const n=20;
const array=[];
for(let i=0;i<n;i++){
    array[i]=Math.random();
}
const cols=[];
const spacing=mycanvas.width/n;
const ctx=mycanvas.getContext("2d");
for(leti=0;i<array.length;i++){
    const x =i*spacing+spacing/2;
    const y=mycanvas.height;
    const width=spacing;
    const height=mycanvas.height*array[i];
    cols[i]=new Column(x,y,width,height);
    cols[i].draw(ctx);
}