module.exports = function(grunt) {
  
	grunt.initConfig({
		pkg: grunt.file.readJSON("package.json"),

		// Copy task
		copy: {
			main: {
				files: [
					{expand: true, cwd: "temp_config/", src: ['**'], dest: "config/"}
				]
			}
		},

		// Rename folders
		rename : {
			moveThis: {
				src: "*.201*",
				dest: "temp_config",
				options: {
					ignore: true
				}
			}
		},

		// Delete unneccessary folders
		clean: {
			fotostation: ["temp_config", "*.201*"]
		},

		// Compress
		compress: {
			main: {
				options: {
					archive: "dist/<%= pkg.name %>_<%= pkg.version %>.zip"
				},
				files: [
					{expand: true, cwd: "config/", src: ["**"], dest: "<%= pkg.name %>_<%= pkg.version %>/"}
				]
			}
		}

	});

	// Load Grunt tasks
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-rename');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-compress');
	grunt.loadNpmTasks('grunt-bump');

	grunt.registerTask("default", ["rename", "copy", "clean", "compress", "bump-only"]);
};