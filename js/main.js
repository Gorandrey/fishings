

  $(function() {

      // reload tab-index
      
        const url = document.location.toString();
        if (url.match('#')) {
            $('.nav-tabs a[href="#' + url.split('#')[1] + '"]').tab('show');
            window.scrollTop = 0;
            if(url.split('#')[1] == 'video'){
              $('.footer .menu-link').addClass('active');
            }
        }  
      
      //open tab from menu
      $('.menu-link').on('click', function(){
        
        const hrf = $(this).attr('href');
      
        if (hrf.match('#')) {
            
            $('.nav-tabs a[href="#' + hrf.split('#')[1] + '"]').tab('show');
            $(this).closest('.left-menu').removeClass('nav-show');
            
        }
         
      })
      $('.nav-tabs a').on('shown.bs.tab', function (e) {
        console.log(e.target.href.split('#')[1]);
        // add active class on video
        if(url.split('#')[1] == 'video' && e.target.href.split('#')[1] == 'video' || e.target.href.split('#')[1] == 'video'){
              $('.footer .menu-link').addClass('active');
          }
            else{
              $('.footer .menu-link').removeClass('active');
            }
    });

  

  	//show menu

    $('.menu-icon').on('click', function() {
    	
      $(this).closest('.left-menu')
        .toggleClass('nav-show', 1000);
    });



	// video

	$('.play').on('click', function(e){
		e.preventDefault();
		const vid = $(this).prev()[0];

		if (vid.paused){
           vid.play();
           vid.controls = "controls";
           $(this).hide();
		}
        else{
            vid.pause()
        }
		
	});
	$('.video').on('click', function(e){
			e.preventDefault();
           $(this)[0].pause();
           $(this)[0].controls = null;
           $(this).next().show();
	
	});

  //close advertising
  $('.times-block').on('click', function(){
    $('.advertising').hide();
  });
    
  });
