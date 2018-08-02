/* scripts for my site */

$(document).ready(function(){

	$("img").hide();
	$(".specialImage").fadeIn("slow");


// create a variable (outside of function)
	let imgCycle = 1;
	
	
	$(".specialImage").click(function(){
//		$(this).css("background-color", "purple");
//		$(this).attr("src", "pictures/18.jpg");
	
		if(imgCycle < 20) {
			$(this).attr("src","pictures/"+imgCycle+".jpg");
			imgCycle++;
		} else {
			$(this).attr("src","pictures/"+imgCycle+".jpg");
			imgCycle = 1;
		}
		
	});


	$(".specialImage").hover(function(){
		$(this).attr("src","pictures/22.jpg");
	});

	$(".imgAdder").click(function(){
		$(".end").append("<img src='pictures/8.jpg'>");
	});

})