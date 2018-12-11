function getCals(){
	var foodData = {
		"Борщ красный"   : 200,
		"Борщ зеленый"   : 190,
		"Бульен куриный" : 150, 
		"Гречневая каша" : 137,
		"Картошка"       : 112,
		"Рис"            : 96,
		"Чай"            : 45,
		"Кофе"           : 70,
		"Компот"         : 65
	},

		dish1  		= $("#dish1").val(),
		weight1 	= $("#weight1").val(),
		dish2 		= $("#dish2").val(),
		weight2 	= $("#weight2").val(),
		dish3 		= $("#dish3").val(),
		weight3 	= $("#weight3").val(),
		result 		= $("#result"),
		cals        = 0;

	;
	
	cals += (foodData[dish1] * weight1 / 100) + (foodData[dish2] * weight2 / 100) + (foodData[dish3] * weight3 / 100);

		$("#result").val(Math.round(cals));	
		console.log($("#result").val());
		console.log($("foodData[dish1]"));
}

btn   = $("#btn")
$("#btn").click(getCals); 




