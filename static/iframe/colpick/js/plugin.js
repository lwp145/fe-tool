$(function(){
	$('#picker01').colpick({
		flat:true,
		// colorScheme:'dark',
		onChange:function(hsb,hex,rgb,el,bySetColor){
				// console.log(hasAttributes());
				console.log(hex);
				$("#hex_color").html("#"+hex);
				$("#rgb_color").html("rgb("+rgb["r"]+","+rgb["g"]+","+rgb["b"]+")");
				console.log(rgb);
				$(el).css('border-color','#'+hex);
				if(!bySetColor) $(el).val(hex);
		},
		onShow:function(rgb){
				console.log(rgb);
		}
	});
});