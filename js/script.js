var count1, count2, count3, count4, count5;
count1 = count2 = count3 = count4 = count5 = 0;

$("#catPics").hide();

$("#link1").click(function () {
    $("#catPics").show();
    $("#pic2").hide();
    $("#pic3").hide();
    $("#pic4").hide();
    $("#pic5").hide();
    $('#name').text('Cherry');
    $('#counter').text(count1);
    $("#pic1").show();
});

$("#link2").click(function () {
    $("#catPics").show();
    $("#pic1").hide();
    $("#pic3").hide();
    $("#pic4").hide();
    $("#pic5").hide();
    $('#name').text('Anabell');
    $('#counter').text(count2);
    $("#pic2").show();
});

$("#link3").click(function () {
    $("#catPics").show();
    $("#pic1").hide();
    $("#pic2").hide();
    $("#pic4").hide();
    $("#pic5").hide();
    $('#name').text('Fox');
    $('#counter').text(count3);
    $("#pic3").show();
});

$("#link4").click(function () {
    $("#catPics").show();
    $("#pic1").hide();
    $("#pic2").hide();
    $("#pic3").hide();
    $("#pic5").hide();
    $('#name').text('Goobs');
    $('#counter').text(count4);
    $("#pic4").show();
});

$("#link5").click(function () {
    $("#catPics").show();
    $("#pic1").hide();
    $("#pic2").hide();
    $("#pic3").hide();
    $("#pic4").hide();
    $('#name').text('Wrinkles');
    $('#counter').text(count5);
    $("#pic5").show();
});

$('#pic1').click(function (e) {
    count1 += 1;
    $('#counter').text(count1);
});

$('#pic2').click(function (e) {
    count2 += 1;
    $('#counter').text(count2);
});

$('#pic3').click(function (e) {
    count3 += 1;
    $('#counter').text(count3);
});

$('#pic4').click(function (e) {
    count4 += 1;
    $('#counter').text(count4);
});

$('#pic5').click(function (e) {
    count5 += 1;
    $('#counter').text(count5);
});
