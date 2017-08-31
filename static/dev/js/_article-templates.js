var systemCardTemplate = 
        '<div itemscope itemtype="http://schema.org/NewsArticle"  id="Article{{articleId}}"  class="{{containerClass}} swap" data-id="{{articleId}}" data-position="{{position}}" data-social="0" data-article-image="{{imageUrl}}" data-article-text="{{title}}">'+
            '<div class="card__view-content channels__1">'+
                '<a itemprop="url" href="{{url}}">'+
                    '<meta itemscope itemprop="mainEntityOfPage"  itemType="https://schema.org/WebPage" itemid="{{url}}"/>'+
                    '{{#if hasMedia}}  '+
                        '<div itemprop="image" itemscope itemtype="https://schema.org/ImageObject">'+
                            '<meta itemprop="url" content="{{featuredMedia.media.url}}"/>'+
                            '<meta itemprop="width" content="{{featuredMedia.media.width}}"/>'+
                            '<meta itemprop="height" content="{{featuredMedia.media.height}}"/>'+
                        '</div>'+
                    '{{/if}}'+
                    '{{#if publisher.url}}  '+
                        '<div itemprop="publisher" itemscope itemtype="https://schema.org/Organization">'+
                            '<meta itemprop="name" content="{{publisher.name}}"/>'+
                            '<div itemprop="logo" itemscope itemtype="https://schema.org/ImageObject">'+
                                '<meta itemprop="url" content="{{publisher.url}}"/>'+
                                '<meta itemprop="width" content="{{publisher.width}}"/>'+
                                '<meta itemprop="height" content="{{publisher.height}}"/>'+
                            '</div>'+
                        '</div>'+
                    '{{/if}}'+
                    '<meta itemprop="datePublished" content="{{metaPublishDate}}"/>'+
                    '<meta itemprop="dateModified" content="{{metaUpdateDate}}"/>'+  
                    '<meta  itemprop="description" content="{{excerpt}}"/>'+
                    '<div itemprop="author" itemscope itemtype="https://schema.org/Person">'+
                        '<meta itemprop="name" content="{{createdBy.displayName}}"/>'+
                    '</div>'+
                    '<div class="social-icons"></div>'+
                    '<figure class="image-covered" style="background-image: url(\'{{imageUrl}}\');">'+
                    '<div class="social-play"></div>'+
                    '{{#if userHasBlogAccess}}'+
                        '<div class="optionSet">'+
                            '<ul>'+
                                '<li class="HideBlogArticle" data-guid="{{guid}}" data-social="0">Hide <i class="fa fa-eye-slash"></i></li>'+
                                '<li class="PinArticleBtn {{pinCls}}" data-position="{{position}}" data-social="0" data-id="{{articleId}}" title="{{pinTitle}}" data-status="{{isPinned}}">{{pinTxt}} <i class="fa fa-map-marker"></i></li>'+
                                '<li class = "editArticle" onclick="window.location=\'{{{editUrl}}}\'; return false;">Edit <i class="fa fa-cog"></i></li>'+
                            '</ul>'+
                        '</div>'+
                    '{{/if}}'+
                    '</figure>'+
                   ' <h3 itemprop="headline">{{trimString title 50}}</h3>'+
               '</a>'+
            '</div>'+
        '</div>';

var socialCardTemplate = 
        '<div id="Social{{socialId}}" class="{{containerClass}} swap social {{social.media.type}} {{social.source}}"   data-source="{{social.source}}"  data-id="{{socialId}}" data-label="{{social.blog.title}}" data-position="{{position}}" data-social="1" data-article-image="{{social.media.path}}" data-article-text="{{social.content}}" data-user-image="{{social.user.media.path}}" data-user-name="{{ social.user.name }}">'+
            '<div class="card__view-content channels__1">'+
                '<a class="socialCard" href="{{social.url}}" data-blog-guid="{{social.blog.guid}}" data-guid="{{social.guid}}">'+
                   '<div class="social-icons"></div>'+
                   '<figure class="image-covered" style="background-image: url(\'{{socialMedia}}\');">'+
                    '<div class="social-play"></div>'+
                    '{{#if userHasBlogAccess}}'+
                        '<div class="optionSet">'+
                            '<ul>'+
                                '<li class="HideBlogArticle" data-guid="{{social.guid}}" data-social="1">Hide <i class="fa fa-eye-slash"></i></li>'+
                                '<li class="PinArticleBtn"data-position="{{position}}" data-social="1" data-id="{{socialId}}" title="{{pinTitle}}" data-status="{{isPinned}}">{{pinText}} <i class="fa fa-map-marker"></i></li>'+
                                '<li class = "editArticle" data-social="1" onClick="window.open(\'/admin/social-funnel/update-social?guid={{social.blog.guid}}&socialguid={{social.guid}}\', \'_blank\', \'toolbar=yes,scrollbars=yes,resizable=yes,width=360,height=450\'); return false;">Edit <i class="fa fa-cog"></i></li>'+
                            '</ul>'+
                        '</div>'+
                    '{{/if}}'+
                    '</figure>'+
                   ' <h3 id="updateSocial{{socialId}}" data-update="0" data-length="50">{{trimString social.content 50}}</h3>'+
               '</a>'+
            '</div>'+
        '</div>';

   
