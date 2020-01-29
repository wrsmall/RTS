$(document).ready(function () {
    /* script for question one*/

    $("#sort").click(questionOneAns = () => {
        let numbers = $("#sortNumber").val().split(' ');
        let test = $("#testNumber").val();
        let numAbove = numbers.filter(number => parseInt(number) >= test);
        let numBellow = numbers.filter(number => parseInt(number) < test);
        $('#Above').html( `Numbers Above: ${numAbove.join(' ')}`);
        $('#Bellow').html(`Numbers Bellow: ${numBellow.join(' ')}`);
    });

    /*script for question 2 */
    $('#rotationNumber').change(questionTwoAns = () => {
        let rotation=$("#rotationNumber").val();
        let wordScramble = $("#rotationWord").val().split("");
        let length=$("#rotationNumber").length-1
        let ans= wordScramble.slice(length-rotation).concat(wordScramble.slice(0,length-rotation));
        $('#scrambled').html(ans);
    });

});
