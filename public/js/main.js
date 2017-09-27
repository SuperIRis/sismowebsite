(function(){
    $('.cssmenu li.active:first-child').addClass('open').find('.block-content').show();
        $('.cssmenu li.has-sub>a').on('click', function(){
            $(this).removeAttr('href');
            var element = $(this).parent('li');
            if (element.hasClass('open')) {
                element.removeClass('open');
                element.find('.block-content').slideUp(200);
            }
            else {
                element.addClass('open');
                element.children('.block-content').slideDown(200);
            }
        });
    
    })();
    