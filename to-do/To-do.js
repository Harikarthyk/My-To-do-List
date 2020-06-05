$(document).ready(function() {
	var total = 0 ;
	var completed = 0;
	
	//on - keyup is used to check the button pressed : 
	$('.add').on('keyup',function(event){
		
		//to check if the enterd button is space 13 is used . 
		//( === ) is used to check whether it is of same object . 
		if( event.keyCode===13 ){

			var task = $('#task').val();
			$('#task').val('') ;
			if( task.length==0 )
				alert("Enter something..") ;
			else{
				total += 1 ;
				$('.display-active ul').append( '<li> <div class="text">'+task+'</div> <span><i class="fa fa-close"></i> </span></li>' ) ;
				
				$('#count-active').text((total-completed)) ;
				$('#count-completed').text( completed ) ;
			}
	
		}
		
	});
	
	//All the task which are not Completed .
	$('.active').click(function(){
		$('.active').css('background-color','powderblue') ;
		$('.completed').css('background-color','#efefef') ;
		$('.display-active').show();
		$('.display-completed').hide();
	});
	

	//All the completed Task .
	$('.completed').click(function(){
		$('.completed').css('background-color','powderblue') ;
		$('.active').css('background-color','#efefef') ;
		$('.display-active').hide();
		$('.display-completed').show();
	});
	

	//To remove the task from the list .
	$('ul').on("click" , "span" ,function(event){
		$(this).parent().css('background-color','#ff7979' ) ;
		$(this).parent().fadeOut(500,function(){
			$(this).remove();
			total =total- 1 ;	
		});
		// alert( total+" "+completed ) ;
		$('#count-active').text((total-completed)) ;
		$('#count-completed').text( completed ) ;
		event.stopPropogation();
		
	});

	//if completed append the task to completed tab .
    $(".display").on("click", ".display-active div.text"  , function(event){

        $(this).parent().css('background-color','#00ba66e0' ) ;
	    $(this).parent().fadeOut(500,function(){
		 	completed = completed + 1 ;
		 	var task= $(this).text() ;  
			$('.display-completed ul').append( '<li> <div class="text">'+task+'</div> <span><i class="fa fa-close"></i> </span></li>' ) ;	
		});
		$('#count-completed').text( completed ) ;
		$('#count-active').text((total-completed)) ;
		event.stopPropogation(); 
	
	});
 
 
});
