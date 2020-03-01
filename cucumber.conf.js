require("babel-register")({
    presets: ["es2015"]
  });
  exports.config = {
      // set to "custom" instead of cucumber.
      framework: 'custom',
     
      // path relative to the current config file
      frameworkPath: require.resolve('protractor-cucumber-framework'),
     
      // require feature files
      specs: [
        "./CucumberFrameWork/Features/*.feature"
      ],
     
      cucumberOpts: {
        // require step definitions
        require: [
           './CucumberFrameWork/Steps/*step.js' // accepts a glob
        ]
      }
    };
  
  
  