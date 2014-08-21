module.exports = function(grunt) {
    var skinDir = 'theme/skin/frontend/my-theme/default/';
    var appDir = 'theme/app/design/frontend/my-theme/default/';
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        compass: {
            dist: {
                options: {
                    sassDir: skinDir + 'scss',
                    cssDir: skinDir + 'css',
                    environment: 'development',
                    outputStyle: 'nested'
                }
            }
        },
        watch: {
		    options: {
		        livereload: true
		    },
		    livereload: {
		        files: [
		            skinDir + 'scss/{,*/}*.scss'
		        ],
		        tasks: ['compass']
		    }
		},
    });
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.registerTask('default', [
        'compass',
    ]);
    grunt.loadNpmTasks('grunt-contrib-watch');
};