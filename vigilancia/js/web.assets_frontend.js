/* /web/static/src/js/services/session.js defined in bundle 'web.assets_frontend' */
odoo.define('web.session', function(require) {
    "use strict";
    var Session = require('web.Session');
    var modules = odoo._modules;
    var session = new Session(undefined, undefined, {
        modules: modules,
        use_cors: false
    });
    session.is_bound = session.session_bind();
    return session;
});;

/* /website/static/src/js/website.js defined in bundle 'web.assets_frontend' */
odoo.define('website.website', function(require) {
    "use strict";
    var ajax = require('web.ajax');
    var Dialog = require("web.Dialog");
    var core = require('web.core');
    var Widget = require('web.Widget');
    var session = require('web.session');
    var base = require('web_editor.base');
    var utils = require('web.utils');
    var qweb = core.qweb;
    var _t = core._t;
    base.url_translations = '/website/translations';
    var browser;
    if ($.browser.webkit) browser = "webkit";
    else if ($.browser.safari) browser = "safari";
    else if ($.browser.opera) browser = "opera";
    else if ($.browser.msie || ($.browser.mozilla && +$.browser.version.replace(/^([0-9]+\.[0-9]+).*/, '\$1') < 20)) browser = "msie";
    else if ($.browser.mozilla) browser = "mozilla";
    browser += "," + $.browser.version;
    if (/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent.toLowerCase())) browser += ",mobile";
    document.documentElement.setAttribute('data-browser', browser);
    var get_context = base.get_context;
    base.get_context = base.get_context = function(dict) {
        var html = document.documentElement;
        return _.extend({
            'website_id': html.getAttribute('data-website-id') | 0
        }, get_context(dict), dict);
    };
    var prompt = function(options, _qweb) {
        if (typeof options === 'string') {
            options = {
                text: options
            };
        }
        if (_.isUndefined(_qweb)) {
            _qweb = 'website.prompt';
        }
        options = _.extend({
            window_title: '',
            field_name: '',
            'default': '',
            init: function() {},
        }, options || {});
        var type = _.intersection(Object.keys(options), ['input', 'textarea', 'select']);
        type = type.length ? type[0] : 'input';
        options.field_type = type;
        options.field_name = options.field_name || options[type];
        var def = $.Deferred();
        var dialog = $(qweb.render(_qweb, options)).appendTo("body");
        options.$dialog = dialog;
        var field = dialog.find(options.field_type).first();
        field.val(options['default']);
        field.fillWith = function(data) {
            if (field.is('select')) {
                var select = field[0];
                data.forEach(function(item) {
                    select.options[select.options.length] = new Option(item[1], item[0]);
                });
            } else {
                field.val(data);
            }
        };
        var init = options.init(field, dialog);
        $.when(init).then(function(fill) {
            if (fill) {
                field.fillWith(fill);
            }
            dialog.modal('show');
            field.focus();
            dialog.on('click', '.btn-primary', function() {
                var backdrop = $('.modal-backdrop');
                def.resolve(field.val(), field, dialog);
                dialog.modal('hide').remove();
                backdrop.remove();
            });
        });
        dialog.on('hidden.bs.modal', function() {
            var backdrop = $('.modal-backdrop');
            def.reject();
            dialog.remove();
            backdrop.remove();
        });
        if (field.is('input[type="text"], select')) {
            field.keypress(function(e) {
                if (e.which == 13) {
                    e.preventDefault();
                    dialog.find('.btn-primary').trigger('click');
                }
            });
        }
        return def;
    };
    var error = function(title, message, url) {
        return new Dialog(null, {
            title: title || "",
            $content: $(qweb.render('website.error_dialog', {
                message: message || "",
                backend_url: url,
            })),
        }).open();
    };

    function _add_input(form, name, value) {
        var param = document.createElement('input');
        param.setAttribute('type', 'hidden');
        param.setAttribute('name', name);
        param.setAttribute('value', value);
        form.appendChild(param);
    }
    var form = function(url, method, params) {
        var form = document.createElement('form');
        form.setAttribute('action', url);
        form.setAttribute('method', method);
        if (core.csrf_token) {
            _add_input(form, 'csrf_token', core.csrf_token);
        }
        _.each(params, function(v, k) {
            _add_input(form, k, v);
        });
        document.body.appendChild(form);
        form.submit();
    };
    ajax.loadXML('/web/static/src/xml/base_common.xml', qweb).then(function() {
        ajax.loadXML('/website/static/src/xml/website.xml', qweb);
    });
    base.ready().then(function() {
        data.topBar = new TopBar();
        return data.topBar.attachTo($("#oe_main_menu_navbar"));
    });
    $(document).on('click', '.js_publish_management .js_publish_btn', function(e) {
        e.preventDefault();
        var $data = $(this).parents(".js_publish_management:first");
        ajax.jsonRpc($data.data('controller') || '/website/publish', 'call', {
            'id': +$data.data('id'),
            'object': $data.data('object')
        }).then(function(result) {
            $data.toggleClass("css_unpublished css_published");
            $data.parents("[data-publish]").attr("data-publish", +result ? 'on' : 'off');
        }).fail(function(err, data) {
            error(data.data ? data.data.arguments[0] : "", data.data ? data.data.arguments[1] : data.statusText, '/web#return_label=Website&model=' + $data.data('object') + '&id=' + $data.data('id'));
        });
    });
    if (!$('.js_change_lang').length) {
        var links = $('ul.js_language_selector li a:not([data-oe-id])');
        var m = $(_.min(links, function(l) {
            return $(l).attr('href').length;
        })).attr('href');
        links.each(function() {
            var t = $(this).attr('href');
            var l = (t === m) ? "default" : t.split('/')[1];
            $(this).data('lang', l).addClass('js_change_lang');
        });
    }
    $(document).on('click', '.js_change_lang', function(e) {
        e.preventDefault();
        var self = $(this);
        var redirect = {
            lang: self.data('lang'),
            url: encodeURIComponent(self.attr('href').replace(/[&?]edit_translations[^&?]+/, '')),
            hash: encodeURIComponent(location.hash)
        };
        location.href = _.str.sprintf("/website/lang/%(lang)s?r=%(url)s%(hash)s", redirect);
    });
    $('.js_kanban').each(function() {
        init_kanban(this);
    });
    $('body').on('submit', '.js_website_submit_form', function() {
        var $buttons = $(this).find('button[type="submit"], a.a-submit');
        _.each($buttons, function(btn) {
            $(btn).attr('data-loading-text', '<i class="fa fa-spinner fa-spin"></i> ' + $(btn).text()).button('loading');
        });
    });
    _.defer(function() {
        if (window.location.hash.indexOf("scrollTop=") > -1) {
            window.document.body.scrollTop = +location.hash.match(/scrollTop=([0-9]+)/)[1];
        }
    });
    $(".o_image[data-mimetype^='image']").each(function() {
        var $img = $(this);
        if (/gif|jpe|jpg|png/.test($img.data('mimetype')) && $img.data('src')) {
            $img.css('background-image', "url('" + $img.data('src') + "')");
        }
    });
    var lang = utils.get_cookie('website_lang') || $('html').attr('lang') || 'en_US';
    var localeDef = ajax.loadJS('/web/webclient/locale/' + lang.replace('-', '_'));
    var TopBar = Widget.extend({
        start: function() {
            var $collapse = this.$('#oe_applications ul.dropdown-menu').clone().attr("id", "oe_applications_collapse").attr("class", "nav navbar-nav navbar-left navbar-collapse collapse");
            this.$('#oe_applications').before($collapse);
            $collapse.wrap('<div class="visible-xs"/>');
            this.$('[data-target="#oe_applications"]').attr("data-target", "#oe_applications_collapse");
            var self = this;
            this.$el.on('mouseover', '> ul > li.dropdown:not(.open)', function(e) {
                var $opened = self.$('> ul > li.dropdown.open');
                if ($opened.length) {
                    $opened.removeClass('open');
                    $(e.currentTarget).find('.dropdown-toggle').mousedown().focus().mouseup().click();
                }
            });
            this.$el.on('click', '.o_mobile_menu_toggle', function(ev) {
                self.$el.parent().toggleClass('o_mobile_menu_opened');
            });
            return this._super.apply(this, arguments);
        }
    });
    $('.zoomable img[data-zoom]').zoomOdoo();
    Dialog.include({
        init: function() {
            this._super.apply(this, arguments);
            this.$modal.addClass("o_website_modal");
        },
    });
    var data = {
        prompt: prompt,
        error: error,
        form: form,
        TopBar: TopBar,
        ready: function() {
            console.warn("website.ready is deprecated: Please use require('web_editor.base').ready()");
            return base.ready();
        },
        localeDef: localeDef,
    };
    return data;
});;

