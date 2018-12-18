/*
 * Hello. 2 points.
 *
 * Write a function that draws "Hello, World!" on the canvas. You should
 * begin drawing at [10, 50], relative to the canvas, and your text should
 * be a 48px sans-serif font. Make sure the canvas is clear before drawing!
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Hello" button, your output should match that of the example.
 */

function sayHello() {
    let ctx = document.getElementById('canvas1').getContext('2d');
    ctx.clearRect(0, 0, document.getElementById('canvas1').width, document.getElementById('canvas1').height);
    ctx.font = "48px sans-serif";
    ctx.strokeText("Hello, World!", 10, 50);
}

/*
 * Rectangle. 3 points.
 *
 * Write a function that draws a rectangle on the canvas. You should prompt
 * the user for the height and width. You should also prompt the user for the
 * X- and Y-coordinates of the topleft corner of the rectangle.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Rectangle" button, your output should match that of the example.
 *
 * Certain values, such as heights and widths that are logically too small or
 * practically too large, should be prohibited. Check the example to see what
 * your code should do in these instances.
 *
 * Here is a list of prohibited values:
 *     - Width values less than 1
 *     - Height values less than 1
 *     - X- or Y- coordinates less than 5
 *     - Combinations of heights/widths and X-/Y-coordinates that would make
 *       it impossible to draw the rectangle within the bounds of the canvas
 */

function drawRectangle() {
    let ctx = document.getElementById('canvas2').getContext('2d');
    ctx.clearRect(0, 0, document.getElementById('canvas2').width, document.getElementById('canvas2').height);
    let height = Number(prompt("Enter a height"));
    while (typeof(height) != "number" || height < 1 || height > document.getElementById('canvas2').height) {
        height = Number(prompt("Enter a height"));
    }
    let width = Number(prompt("Enter a width."));
    while (typeof(width) != "number" || width < 1 || width > document.getElementById('canvas2').width) {
        width = Number(prompt("Enter a width."));
    }
    let x = Number(prompt("Enter an X value."));
    while (typeof(x) != "number" || x < 5 || x > document.getElementById('canvas2').width) {
        x = Number(prompt("Enter an X value."));
    }
    let y = Number(prompt("Enter a Y value."));
    while (typeof(y) != "number" || y < 5 || y > document.getElementById('canvas2').height) {
        y = Number(prompt("Enter a Y value."));
    }
    ctx.strokeRect(x, y, width, height);

}

/*
 * Color. 3 points.
 *
 * Write a function that draws a rectangle on the canvas. By default, the
 * rectangle will have a height and width of 50px and 100px, respectively. It
 * will be positioned at [10, 10] on the canvas. You'll need to prompt the
 * user to enter a color for the rectangle.
 *
 * Support the following colors:
 *     - black
 *     - blue
 *     - green
 *     - orange
 *     - purple
 *     - red
 *     - yellow
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Color" button, your output should match that of the example.
 *
 * Check the example to see what your code should do if the user enters an
 * unsupported color.
 */

function drawColoredRectangle() {

    let ctx = document.getElementById('canvas3').getContext('2d');
    ctx.clearRect(0, 0, document.getElementById('canvas3').width, document.getElementById('canvas3').height);
    let color = prompt("Enter a color for your rectangle.");
    while (color != "black" && color != "blue" && color != "green" && color != "orange" && color != "purple" && color != "red" && color != "yellow") {
        color = prompt("Enter a VALID color for your rectangle.");
    }
    ctx.fillStyle = color;
    ctx.fillRect(10, 10, 100, 50);
}

/*
 * Triangle. 5 points.
 *
 * Write a function that draws a right triangle on the canvas. The triangle
 * should be outlined only, not filled. You'll need to prompt the user for the
 * lengths of each of the sides. By default, position your triangle so that
 * its leftmost and topmost points have X- and Y-coordinates of 10.
 *
 * When drawing your right triangles, the left side shall be designated as the
 * first side and will be smallest of the three side lengths. The bottom side
 * shall be designated as the second side and will be second smallest of the
 * three side lengths. The hypotenuse shall be designated as the third side
 * and will be the largest of the three side lengths.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Triangle" button, your output should match that of the example.
 *
 * Certain values, such as side lengths that make it impossible to create a
 * valid right triangle, should be prohibited. Check the example to see what
 * your code should do in these instances.
 *
 * Here is a list of prohibited values:
 *     - Combinations of side lengths that would make it impossible to draw
 *       a valid triangle
 *     - Combinations of side lengths that would make it impossible to draw
 *       the triangle within the bounds of the canvas
 */

