$(document).ready(function(){
	$('a').click(function(){
		$('div.none').html($('.textarea').val());
		$('div.none table').each(function(){
			$('div.none2').append('<div class="table"></div>');
			$(this).find('tr').each(function(){
				$('div.table').append('<div class="row"></div>');
				index = $(this).index();
				count = $(this).find('td,th').length;
				if(count % 2 == 0){
					$(this).find('td,th').each(function(){
						text = $(this).text();
						$('div.table div.row').each(function(){
							if($(this).index() == index){
								$(this).append('<div class="col-md-'+12/count+'">'+text+'</div>');
							}
						});
					});	
				}else{
					$(this).find('td,th').each(function(){
						text = $(this).text();
						$('div.table div.row').each(function(){
							if($(this).index() == index){
								$(this).append('<div class="col-md-'+(12 - 12 % count)/count+'">'+text+'</div>');
							}
						});
					});
					$('div.table').find('div.row').each(function(){
						number = 12 % count;
						count2 = (12 - 12 % count)/count;
						$(this).find('div').each(function(){
							if(number > 0){
								$(this).removeClass('col-md-'+count2);
								$(this).addClass('col-md-'+(count2 + 1));
								number -= 1;
							}
						});
					});
				}
			});
			$('.textarea2').val($('div.none2').html());
		});
	});
});