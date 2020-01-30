$(document).ready(function () {
    /* script for question one*/
    $("#testNumber").prop("disabled", true);
    
    $('#sortNumber').keyup(startTest = () => {
        if (!$('#sortNumber.val()')) {
            $("#testNumber").prop("disabled", true);
        } else {
            $('#testNumber').prop('disabled', false);
        };
    });

    $("#testNumber").keyup(questionOneAns = () => {
        let numbers = $("#sortNumber").val().split(' ');
        let test = $("#testNumber").val();
        let numAbove = numbers.filter(number => parseInt(number) >= test);
        let numBellow = numbers.filter(number => parseInt(number) < test);
        $('#Above').html(`Numbers Above: ${numAbove.length}`);
        $('#Bellow').html(`Numbers Bellow: ${numBellow.length}`);
    });

    /*script for question 2 */
    $('#rotationNumber').change(questionTwoAns = () => {
        let rotation = $("#rotationNumber").val();
        let wordScramble = $("#rotationWord").val().split("");
        let length = $("#rotationNumber").length - 1
        let ans = wordScramble.slice(length - rotation).concat(wordScramble.slice(0, length - rotation));
        $('#scrambled').html(ans);
    });
    /* If the user decides to change the rotation*/
    $('#rotationWord').keyup(instantUpdate = () => {
        questionTwoAns()
    });
    /*if user decided to change cutoff number*/
    $('#testNumber').keyup(reSort = () => {
        questionOneAns()
    });
    /*If the user decides to add a number to array*/
    $('#sortNumber').keyup(newNum = () => {
        questionOneAns()
    });

});
