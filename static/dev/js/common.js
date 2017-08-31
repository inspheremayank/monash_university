$(function () {
    $("#contactForm").validate({
        rules: {
            name: "required",
            email: "required",
            phone: "required"
        },
        messages: {
            name: "",
            email: "",
            phone: ""
        },
        errorPlacement: function(error, element) {},
        submitHandler: function (form) {

            var btnObj = $('.formSubmitBtn');
            var formData = {};
            $.each($(form).serializeArray(), function () {
                formData[this.name] = this.value;
            });

            $.ajax({
                type: 'POST',
                url: _appJsConfig.appHostName + '/api/contact/send-email',
                dataType: 'json',
                data: formData,
                success: function (data, textStatus, jqXHR) {
                    if (data.success === 1) {
                        $('#responseMsg').html('<div class="alert alert-success alert-dismissible" role="alert" style="font-size:12px;"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">×</span></button>Your Inquiry has been successfully sent and we appreciate you contact with us we\'ll in touch soon.</div>');
                        $(form)[0].reset();
                    }
                },
                error: function (jqXHR, textStatus, errorThrown) {
                },
                beforeSend: function (jqXHR, settings) {
                    $(btnObj).html('Please wait..');
                    $(btnObj).prop('disabled', true);
                },
                complete: function (jqXHR, textStatus) {
                    $(btnObj).html('Inquire Now');
                    $(btnObj).prop('disabled', false);
                }
            });
            return false;
        }
    });
    
    
    $(document).on('click', '.button__share, .header_actions__share, .event-header__panel--share', function (e) {
        if ($('.button__share, .header_actions__share').hasClass('close-popup')) {
            $('.button__share, .header_actions__share').removeClass('close-popup');
            $('.share-popup').removeClass('active');
        } else {
            $('.share-popup').addClass('active');
            $('.button__share, .header_actions__share').addClass('close-popup')
            $(document).one('click', '.modal, .share-popup__close, .article, .blog, .social-modal__content, .modal-content, #content', '.channel', function (e) {
                $('.share-popup').removeClass('active');
                if (!$(e.target).hasClass('button__share') && !$(e.target).hasClass('header_actions__share')) {
                    $('.button__share, .header_actions__share').removeClass('close-popup');
                }
            });
        }
    });

    if ($('.button__share').length) {
        var widowWidth = $(window).width();
        var shareLeft = $('.button__share').offset().left;
        if ((widowWidth / 2) > shareLeft) {
            // Left
            $('.share-popup').css('right', '-212px');
        } else {
            // Right
            $('.share-popup').css('right', '0px');
        }
    }

    $(document).on('click', '.share-popup', function (e) {
        e.stopPropagation();
    });

    $(document).on("focus", '.share-link', function () {
        $(this).select();
    });
    $(document).on("mouseup", '.share-link', function (e) {
        e.preventDefault();
    });

    $(document).on("click", '.share-popup__copy-text', function (e) {
        var shareLinkBox = $('.share-popup__share-link');
        shareLinkBox.select();
        try {
            var successful = document.execCommand('copy');
            noty({
                type: "success",
                text: "Link copied successfully",
                layout: 'topRight',
                timeout: 2000,
                dismissQueue: true,
                animation: {
                    open: 'animated bounceInRight', // jQuery animate function property object
                    close: 'animated bounceOutRight', // jQuery animate function property object
                    easing: 'swing', // easing
                    speed: 500 // opening & closing animation speed
                }
            });
        } catch (err) {
            console.log('Oops, unable to copy');
        }
    });

});