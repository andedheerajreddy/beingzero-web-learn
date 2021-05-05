$(() => {
    $('input[name="redval"]').val('0');
    $('input[name="greeval"]').val('0');
    $('input[name="blueval"]').val('0');
    $(".fillcolour").css("background-color", `rgb(${$('input[name="redval"]').val()},${  $('input[name="greeval"]').val()},${ $('input[name="blueval"]').val()})`)

    $(".fillrgbval").html(`rgb(${$('input[name="redval"]').val()},${  $('input[name="greeval"]').val()},${ $('input[name="blueval"]').val()})`)
    $(".fillrgbval").css("color", `rgb(${255-$('input[name="redval"]').val()},${ 255- $('input[name="greeval"]').val()},${255- $('input[name="blueval"]').val()})`)

    $("input").change(function() {
        $(".fillrgbval").css("color", `rgb(${255-$('input[name="redval"]').val()},${ 255- $('input[name="greeval"]').val()},${255- $('input[name="blueval"]').val()})`)

        $(".displayredval").html($('input[name="redval"]').val())
        $(".displaygreenval").html($('input[name="greeval"]').val())
        $(".displayblueval").html($('input[name="blueval"]').val())
        $(".fillrgbval").html(`rgb(${$('input[name="redval"]').val()},${  $('input[name="greeval"]').val()},${ $('input[name="blueval"]').val()})`)
        $(".fillcolour").css("background-color", `rgb(${$('input[name="redval"]').val()},${  $('input[name="greeval"]').val()},${ $('input[name="blueval"]').val()})`)
    });
})