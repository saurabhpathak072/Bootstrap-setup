function  hideReservationmodal(){
                    $('#reserveTableModal').hide();
                }
            function  hideLoginmodal(){
                    $('#loginModal').hide();
                }
            $(document).ready(function () {
                $('#mycarousel').carousel({
                    interval: 2000
                });
                $('#caroselButtons').click(function () {
                    if ($('#caroselButtons').children('span').hasClass('fa-pause')) {
                        $('#mycarousel').carousel('pause');
                        $('#caroselButtons').children('span').removeClass('fa-pause')
                        $('#caroselButtons').children('span').addClass('fa-play')
                    } else if ($('#caroselButtons').children('span').hasClass('fa-play')) {
                        $('#mycarousel').carousel('cycle');
                        $('#caroselButtons').children('span').removeClass('fa-play')
                        $('#caroselButtons').children('span').addClass('fa-pause')
                    }
                });

                $('#signin-button').click(function () {
                    console.log('login');
                    $('#loginModal').show();
                    $('#loginModal').css("background","rgba(0,0,0,0.7)");
                })
                $('#reservetable-open').click(function () {
                    console.log('login');
                    $('#reserveTableModal').show();
                    $('#reserveTableModal').css("background","rgba(0,0,0,0.7)");
                })
                $('#signin-close').click(function () {
                   
                    $('#loginModal').hide();
                })
                $('#reservetable-close').click(function () {
                   
                    $('#reserveTableModal').hide();
                })

                
                


            })