var socialModalTemplate = 
        '<button type="button" class="close close__lg-modal" data-dismiss="modal" aria-label="Close">'+
        '<span aria-hidden="true">'+
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">'+
                    '<title>Close</title>'+
                    '<g stroke-width="3" fill-rule="evenodd" stroke-linecap="round">'+
                            '<path d="M17.803 2L2 17.803M2.08 2.08l15.803 15.803"/>'+
                    '</g>'+
            '</svg>'+
            '<div class="close__text">esc</div>'+
        '</span>'+
	'</button>'+
	'<div class="social-modal__content {{blog.title}} {{#unless hasMedia}} no_image {{/unless}}">'+
            '<button type="button" class="close close__sm-modal" data-dismiss="modal" aria-label="Close">'+
                    '<span aria-hidden="true">'+
                            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Close</title><g stroke="#FFF" stroke-width="3" fill="none" fill-rule="evenodd" stroke-linecap="round"><path d="M17.803 2L2 17.803M2.08 2.08l15.803 15.803"/></g></svg>'+
                    '</span>'+
            '</button>'+
            '<div class="social-modal__channel social-modal__channel--technology ">{{blog.title}}</div>'+
            '<div class="social-modal__overflow">'+
                    '<a href="{{url}}" target="_blank"><div class="social-modal__text">“<br>{{content}}</div></a>'+
            '</div>'+
            '<div class="article__profile">'+
                '<span class="profile__user_image" style="background-image: url(\'{{user.media.path}}\'); height: 56px; width: 56px; background-size: cover; display: inline-block; border-radius: 50%;" ></span>'+
                '<div class="profile__author_wrap">'+
                    '<span class="article__author">By {{user.name}}</span>'+
                    '<div class="profile__button-wrap" style="display:none">'+
                        '<div class="button button-sm button__share">Share  '+
                            '<div class="share-popup" style="left:0">'+
                                '<div class="share-popup__title-wrap">'+
                                    '<span class="share-popup__title">Share:</span>'+
                                    '<img class="share-popup__close" src="{{templatePath}}/static/images/icons/close-small.svg" alt="">'+
                                '</div>'+
                                '<input type="text" name="share-link" value="{{url}}" readonly class="share-popup__share-link share-link">'+
                                '<div class="share-popup__social-wrap">'+
                                    '<div class="social-icon_wrap--colored">'+
                                        '<a href="https://plus.google.com/share?url={{url}}" target="_blank"><i class="fa fa-google-plus"></i></a>'+
                                        '<a href="http://www.facebook.com/sharer/sharer.php?u={{url}}" target="_blank" ><i class="fa fa-facebook"></i></a>'+
                                        '<a href="http://twitter.com/intent/tweet?status={{url}}" target="_blank"><i class="fa fa-twitter"></i></a>'+
                                    '</div>'+
                                    '<span class="share-popup__copy-text">Copy Link</span>'+
                                '</div>'+
                            '</div>'+
                        '</div>'+
                    '</div>'+
                '</div>'+
            '</div>'+
	'</div>'+
	'{{#if hasMedia}}'+
            '<div class="social-modal__image_container">'+
                '<div class="social-modal__image_wrap">'+
                    '{{#if hasMediaVideo}}'+
                        '<div class="social-modal__video-wrap">'+
                            '<div>'+
                                    '<iframe src="{{media.videoUrl}}" frameborder="0" allowfullscreen></iframe>'+
                            '</div>'+
                        '</div>'+
                    '{{else}}'+
                        '<div class="social-modal__image" style="background-image: url(\'{{media.path}}\');" >'+
                            '<img class="social-modal__image_image" src="{{media.path}}" alt="" />'+
                        '</div>'+
                    '{{/if}}'+
                '</div>'+
            '</div>'+
	'{{/if}}';   