function drawTriangle() {
    let ctx = document.getElementById('canvas4').getContext('2d');
    ctx.clearRect(0, 0, document.getElementById('canvas4').width, document.getElementById('canvas4').height);

    let leftSide = -1;
    let bottomSide = -1;
    let hypotonuse = -1;

    while (hypotonuse**2 + bottomSide**2 - leftSide**2 != 0 && leftSide**2 + hypotonuse**2 - bottomSide**2 != 0 && leftSide**2 + bottomSide**2 - hypotonuse**2 != 0) {
        leftSide = Number(prompt("Enter a length for the frist side."));
        while (typeof(leftSide) != "number" || leftSide <= 0 || leftSide > document.getElementById('canvas4').height) {
            leftSide = Number(prompt("Enter a lenght for the first side."));
        }
        bottomSide = Number(prompt("Enter a length for the second side."));
        while (typeof(bottomSide) != "number" || bottomSide <= 0 || bottomSide > document.getElementById('canvas4').width) {
            bottomSide = Number(prompt("Enter a lenght for the second side."));
        }
        hypotonuse = Number(prompt("Enter a length for the third side."));
        while (typeof(hypotonuse) != "number" || hypotonuse <= 0) {
            hypotonuse = Number(prompt("Enter a lenght for the third side."));
        }
        if (hypotonuse**2 + bottomSide**2 - leftSide**2 != 0 && leftSide**2 + hypotonuse**2 - bottomSide**2 != 0 && leftSide**2 + bottomSide**2 - hypotonuse**2 != 0) {
            alert("That triangle is invalid");
        }
    }

    let leftSideDraw = Math.min(leftSide, bottomSide, hypotonuse);
    let bottomSideDraw = (Math.max(leftSide, bottomSide, hypotonuse)**2-Math.min(leftSide, bottomSide, hypotonuse)**2)**.5;

    ctx.beginPath();
    ctx.moveTo(10, 10);
    ctx.lineTo(10, 10 + leftSideDraw);
    ctx.lineTo(10 + bottomSideDraw, 10 + leftSideDraw);
    ctx.lineTo(10, 10)
    ctx.stroke();
}

/*
 * Smile. 7 points.
 *
 * Write a function that draws a smiley face on the canvas. The head should
 * be a perfect circle with a radius specified by the user. The eyes should
 * also be perfect circles with radii that are 10% of that of the head. The
 * radius of the mouth should be 70% of that of the head. A nose is not
 * required, and the position of the eyes and mouth are up to you (provided)
 * they are on the face.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Smile" button, your output should match that of the example.
 *
 * Certain values, such as radii that are logically too small or practically
 * too large, should be prohibited. Check the example to see what your code
 * should do in these instances.
 */

function drawSmileyFace() {
    let ctx = document.getElementById('canvas5').getContext('2d');
    ctx.clearRect(0, 0, document.getElementById('canvas5').width, document.getElementById('canvas5').height);
    
    let radius = Number(prompt('What is the radius of your smiley face.'));
    while (radius <= 0 || radius > 2*document.getElementById('canvas5').height) {
        radius = Number(prompt('Enter a radius that fits please.'));
    }
    ctx.beginPath();

    ctx.arc(.5*document.getElementById('canvas5').width, .5*document.getElementById('canvas5').height, radius, 0, 2*Math.PI);
    ctx.moveTo(.5*document.getElementById('canvas5').width - 0.7*radius, .5*document.getElementById('canvas5').height);
    ctx.arc(.5*document.getElementById('canvas5').width, .5*document.getElementById('canvas5').height, 0.7*radius, Math.PI, 2*Math.PI, true);
    ctx.moveTo(.5*document.getElementById('canvas5').width + 0.6*radius, .5*document.getElementById('canvas5').height - 0.5*radius);
    ctx.arc(.5*document.getElementById('canvas5').width + 0.5*radius, .5*document.getElementById('canvas5').height - 0.5*radius, 0.1 *radius, 0, 2*Math.PI);
    ctx.moveTo(.5*document.getElementById('canvas5').width - 0.4*radius, .5*document.getElementById('canvas5').height - 0.5*radius);
    ctx.arc(.5*document.getElementById('canvas5').width - 0.5*radius, .5*document.getElementById('canvas5').height - 0.5*radius, 0.1 *radius, 0, 2*Math.PI);
    ctx.stroke();
    ctx.closePath();
}

/*
 * Star. 9 points.
 *
 * Write a function that draws a five-point star on the canvas. Prompt the
 * user for the outer radius (i.e., a circle that would connect each of the
 * star's outer points) and inner radius (i.e., a circle that would connect
 * each of the star's inner points). The center of the star should be placed
 * at [125, 125].
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Star" button, your output should match that of the example.
 *
 * Certain values, such as radii that are logically too small or practically
 * too large, should be prohibited. Check the example to see what your code
 * should do in these instances.
 */

