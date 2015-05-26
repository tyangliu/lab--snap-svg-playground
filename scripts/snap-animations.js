// Title - Pinwheel

var pinwheel = Snap("#title-pinwheel");
Snap.load("images/title-pinwheel.svg", loadPinwheel);

function loadPinwheel( image ){
    var pinwheelGroup = image.select("#pinwheel-inner");
    pinwheel.append( image );
    rotatePinwheel();

    function rotatePinwheel(){
        pinwheelGroup.stop().animate(
            { transform: 'r360,500,500'},
            6000,
            function(){
                pinwheelGroup.attr({ transform: 'rotate(0 500 500)'});
                rotatePinwheel();
            }
        );
    }
}

// Pythagorean Tree

var pythTreeCanvas = Snap("#pyth-tree");

pythTreeCanvas.rect(450, 450, 100, 100).attr({fill: "#70932c"});
    pythTreeCanvas.rect(
        450,
        450 - .5 * Math.sqrt(2) * 100,
        .5 * Math.sqrt(2) * 100,
        .5 * Math.sqrt(2) * 100
    ).attr({fill: "#70932c", transform: 'r-45, 450, 450'});
        pythTreeCanvas.rect(
            450 - .5 * Math.sqrt(2) * Math.sqrt(2) * 100,
            450 - .5 * Math.sqrt(2) * Math.sqrt(2) * 100,
            .5 *.5 * Math.sqrt(2) * Math.sqrt(2) * 100,
            .5 *.5 * Math.sqrt(2) * Math.sqrt(2) * 100
        ).attr({fill: "#70932c"});
        pythTreeCanvas.rect(
            450 - .25 * Math.sqrt(2) * Math.sqrt(2) * 100,
            450 - .75 * Math.sqrt(2) * Math.sqrt(2) * 100,
            .5 * .5 * Math.sqrt(2) * Math.sqrt(2) * 100,
            .5 * .5 * Math.sqrt(2) * Math.sqrt(2) * 100
        ).attr({fill: "#70932c"});

    pythTreeCanvas.rect(
        450 + 100 - .5 * Math.sqrt(2) * 100,
        450 - .5 * Math.sqrt(2) * 100,
        .5 * Math.sqrt(2) * 100,
        .5 * Math.sqrt(2) * 100
    ).attr({fill: "#70932c", transform: 'r45, 550, 450'});
        pythTreeCanvas.rect(
            450 + 100,
            450 - .75 * Math.sqrt(2) * Math.sqrt(2) * 100,
            .5 *.5 * Math.sqrt(2) * Math.sqrt(2) * 100,
            .5 *.5 * Math.sqrt(2) * Math.sqrt(2) * 100
        ).attr({fill: "#70932c"});
        pythTreeCanvas.rect(
            450 + 100 + .5 *.5 * Math.sqrt(2) * Math.sqrt(2) * 100,
            450 - .5 * Math.sqrt(2) * Math.sqrt(2) * 100,
            .5 *.5 * Math.sqrt(2) * Math.sqrt(2) * 100,
            .5 *.5 * Math.sqrt(2) * Math.sqrt(2) * 100
        ).attr({fill: "#70932c"});


/*
generateSquares(3, 100, 0, 450, 450, 0, 0, "#000");

function generateSquares(n, size, angle, x, y, rotateX, rotateY, color) {
    if (n === 0) {
    }
    else {
        pythTreeCanvas.rect(x, y, size, size).attr({
            fill: color,
            transform: 'r' + angle + ',' + rotateX + ',' + rotateY
        });
        generateSquares(
            n - 1,
            .5 * Math.sqrt(2) * size,
            -45 + angle,
            x,
            y - .5 * Math.sqrt(2) * size,
            x,
            y,
            color
        );
        generateSquares(
            n - 1,
            .5 * Math.sqrt(2) * size,
            45 + angle,
            x + size - .5 * Math.sqrt(2) * size,
            y - .5 * Math.sqrt(2) * size,
            x + size,
            y,
            color
        );
    }
}*/

// One45 Background

var one45Background = Snap('#one45-background');
Snap.load("images/one45-background.svg", loadBackground);

function loadBackground ( image ) {
    one45Background.append( image );

    var wave1 = Snap.select("#background-wave-1");
    var wave2 = Snap.select("#background-wave-2");
    moveWave1();
    moveWave2();

    function moveWave1(){
        wave1.animate({ transform: 't20,40'}, 1000, mina.easeInOutQuad, function(){
                wave1.animate({ transform: 't0,0'}, 1250, mina.easeInOutQuad, function() {
                        moveWave1()
                    }
                )
            }
        );
    }

    function moveWave2(){
        wave2.animate(
            { transform: 't-20,40'}, 750, mina.easeInOutQuad, function(){
                wave2.animate({ transform: 't0,0'}, 1000, mina.easeInOutQuad, function() {
                        moveWave2()
                    }
                )
            }
        );
    }
}