class Column {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.queue=[];
    }

    moveTo(loc,yoffest=1,frameCount=20){
        for(let i=0;i<frameCount;i++){
            const t=i/frameCount;
            const u=Math.sin(t*Math.PI);
            this.queue.push({
                x:lerp(this.x,loc.x,t),
                y:lerp(this.y,loc.y,t)+u*this.width/2*yoffest
            });
        }
    }
    draw(ctx) {
        let changed=false;
        if(this.queue.length>0){
            const {x,y}=this.queue.shift();
            this.x=x;
            this.y=y;
            changed=true;
        }
        const left=this.x-this.width/2;
        const top=this.y-this.height;
        const right=this.x+this.width/2;
        ctx.beginPath();
        // ctx.rect(left,top,this.width,this.height);
        ctx.fillStyle="rgb(150,150,150)";
        ctx.moveTo(left,top);
        ctx.lineTo(left,this.y);
        ctx.ellipse(this.x,this.y,this.width/2,this.width/4,0,Math.PI,Math.PI*2,true);
        ctx.lineTo(right,top);
        ctx.ellipse(this.x,top,this.width/2,this.width/4,0,Math.PI*2,true);
        ctx.fill();
        ctx.stroke();
        return changed ;
    }
}
