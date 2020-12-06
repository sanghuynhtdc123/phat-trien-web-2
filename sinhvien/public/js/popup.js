// $(document).ready(function(){
// 	$('#send').click(function(){
// 		var mssv = $('#mssv').val();	
// 			$.post("http://localhost/phat-trien-web2/php-training/autocheck.php",{mssv},function (data) {
// 			})
// 	});
// })

$(document).ready(function() {
    $('#send').click(function(e) {
        var isValid = true;
        $('#mssv').each(function() {
            if ($.trim($(this).val()) == '') {
                isValid = false;
                document.getElementById("notification").innerHTML = "Please input MSSV !!";
            } else {
                var xhttp = new XMLHttpRequest();
                xhttp.open("GET", "http://localhost/phat-trien-web2/php-training/autocheck.php?mssv=" + $('#mssv').val(), true);
                xhttp.send();
                document.getElementById("notification").innerHTML = "Successfully";
                $("#notification").css({
                    "color": "green"
				});
					// $res_price = $conn -> query("UPDATE `attendance-student` set attendance = 5 WHERE mssv = "18211TT1489"");
					// $row_price = mysqli_fetch_assoc($res_price);

				
            }
        });
        if (isValid == false)
            e.preventDefault();
    });


});