function drawStar() {

    let ctx = document.getElementById('canvas6').getContext('2d');
    ctx.clearRect(0, 0, document.getElementById('canvas6').width, document.getElementById('canvas6').height);

    let outrad = Number(prompt("Enter the outer radius"));
    while (outrad <= 0 || outrad*2 > document.getElementById('canvas6').height) {
        outrad = Number(prompt("Outer radius does not meet canvas, please reenter."));
    }
    let inrad = Number(prompt("Enter the inner radius"));
    while (inrad <= 0 || inrad*2 > document.getElementById('canvas6').height) {
        inrad = Number(prompt("Inner radiues does not meet canvas, please reenter."));
    }
    let outradx = [];
    let outrady = [];
    let inradx = [];
    let inrady = [];

    for (let i=0; i<5; i++) {
        outradx.push(125 + outrad * (Math.cos(Math.PI*i*2/5 - Math.PI/2)));
        outrady.push(125 + outrad * (Math.sin(Math.PI*i*2/5 - Math.PI/2)));
        inradx.push(125 + inrad * (Math.cos(Math.PI*i*2/5 + Math.PI/5 - Math.PI/2)));
        inrady.push(125 + inrad * (Math.sin(Math.PI*i*2/5 + Math.PI/5 - Math.PI/2)));
    }


    ctx.beginPath();
    ctx.moveTo(outradx[0], outrady[0])
    ctx.lineTo(inradx[0], inrady[0]);
    ctx.lineTo(outradx[1], outrady[1])
    ctx.lineTo(inradx[1], inrady[1]);
    ctx.lineTo(outradx[2], outrady[2])
    ctx.lineTo(inradx[2], inrady[2]);
    ctx.lineTo(outradx[3], outrady[3])
    ctx.lineTo(inradx[3], inrady[3]);
    ctx.lineTo(outradx[4], outrady[4])
    ctx.lineTo(inradx[4], inrady[4]);
    ctx.closePath();
    ctx.stroke();
} 

/*
 * Stop Sign. 7 points.
 *
 * Write a function that draws a stop sign. The stop sign should be outlined
 * in black, but filled red. At the center of the stop sign, the same height
 * as the length of the sides, should be the word STOP (all capitals, white).
 * Each side length should be 80px.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Stop Sign" button, your output should match that of the example.
 *
 * The leftmost and topmost sides should have X- and Y-coordinates of 10.
 */

function drawStopSign() {
    let ctx = document.getElementById('canvas7').getContext('2d');
    ctx.clearRect(0, 0, document.getElementById('canvas7').width, document.getElementById('canvas7').height);

    ctx.beginPath();
    ctx.moveTo(56.5685424949, 0);
    ctx.lineTo(56.5685424949 + 80, 0);
    ctx.lineTo(2*56.5685424949 + 80, 56.5685424949);
    ctx.lineTo(2*56.5685424949 + 80, 56.5685424949 + 80);
    ctx.lineTo(56.5685424949 + 80, 2*56.5685424949 + 80);
    ctx.lineTo(56.5685424949, 2*56.5685424949 + 80);
    ctx.lineTo(0, 56.5685424949 + 80);
    ctx.lineTo(0, 56.5685424949);
    ctx.lineTo(56.5685424949, 0);
    ctx.stroke();
    ctx.fillStyle = 'red';
    ctx.fill();
    ctx.closePath();
    ctx.font = '65px Verdana'
    ctx.fillStyle = 'white';
    ctx.fillText("STOP", 10, 56.5685424949 + 64);
}

/*
 * Pyramid. 7 points.
 *
 * Write a function that draws a block pyramid, where the user specifies the
 * side length of each block. By default, we'll draw a pyramid with a base
 * of five blocks. Give the leftmost point of the pyramid an X-coordinates of
 * 10. Give the bottom of the pyramid a Y-coordinate of 10 less than the
 * height of the canvas.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Pyramid" button, your output should match that of the example.
 *
 * Certain values, such as lengths that are logically too small or practically
 * too large, should be prohibited. Check the example to see what your code
 * should do in these instances.
 */

