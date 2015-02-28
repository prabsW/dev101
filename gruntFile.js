module.exports = function(grunt) 
{

	grunt.initConfig({
		
		pkg: grunt.file.readJSON('package.json'),
		
		uglify:{
			build: {
				src: 'SRC/js/*.js',
				dest: 'js/script.min.js'
			},
			dev: {
					options: {
						beautify: true,
						mangle: false,
						compress: false,
						preserveComments: 'all'

					},
					src: 'SRC/js/*js',
					dest: 'js/script.min.js'
					}

			
			},

//sass for working update and build 
			sass: {
				dev: {
					options: {
	 				outputStyle: 'expanded'
					},

				files: {
					'css/style1.css' : 'SRC/css/app.scss'
						}
					
				},
				build: {
				options: {
						outputStyle: 'compressed'
						},
				files: {
						'css/style1.css' : 'SRC/css/app.scss'
						}
					}
				},


//watch task for javascript and sass
		watch: {
						
				js : {
					files:['src/js/*.js'],
					tasks:['uglify:dev']
					},
				css: {
					files:['SRC/**/*.scss'],
					tasks:['sass:dev']
					}
				}
		
	});
	//load the plugins
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-sass');

	//Register task (s).
	grunt.registerTask('default', ['uglify:dev','sass:dev']);
	grunt.registerTask('build', ['uglify:build', 'sass:build']);
	// no need to register for watch grunt.registerTask('watch', ['uglify:watch']);
}