var carouselElement = document.getElementById("mycarousel");
        var carousel = new bootstrap.Carousel(carouselElement, {
  	    interval: 2000
        });

        /*var carouselButton= document.getElementById("carouselButton");
          carouselButton.addEventListener("click", function() {                             
                carousel.pause();                                                    
              console.log(carousel);                                           
            }); */

            var playing = true;
            var Button = document.getElementById('carouselButton');
            const icon=Button.querySelector('i');
           

            function pauseSlideshow(){
            icon.classList.remove('fa-pause');
            icon.classList.add('fa-play')
            //Button.innerHTML = 'Play';
	        playing = false;
	        carousel.pause();
            }

            function playSlideshow(){
            icon.classList.remove('fa-play');
            icon.classList.add('fa-pause')
	        //Button.innerHTML = 'Pause';
	        playing = true;
            carousel.cycle();
            }

            Button.onclick = function(){
	        if(playing){ pauseSlideshow(); }
	        else{ playSlideshow(); }
            };

            
            
            $(document).ready(function(){
                $("#loginBtn").click(function(){
                $("#loginModal").modal("toggle");
                }); 
               
                $("#loginClose").click(function(){
                $("#loginModal").modal("hide");
                });

                $("#loginCancel").click(function(){
                $("#loginModal").modal("hide");
                });

                $("#reserveBtn").click(function(){
                $("#reserveModal").modal("toggle");
                });

                $("#reserveClose").click(function(){
                $("#reserveModal").modal("hide");
                });

                $("#reserveCancel").click(function(){
                $("#reserveModal").modal("hide");
                });
            });