function drawPyramid() {
    let ctx = document.getElementById('canvas8').getContext('2d');
    ctx.clearRect(0, 0, document.getElementById('canvas8').width, document.getElementById('canvas8').height);
    let length = Number(prompt("Enter the lenght for the sides of each block."));
    while (length <= 0 || length*5 > document.getElementById('canvas8').height || typeof(length) != "number") {
        length = Number(prompt("That lenghth doesn't fit the canvas, enter a new one."));
    }
    let i = 5;
    let c = 0
    while (i > 0) {
        if (i == 5) {
            ctx.beginPath();
            ctx.moveTo(10, (document.getElementById('canvas8').height) - 10);
            ctx.lineTo(10 + 5*length, (document.getElementById('canvas8').height) - 10);
            ctx.stroke();
            ctx.closePath();
        }
        ctx.beginPath()
        ctx.moveTo(10 + .5*length*(c), (document.getElementById('canvas8').height) - 10 - length*(c));
        ctx.closePath();
        for (k = 1; k <= i; k++) {
            ctx.beginPath()
            ctx.lineTo(10 + .5*length*c + length*(k), (document.getElementById('canvas8').height) - 10 - length*(c));
            ctx.lineTo(10 + .5*length*c + length*k, (document.getElementById('canvas8').height) - 10 - length*(c+1));
            ctx.lineTo(10 + .5*length*c + length*(k-1), (document.getElementById('canvas8').height) - 10 - length*(c+1));
            ctx.lineTo(10 + .5*length*c + length*(k-1), (document.getElementById('canvas8').height) - 10 - length*(c));
            ctx.stroke();
            ctx.moveTo(10 + .5*length*(c) + length*(k), document.getElementById('canvas8').height - 10 - length*(c));
            ctx.closePath();
        }
        i--;
        c++;
    }
}


/*
 * House. 7 points.
 *
 * Write a function that draws a two-story house. The house should have a
 * rectangular frame, a front door, two square windows on the first floor,
 * two square windows on the second floor, and a triangular roof. Your house
 * and front door should be painted a solid color of the user's choice (these
 * colors should be different). The windows should be light blue, and the roof
 * should be gray. Give the leftmost point of your house an X-coordinate of
 * 150, and the bottom of your house a Y-coordinate of 10 less than the
 * height of the canvas.
 *
 * Support the following front door and/or house colors:
 *     - blue
 *     - brown
 *     - green
 *     - orange
 *     - purple
 *     - red
 *     - yellow
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "House" button, your output should match that of the example.
 *
 * Check the example to see what your code should do if the user enters an
 * unsupported color.
 */

function drawHouse() {
    let ctx = document.getElementById('canvas9').getContext('2d');
    ctx.clearRect(0, 0, document.getElementById('canvas9').width, document.getElementById('canvas9').height);

    let houseColor = prompt("House Color:");
    while (houseColor != "black" && houseColor != "blue" && houseColor != "green" && houseColor != "orange" && houseColor != "purple" && houseColor != "red" && houseColor != "yellow") {
        houseColor = prompt("Color not supported enter new color:");
    }
    let doorColor = prompt("door Color:");
    while (doorColor != "black" && doorColor != "blue" && doorColor != "green" && doorColor != "orange" && doorColor != "purple" && doorColor != "red" && doorColor != "yellow") {
        doorColor = prompt("Color not supported enter new color:");
    }

    ctx.fillStyle = houseColor;
    ctx.fillRect(150, document.getElementById('canvas9').height - 410, 600, 400);
    ctx.strokeRect(150, document.getElementById('canvas9').height - 410, 600, 400);
    ctx.fillStyle = doorColor;
    ctx.fillRect(400, document.getElementById('canvas9').height - 210, 100, 200);
    ctx.strokeRect(400, document.getElementById('canvas9').height - 210, 100, 200);
    ctx.fillStyle = "yellow";
    ctx.beginPath();
    ctx.moveTo(480, document.getElementById('canvas9').height - 130);
    ctx.arc(480, document.getElementById('canvas9').height - 130, 10, 0, 2*Math.PI);
    ctx.stroke();
    ctx.fill();
    ctx.closePath();


    ctx.fillStyle = "#add8e6";
    ctx.fillRect(240, document.getElementById('canvas9').height - 170, 80, 80);
    ctx.strokeRect(240, document.getElementById('canvas9').height - 170, 80, 80);

    ctx.fillRect(580, document.getElementById('canvas9').height - 170, 80, 80);
    ctx.strokeRect(580, document.getElementById('canvas9').height - 170, 80, 80);

    ctx.fillRect(240, document.getElementById('canvas9').height - 320, 80, 80);
    ctx.strokeRect(240, document.getElementById('canvas9').height - 320, 80, 80);

    ctx.fillRect(580, document.getElementById('canvas9').height - 320, 80, 80);
    ctx.strokeRect(580, document.getElementById('canvas9').height - 320, 80, 80);

    ctx.beginPath();
    ctx.moveTo(150, document.getElementById('canvas9').height - 410)
    ctx.lineTo(450, document.getElementById('canvas9').height - 560)
    ctx.lineTo(750, document.getElementById('canvas9').height - 410)
    ctx.stroke();
    ctx.fillStyle = "gray";
    ctx.fill();
}
