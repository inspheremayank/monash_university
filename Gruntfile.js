module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {// Task
            dist: {// Target
                options: {// Target options
                    style: 'compressed'
                },
                files: {// Dictionary of files
                    'static/css/default.css': 'static/css/sass/default.scss',
                    'static/css/vendors.css': 'static/css/sass/vendors.scss'
                }
            }
        },
        watch: {
            css: {
                files: [
                    'static/css/sass/**/*.scss'
                ],
                tasks: ['sass'],
                options: {
                    spawn: false,
                    livereload: true
                }
            }
        },
        //Minify JS
        uglify: {
            options: {
                mangle: false
            },
            theme: {
                files: {
                    'static/deploy/theme.min.js': [
                        'static/plugins/jquery/js/jquery.min.js',
                        'static/plugins/jquery/js/jquery-migrate-1.2.1.min.js',
                        'static/plugins/jquery-ui/jquery-ui-1.10.1.custom.min.js',
                        'static/plugins/bootstrap/js/popper.min.js',
                        'static/plugins/bootstrap/js/bootstrap.min.js',
                        'static/plugins/fancybox/js/jquery.fancybox.js',
                        'static/plugins/chosen-bootstrap/js/chosen.jquery.min.js',
                        'static/plugins/owl-carousel/js/owl.carousel.min.js',
                        'static/plugins/handlebars-v4.0.5.js',
                        'static/plugins/jquery.validate/jquery.validate.min.js',
                        'static/plugins/jquery.noty-2.3.8/js/noty/packaged/jquery.noty.packaged.min.js',
                        'static/js/app.js',
                        'static/dev/js/auth.js',
                        'static/dev/js/account-modal.js',
                        'static/dev/js/login.js',
                        'static/dev/js/home.js',
                        'static/dev/js/common.js',
                        'static/dev/js/_article-templates.js',
                        'static/dev/js/user-articles.js',
                        'static/dev/js/search.js'
                    ]                    
                }
            }
        },
        cachebreaker: {
            theme: {
                options: {
                    match: ['theme.min.js', 'output.min.css', 'contentbox-breakup.css']
                },
                files: {
                    src: [
                        'layouts/partials/_javascript.twig',
                        'layouts/main.twig'
                    ]
                }
            }
        },
        //Minify Css Files
        cssmin: {
            options: {
                shorthandCompacting: false,
                roundingPrecision: -1
            },
            theme: {
                files: {
                    'static/deploy/output.min.css' : [
                        'static/css/vendors.css',
			'static/css/default.css',
                        'static/plugins/jquery.noty-2.3.8/demo/animate.css'
                    ]
                }
            }
        },
    });
    
    //grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-cache-breaker');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    
    // Default task(s).
    grunt.registerTask('default', ['uglify', 'cssmin', 'cachebreaker']);
};