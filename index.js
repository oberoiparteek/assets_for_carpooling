var d = new Date();
var month = d.getMonth() + 1;
if (month < 10) {
    month = '0' + month;
}
var date = d.getDate();
if (date < 10) {
    date = '0' + date;
}
document.getElementById("journey-start-date").setAttribute("min", d.getFullYear() + '-' + (month) + '-' + date);

$(document).ready(function () {

    $('input[type=radio][name=trip_choice]').change(function () {
        $("#addresses").show(500);

        if (this.value == 'to') {


            $("#destination_info :input").attr("readonly", true);
            $("#d_address1").val("Nagarro Plot 17");
            $("#d_address2").val("Phase-4, Maruti Udyog, Sector 18, Gurugram");
            $("#d_sector").val("18");
            $("#d_inputCity").val("Gurugram");
            $("#d_pincode").val("122022");


            $("#source_info :input").attr("readonly", false);
            $("#source_info :input").val("");
        }
        else if (this.value == 'from') {
            $("#source_info :input").attr("readonly", true);
            $("#s_address1").val("Nagarro Plot 17");
            $("#s_address2").val("Phase-4, Maruti Udyog, Sector 18, Gurugram");
            $("#s_sector").val("18");
            $("#s_inputCity").val("Gurugram");
            $("#s_pincode").val("122022");
            $("#destination_info :input").attr("readonly", false);
            $("#destination_info :input").val("");
        }
    });
    $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
        var target = $(e.target)// activated tab
        if (target.attr('id') === 'requester-tab') {
            $("#jtime").hide(500);
            $("#type").val("requester");
        } else if (target.attr('id') === 'provider-tab') {
            $("#jtime").show(500);
            $("#type").val("provider");
        }
    });

    $("#form-main").submit(function (e) {
        e.preventDefault();
        $("#email").val(function() {
            return this.value + '@nagarro.com';
        });
        this.submit();
    });

});
