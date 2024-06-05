module.exports = function (grunt) {
    'use strict';

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        /**
         * JS Minify
         */
        uglify: {
            js: {
                options: {
                    mangle: {
                        reserved: ['jQuery']
                    }
                },
                files: [
                    {
                        expand: true,
                        src: [
                            'assets/build/js/*.js',
                            '!assets/build/js/*.min.js',
                            '!assets/src/**',
                        ],
                        cwd: '.',
                        rename: function (dst, src) {
                            // To keep the source js files and make new files as `*.min.js`:
                            return src.replace('.js', '.min.js');
                        }
                    }
                ]
            }
        },

        /**
         * CSS Minify
         */
        cssmin: {
            options: {
                keepSpecialComments: 0
            },
            css: {
                files: [

                    // Front End Library CSS Minify
                    {
                        expand: true,
                        src: [
                            'assets/build/css/*.css',
                            '!assets/build/css/*.min.css',
                            '!assets/src/**',
                        ],
                        cwd: '.',
                        rename: function (dst, src) {
                            // To keep the source css files and make new files as `*.min.css`:
                            return src.replace('.css', '.min.css');
                        }
                    }
                ]
            }
        },

        /**
         * Copy files
         */
        copy: {
            main: {
                options: {
                    mode: true
                },
                src: [
                    '**',
                    '!style - Copy.css',
                    '!node_modules/**',
                    '!assets/src/**',
                    '!css/sourcemap/**',
                    '!.git/**',
                    '!bin/**',
                    '!.gitlab-ci.yml',
                    '!bin/**',
                    '!tests/**',
                    '!phpunit.xml.dist',
                    '!*.sh',
                    '!*.map',
                    '!.gitignore',
                    '!phpunit.xml',
                    '!README.md',
                    '!CONTRIBUTING.md',
                    '!codesniffer.ruleset.xml',
                    '!phpcs.ruleset.xml',
                    '!phpcs.xml.dist',
                    '!phpcs.xml.dist',
                    '!composer.json',
                    '!composer.lock',
                    '!phpcs.xml',

                    /**
                     * Are you developer? Then add below files.
                     */
                    '!Gruntfile.js',
                    '!webpack.config.js',
                    '!package.json',
                    '!package-lock.json',
                    '!sass/**',
                ],
                dest: 'aarambha-kits-for-elementor/'
            }
        },

        /**
         * Compress files
         */
        compress: {
            main: {
                options: {
                    archive: 'aarambha-kits-for-elementor.zip',
                    mode: 'zip'
                },
                files: [
                    {
                        src: [
                            './aarambha-kits-for-elementor/**'
                        ]

                    }
                ]
            }
        },

        /**
         * Clean files
         */
        clean: {
            main: ["aarambha-kits-for-elementor"],
            zip: ["aarambha-kits-for-elementor.zip"]

        },

        /**
         * Generate POT
         */
        makepot: {
            target: {
                options: {
                    domainPath: '/',
                    potFilename: 'languages/aarambha-kits.pot',
                    potHeaders: {
                        poedit: true,
                        'x-poedit-keywordslist': true
                    },
                    type: 'wp-plugin',
                    updateTimestamp: true
                }
            }
        },

        /**
         * Add textdomain
         */
        addtextdomain: {
            options: {
                textdomain: 'aarambha-kits',
            },
            target: {
                files: {
                    src: [
                        '*.php',
                        '**/*.php',
                        '!node_modules/**',
                        '!php-tests/**',
                        '!bin/**',
                    ]
                }
            }
        },

        /**
         * Check textdomain
         */
        checktextdomain: {
            standard: {
                options:{
                    text_domain: 'aarambha-kits', //Specify allowed domain(s)
                    keywords: [ //List keyword specifications
                        '__:1,2d',
                        '_e:1,2d',
                        '_x:1,2c,3d',
                        'esc_html__:1,2d',
                        'esc_html_e:1,2d',
                        'esc_html_x:1,2c,3d',
                        'esc_attr__:1,2d',
                        'esc_attr_e:1,2d',
                        'esc_attr_x:1,2c,3d',
                        '_ex:1,2c,3d',
                        '_n:1,2,4d',
                        '_nx:1,2,4c,5d',
                        '_n_noop:1,2,3d',
                        '_nx_noop:1,2,3c,4d'
                    ]
                },
                files: [{
                    src: [
                        '**/*.php', //all php
                        '!node_modules/**'
                    ],
                    expand: true,
                }],
            }
        },
    });

    /**
     * Load Grunt Tasks
     */
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-compress');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-wp-i18n');
    grunt.loadNpmTasks('grunt-checktextdomain');

    // Minify JS & CSS
    grunt.registerTask('minify', ['uglify:js', 'cssmin:css']);

    // Generate Release package
    grunt.registerTask('release', ['clean:zip', 'copy', 'compress', 'clean:main']);

    // i18n
    grunt.registerTask('i18n', ['checktextdomain', 'addtextdomain', 'makepot']);

    grunt.util.linefeed = '\n';
};
