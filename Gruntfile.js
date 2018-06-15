const path = require('path');

const rBaseConfiguration = path.resolve(__dirname, 'rconfig/Win/Backup/BaseConfiguration');

module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // Copy task
    copy: {

      editor: {
        files: [
          {
            expand: true,
            cwd: 'temp_config/',
            src: ['**'],
            dest: 'config/',
          },
        ],
      },

      recherche: {
        files: [
          {
            expand: true,
            cwd: 'config/',
            src: ['**'],
            dest: 'rconfig',
          },
        ],
      },
    },

    // Rename folders
    rename: {
      fsconfig: {
        src: '*.201*',
        dest: 'temp_config',
        options: {
          ignore: true,
        },
      },

      rSidePanels: {
        src: path.resolve(rBaseConfiguration, 'fsSidePanels_recherche.xml'),
        dest: path.resolve(rBaseConfiguration, 'fsSidePanels.xml'),
        options: {
          ignore: true,
        },
      },
      rArchives: {
        src: path.resolve(rBaseConfiguration, 'fsArchives_recherche.xml'),
        dest: path.resolve(rBaseConfiguration, 'fsArchives.xml'),
        options: {
          ignore: true,
        },
      },
      rActionItems: {
        src: path.resolve(rBaseConfiguration, 'fsActionItems_recherche.xml'),
        dest: path.resolve(rBaseConfiguration, 'fsActionItems.xml'),
        options: {
          ignore: true,
        },
      },

    },

    // Delete unneccessary folders
    clean: {
      fotostation: ['temp_config', '*.201*'],
    },

    // Compress
    compress: {
      editor: {
        options: {
          archive: 'dist/<%= pkg.name %>_<%= pkg.version %>.zip',
        },
        files: [
          {
            expand: true,
            cwd: 'config/',
            src: ['**'],
            dest: '<%= pkg.name %>_<%= pkg.version %>/',
          },
        ],
      },

      // Compress recherche
      recherche: {
        options: {
          archive: 'dist/<%= pkg.name %>_<%= pkg.version %>_recherche.zip',
        },
        files: [
          {
            expand: true,
            cwd: 'rconfig/',
            src: ['**'],
            dest: '<%= pkg.name %>_<%= pkg.version %>_recherche/',
          },
        ],
      },
    },

    xmlpoke: {
      updateVersionInConfig: {
        options: {
          xpath: '//Field[@id="800"]/@guiLabel',
          value: 'v<%= pkg.version %>',
        },
        files: {
          'config/Shared/Metadata/MetadataConfiguration.xml': 'config/Shared/Metadata/MetadataConfiguration.xml',
        },
      },
    },
  });

  // Load Grunt tasks
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-rename');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-compress');
  grunt.loadNpmTasks('grunt-bump');
  grunt.loadNpmTasks('grunt-xmlpoke');

  //grunt.registerTask('default', ['rename', 'copy', 'xmlpoke', 'clean', 'compress', 'bump-only']);

  grunt.registerTask('recherche', [
    'rename:fsconfig',
    'copy:editor',
    'copy:recherche',
    'rename:rArchives',
    'rename:rActionItems',
    'rename:rSidePanels',
    'clean',
    'compress:recherche',
  ]);

  grunt.registerTask('editor', [
    'rename:fsconfig',
    'copy:editor',
    'xmlpoke',
    'clean',
    'compress:editor',
    'bump-only',
  ]);

  grunt.registerTask('default', ['editor', 'recherche']);
};
