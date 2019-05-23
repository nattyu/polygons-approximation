var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

function draw() {
    var cx = canvas.width / 2;
    var cy = canvas.height / 2;
    var r = 180;
    var pi = Math.PI;
    var tx = document.getElementById("textBox1").value;
    var n = parseInt(tx);
    var c = 360;

    var xx1 = new Array(n);
    var line_color1 = new Array(n);

    for (i = 0; i < xx1.length; i++) {
        xx1[i] = new Array(2);
        xx1[i][0] = r * Math.cos(2 * i * pi / n - pi / 2) + cx;
        xx1[i][1] = r * Math.sin(2 * i * pi / n - pi / 2) + cy;

        line_color1[i] = "#0000ff";
    };

    context.clearRect(0, 0, canvas.width, canvas.height);
    context.beginPath();
    context.lineWidth = 5;

    for (i = 0; i < xx1.length; i++) {
        context.strokeStyle = line_color1[i];

        j = (i + 1) % xx1.length;

        context.lineTo(xx1[i][0], xx1[i][1]);
        context.lineTo(xx1[j][0], xx1[j][1]);
        context.stroke();
    };

    var xx2 = new Array(n);
    var line_color2 = new Array(n);

    for (i = 0; i < xx2.length; i++) {
        xx2[i] = new Array(2);
        xx2[i][0] = (r / Math.cos(pi / n)) * Math.cos(2 * i * pi / n - pi / 2) + cx;
        xx2[i][1] = (r / Math.cos(pi / n)) * Math.sin(2 * i * pi / n - pi / 2) + cy;

        line_color2[i] = "#008000";
    };

    context.beginPath();
    context.lineWidth = 5;

    for (i = 0; i < xx2.length; i++) {
        context.strokeStyle = line_color2[i];

        j = (i + 1) % xx2.length;

        context.lineTo(xx2[i][0], xx2[i][1]);
        context.lineTo(xx2[j][0], xx2[j][1]);
        context.stroke();
    };

    var circle = new Array(c);
    var line_color3 = new Array(c);

    for (i = 0; i < circle.length; i++) {
        circle[i] = new Array(2);
        circle[i][0] = r * Math.cos(2 * i * pi / c - pi / 2) + cx;
        circle[i][1] = r * Math.sin(2 * i * pi / c - pi / 2) + cy;

        line_color3[i] = "#ff0000";
    };

    context.beginPath();
    context.lineWidth = 5;

    for (i = 0; i < circle.length; i++) {
        context.strokeStyle = line_color3[i];

        j = (i + 1) % circle.length;

        context.lineTo(circle[i][0], circle[i][1]);
        context.lineTo(circle[j][0], circle[j][1]);
        context.stroke();
    };
    
    var innerLength = document.getElementById("value1");
    var circleLength = document.getElementById("value2");
    var outerLength = document.getElementById("value3");

    innerLength.innerHTML = "円に内接する多角形の周の長さ :　"　+ n * Math.sin(pi / n);
    circleLength.innerHTML = "中の円の周の長さ :　" + pi;
    outerLength.innerHTML = "円に外接する多角形の周の長さ :　"　+ n * Math.tan(pi / n);
};
