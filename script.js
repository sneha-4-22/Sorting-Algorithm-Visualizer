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
for (let i = 0; i < array.length; i++) {
    const x = i * spacing + spacing / 2+margin;
    const y = mycanvas.height-margin;
    const width = spacing-4;
    const height = (mycanvas.height-margin *2)* array[i];
    cols[i] = new Column(x, y, width, height);
    cols[i].draw(ctx);
}