/* /website/static/src/js/website.share.js defined in bundle 'web.assets_frontend' */
odoo.define('website.share', function(require) {
    "use strict";
    var ajax = require('web.ajax');
    var core = require('web.core');
    var Widget = require('web.Widget');
    var base = require('web_editor.base');
    var _t = core._t;
    var qweb = core.qweb;
    ajax.loadXML('/website/static/src/xml/website.share.xml', qweb);
    var SocialShare = Widget.extend({
        template: 'website.social_hover',
        init: function(parent) {
            this._super.apply(this, arguments);
            this.element = parent;
            if (parent.data('social')) {
                this.social_list = (parent.data('social')).split();
            } else {
                this.social_list = ['facebook', 'twitter', 'linkedin', 'google-plus'];
            }
            this.hashtags = parent.data('hashtags') || '';
            this.renderElement();
            this.bind_events();
        },
        bind_events: function() {
            $('.oe_social_facebook').click($.proxy(this.renderSocial, this, 'facebook'));
            $('.oe_social_twitter').click($.proxy(this.renderSocial, this, 'twitter'));
            $('.oe_social_linkedin').click($.proxy(this.renderSocial, this, 'linkedin'));
            $('.oe_social_google-plus').click($.proxy(this.renderSocial, this, 'google-plus'));
        },
        renderElement: function() {
            this.$el.append(qweb.render('website.social_hover', {
                medias: this.social_list
            }));
            this.element.popover({
                'content': this.$el.html(),
                'placement': 'bottom',
                'container': this.element,
                'html': true,
                'trigger': 'manual',
                'animation': false,
            }).popover("show").on("mouseleave", function() {
                var self = this;
                setTimeout(function() {
                    if (!$(".popover:hover").length) {
                        $(self).popover("destroy");
                    }
                }, 200);
            });
        },
        renderSocial: function(social) {
            var url = document.URL.split(/[?#]/)[0];
            var title = document.title.split(" | ")[0];
            var hashtags = ' #' + document.title.split(" | ")[1].replace(' ', '') + ' ' + this.hashtags;
            var social_network = {
                'facebook': 'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(url),
                'twitter': 'https://twitter.com/intent/tweet?original_referer=' + encodeURIComponent(url) + '&text=' + encodeURIComponent(title + hashtags + ' - ' + url),
                'linkedin': 'https://www.linkedin.com/shareArticle?mini=true&url=' + encodeURIComponent(url) + '&title=' + encodeURIComponent(title),
                'google-plus': 'https://plus.google.com/share?url=' + encodeURIComponent(url)
            };
            if (!_.contains(_.keys(social_network), social)) return;
            var window_height = 500,
                window_width = 500;
            window.open(social_network[social], '', 'menubar=no, toolbar=no, resizable=yes, scrollbar=yes, height=' + window_height + ',width=' + window_width);
        },
    });
    base.ready().done(function() {
        $('.oe_social_share').mouseenter(function() {
            new SocialShare($(this));
        });
    });
    return SocialShare;
});;

/* /website/static/src/js/website.snippets.animation.js defined in bundle 'web.assets_frontend' */
odoo.define('website.snippets.animation', function(require) {
    'use strict';
    var ajax = require('web.ajax');
    var core = require('web.core');
    var base = require('web_editor.base');
    var animation = require('web_editor.snippets.animation');
    var qweb = core.qweb;

    function load_called_template() {
        var ids_or_xml_ids = _.uniq($("[data-oe-call]").map(function() {
            return $(this).data('oe-call');
        }).get());
        if (ids_or_xml_ids.length) {
            ajax.jsonRpc('/website/multi_render', 'call', {
                'ids_or_xml_ids': ids_or_xml_ids
            }).then(function(data) {
                for (var k in data) {
                    var $data = $(data[k]).addClass('o_block_' + k);
                    $("[data-oe-call='" + k + "']").each(function() {
                        $(this).replaceWith($data.clone());
                    });
                }
            });
        }
    }
    base.ready().then(function() {
        load_called_template();
        if ($(".o_gallery:not(.oe_slideshow)").size()) {
            ajax.loadXML('/website/static/src/xml/website.gallery.xml', qweb);
        }
    });
    animation.registry.slider = animation.Class.extend({
        selector: ".carousel",
        start: function() {
            this.$target.carousel();
        },
        stop: function() {
            this.$target.carousel('pause');
            this.$target.removeData("bs.carousel");
        },
    });
    animation.registry.parallax = animation.Class.extend({
        selector: ".parallax",
        start: function() {
            _.defer((function() {
                this.set_values();
            }).bind(this));
            $(window).on("scroll.animation_parallax", _.throttle(this.on_scroll.bind(this), 10)).on("resize.animation_parallax", _.debounce(this.set_values.bind(this), 500));
            return this._super.apply(this, arguments);
        },
        stop: function() {
            $(window).off(".animation_parallax");
        },
        set_values: function() {
            var self = this;
            this.speed = parseFloat(self.$target.attr("data-scroll-background-ratio") || 0);
            this.offset = 0;
            if (this.speed === 1 || this.$target.css("background-image") === "none") {
                this.$target.css("background-attachment", "fixed").css("background-position", "0px 0px");
                return;
            }
            this.$target.css("background-attachment", "scroll");
            var img = new Image();
            img.onload = function() {
                var offset = 0;
                var padding = parseInt($(document.body).css("padding-top"));
                if (self.speed > 1) {
                    var inner_offset = -self.$target.outerHeight() + this.height / this.width * document.body.clientWidth;
                    var outer_offset = self.$target.offset().top - (document.body.clientHeight - self.$target.outerHeight()) - padding;
                    offset = -outer_offset * self.speed + inner_offset;
                } else {
                    offset = -self.$target.offset().top * self.speed;
                }
                self.offset = offset > 0 ? 0 : offset;
                self.on_scroll();
            };
            img.src = this.$target.css("background-image").replace(/url\(['"]*|['"]*\)/g, "");
        },
        on_scroll: function() {
            if (this.speed === 1) return;
            var top = this.offset + window.scrollY * this.speed;
            this.$target.css("background-position", "0px " + top + "px");
        },
    });
    animation.registry.share = animation.Class.extend({
        selector: ".oe_share",
        start: function() {
            var url_regex = /(\?(?:|.*&)(?:u|url|body)=)(.*?)(&|#|$)/;
            var title_regex = /(\?(?:|.*&)(?:title|text|subject)=)(.*?)(&|#|$)/;
            var url = encodeURIComponent(window.location.href);
            var title = encodeURIComponent($("title").text());
            this.$("a").each(function() {
                var $a = $(this);
                $a.attr("href", function(i, href) {
                    return href.replace(url_regex, function(match, a, b, c) {
                        return a + url + c;
                    }).replace(title_regex, function(match, a, b, c) {
                        return a + title + c;
                    });
                });
                if ($a.attr("target") && $a.attr("target").match(/_blank/i) && !$a.closest('.o_editable').length) {
                    $a.on('click', function() {
                        window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=550,width=600');
                        return false;
                    });
                }
            });
        }
    });
    animation.registry.media_video = animation.Class.extend({
        selector: ".media_iframe_video",
        start: function() {
            var def = this._super.apply(this, arguments);
            if (this.$target.children('iframe').length) {
                return def;
            }
            this.$target.empty();
            this.$target.append('<div class="css_editable_mode_display">&nbsp;</div>' + '<div class="media_iframe_video_size">&nbsp;</div>');
            this.$target.append($('<iframe/>', {
                src: _.escape(this.$target.data('oe-expression') || this.$target.data('src')),
                frameborder: '0',
                allowfullscreen: 'allowfullscreen',
                sandbox: 'allow-scripts allow-same-origin',
            }));
            return def;
        },
    });
    animation.registry.ul = animation.Class.extend({
        selector: "ul.o_ul_folded, ol.o_ul_folded",
        start: function(editable_mode) {
            this.$('.o_ul_toggle_self').off('click').on('click', function(event) {
                $(this).toggleClass('o_open');
                $(this).closest('li').find('ul,ol').toggleClass('o_close');
                event.preventDefault();
            });
            this.$('.o_ul_toggle_next').off('click').on('click', function(event) {
                $(this).toggleClass('o_open');
                $(this).closest('li').next().toggleClass('o_close');
                event.preventDefault();
            });
        },
    });
    animation.registry._fix_apple_collapse = animation.Class.extend({
        selector: ".s_faq_collapse [data-toggle='collapse']",
        start: function() {
            this.$target.off("click._fix_apple_collapse").on("click._fix_apple_collapse", function() {});
        },
    });
    animation.registry.gallery = animation.Class.extend({
        selector: ".o_gallery:not(.o_slideshow)",
        start: function() {
            var self = this;
            this.$el.on("click", "img", this.click_handler);
        },
        click_handler: function(event) {
            var self = this;
            var $cur = $(event.currentTarget);
            var edition_mode = ($cur.closest("[contenteditable='true']").size() !== 0);
            if (!edition_mode) {
                var urls = [],
                    idx = undefined,
                    milliseconds = undefined,
                    params = undefined,
                    $images = $cur.closest(".o_gallery").find("img"),
                    size = 0.8,
                    dimensions = {
                        min_width: Math.round(window.innerWidth * size * 0.9),
                        min_height: Math.round(window.innerHeight * size),
                        max_width: Math.round(window.innerWidth * size * 0.9),
                        max_height: Math.round(window.innerHeight * size),
                        width: Math.round(window.innerWidth * size * 0.9),
                        height: Math.round(window.innerHeight * size)
                    };
                $images.each(function() {
                    urls.push($(this).attr("src"));
                });
                var $img = ($cur.is("img") === true) ? $cur : $cur.closest("img");
                idx = urls.indexOf($img.attr("src"));
                milliseconds = $cur.closest(".o_gallery").data("interval") || false;
                var params = {
                    srcs: urls,
                    index: idx,
                    dim: dimensions,
                    interval: milliseconds,
                    id: _.uniqueId("slideshow_")
                };
                var $modal = $(qweb.render('website.gallery.slideshow.lightbox', params));
                $modal.modal({
                    keyboard: true,
                    backdrop: true
                });
                $modal.on('hidden.bs.modal', function() {
                    $(this).hide();
                    $(this).siblings().filter(".modal-backdrop").remove();
                    $(this).remove();
                });
                $modal.find(".modal-content, .modal-body.o_slideshow").css("height", "100%");
                $modal.appendTo(document.body);
                this.carousel = new animation.registry.gallery_slider($modal.find(".carousel").carousel());
            }
        }
    });
    animation.registry.gallery_slider = animation.Class.extend({
        selector: ".o_slideshow",
        start: function(editable_mode) {
            var self = this;
            this.$carousel = this.$target.is(".carousel") ? this.$target : this.$target.find(".carousel");
            this.$indicator = this.$carousel.find('.carousel-indicators');
            this.$prev = this.$indicator.find('li.fa:first').css('visibility', '');
            this.$next = this.$indicator.find('li.fa:last').css('visibility', '');
            var $lis = this.$indicator.find('li:not(.fa)');
            var nbPerPage = Math.floor(this.$indicator.width() / $lis.first().outerWidth(true)) - 3;
            var realNbPerPage = nbPerPage || 1;
            var nbPages = Math.ceil($lis.length / realNbPerPage);
            var index;
            var page;
            update();

            function hide() {
                $lis.each(function(i) {
                    $(this).toggleClass('hidden', !(i >= page * nbPerPage && i < (page + 1) * nbPerPage));
                });
                if (editable_mode) {
                    return;
                }
                if (page <= 0) {
                    self.$prev.detach();
                } else {
                    self.$prev.prependTo(self.$indicator);
                }
                if (page >= nbPages - 1) {
                    self.$next.detach();
                } else {
                    self.$next.appendTo(self.$indicator);
                }
            }

            function update() {
                index = $lis.index($lis.filter('.active')) || 0;
                page = Math.floor(index / realNbPerPage);
                hide();
            }
            this.$carousel.on('slide.bs.carousel.gallery_slider', function() {
                setTimeout(function() {
                    var $item = self.$carousel.find('.carousel-inner .prev, .carousel-inner .next');
                    var index = $item.index();
                    $lis.removeClass("active").filter('[data-slide-to="' + index + '"]').addClass("active");
                }, 0);
            });
            this.$indicator.on('click.gallery_slider', '> li.fa', function() {
                page += ($(this).hasClass('o_indicators_left') ? -1 : 1);
                page = Math.max(0, Math.min(nbPages - 1, page));
                self.$carousel.carousel(page * realNbPerPage);
                hide();
            });
            this.$carousel.on('slid.bs.carousel.gallery_slider', update);
        },
        stop: function() {
            this._super.apply(this, arguments);
            this.$prev.prependTo(this.$indicator);
            this.$next.appendTo(this.$indicator);
            this.$carousel.off('.gallery_slider');
            this.$indicator.off('.gallery_slider');
        },
    });
});;

/* /website/static/src/js/website.zoomodoo.js defined in bundle 'web.assets_frontend' */
(function($) {
    'use strict';
    var dw, dh, rw, rh, lx, ly;
    var defaults = {
        linkTag: 'a',
        linkAttribute: 'data-zoom-image',
        event: 'click',
        preventClicks: true,
        disabledOnMobile: true,
        beforeShow: $.noop,
        beforeHide: $.noop,
        onShow: $.noop,
        onHide: $.noop,
        onMove: $.noop
    };

    function ZoomOdoo(target, options) {
        this.$target = $(target);
        this.opts = $.extend({}, defaults, options, this.$target.data());
        if (this.isOpen === undefined) {
            this._init();
        }
    }
    ZoomOdoo.prototype._init = function() {
        if (window.outerWidth > 467 || !this.opts.disabledOnMobile) {
            this.$link = this.$target.find(this.opts.linkTag).length && this.$target.find(this.opts.linkTag) || this.$target;
            this.$image = this.$target.find('img').length && this.$target.find('img') || this.$target;
            this.$flyout = $('<div class="zoomodoo-flyout" />');
            var $attach = this.$target;
            if (this.opts.attach !== undefined && this.$target.parents(this.opts.attach).length) {
                $attach = this.$target.parents(this.opts.attach);
            }
            $attach.parent().on('mousemove.zoomodoo touchmove.zoomodoo', $.proxy(this._onMove, this));
            $attach.parent().on('mouseleave.zoomodoo touchend.zoomodoo', $.proxy(this._onLeave, this));
            this.$target.parent().on(this.opts.event + '.zoomodoo touchstart.zoomodoo', $.proxy(this._onEnter, this));
            if (this.opts.preventClicks) {
                this.$target.on('click.zoomodoo', function(e) {
                    e.preventDefault();
                });
            }
        }
    };
    ZoomOdoo.prototype.show = function(e, testMouseOver) {
        var w1, h1, w2, h2;
        var self = this;
        if (this.opts.beforeShow.call(this) === false) return;
        if (!this.isReady) {
            return this._loadImage(this.$link.attr(this.opts.linkAttribute), function() {
                if (self.isMouseOver || !testMouseOver) {
                    self.show(e);
                }
            });
        }
        var $attach = this.$target;
        if (this.opts.attach !== undefined && this.$target.parents(this.opts.attach).length) {
            $attach = this.$target.parents(this.opts.attach);
        }
        $attach.parent().append(this.$flyout);
        w1 = this.$target.width();
        h1 = this.$target.height();
        w2 = this.$flyout.width();
        h2 = this.$flyout.height();
        dw = this.$zoom.width() - w2;
        dh = this.$zoom.height() - h2;
        if (dw < 0) dw = 0;
        if (dh < 0) dh = 0;
        rw = dw / w1;
        rh = dh / h1;
        this.isOpen = true;
        this.opts.onShow.call(this);
        if (e) {
            this._move(e);
        }
    };
    ZoomOdoo.prototype._onEnter = function(e) {
        var touches = e.originalEvent.touches;
        this.isMouseOver = true;
        if (!touches || touches.length === 1) {
            e.preventDefault();
            this.show(e, true);
        }
    };
    ZoomOdoo.prototype._onMove = function(e) {
        if (!this.isOpen) return;
        e.preventDefault();
        this._move(e);
    };
    ZoomOdoo.prototype._onLeave = function() {
        this.isMouseOver = false;
        if (this.isOpen) {
            this.hide();
        }
    };
    ZoomOdoo.prototype._onLoad = function(e) {
        if (!e.currentTarget.width) return;
        this.isReady = true;
        this.$flyout.html(this.$zoom);
        if (e.data.call) {
            e.data();
        }
    };
    ZoomOdoo.prototype._loadImage = function(href, callback) {
        var zoom = new Image();
        this.$zoom = $(zoom).on('load', callback, $.proxy(this._onLoad, this));
        zoom.style.position = 'absolute';
        zoom.src = href;
    };
    ZoomOdoo.prototype._move = function(e) {
        if (e.type.indexOf('touch') === 0) {
            var touchlist = e.touches || e.originalEvent.touches;
            lx = touchlist[0].pageX;
            ly = touchlist[0].pageY;
        } else {
            lx = e.pageX || lx;
            ly = e.pageY || ly;
        }
        var offset = this.$target.offset();
        var pt = ly - offset.top;
        var pl = lx - offset.left;
        var xt = Math.ceil(pt * rh);
        var xl = Math.ceil(pl * rw);
        if (xl < 0 || xt < 0 || xl > dw || xt > dh) {
            this.hide();
        } else {
            var top = xt * -1;
            var left = xl * -1;
            this.$zoom.css({
                top: top,
                left: left
            });
            this.opts.onMove.call(this, top, left);
        }
    };
    ZoomOdoo.prototype.hide = function() {
        if (!this.isOpen) return;
        if (this.opts.beforeHide.call(this) === false) return;
        this.$flyout.detach();
        this.isOpen = false;
        this.opts.onHide.call(this);
    };
    $.fn.zoomOdoo = function(options) {
        return this.each(function() {
            var api = $.data(this, 'zoomOdoo');
            if (!api) {
                $.data(this, 'zoomOdoo', new ZoomOdoo(this, options));
            } else if (api.isOpen === undefined) {
                api._init();
            }
        });
    };
    if (typeof define === 'function' && define.amd) {
        define(function() {
            return ZoomOdoo;
        });
    } else if (typeof module !== 'undefined' && module.exports) {
        module.exports = ZoomOdoo;
    }
})(jQuery);;

/* /website_mail/static/src/js/follow.js defined in bundle 'web.assets_frontend' */
odoo.define('website_mail.follow', function(require) {
    'use strict';
    var ajax = require('web.ajax');
    var animation = require('web_editor.snippets.animation');
    animation.registry.follow = animation.Class.extend({
        selector: ".js_follow",
        start: function(editable_mode) {
            var self = this;
            this.is_user = false;
            ajax.jsonRpc('/website_mail/is_follower', 'call', {
                model: this.$target.data('object'),
                res_id: this.$target.data('id'),
            }).always(function(data) {
                self.is_user = data.is_user;
                self.email = data.email;
                self.toggle_subscription(data.is_follower, data.email);
                self.$target.removeClass("hidden");
            });
            if (!editable_mode) {
                $('.js_follow > .input-group-btn.hidden').removeClass("hidden");
                this.$target.find('.js_follow_btn, .js_unfollow_btn').on('click', function(event) {
                    event.preventDefault();
                    self.on_click();
                });
            }
            return;
        },
        on_click: function() {
            var self = this;
            var $email = this.$target.find(".js_follow_email");
            if ($email.length && !$email.val().match(/.+@.+/)) {
                this.$target.addClass('has-error');
                return false;
            }
            this.$target.removeClass('has-error');
            var email = $email.length ? $email.val() : false;
            if (email || this.is_user) {
                ajax.jsonRpc('/website_mail/follow', 'call', {
                    'id': +this.$target.data('id'),
                    'object': this.$target.data('object'),
                    'message_is_follower': this.$target.attr("data-follow") || "off",
                    'email': email,
                }).then(function(follow) {
                    self.toggle_subscription(follow, email);
                });
            }
        },
        toggle_subscription: function(follow, email) {
            follow = follow || (!email && this.$target.attr('data-unsubscribe'));
            if (follow) {
                this.$target.find(".js_follow_btn").addClass("hidden");
                this.$target.find(".js_unfollow_btn").removeClass("hidden");
            } else {
                this.$target.find(".js_follow_btn").removeClass("hidden");
                this.$target.find(".js_unfollow_btn").addClass("hidden");
            }
            this.$target.find('input.js_follow_email').val(email || "").attr("disabled", email && (follow || this.is_user) ? "disabled" : false);
            this.$target.attr("data-follow", follow ? 'on' : 'off');
        },
    });
});;

/* /website_mail/static/src/js/message_post.js defined in bundle 'web.assets_frontend' */
odoo.define('website_mail.thread', function(require) {
    'use strict';
    var web_editor_base = require('web_editor.base');
    var ajax = require('web.ajax');
    var core = require('web.core');
    var Widget = require('web.Widget');
    var qweb = core.qweb;
    ajax.loadXML('/website_mail/static/src/xml/chatter_message.xml', qweb);
    var WebsiteMailThread = Widget.extend({
        events: {
            "click .o_website_chatter_json": "on_click",
        },
        on_click: function(e) {
            var self = this;
            e.preventDefault();
            var $button = this.$(e.currentTarget);
            var $form = this.$('.o_website_chatter_form');
            var $error = this.$('.o_website_chatter_error');
            var action = $form.attr('action');
            var data = this._get_form_data($form);
            data.message = data.message.replace(/\n/g, "<br/>");
            if (data.message) {
                $button.attr('disabled', true);
                var button_bk = $button.html();
                $button.prepend('<i class="fa fa-refresh fa-spin"></i> ');
                ajax.jsonRpc(action, 'call', data).then(function(result) {
                    if (result) {
                        $error.fadeOut();
                        self.prepend_message(result);
                        $form.find('textarea').val('');
                    } else {
                        $error.fadeIn();
                    }
                    $button.html(button_bk);
                    $button.attr('disabled', false);
                });
            }
        },
        prepend_message: function(message_data) {
            var msg = qweb.render('website_mail.thread_message', message_data);
            var elem = $(msg).hide().prependTo(this.$('.o_website_comments'));
            elem.slideToggle();
            return elem;
        },
        _get_form_data: function($form) {
            var unindexed_array = $form.serializeArray();
            var indexed_array = {};
            $.map(unindexed_array, function(n, i) {
                indexed_array[n.name] = n.value;
            });
            return indexed_array;
        },
    });
    web_editor_base.ready().then(function() {
        if ($('.o_website_mail_thread').length) {
            var mail_thread = new WebsiteMailThread($('body')).setElement($('.o_website_mail_thread'));
        }
    });
    return {
        WebsiteMailThread: WebsiteMailThread,
    }
});;

/* /website_form/static/src/js/website_form.js defined in bundle 'web.assets_frontend' */
odoo.define('website_form.animation', function(require) {
    'use strict';
    var core = require('web.core');
    var time = require('web.time');
    var ajax = require('web.ajax');
    var snippet_animation = require('web_editor.snippets.animation');
    var _t = core._t;
    var qweb = core.qweb;
    snippet_animation.registry.form_builder_send = snippet_animation.Class.extend({
        selector: '.s_website_form',
        start: function(editable_mode) {
            if (editable_mode) {
                this.stop();
                return;
            }
            var self = this;
            this.templates_loaded = ajax.loadXML('/website_form/static/src/xml/website_form.xml', qweb);
            this.$target.find('.o_website_form_send').on('click', function(e) {
                self.send(e);
            });
            var l10n = _t.database.parameters;
            var datepickers_options = {
                startDate: moment({
                    y: 1900
                }),
                endDate: moment().add(200, "y"),
                calendarWeeks: true,
                icons: {
                    time: 'fa fa-clock-o',
                    date: 'fa fa-calendar',
                    up: 'fa fa-chevron-up',
                    down: 'fa fa-chevron-down'
                },
                language: moment.locale(),
                format: time.strftime_to_moment_format(l10n.date_format + ' ' + l10n.time_format),
            }
            this.$target.find('.o_website_form_datetime').datetimepicker(datepickers_options);
            datepickers_options.pickTime = false;
            datepickers_options.format = time.strftime_to_moment_format(l10n.date_format);
            this.$target.find('.o_website_form_date').datetimepicker(datepickers_options);
        },
        stop: function() {
            this.$target.find('button').off('click');
        },
        send: function(e) {
            e.preventDefault();
            this.$target.find('.o_website_form_send').off().addClass('disabled');
            var self = this;
            self.$target.find('#o_website_form_result').empty();
            if (!self.check_error_fields([])) {
                self.update_status('invalid');
                return false;
            }
            this.form_fields = this.$target.serializeArray();
            _.each(this.$target.find('input[type=file]'), function(input) {
                $.each($(input).prop('files'), function(index, file) {
                    self.form_fields.push({
                        name: input.name + '[' + index + ']',
                        value: file
                    });
                });
            });
            var form_values = {};
            _.each(this.form_fields, function(input) {
                if (input.name in form_values) {
                    if (Array.isArray(form_values[input.name])) {
                        form_values[input.name].push(input.value);
                    } else {
                        form_values[input.name] = [form_values[input.name], input.value];
                    }
                } else {
                    if (input.value != '') {
                        form_values[input.name] = input.value;
                    }
                }
            });
            for (var key in this.$target.data()) {
                if (_.str.startsWith(key, 'form_field_')) {
                    form_values[key.replace('form_field_', '')] = this.$target.data(key);
                }
            }
            ajax.post(this.$target.attr('action') + (this.$target.data('force_action') || this.$target.data('model_name')), form_values).then(function(result_data) {
                result_data = $.parseJSON(result_data);
                if (!result_data.id) {
                    self.update_status('error');
                    if (result_data.error_fields && result_data.error_fields.length) {
                        self.check_error_fields(result_data.error_fields);
                    }
                } else {
                    var success_page = self.$target.attr('data-success_page');
                    if (success_page) {
                        $(location).attr('href', success_page);
                    } else {
                        self.update_status('success');
                    }
                    self.$target[0].reset();
                }
            }).fail(function(result_data) {
                self.update_status('error');
            });
        },
        check_error_fields: function(error_fields) {
            var self = this;
            var form_valid = true;
            this.$target.find('.form-field').each(function(k, field) {
                var $field = $(field);
                var $fields = self.$fields;
                var field_name = $field.find('.control-label').attr('for')
                var field_valid = true;
                var inputs = $field.find('.o_website_form_input:not(#editable_select)');
                var invalid_inputs = inputs.toArray().filter(function(input, k, inputs) {
                    if (input.required && input.type == 'checkbox') {
                        var checkboxes = _.filter(inputs, function(input) {
                            return input.required && input.type == 'checkbox'
                        })
                        return !_.any(checkboxes, function(checkbox) {
                            return checkbox.checked
                        })
                    } else if ($(input).hasClass('o_website_form_date')) {
                        if (!self.is_datetime_valid(input.value, 'date')) {
                            return true;
                        }
                    } else if ($(input).hasClass('o_website_form_datetime')) {
                        if (!self.is_datetime_valid(input.value, 'datetime')) {
                            return true;
                        }
                    }
                    return !input.checkValidity();
                })
                $field.removeClass('has-error');
                if (invalid_inputs.length || error_fields.indexOf(field_name) >= 0) {
                    $field.addClass('has-error');
                    form_valid = false;
                }
            });
            return form_valid;
        },
        is_datetime_valid: function(value, type_of_date) {
            if (value === "") {
                return true;
            } else {
                try {
                    this.parse_date(value, type_of_date);
                    return true;
                } catch (e) {
                    return false;
                }
            }
        },
        parse_date: function(value, type_of_date, value_if_empty) {
            var date_pattern = time.strftime_to_moment_format(_t.database.parameters.date_format),
                time_pattern = time.strftime_to_moment_format(_t.database.parameters.time_format);
            var date_pattern_wo_zero = date_pattern.replace('MM', 'M').replace('DD', 'D'),
                time_pattern_wo_zero = time_pattern.replace('HH', 'H').replace('mm', 'm').replace('ss', 's');
            switch (type_of_date) {
                case 'datetime':
                    var datetime = moment(value, [date_pattern + ' ' + time_pattern, date_pattern_wo_zero + ' ' + time_pattern_wo_zero], true);
                    if (datetime.isValid())
                        return time.datetime_to_str(datetime.toDate());
                    throw new Error(_.str.sprintf(_t("'%s' is not a correct datetime"), value));
                case 'date':
                    var date = moment(value, [date_pattern, date_pattern_wo_zero], true);
                    if (date.isValid())
                        return time.date_to_str(date.toDate());
                    throw new Error(_.str.sprintf(_t("'%s' is not a correct date"), value));
            }
            return value;
        },
        update_status: function(status) {
            var self = this;
            if (status != 'success') {
                this.$target.find('.o_website_form_send').on('click', function(e) {
                    self.send(e);
                }).removeClass('disabled');
            }
            var $result = this.$('#o_website_form_result');
            this.templates_loaded.done(function() {
                $result.replaceWith(qweb.render("website_form.status_" + status));
            });
        },
    });
});;

/* /web/static/lib/bootstrap-datetimepicker/src/js/bootstrap-datetimepicker.js defined in bundle 'web.assets_frontend' */
;
(function(root, factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        define(['jquery', 'moment'], factory);
    } else {
        if (!jQuery) {
            throw new Error('bootstrap-datetimepicker requires jQuery to be loaded first');
        }
        if (!moment) {
            throw new Error('bootstrap-datetimepicker requires moment.js to be loaded first');
        }
        factory(root.jQuery, moment);
    }
}(this, function($, moment) {
    'use strict';
    if (typeof moment === 'undefined') {
        throw new Error('momentjs is required');
    }
    var dpgId = 0,
        DateTimePicker = function(element, options) {
            var defaults = $.fn.datetimepicker.defaults,
                icons = {
                    time: 'glyphicon glyphicon-time',
                    date: 'glyphicon glyphicon-calendar',
                    up: 'glyphicon glyphicon-chevron-up',
                    down: 'glyphicon glyphicon-chevron-down'
                },
                picker = this,
                dDate, init = function() {
                    var icon = false,
                        localeData, rInterval;
                    picker.options = $.extend({}, defaults, options);
                    picker.options.icons = $.extend({}, icons, picker.options.icons);
                    picker.element = $(element);
                    dataToOptions();
                    if (!(picker.options.pickTime || picker.options.pickDate)) {
                        throw new Error('Must choose at least one picker');
                    }
                    picker.id = dpgId++;
                    moment.locale(picker.options.language);
                    picker.date = moment();
                    picker.unset = false;
                    picker.isInput = picker.element.is('input');
                    picker.component = false;
                    if (picker.element.hasClass('input-group')) {
                        if (picker.element.find('.datepickerbutton').size() === 0) {
                            picker.component = picker.element.find('[class^="input-group-"]');
                        } else {
                            picker.component = picker.element.find('.datepickerbutton');
                        }
                    }
                    picker.format = picker.options.format;
                    localeData = moment().localeData();
                    if (!picker.format) {
                        picker.format = (picker.options.pickDate ? localeData.longDateFormat('L') : '');
                        if (picker.options.pickDate && picker.options.pickTime) {
                            picker.format += ' ';
                        }
                        picker.format += (picker.options.pickTime ? localeData.longDateFormat('LT') : '');
                        if (picker.options.useSeconds) {
                            if (localeData.longDateFormat('LT').indexOf(' A') !== -1) {
                                picker.format = picker.format.split(' A')[0] + ':ss A';
                            } else {
                                picker.format += ':ss';
                            }
                        }
                    }
                    picker.use24hours = picker.format.toLowerCase().indexOf('a') < 1;
                    if (picker.component) {
                        icon = picker.component.find('span');
                    }
                    if (picker.options.pickTime) {
                        if (icon) {
                            icon.addClass(picker.options.icons.time);
                        }
                    }
                    if (picker.options.pickDate) {
                        if (icon) {
                            icon.removeClass(picker.options.icons.time);
                            icon.addClass(picker.options.icons.date);
                        }
                    }
                    picker.options.widgetParent = typeof picker.options.widgetParent === 'string' && picker.options.widgetParent || picker.element.parents().filter(function() {
                        return 'scroll' === $(this).css('overflow-y');
                    }).get(0) || 'body';
                    picker.widget = $(getTemplate()).appendTo(picker.options.widgetParent);
                    picker.minViewMode = picker.options.minViewMode || 0;
                    if (typeof picker.minViewMode === 'string') {
                        switch (picker.minViewMode) {
                            case 'months':
                                picker.minViewMode = 1;
                                break;
                            case 'years':
                                picker.minViewMode = 2;
                                break;
                            default:
                                picker.minViewMode = 0;
                                break;
                        }
                    }
                    picker.viewMode = picker.options.viewMode || 0;
                    if (typeof picker.viewMode === 'string') {
                        switch (picker.viewMode) {
                            case 'months':
                                picker.viewMode = 1;
                                break;
                            case 'years':
                                picker.viewMode = 2;
                                break;
                            default:
                                picker.viewMode = 0;
                                break;
                        }
                    }
                    picker.viewMode = Math.max(picker.viewMode, picker.minViewMode);
                    picker.options.disabledDates = indexGivenDates(picker.options.disabledDates);
                    picker.options.enabledDates = indexGivenDates(picker.options.enabledDates);
                    picker.startViewMode = picker.viewMode;
                    picker.setMinDate(picker.options.minDate);
                    picker.setMaxDate(picker.options.maxDate);
                    fillDow();
                    fillMonths();
                    fillHours();
                    fillMinutes();
                    fillSeconds();
                    update();
                    showMode();
                    attachDatePickerEvents();
                    if (picker.options.defaultDate !== '' && getPickerInput().val() === '') {
                        picker.setValue(picker.options.defaultDate);
                    }
                    if (picker.options.minuteStepping !== 1) {
                        rInterval = picker.options.minuteStepping;
                        picker.date.minutes((Math.round(picker.date.minutes() / rInterval) * rInterval) % 60).seconds(0);
                    }
                },
                getPickerInput = function() {
                    var input;
                    if (picker.isInput) {
                        return picker.element;
                    }
                    input = picker.element.find('.datepickerinput');
                    if (input.size() === 0) {
                        input = picker.element.find('input');
                    } else if (!input.is('input')) {
                        throw new Error('CSS class "datepickerinput" cannot be applied to non input element');
                    }
                    return input;
                },
                dataToOptions = function() {
                    var eData;
                    if (picker.element.is('input')) {
                        eData = picker.element.data();
                    } else {
                        eData = picker.element.find('input').data();
                    }
                    if (eData.dateFormat !== undefined) {
                        picker.options.format = eData.dateFormat;
                    }
                    if (eData.datePickdate !== undefined) {
                        picker.options.pickDate = eData.datePickdate;
                    }
                    if (eData.datePicktime !== undefined) {
                        picker.options.pickTime = eData.datePicktime;
                    }
                    if (eData.dateUseminutes !== undefined) {
                        picker.options.useMinutes = eData.dateUseminutes;
                    }
                    if (eData.dateUseseconds !== undefined) {
                        picker.options.useSeconds = eData.dateUseseconds;
                    }
                    if (eData.dateUsecurrent !== undefined) {
                        picker.options.useCurrent = eData.dateUsecurrent;
                    }
                    if (eData.calendarWeeks !== undefined) {
                        picker.options.calendarWeeks = eData.calendarWeeks;
                    }
                    if (eData.dateMinutestepping !== undefined) {
                        picker.options.minuteStepping = eData.dateMinutestepping;
                    }
                    if (eData.dateMindate !== undefined) {
                        picker.options.minDate = eData.dateMindate;
                    }
                    if (eData.dateMaxdate !== undefined) {
                        picker.options.maxDate = eData.dateMaxdate;
                    }
                    if (eData.dateShowtoday !== undefined) {
                        picker.options.showToday = eData.dateShowtoday;
                    }
                    if (eData.dateCollapse !== undefined) {
                        picker.options.collapse = eData.dateCollapse;
                    }
                    if (eData.dateLanguage !== undefined) {
                        picker.options.language = eData.dateLanguage;
                    }
                    if (eData.dateDefaultdate !== undefined) {
                        picker.options.defaultDate = eData.dateDefaultdate;
                    }
                    if (eData.dateDisableddates !== undefined) {
                        picker.options.disabledDates = eData.dateDisableddates;
                    }
                    if (eData.dateEnableddates !== undefined) {
                        picker.options.enabledDates = eData.dateEnableddates;
                    }
                    if (eData.dateIcons !== undefined) {
                        picker.options.icons = eData.dateIcons;
                    }
                    if (eData.dateUsestrict !== undefined) {
                        picker.options.useStrict = eData.dateUsestrict;
                    }
                    if (eData.dateDirection !== undefined) {
                        picker.options.direction = eData.dateDirection;
                    }
                    if (eData.dateSidebyside !== undefined) {
                        picker.options.sideBySide = eData.dateSidebyside;
                    }
                    if (eData.dateDaysofweekdisabled !== undefined) {
                        picker.options.daysOfWeekDisabled = eData.dateDaysofweekdisabled;
                    }
                },
                place = function() {
                    var position = 'absolute',
                        offset = picker.component ? picker.component.offset() : picker.element.offset(),
                        $window = $(window),
                        placePosition;
                    picker.width = picker.component ? picker.component.outerWidth() : picker.element.outerWidth();
                    offset.top = offset.top + picker.element.outerHeight();
                    if (picker.options.direction === 'up') {
                        placePosition = 'top';
                    } else if (picker.options.direction === 'bottom') {
                        placePosition = 'bottom';
                    } else if (picker.options.direction === 'auto') {
                        if (offset.top + picker.widget.height() > $window.height() + $window.scrollTop() && picker.widget.height() + picker.element.outerHeight() < offset.top) {
                            placePosition = 'top';
                        } else {
                            placePosition = 'bottom';
                        }
                    }
                    if (placePosition === 'top') {
                        offset.top -= picker.widget.height() + picker.element.outerHeight() + 15;
                        picker.widget.addClass('top').removeClass('bottom');
                    } else {
                        offset.top += 1;
                        picker.widget.addClass('bottom').removeClass('top');
                    }
                    if (picker.options.width !== undefined) {
                        picker.widget.width(picker.options.width);
                    }
                    if (picker.options.orientation === 'left') {
                        picker.widget.addClass('left-oriented');
                        offset.left = offset.left - picker.widget.width() + 20;
                    }
                    if (isInFixed()) {
                        position = 'fixed';
                        offset.top -= $window.scrollTop();
                        offset.left -= $window.scrollLeft();
                    }
                    if ($window.width() < offset.left + picker.widget.outerWidth()) {
                        offset.right = $window.width() - offset.left - picker.width;
                        offset.left = 'auto';
                        picker.widget.addClass('pull-right');
                    } else {
                        offset.right = 'auto';
                        picker.widget.removeClass('pull-right');
                    }
                    picker.widget.css({
                        position: position,
                        top: offset.top,
                        left: offset.left,
                        right: offset.right
                    });
                },
                notifyChange = function(oldDate, eventType) {
                    if (moment(picker.date).isSame(moment(oldDate))) {
                        return;
                    }
                    picker.element.trigger({
                        type: 'dp.change',
                        date: moment(picker.date),
                        oldDate: moment(oldDate)
                    });
                    if (eventType !== 'change') {
                        picker.element.change();
                    }
                },
                notifyError = function(date) {
                    picker.element.trigger({
                        type: 'dp.error',
                        date: moment(date, picker.format, picker.options.useStrict)
                    });
                },
                update = function(newDate) {
                    moment.locale(picker.options.language);
                    var dateStr = newDate;
                    if (!dateStr) {
                        dateStr = getPickerInput().val();
                        if (dateStr) {
                            picker.date = moment(dateStr, picker.format, picker.options.useStrict);
                        }
                        if (!picker.date) {
                            picker.date = moment();
                        }
                    }
                    picker.viewDate = moment(picker.date).startOf('month');
                    fillDate();
                    fillTime();
                },
                fillDow = function() {
                    moment.locale(picker.options.language);
                    var html = $('<tr>'),
                        weekdaysMin = moment.weekdaysMin(),
                        i;
                    if (picker.options.calendarWeeks === true) {
                        html.append('<th class="cw">#</th>');
                    }
                    var startDay = moment().localeData()._week.dow;
                    if (startDay === undefined) {
                        startDay = 1;
                    }
                    for (i = startDay; i < startDay + 7; i++) {
                        html.append('<th class="dow">' + weekdaysMin[i % 7] + '</th>');
                    }
                    picker.widget.find('.datepicker-days thead').append(html);
                },
                fillMonths = function() {
                    moment.locale(picker.options.language);
                    var html = '',
                        i, monthsShort = moment.monthsShort();
                    for (i = 0; i < 12; i++) {
                        html += '<span class="month">' + monthsShort[i] + '</span>';
                    }
                    picker.widget.find('.datepicker-months td').append(html);
                },
                fillDate = function() {
                    if (!picker.options.pickDate) {
                        return;
                    }
                    moment.locale(picker.options.language);
                    var year = picker.viewDate.year(),
                        month = picker.viewDate.month(),
                        startYear = picker.options.minDate.year(),
                        startMonth = picker.options.minDate.month(),
                        endYear = picker.options.maxDate.year(),
                        endMonth = picker.options.maxDate.month(),
                        currentDate, prevMonth, nextMonth, html = [],
                        row, clsName, i, days, yearCont, currentYear, months = moment.months();
                    picker.widget.find('.datepicker-days').find('.disabled').removeClass('disabled');
                    picker.widget.find('.datepicker-months').find('.disabled').removeClass('disabled');
                    picker.widget.find('.datepicker-years').find('.disabled').removeClass('disabled');
                    picker.widget.find('.datepicker-days th:eq(1)').text(months[month] + ' ' + year);
                    prevMonth = moment(picker.viewDate, picker.format, picker.options.useStrict).subtract(1, 'months');
                    days = prevMonth.daysInMonth();
                    prevMonth.date(days).startOf('week');
                    if ((year === startYear && month <= startMonth) || year < startYear) {
                        picker.widget.find('.datepicker-days th:eq(0)').addClass('disabled');
                    }
                    if ((year === endYear && month >= endMonth) || year > endYear) {
                        picker.widget.find('.datepicker-days th:eq(2)').addClass('disabled');
                    }
                    nextMonth = moment(prevMonth).add(42, 'd');
                    while (prevMonth.isBefore(nextMonth)) {
                        if (prevMonth.weekday() === moment().startOf('week').weekday()) {
                            row = $('<tr>');
                            html.push(row);
                            if (picker.options.calendarWeeks === true) {
                                row.append('<td class="cw">' + prevMonth.week() + '</td>');
                            }
                        }
                        clsName = '';
                        if (prevMonth.year() < year || (prevMonth.year() === year && prevMonth.month() < month)) {
                            clsName += ' old';
                        } else if (prevMonth.year() > year || (prevMonth.year() === year && prevMonth.month() > month)) {
                            clsName += ' new';
                        }
                        if (prevMonth.isSame(moment({
                                y: picker.date.year(),
                                M: picker.date.month(),
                                d: picker.date.date()
                            }))) {
                            clsName += ' active';
                        }
                        if (isInDisableDates(prevMonth, 'day') || !isInEnableDates(prevMonth)) {
                            clsName += ' disabled';
                        }
                        if (picker.options.showToday === true) {
                            if (prevMonth.isSame(moment(), 'day')) {
                                clsName += ' today';
                            }
                        }
                        if (picker.options.daysOfWeekDisabled) {
                            for (i = 0; i < picker.options.daysOfWeekDisabled.length; i++) {
                                if (prevMonth.day() === picker.options.daysOfWeekDisabled[i]) {
                                    clsName += ' disabled';
                                    break;
                                }
                            }
                        }
                        row.append('<td class="day' + clsName + '">' + prevMonth.date() + '</td>');
                        currentDate = prevMonth.date();
                        prevMonth.add(1, 'd');
                        if (currentDate === prevMonth.date()) {
                            prevMonth.add(1, 'd');
                        }
                    }
                    picker.widget.find('.datepicker-days tbody').empty().append(html);
                    currentYear = picker.date.year();
                    months = picker.widget.find('.datepicker-months').find('th:eq(1)').text(year).end().find('span').removeClass('active');
                    if (currentYear === year) {
                        months.eq(picker.date.month()).addClass('active');
                    }
                    if (year - 1 < startYear) {
                        picker.widget.find('.datepicker-months th:eq(0)').addClass('disabled');
                    }
                    if (year + 1 > endYear) {
                        picker.widget.find('.datepicker-months th:eq(2)').addClass('disabled');
                    }
                    for (i = 0; i < 12; i++) {
                        if ((year === startYear && startMonth > i) || (year < startYear)) {
                            $(months[i]).addClass('disabled');
                        } else if ((year === endYear && endMonth < i) || (year > endYear)) {
                            $(months[i]).addClass('disabled');
                        }
                    }
                    html = '';
                    year = parseInt(year / 10, 10) * 10;
                    yearCont = picker.widget.find('.datepicker-years').find('th:eq(1)').text(year + '-' + (year + 9)).parents('table').find('td');
                    picker.widget.find('.datepicker-years').find('th').removeClass('disabled');
                    if (startYear > year) {
                        picker.widget.find('.datepicker-years').find('th:eq(0)').addClass('disabled');
                    }
                    if (endYear < year + 9) {
                        picker.widget.find('.datepicker-years').find('th:eq(2)').addClass('disabled');
                    }
                    year -= 1;
                    for (i = -1; i < 11; i++) {
                        html += '<span class="year' + (i === -1 || i === 10 ? ' old' : '') + (currentYear === year ? ' active' : '') + ((year < startYear || year > endYear) ? ' disabled' : '') + '">' + year + '</span>';
                        year += 1;
                    }
                    yearCont.html(html);
                },
                fillHours = function() {
                    moment.locale(picker.options.language);
                    var table = picker.widget.find('.timepicker .timepicker-hours table'),
                        html = '',
                        current, i, j;
                    table.parent().hide();
                    if (picker.use24hours) {
                        current = 0;
                        for (i = 0; i < 6; i += 1) {
                            html += '<tr>';
                            for (j = 0; j < 4; j += 1) {
                                html += '<td class="hour">' + padLeft(current.toString()) + '</td>';
                                current++;
                            }
                            html += '</tr>';
                        }
                    } else {
                        current = 1;
                        for (i = 0; i < 3; i += 1) {
                            html += '<tr>';
                            for (j = 0; j < 4; j += 1) {
                                html += '<td class="hour">' + padLeft(current.toString()) + '</td>';
                                current++;
                            }
                            html += '</tr>';
                        }
                    }
                    table.html(html);
                },
                fillMinutes = function() {
                    var table = picker.widget.find('.timepicker .timepicker-minutes table'),
                        html = '',
                        current = 0,
                        i, j, step = picker.options.minuteStepping;
                    table.parent().hide();
                    if (step === 1) {
                        step = 5;
                    }
                    for (i = 0; i < Math.ceil(60 / step / 4); i++) {
                        html += '<tr>';
                        for (j = 0; j < 4; j += 1) {
                            if (current < 60) {
                                html += '<td class="minute">' + padLeft(current.toString()) + '</td>';
                                current += step;
                            } else {
                                html += '<td></td>';
                            }
                        }
                        html += '</tr>';
                    }
                    table.html(html);
                },
                fillSeconds = function() {
                    var table = picker.widget.find('.timepicker .timepicker-seconds table'),
                        html = '',
                        current = 0,
                        i, j;
                    table.parent().hide();
                    for (i = 0; i < 3; i++) {
                        html += '<tr>';
                        for (j = 0; j < 4; j += 1) {
                            html += '<td class="second">' + padLeft(current.toString()) + '</td>';
                            current += 5;
                        }
                        html += '</tr>';
                    }
                    table.html(html);
                },
                fillTime = function() {
                    if (!picker.date) {
                        return;
                    }
                    var timeComponents = picker.widget.find('.timepicker span[data-time-component]'),
                        hour = picker.date.hours(),
                        period = picker.date.format('A');
                    if (!picker.use24hours) {
                        if (hour === 0) {
                            hour = 12;
                        } else if (hour !== 12) {
                            hour = hour % 12;
                        }
                        picker.widget.find('.timepicker [data-action=togglePeriod]').text(period);
                    }
                    timeComponents.filter('[data-time-component=hours]').text(padLeft(hour));
                    timeComponents.filter('[data-time-component=minutes]').text(padLeft(picker.date.minutes()));
                    timeComponents.filter('[data-time-component=seconds]').text(padLeft(picker.date.second()));
                },
                click = function(e) {
                    e.stopPropagation();
                    e.preventDefault();
                    picker.unset = false;
                    var target = $(e.target).closest('span, td, th'),
                        month, year, step, day, oldDate = moment(picker.date);
                    if (target.length === 1) {
                        if (!target.is('.disabled')) {
                            switch (target[0].nodeName.toLowerCase()) {
                                case 'th':
                                    switch (target[0].className) {
                                        case 'picker-switch':
                                            showMode(1);
                                            break;
                                        case 'prev':
                                        case 'next':
                                            step = dpGlobal.modes[picker.viewMode].navStep;
                                            if (target[0].className === 'prev') {
                                                step = step * -1;
                                            }
                                            picker.viewDate.add(step, dpGlobal.modes[picker.viewMode].navFnc);
                                            fillDate();
                                            break;
                                    }
                                    break;
                                case 'span':
                                    if (target.is('.month')) {
                                        month = target.parent().find('span').index(target);
                                        picker.viewDate.month(month);
                                    } else {
                                        year = parseInt(target.text(), 10) || 0;
                                        picker.viewDate.year(year);
                                    }
                                    if (picker.viewMode === picker.minViewMode) {
                                        picker.date = moment({
                                            y: picker.viewDate.year(),
                                            M: picker.viewDate.month(),
                                            d: picker.viewDate.date(),
                                            h: picker.date.hours(),
                                            m: picker.date.minutes(),
                                            s: picker.date.seconds()
                                        });
                                        set();
                                        notifyChange(oldDate, e.type);
                                    }
                                    showMode(-1);
                                    fillDate();
                                    break;
                                case 'td':
                                    if (target.is('.day')) {
                                        day = parseInt(target.text(), 10) || 1;
                                        month = picker.viewDate.month();
                                        year = picker.viewDate.year();
                                        if (target.is('.old')) {
                                            if (month === 0) {
                                                month = 11;
                                                year -= 1;
                                            } else {
                                                month -= 1;
                                            }
                                        } else if (target.is('.new')) {
                                            if (month === 11) {
                                                month = 0;
                                                year += 1;
                                            } else {
                                                month += 1;
                                            }
                                        }
                                        picker.date = moment({
                                            y: year,
                                            M: month,
                                            d: day,
                                            h: picker.date.hours(),
                                            m: picker.date.minutes(),
                                            s: picker.date.seconds()
                                        });
                                        picker.viewDate = moment({
                                            y: year,
                                            M: month,
                                            d: Math.min(28, day)
                                        });
                                        fillDate();
                                        set();
                                        notifyChange(oldDate, e.type);
                                    }
                                    break;
                            }
                        }
                    }
                },
                actions = {
                    incrementHours: function() {
                        checkDate('add', 'hours', 1);
                    },
                    incrementMinutes: function() {
                        checkDate('add', 'minutes', picker.options.minuteStepping);
                    },
                    incrementSeconds: function() {
                        checkDate('add', 'seconds', 1);
                    },
                    decrementHours: function() {
                        checkDate('subtract', 'hours', 1);
                    },
                    decrementMinutes: function() {
                        checkDate('subtract', 'minutes', picker.options.minuteStepping);
                    },
                    decrementSeconds: function() {
                        checkDate('subtract', 'seconds', 1);
                    },
                    togglePeriod: function() {
                        var hour = picker.date.hours();
                        if (hour >= 12) {
                            hour -= 12;
                        } else {
                            hour += 12;
                        }
                        picker.date.hours(hour);
                    },
                    showPicker: function() {
                        picker.widget.find('.timepicker > div:not(.timepicker-picker)').hide();
                        picker.widget.find('.timepicker .timepicker-picker').show();
                    },
                    showHours: function() {
                        picker.widget.find('.timepicker .timepicker-picker').hide();
                        picker.widget.find('.timepicker .timepicker-hours').show();
                    },
                    showMinutes: function() {
                        picker.widget.find('.timepicker .timepicker-picker').hide();
                        picker.widget.find('.timepicker .timepicker-minutes').show();
                    },
                    showSeconds: function() {
                        picker.widget.find('.timepicker .timepicker-picker').hide();
                        picker.widget.find('.timepicker .timepicker-seconds').show();
                    },
                    selectHour: function(e) {
                        var hour = parseInt($(e.target).text(), 10);
                        if (!picker.use24hours) {
                            if (picker.date.hours() >= 12) {
                                if (hour !== 12) {
                                    hour += 12;
                                }
                            } else {
                                if (hour === 12) {
                                    hour = 0;
                                }
                            }
                        }
                        picker.date.hours(hour);
                        actions.showPicker.call(picker);
                    },
                    selectMinute: function(e) {
                        picker.date.minutes(parseInt($(e.target).text(), 10));
                        actions.showPicker.call(picker);
                    },
                    selectSecond: function(e) {
                        picker.date.seconds(parseInt($(e.target).text(), 10));
                        actions.showPicker.call(picker);
                    }
                },
                doAction = function(e) {
                    var oldDate = moment(picker.date),
                        action = $(e.currentTarget).data('action'),
                        rv = actions[action].apply(picker, arguments);
                    stopEvent(e);
                    if (!picker.date) {
                        picker.date = moment({
                            y: 1970
                        });
                    }
                    set();
                    fillTime();
                    notifyChange(oldDate, e.type);
                    return rv;
                },
                stopEvent = function(e) {
                    e.stopPropagation();
                    e.preventDefault();
                },
                keydown = function(e) {
                    if (e.keyCode === 27) {
                        picker.hide();
                    }
                },
                change = function(e) {
                    moment.locale(picker.options.language);
                    var input = $(e.target),
                        oldDate = moment(picker.date),
                        newDate = moment(input.val(), picker.format, picker.options.useStrict);
                    if (newDate.isValid() && !isInDisableDates(newDate) && isInEnableDates(newDate)) {
                        update();
                        picker.setValue(newDate);
                        notifyChange(oldDate, e.type);
                        set();
                    } else {
                        picker.viewDate = oldDate;
                        picker.unset = true;
                        notifyChange(oldDate, e.type);
                        notifyError(newDate);
                    }
                },
                showMode = function(dir) {
                    if (dir) {
                        picker.viewMode = Math.max(picker.minViewMode, Math.min(2, picker.viewMode + dir));
                    }
                    picker.widget.find('.datepicker > div').hide().filter('.datepicker-' + dpGlobal.modes[picker.viewMode].clsName).show();
                },
                attachDatePickerEvents = function() {
                    var $this, $parent, expanded, closed, collapseData;
                    picker.widget.on('click', '.datepicker *', $.proxy(click, this));
                    picker.widget.on('click', '[data-action]', $.proxy(doAction, this));
                    picker.widget.on('mousedown', $.proxy(stopEvent, this));
                    picker.element.on('keydown', $.proxy(keydown, this));
                    if (picker.options.pickDate && picker.options.pickTime) {
                        picker.widget.on('click.togglePicker', '.accordion-toggle', function(e) {
                            e.stopPropagation();
                            $this = $(this);
                            $parent = $this.closest('ul');
                            expanded = $parent.find('.in');
                            closed = $parent.find('.collapse:not(.in)');
                            if (expanded && expanded.length) {
                                collapseData = expanded.data('collapse');
                                if (collapseData && collapseData.transitioning) {
                                    return;
                                }
                                expanded.collapse('hide');
                                closed.collapse('show');
                                $this.find('span').toggleClass(picker.options.icons.time + ' ' + picker.options.icons.date);
                                if (picker.component) {
                                    picker.component.find('span').toggleClass(picker.options.icons.time + ' ' + picker.options.icons.date);
                                }
                            }
                        });
                    }
                    if (picker.isInput) {
                        picker.element.on({
                            'click': $.proxy(picker.show, this),
                            'focus': $.proxy(picker.show, this),
                            'change': $.proxy(change, this),
                            'blur': $.proxy(picker.hide, this)
                        });
                    } else {
                        picker.element.on({
                            'change': $.proxy(change, this)
                        }, 'input');
                        if (picker.component) {
                            picker.component.on('click', $.proxy(picker.show, this));
                            picker.component.on('mousedown', $.proxy(stopEvent, this));
                        } else {
                            picker.element.on('click', $.proxy(picker.show, this));
                        }
                    }
                },
                attachDatePickerGlobalEvents = function() {
                    $(window).on('resize.datetimepicker' + picker.id, $.proxy(place, this));
                    if (!picker.isInput) {
                        $(document).on('mousedown.datetimepicker' + picker.id, $.proxy(picker.hide, this));
                    }
                },
                detachDatePickerEvents = function() {
                    picker.widget.off('click', '.datepicker *', picker.click);
                    picker.widget.off('click', '[data-action]');
                    picker.widget.off('mousedown', picker.stopEvent);
                    if (picker.options.pickDate && picker.options.pickTime) {
                        picker.widget.off('click.togglePicker');
                    }
                    if (picker.isInput) {
                        picker.element.off({
                            'focus': picker.show,
                            'change': picker.change,
                            'click': picker.show,
                            'blur': picker.hide
                        });
                    } else {
                        picker.element.off({
                            'change': picker.change
                        }, 'input');
                        if (picker.component) {
                            picker.component.off('click', picker.show);
                            picker.component.off('mousedown', picker.stopEvent);
                        } else {
                            picker.element.off('click', picker.show);
                        }
                    }
                },
                detachDatePickerGlobalEvents = function() {
                    $(window).off('resize.datetimepicker' + picker.id);
                    if (!picker.isInput) {
                        $(document).off('mousedown.datetimepicker' + picker.id);
                    }
                },
                isInFixed = function() {
                    if (picker.element) {
                        var parents = picker.element.parents(),
                            inFixed = false,
                            i;
                        for (i = 0; i < parents.length; i++) {
                            if ($(parents[i]).css('position') === 'fixed') {
                                inFixed = true;
                                break;
                            }
                        }
                        return inFixed;
                    } else {
                        return false;
                    }
                },
                set = function() {
                    moment.locale(picker.options.language);
                    var formatted = '';
                    if (!picker.unset) {
                        formatted = moment(picker.date).format(picker.format);
                    }
                    getPickerInput().val(formatted);
                    picker.element.data('date', formatted);
                    if (!picker.options.pickTime) {
                        picker.hide();
                    }
                },
                checkDate = function(direction, unit, amount) {
                    moment.locale(picker.options.language);
                    var newDate;
                    if (direction === 'add') {
                        newDate = moment(picker.date);
                        if (newDate.hours() === 23) {
                            newDate.add(amount, unit);
                        }
                        newDate.add(amount, unit);
                    } else {
                        newDate = moment(picker.date).subtract(amount, unit);
                    }
                    if (isInDisableDates(moment(newDate.subtract(amount, unit))) || isInDisableDates(newDate)) {
                        notifyError(newDate.format(picker.format));
                        return;
                    }
                    if (direction === 'add') {
                        picker.date.add(amount, unit);
                    } else {
                        picker.date.subtract(amount, unit);
                    }
                    picker.unset = false;
                },
                isInDisableDates = function(date, timeUnit) {
                    moment.locale(picker.options.language);
                    var maxDate = moment(picker.options.maxDate, picker.format, picker.options.useStrict),
                        minDate = moment(picker.options.minDate, picker.format, picker.options.useStrict);
                    if (timeUnit) {
                        maxDate = maxDate.endOf(timeUnit);
                        minDate = minDate.startOf(timeUnit);
                    }
                    if (date.isAfter(maxDate) || date.isBefore(minDate)) {
                        return true;
                    }
                    if (picker.options.disabledDates === false) {
                        return false;
                    }
                    return picker.options.disabledDates[date.format('YYYY-MM-DD')] === true;
                },
                isInEnableDates = function(date) {
                    moment.locale(picker.options.language);
                    if (picker.options.enabledDates === false) {
                        return true;
                    }
                    return picker.options.enabledDates[date.format('YYYY-MM-DD')] === true;
                },
                indexGivenDates = function(givenDatesArray) {
                    var givenDatesIndexed = {},
                        givenDatesCount = 0,
                        i;
                    for (i = 0; i < givenDatesArray.length; i++) {
                        if (moment.isMoment(givenDatesArray[i]) || givenDatesArray[i] instanceof Date) {
                            dDate = moment(givenDatesArray[i]);
                        } else {
                            dDate = moment(givenDatesArray[i], picker.format, picker.options.useStrict);
                        }
                        if (dDate.isValid()) {
                            givenDatesIndexed[dDate.format('YYYY-MM-DD')] = true;
                            givenDatesCount++;
                        }
                    }
                    if (givenDatesCount > 0) {
                        return givenDatesIndexed;
                    }
                    return false;
                },
                padLeft = function(string) {
                    string = string.toString();
                    if (string.length >= 2) {
                        return string;
                    }
                    return '0' + string;
                },
                getTemplate = function() {
                    if (picker.options.pickDate && picker.options.pickTime) {
                        var ret = '';
                        ret = '<div class="bootstrap-datetimepicker-widget' + (picker.options.sideBySide ? ' timepicker-sbs' : '') + (picker.use24hours ? ' usetwentyfour' : '') + ' dropdown-menu" style="z-index:9999 !important;">';
                        if (picker.options.sideBySide) {
                            ret += '<div class="row">' + '<div class="col-sm-6 datepicker">' + dpGlobal.template + '</div>' + '<div class="col-sm-6 timepicker">' + tpGlobal.getTemplate() + '</div>' + '</div>';
                        } else {
                            ret += '<ul class="list-unstyled">' + '<li' + (picker.options.collapse ? ' class="collapse in"' : '') + '>' + '<div class="datepicker">' + dpGlobal.template + '</div>' + '</li>' + '<li class="picker-switch accordion-toggle"><a class="btn" style="width:100%"><span class="' + picker.options.icons.time + '"></span></a></li>' + '<li' + (picker.options.collapse ? ' class="collapse"' : '') + '>' + '<div class="timepicker">' + tpGlobal.getTemplate() + '</div>' + '</li>' + '</ul>';
                        }
                        ret += '</div>';
                        return ret;
                    }
                    if (picker.options.pickTime) {
                        return ('<div class="bootstrap-datetimepicker-widget dropdown-menu">' + '<div class="timepicker">' + tpGlobal.getTemplate() + '</div>' + '</div>');
                    }
                    return ('<div class="bootstrap-datetimepicker-widget dropdown-menu">' + '<div class="datepicker">' + dpGlobal.template + '</div>' + '</div>');
                },
                dpGlobal = {
                    modes: [{
                        clsName: 'days',
                        navFnc: 'month',
                        navStep: 1
                    }, {
                        clsName: 'months',
                        navFnc: 'year',
                        navStep: 1
                    }, {
                        clsName: 'years',
                        navFnc: 'year',
                        navStep: 10
                    }],
                    headTemplate: '<thead>' + '<tr>' + '<th class="prev">&lsaquo;</th><th colspan="' + (options.calendarWeeks ? '6' : '5') + '" class="picker-switch"></th><th class="next">&rsaquo;</th>' + '</tr>' + '</thead>',
                    contTemplate: '<tbody><tr><td colspan="' + (options.calendarWeeks ? '8' : '7') + '"></td></tr></tbody>'
                },
                tpGlobal = {
                    hourTemplate: '<span data-action="showHours"   data-time-component="hours"   class="timepicker-hour"></span>',
                    minuteTemplate: '<span data-action="showMinutes" data-time-component="minutes" class="timepicker-minute"></span>',
                    secondTemplate: '<span data-action="showSeconds"  data-time-component="seconds" class="timepicker-second"></span>'
                };
            dpGlobal.template = '<div class="datepicker-days">' + '<table class="table-condensed">' + dpGlobal.headTemplate + '<tbody></tbody></table>' + '</div>' + '<div class="datepicker-months">' + '<table class="table-condensed">' + dpGlobal.headTemplate + dpGlobal.contTemplate + '</table>' + '</div>' + '<div class="datepicker-years">' + '<table class="table-condensed">' + dpGlobal.headTemplate + dpGlobal.contTemplate + '</table>' + '</div>';
            tpGlobal.getTemplate = function() {
                return ('<div class="timepicker-picker">' + '<table class="table-condensed">' + '<tr>' + '<td><a href="#" class="btn" data-action="incrementHours"><span class="' + picker.options.icons.up + '"></span></a></td>' + '<td class="separator"></td>' + '<td>' + (picker.options.useMinutes ? '<a href="#" class="btn" data-action="incrementMinutes"><span class="' + picker.options.icons.up + '"></span></a>' : '') + '</td>' +
                    (picker.options.useSeconds ? '<td class="separator"></td><td><a href="#" class="btn" data-action="incrementSeconds"><span class="' + picker.options.icons.up + '"></span></a></td>' : '') +
                    (picker.use24hours ? '' : '<td class="separator"></td>') + '</tr>' + '<tr>' + '<td>' + tpGlobal.hourTemplate + '</td> ' + '<td class="separator">:</td>' + '<td>' + (picker.options.useMinutes ? tpGlobal.minuteTemplate : '<span class="timepicker-minute">00</span>') + '</td> ' +
                    (picker.options.useSeconds ? '<td class="separator">:</td><td>' + tpGlobal.secondTemplate + '</td>' : '') +
                    (picker.use24hours ? '' : '<td class="separator"></td>' + '<td><button type="button" class="btn btn-primary" data-action="togglePeriod"></button></td>') + '</tr>' + '<tr>' + '<td><a href="#" class="btn" data-action="decrementHours"><span class="' + picker.options.icons.down + '"></span></a></td>' + '<td class="separator"></td>' + '<td>' + (picker.options.useMinutes ? '<a href="#" class="btn" data-action="decrementMinutes"><span class="' + picker.options.icons.down + '"></span></a>' : '') + '</td>' +
                    (picker.options.useSeconds ? '<td class="separator"></td><td><a href="#" class="btn" data-action="decrementSeconds"><span class="' + picker.options.icons.down + '"></span></a></td>' : '') +
                    (picker.use24hours ? '' : '<td class="separator"></td>') + '</tr>' + '</table>' + '</div>' + '<div class="timepicker-hours" data-action="selectHour">' + '<table class="table-condensed"></table>' + '</div>' + '<div class="timepicker-minutes" data-action="selectMinute">' + '<table class="table-condensed"></table>' + '</div>' +
                    (picker.options.useSeconds ? '<div class="timepicker-seconds" data-action="selectSecond"><table class="table-condensed"></table></div>' : ''));
            };
            picker.destroy = function() {
                detachDatePickerEvents();
                detachDatePickerGlobalEvents();
                picker.widget.remove();
                picker.element.removeData('DateTimePicker');
                if (picker.component) {
                    picker.component.removeData('DateTimePicker');
                }
            };
            picker.show = function(e) {
                if (picker.options.useCurrent) {
                    if (getPickerInput().val() === '') {
                        if (picker.options.minuteStepping !== 1) {
                            var mDate = moment(),
                                rInterval = picker.options.minuteStepping;
                            mDate.minutes((Math.round(mDate.minutes() / rInterval) * rInterval) % 60).seconds(0);
                            picker.setValue(mDate.format(picker.format));
                        } else {
                            picker.setValue(moment().format(picker.format));
                        }
                        notifyChange('', e.type);
                    }
                }
                if (e && e.type === 'click' && picker.isInput && picker.widget.hasClass('picker-open')) {
                    return;
                }
                if (picker.widget.hasClass('picker-open')) {
                    picker.widget.hide();
                    picker.widget.removeClass('picker-open');
                } else {
                    picker.widget.show();
                    picker.widget.addClass('picker-open');
                }
                picker.height = picker.component ? picker.component.outerHeight() : picker.element.outerHeight();
                place();
                picker.element.trigger({
                    type: 'dp.show',
                    date: moment(picker.date)
                });
                attachDatePickerGlobalEvents();
                if (e) {
                    stopEvent(e);
                }
            };
            picker.disable = function() {
                var input = picker.element.find('input');
                if (input.prop('disabled')) {
                    return;
                }
                input.prop('disabled', true);
                detachDatePickerEvents();
            };
            picker.enable = function() {
                var input = picker.element.find('input');
                if (!input.prop('disabled')) {
                    return;
                }
                input.prop('disabled', false);
                attachDatePickerEvents();
            };
            picker.hide = function() {
                var collapse = picker.widget.find('.collapse'),
                    i, collapseData;
                for (i = 0; i < collapse.length; i++) {
                    collapseData = collapse.eq(i).data('collapse');
                    if (collapseData && collapseData.transitioning) {
                        return;
                    }
                }
                picker.widget.hide();
                picker.widget.removeClass('picker-open');
                picker.viewMode = picker.startViewMode;
                showMode();
                picker.element.trigger({
                    type: 'dp.hide',
                    date: moment(picker.date)
                });
                detachDatePickerGlobalEvents();
            };
            picker.setValue = function(newDate) {
                moment.locale(picker.options.language);
                if (!newDate) {
                    picker.unset = true;
                    set();
                } else {
                    picker.unset = false;
                }
                if (!moment.isMoment(newDate)) {
                    newDate = (newDate instanceof Date) ? moment(newDate) : moment(newDate, picker.format, picker.options.useStrict);
                } else {
                    newDate = newDate.locale(picker.options.language);
                }
                if (newDate.isValid()) {
                    picker.date = newDate;
                    set();
                    picker.viewDate = moment({
                        y: picker.date.year(),
                        M: picker.date.month()
                    });
                    fillDate();
                    fillTime();
                } else {
                    notifyError(newDate);
                }
            };
            picker.getDate = function() {
                if (picker.unset) {
                    return null;
                }
                return moment(picker.date);
            };
            picker.setDate = function(date) {
                var oldDate = moment(picker.date);
                if (!date) {
                    picker.setValue(null);
                } else {
                    picker.setValue(date);
                }
                notifyChange(oldDate, 'function');
            };
            picker.setDisabledDates = function(dates) {
                picker.options.disabledDates = indexGivenDates(dates);
                if (picker.viewDate) {
                    update();
                }
            };
            picker.setEnabledDates = function(dates) {
                picker.options.enabledDates = indexGivenDates(dates);
                if (picker.viewDate) {
                    update();
                }
            };
            picker.setMaxDate = function(date) {
                if (date === undefined) {
                    return;
                }
                if (moment.isMoment(date) || date instanceof Date) {
                    picker.options.maxDate = moment(date);
                } else {
                    picker.options.maxDate = moment(date, picker.format, picker.options.useStrict);
                }
                if (picker.viewDate) {
                    update();
                }
            };
            picker.setMinDate = function(date) {
                if (date === undefined) {
                    return;
                }
                if (moment.isMoment(date) || date instanceof Date) {
                    picker.options.minDate = moment(date);
                } else {
                    picker.options.minDate = moment(date, picker.format, picker.options.useStrict);
                }
                if (picker.viewDate) {
                    update();
                }
            };
            init();
        };
    $.fn.datetimepicker = function(options) {
        return this.each(function() {
            var $this = $(this),
                data = $this.data('DateTimePicker');
            if (!data) {
                $this.data('DateTimePicker', new DateTimePicker(this, options));
            }
        });
    };
    $.fn.datetimepicker.defaults = {
        format: false,
        pickDate: true,
        pickTime: true,
        useMinutes: true,
        useSeconds: false,
        useCurrent: true,
        calendarWeeks: false,
        minuteStepping: 1,
        minDate: moment({
            y: 1900
        }),
        maxDate: moment().add(100, 'y'),
        showToday: true,
        collapse: true,
        language: moment.locale(),
        defaultDate: '',
        disabledDates: false,
        enabledDates: false,
        icons: {},
        useStrict: false,
        direction: 'auto',
        sideBySide: false,
        daysOfWeekDisabled: [],
        widgetParent: false
    };
}));