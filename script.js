$(document).ready(function(){


	$('.box-2').hide();
	$('#prev').css({"opacity":"0.3"});
	$('.option li:nth-child(2)').css({"font-size":"14pt","opacity":"0.3"});
	$('.option li:nth-child(1)').css({"text-align":"center"});
	$('.sell').animate({opacity:'0'},0);
	$('.sell').animate({right:'4vw'},10);

	function scroll_down()
	{
		$('html, body').animate({scrollTop: ($(window).height()*0.9)}, 800); 
		$('.bar').animate({opacity:'0'}); 
		$('.sell').animate({right:'3vw'},10); 
		$('.sell').animate({opacity:'0.8'});
	}

	function scroll_up()
	{
		 $('html, body').animate({scrollTop: 0}, 800); 
		 $('.bar').animate({opacity:'1'},1000); 
		 $('.sell').animate({opacity:'0'}); 
	}


	function changeToTwo()
	{
		$('.box-1').hide('slide', {direction: 'left'}, 500);
		$('.box-2').show('slide', {direction: 'right'}, 500);
		$('.option li:nth-child(1)').animate({fontSize:'14pt',opacity:'0.3'});
		$('.option li:nth-child(2)').animate({fontSize:'24',opacity:'1'});
		$('#next').animate({opacity:'0.3'});
		$('#prev').animate({opacity:'1'});
	}

	function changeToOne()
	{
		$('.box-2').hide('slide', {direction: 'right'}, 500);
		$('.box-1').show('slide', {direction: 'left'}, 500);
		$('.option li:nth-child(2)').animate({fontSize:'14pt',opacity:'0.3'});
		$('.option li:nth-child(1)').animate({fontSize:'24',opacity:'1'});
		$('#prev').animate({opacity:'0.3'});
		$('#next').animate({opacity:'1'});
	}

	$('#next').click(function(){
		changeToTwo();
	});
	$('.option li:nth-child(2)').click(function(){
		changeToTwo();
	});

	$('#prev').click(function(){
		changeToOne();
	});
	$('.option li:nth-child(1)').click(function(){
		changeToOne();
	});


	$(document).keydown(function(e) {
	    switch(e.which) {

	    	case 37: changeToOne();
	    	break;

	        case 38: scroll_up();
	        break;

	        case 39: changeToTwo(); 
	        break;

	        case 40: scroll_down();
	        break;

	        default: return; 
	    }
	    e.preventDefault(); 
	});

	$('.jumbo-bottom-fixed li:nth-child(1)').click(function(){
		scroll_up();
	});

	$('.sell').click(function(){
		location.href = "sell.html";
	});

	$('#about').click(function(){
		location.href = "about.html";
	});

	$('#jec').click(function(){
		location.href = "https://www.jecjabalpur.ac.in/";
	});

	$('.jumbo-bottom-fixed li:nth-child(2) , .jumbo-bottom li:nth-child(2)').click(function(){
		location.href = "how.html";
	});

	$('.jumbo-top li:nth-child(1), .button2').click(function(){
		$('.overlay').css({"visibility":"visible"});
		$('.login').css({"visibility":"visible"});
	});

	$('#close').click(function(){
		$('.overlay').css({"visibility":"hidden"});
		$('.login').css({"visibility":"hidden"});
		scroll_up();
	});

	$(".bar").click(function(){ scroll_down();});

	$(".button").click(function(){
		$('html, body').animate({scrollTop: ($(window).height()*0.9)}, 800); $('.bar').animate({opacity:'0'}); 
	$('.sell').animate({right:'3vw'},10);$('.sell').animate({opacity:'0.8'});
	});

	$(this).scroll(function(){
		if($(this).scrollTop() >($(document).height())*0.75/2) 
		{
			$('.jumbo-bottom-fixed').css({"visibility":"visible"});

		}
		if($(this).scrollTop() < ($(document).height())*0.75/2) 
		{
			$('.jumbo-bottom-fixed').css({"visibility":"hidden"});
		}
	});
	
	$('#o').on('click', function(event){     
   		 event.preventDefault();
    $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
	});

	$( "#dialog-link, #icons li" ).hover(
		function() {
			$( this ).addClass( "ui-state-hover" );
		},
		function() {
			$( this ).removeClass( "ui-state-hover" );
		}
	);
	var brnch = null;
	var ssem = null;

	function selectSub(brnch,sem)
	{


		if(brnch == "ce"||brnch == "mech"||brnch == "cse")
		{	
			if(sem==1){
				$('#subject').empty();
				$('#subject').append(new Option('Select Subject','null'));
				$('#subject').append(new Option('Engineering Physics','PH01'));
				$('#subject').append(new Option('Engineering Mathematics-1','MA01'));
				$('#subject').append(new Option('Basic Mechanical Engg.','ME01'));
				$('#subject').append(new Option('Basic Civil Engg.','CE09'));
				$('#subject').append(new Option('Basic Computer Prog.','CS03'));
			}
			if(sem==2)
			{
				$('#subject').empty();
				$('#subject').append(new Option('Select Subject','null'));
				$('#subject').append(new Option('Engineering Chemistry','CH01'));
				$('#subject').append(new Option('Engineering Mathematics-2','MA02'));
				$('#subject').append(new Option('Engg. Graphics','ME03'));
				$('#subject').append(new Option('Basic Elecrical & Electronics Engg','EE56'));
				$('#subject').append(new Option('Communication Skills','HS01'));
			}
		}

		if(brnch == "ip"||brnch == "it"||brnch == "ec"||brnch == "ee")
		{	
			if(sem==1)
			{
				$('#subject').empty();
				$('#subject').append(new Option('Select Subject','null'));
				$('#subject').append(new Option('Engineering Chemistry','CH01'));
				$('#subject').append(new Option('Engineering Mathematics-2','MA02'));
				$('#subject').append(new Option('Engg. Graphics','ME03'));
				$('#subject').append(new Option('Basic Elecrical & Electronics Engg','EE56'));
				$('#subject').append(new Option('Communication Skills','HS01'));
			}
			if(sem==2)
			{
				$('#subject').empty();
				$('#subject').append(new Option('Select Subject','null'));
				$('#subject').append(new Option('Engineering Physics','PH01'));
				$('#subject').append(new Option('Engineering Mathematics-1','MA01'));
				$('#subject').append(new Option('Basic Mechanical Engg.','ME01'));
				$('#subject').append(new Option('Basic Civil Engg.','CE09'));
				$('#subject').append(new Option('Basic Computer Prog.','CS03'));
			}
			
		}
		
		

		else if(brnch=="cse")
		{
			if(sem==3)
			{
				$('#subject').empty();
				$('#subject').append(new Option('Select Subject','null'));
				$('#subject').append(new Option('EEES','PH01'));
				$('#subject').append(new Option('Engineering Mathematics-3','MA03'));
				$('#subject').append(new Option('Data Structures','ME01'));
				$('#subject').append(new Option('Object Oriented Programming','CE09'));
				$('#subject').append(new Option('Electrical and Digital Circuits','CS03'));
			
			}
			if(sem==4)
			{
				$('#subject').empty();
				$('#subject').append(new Option('Select Subject','null'));
				$('#subject').append(new Option('Analysis and Design of Algorithms','PH01'));
				$('#subject').append(new Option('Discrete Structures','MA03'));
				$('#subject').append(new Option('Principles of Communication','ME01'));
				$('#subject').append(new Option('Database Management System','CE09'));
				$('#subject').append(new Option('Computer Architecture','CS03'));
			
			}
		}

		else
		{
			$('#subject').empty();
			$('#subject').append(new Option('Select Subject','null'));
		}
	}

	$('#branch').change(function(){
		brnch = $(document).find('#branch option:selected').val();
		selectSub(brnch,sem);
	});


	$('#sem').change(function(){
		sem = $(document).find('#sem option:selected').val();
		selectSub(brnch,sem);
	});

	var search;

	$('.search-button').click(function(){
		search = $('#search-box').val();

	});


	var logged=false;


	$('.sell').hover(function(){
		$('.sell').animate({opacity:'1'},100);
		$(this).animate({right:'4vw'});
		
	},function(){

		$('.sell').animate({opacity:'0.8'},100);
		$(this).animate({right:'3vw'});
	});





});