var particleAlphabet = {
    Particle: function(x, y) {
        this.x = x;
        this.y = y;
        this.radius = 3.5;
        this.draw = function(ctx) {
            ctx.save();
            ctx.translate(this.x, this.y);
            ctx.fillStyle = '#faabd5';
            ctx.fillRect(0, 0, this.radius, this.radius);
            ctx.restore();
        };
    },
    init: function() {
        particleAlphabet.canvas = document.querySelector('.english__canvas');
        particleAlphabet.ctx = particleAlphabet.canvas.getContext('2d');
        particleAlphabet.W = 400;
        particleAlphabet.H = 300;
        particleAlphabet.particlePositions = [];
        particleAlphabet.particles = [];
        particleAlphabet.tmpCanvas = document.createElement('canvas');
        particleAlphabet.tmpCtx = particleAlphabet.tmpCanvas.getContext('2d');

        particleAlphabet.canvas.width = particleAlphabet.W;
        particleAlphabet.canvas.height = particleAlphabet.H;

        setInterval(function(){
            particleAlphabet.changeLetter();
            particleAlphabet.getPixels(particleAlphabet.tmpCanvas, particleAlphabet.tmpCtx);
        }, 2200);

        particleAlphabet.makeParticles(1000);
        particleAlphabet.animate();
    },
    currentPos: 0,
    changeLetter: function() {
        var letters = 'A2,B1',
            letters = letters.split(',');
        particleAlphabet.time = letters[particleAlphabet.currentPos];
        particleAlphabet.currentPos++;
        if (particleAlphabet.currentPos >= letters.length) {
            particleAlphabet.currentPos = 0;
        }
    },
    makeParticles: function(num) {
        for (var i = 0; i <= num; i++) {
            particleAlphabet.particles.push(new particleAlphabet.Particle(particleAlphabet.W / 2 + Math.random() * 400 - 200, particleAlphabet.H / 2 + Math.random() * 400 -200));
        }
    },
    getPixels: function(canvas, ctx) {
        var keyword = particleAlphabet.time,
            gridX = 6,
            gridY = 6;
        canvas.width = this.canvas.width;
        canvas.height = this.canvas.height;
        ctx.fillStyle = 'red';
        ctx.font = 'italic bold 330px Noto Serif';
        ctx.fillText(keyword, canvas.width / 2 - ctx.measureText(keyword).width / 2, canvas.height / 2 + 100);
        var idata = ctx.getImageData(0, 0, canvas.width, canvas.height);
        var buffer32 = new Uint32Array(idata.data.buffer);
        if (particleAlphabet.particlePositions.length > 0) particleAlphabet.particlePositions = [];
        for (var y = 0; y < canvas.height; y += gridY) {
            for (var x = 0; x < canvas.width; x += gridX) {
                if (buffer32[y * canvas.width + x]) {
                    particleAlphabet.particlePositions.push({x: x, y: y});
                }
            }
        }
    },
    animateParticles: function() {
        var p, pPos;
        for (var i = 0, num = particleAlphabet.particles.length; i < num; i++) {
            p = particleAlphabet.particles[i];
            pPos = particleAlphabet.particlePositions[i];
            if (particleAlphabet.particles.indexOf(p) === particleAlphabet.particlePositions.indexOf(pPos)) {
                p.x += (pPos.x - p.x) * 0.1;
                p.y += (pPos.y - p.y) * 0.1;
                p.draw(particleAlphabet.ctx);
            }
        }
    },
    animate: function() {
        requestAnimationFrame(particleAlphabet.animate);
        particleAlphabet.ctx.fillStyle = '#415266';
        particleAlphabet.ctx.fillRect(0, 0, particleAlphabet.W, particleAlphabet.H);
        particleAlphabet.animateParticles();
    }
};

window.onload = particleAlphabet.init;