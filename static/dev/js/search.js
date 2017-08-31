var SearchController = (function ($) {
    return {
        listing: function () {
            SearchController.Listing.init();
        },
        performSearch: function() {
            var url = new URL(document.location);
            var c = url.searchParams.get("s");
            return c;
        }
    };
}(jQuery));

SearchController.Listing = (function ($) {

    var attachEvents = function () {
        
        $("#searchForm").validate({
            rules: {s: "required"},
            messages: {s: ""},
            errorPlacement: function (error, element) {},
            submitHandler: function (form) {
                var selected = "";
                var propertyType = $('#property_type :selected').val();
                if (propertyType !== "") {
                    selected = " property_type:" + propertyType;
                }
                var shootType = $('#shoot_type :selected').val();
                if (shootType !== "") {
                    selected += " shoot_type:" + shootType;
                }
                var search = $('#textSearchBox').val();
                
                window.location = encodeURI('/search?s=' +search + selected);
            }
        });
        
        $('#property_type').on('change', function (e) {
            var propertyType = $(this).val();
            var search = SearchController.performSearch();
            if (search !== null) {
                var res = search.match("property_type");
                if (res === null) {
                    window.location = encodeURI('/search?s=' + search + " " + "property_type:" + propertyType);
                } else {
                    var url = '';
                    url = search.replace('private', propertyType);
                    url = url.replace('commercial', propertyType);
                    url = url.replace('international', propertyType);
                    window.location = encodeURI('/search?s=' + url);
                }
            } else {
                window.location = encodeURI('/search?s=' + "property_type:" + propertyType);
            } 
        });
        
        $('#shoot_type').on('change', function (e) {
            var shoolType = $(this).val();
            var search = SearchController.performSearch();
            if (search !== null) {
                var res = search.match("shoot_type");
                if (res === null) {
                    window.location = encodeURI('/search?s=' + search + " " + "shoot_type:" + shoolType);
                } else {
                    var url = '';
                    url = search.replace('film', shoolType);
                    url = url.replace('photography', shoolType);
                    url = url.replace('video', shoolType);
                    url = url.replace('events', shoolType);
                    url = url.replace('productions', shoolType);
                    window.location = encodeURI('/search?s=' + url);
                }
            }
            else {
               window.location = encodeURI('/search?s=' + "shoot_type:" + shoolType); 
            }  
        });
        
         $('.loadMoreArticles').on('click', function(e){
            e.preventDefault();
            var btnObj = $(this);
            $.fn.loadSearchArticles({
                'search': SearchController.performSearch(),
                onSuccess: function(data, textStatus, jqXHR){
                      if (data.success == 1) {
                        for (var i in data.articles) {
                            
                            data.articles[i]['containerClass'] = 'col-12 col-md-6 col-lg-3';
                            data.articles[i]['templatePath'] = _appJsConfig.templatePath;
                            
                            var ImageUrl = $.fn.image({media:data.articles[i]['featuredMedia'], mediaOptions:{width: 570 ,height:470, crop: 'limit'} });
                            if(typeof ImageUrl === "undefined" || ImageUrl === null) {
                                 ImageUrl = _appJsConfig.templatePath +'/static/images/placeholder.png';
                            }
                            data.articles[i]['imageUrl'] = ImageUrl;
                            
                            Handlebars.registerHelper('trimString', function (passedString, len) {
                                var theString = passedString.substring(0, len);

                                if (passedString.length > len) {
                                    theString += '...';
                                }
                                return new Handlebars.SafeString(theString)
                            });
                           
                            var articleTemplate = Handlebars.compile(systemCardTemplate);

                            var article = articleTemplate(data.articles[i]);
                            $('.ajaxArticles').append(article);
                        }
                        if(data.articles.length < 20) {
                            $(btnObj).css('display', 'none');
                        }  
                    } 
                },
                beforeSend: function(jqXHR, settings){
                    $(btnObj).html("Please wait...");
                },
                onComplete: function(jqXHR, textStatus){
                    $(btnObj).html("Load More");
                }
            });
        });
        
    };
    return {
        init: function () {
            attachEvents();
        }
    };

}(jQuery));