

  $(function() {

      // reload tab-index
      
        const url = document.location.toString();
        if (url.match('#')) {
            $('.nav-tabs a[href="#' + url.split('#')[1] + '"]').tab('show');
            
        }  
      
      //open tab from menu
      $('.menu-link').on('click', function(){
        
        const hrf = $(this).attr('href');
      
        if (hrf.match('#')) {
            
            $('.nav-tabs a[href="#' + hrf.split('#')[1] + '"]').tab('show');
            $(this).closest('.left-menu').removeClass('nav-show');
            
        }
         
      })
      
      //save hash after reload

    //   $('.nav-tabs a').on('shown.bs.tab', function (e) {
    //     window.location = url.split('#')[0]+e.target.hash;
    // }); 
      
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

    
    
  });
