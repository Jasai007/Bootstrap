var carouselElement = document.getElementById("mycarousel");
        var carousel = new bootstrap.Carousel(carouselElement, {
  	    interval: 2000
        });

      

            var playing = true;
            var Button = document.getElementById('carouselButton');
            var icon=Button.querySelector('i');
           

            function pauseSlideshow(){
            icon.classList.remove('fa-pause');
            icon.classList.add('fa-play');
         
	        playing = false;
	        carousel.pause();
            }

            function playSlideshow(){
            icon.classList.remove('fa-play');
            icon.classList.add('fa-pause');
	       
	        playing = true;
            carousel.cycle();
            }

            Button.onclick = function(){
	        if(playing){ pauseSlideshow(); }
	        else{ playSlideshow(); }
            };

      //Login Modal      
            var loginBtn=document.getElementById('loginBtn');
            var loginClose=document.getElementById('loginClose');
            var loginCancel=document.getElementById('loginCancel');       
            var loginModal=new bootstrap.Modal(document.getElementById('loginModal'), {
                keyboard: false
              });

            loginBtn.addEventListener("click", openlogin);
            loginClose.addEventListener("click", closelogin);
            loginCancel.addEventListener("click", closelogin);

            function openlogin()
            {
                loginModal.toggle();
            }
            function closelogin()
            {
                loginModal.hide();
            }

        //Reserve Modal

        var reserveBtn=document.getElementById('reserveBtn');
        var reserveClose=document.getElementById('reserveClose');
        var reserveCancel=document.getElementById('reserveCancel');
        var reserveModal=new bootstrap.Modal(document.getElementById('reserveModal'), {
            keyboard: false
          });

        reserveBtn.addEventListener("click", openreserve);
        reserveClose.addEventListener("click", closereserve);
        reserveCancel.addEventListener("click", closereserve);

        function openreserve()
        {
            reserveModal.toggle();
        }
        function closereserve()
        {
            reserveModal.hide();
        }





            
           /* $(document).ready(function(){
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
            */