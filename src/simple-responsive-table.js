function height(){
	$('div.srt-row').each(function(){
		height = 0;
		$(this).find('div.srt-col').each(function(){
			$(this).css('height','auto');
			this_height = $(this).height();
			if(this_height > height){
				height = this_height;
			}
		});
		$(this).find('div.srt-col').css('height',height + 20);
	});
}

$(document).ready(function(){
	$('table').each(function(){
		table_index = $(this).index();
		$(this).parent().append('<div class="simple-responsive-table srt-'+table_index+'"></div>');
		$(this).find('tr').each(function(){
			$('div.simple-responsive-table.srt-'+table_index+'').append('<div class="srt-row"></div>');
			index = $(this).index();
			count = $(this).find('td,th').length;
			if(count % 2 == 0){
				$(this).find('th').each(function(){
					text = $(this).text();
					$('div.simple-responsive-table.srt-'+table_index+' div.srt-row').each(function(){
						if($(this).index() == index){
							$(this).append('<div class="srt-col srt-col-'+12/count+'">'+text+'</div>');
						}
					});
				});	
				$(this).find('td').each(function(){
					text = $(this).text();
					td_index = $(this).index();
					$('div.simple-responsive-table.srt-'+table_index+' div.srt-row:first-child div.srt-col').each(function(){
						if($(this).index() == td_index){
							th_text = $(this).text();
						}
					});
					$('div.simple-responsive-table.srt-'+table_index+' div.srt-row').each(function(){
						if($(this).index() == index){
							$(this).append('<div class="srt-col-hidden">'+th_text+'</div><div class="srt-col srt-col-'+12/count+'">'+text+'</div>');
						}
					});
				});	
			}else{
				$(this).find('th').each(function(){
					text = $(this).text();
					$('div.simple-responsive-table.srt-'+table_index+' div.srt-row').each(function(){
						if($(this).index() == index){
							$(this).append('<div class="srt-col srt-col-'+(12 - 12 % count)/count+'">'+text+'</div>');
						}
					});
				});	
				$(this).find('td').each(function(){
					text = $(this).text();
					td_index = $(this).index();
					$('div.simple-responsive-table.srt-'+table_index+' div.srt-row:first-child div.srt-col').each(function(){
						if($(this).index() == td_index){
							th_text = $(this).text();
						}
					});
					$('div.simple-responsive-table.srt-'+table_index+' div.srt-row').each(function(){
						if($(this).index() == index){
							$(this).append('<div class="srt-col-hidden">'+th_text+'</div><div class="srt-col srt-col-'+(12 - 12 % count)/count+'">'+text+'</div>');
						}
					});
				});
				$('div.simple-responsive-table.srt-'+table_index+'').find('div.srt-row').each(function(){
					number = 12 % count;
					count2 = (12 - 12 % count)/count;
					$(this).find('div').each(function(){
						if(number > 0){
							$(this).removeClass('srt-col-'+count2);
							$(this).addClass('srt-col-'+(count2 + 1));
							number -= 1;
						}
					});
				});
			}
		});
		$(this).remove();
	});
	height();
});


$(window).resize(function(){
	$('div.srt-row').each(function(){
		height = 0;
		$(this).find('div.srt-col').each(function(){
			$(this).css('height','auto');
			this_height = $(this).height();
			if(this_height > height){
				height = this_height;
			}
		});
		$(this).find('div.srt-col').css('height',height + 20);
	});
});
