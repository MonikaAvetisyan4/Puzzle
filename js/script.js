$(function(){
            let bool=false;
			let corectArr=[11,14,13,12,15,10,9,8,7,6,5,4,3,2,1,0]
			let rows = 4;
			let columns = 4;
			let pieces='';
			let arr=[];
			let timer=240;
			let time;
    	
    		  $( ".puzzleContainer" ).sortable();
    		  $( ".puzzleContainer" ).disableSelection();

			// This is for timer html
				$('.timer').html(timer)		
				 time=setInterval(function(){
	                 timer--;
					$('.timer').html(timer)
				},1000)

		   //This for loop- for postitioning peace of images background
			for(let i = 0,top=-300; i < columns; i++,top+=100){
				
				for(let j = 0,left=-300; j < rows; j++,left+=100){
					//creating every peace and giving it positioning we divide background iage into pieces
				    pieces +="<div class='piece'style='background-position:"+left +"px "+top+"px;'></div>";
				}

			}
			$('.puzzleContainer').html(pieces);

			//This each loop -for giving data id every peace of image
				  $.each($('.piece'), function (i, piece) {
				    let dataId = $(piece).attr('data-id',i); 
				    let id = $(piece).data('id'); 
				    
				 });
    		

                   //mainInterval for checking after seconds win or lost
	            let mainInter= setTimeout(function(){

					 let arr=[]
				 	 $.each($('.piece'), function (i, piece) {
							    let id = $(piece).data('id'); 
							    arr.push(id);
							 });
				 	 for(let i=0;i<corectArr.length;i++){
				 	 	if(arr[i]==corectArr[i]){
				 	 	  bool=true;

				 	 	}else{
				 	 		bool=false
				 	 	}	
				 	 }

				 	   if(bool ==true){
				 	   		clearInterval(mainInter)
							clearInterval(time)
				 	   		stars();
				 	   }else{
				 	   	console.log(lose)
				 	   }
             		},240000)
            //Finish button click =if you finish it runnner than it is suppose to be clicking fi ish we are chekicnh again
	            
			$('.finish').on('click', function(){
				let arr=[]
				 	 $.each($('.piece'), function (i, piece) {
							    let id = $(piece).data('id'); 
							    arr.push(id);
							 });
				 	 for(let i=0;i<corectArr.length;i++){
				 	 	if(arr[i]==corectArr[i]){
				 	 	  bool=true;

				 	 	}else{
				 	 		bool=false
				 	 	}	
				 	 }

				 	   if(bool ==true){
				 	   		stars();
				 	   		clearInterval(mainInter)
							clearInterval(time);
							// setTimeout(function(){
							// 	location.reload()
							// },5000)
				 	   }else{
				 	   		let lose
				 	   	  lose= $('<div class="lose" ><h1>Lose!</h1><h3>You can try again!</h3></div>');
				 	   	  $(".puzzleContainer").append(lose);
				 	   	  clearInterval(mainInter)
							clearInterval(time)	
					 	   
				 	   }
			})
			$('.start').on('click', function(){
                    location.reload();
			})
		})

//This function for jumping stars
function stars(){
	
					  	var tl = new TimelineMax(),
					    screenH = window.innerHeight,
					    star = document.getElementById('star'),
					    starAnimation = document.getElementById('starAnimation');

						for (var i=0; i < 1000; i++) {
						  var newStar = star.cloneNode(true);
						  var xPos = Math.random()*80-40;
						  var rotate = Math.random()*1440-720;
						  starAnimation.appendChild(newStar);
						  tl.fromTo(newStar, 0.5, 
						    {
						      opacity:0,
						      top:screenH,
						      rotation:rotate,
						      display:'block'
						    },
						    {
						      opacity:.9,
						      width:(Math.random()*5+3)+'%',
						      top:Math.random()*100,
						      ease:Power1.easeOut,
						      rotation:rotate/4,
						      display:'block',
						      left:(50+(xPos/2))+'%'
						    },i/20)
						    .to(newStar, 0.5, {
						      opacity:0,
						      rotation:0,
						      top:'80%',
						      left:(50+xPos)+'%',
						      ease:Power1.easeIn
						    },(i/20)+.45);
						}
					  
}
