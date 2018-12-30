'use strict';

const Generator = require('yeoman-generator');
const yosay = require('yosay');

module.exports = class extends Generator {
  prompting() {
    this.log(
      yosay(`Welcome to Wagisus! We just need to ask a few questions to help set things up.`)
    );

    const prompts = [
      {
        type: 'input',
        name: 'siteName',
        message: 'What is the site name for the project (also used as the NPM package title)?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'What is the description for the project?',
      },
      {
        type: 'input',
        name: 'url',
        message: 'What is the canonical URL (with protocol)?',
      },
      {
        type: 'input',
        name: 'author',
        message: 'What is the name of the author (used for meta tags)?',
      },
      {
        type: 'input',
        name: 'title',
        message: 'What is the meta title?',
      },
      {
        type: 'input',
        name: 'language',
        message: 'What is the language?',
        default: 'en',
      },
      {
        type: 'input',
        name: 'locale',
        message: 'What is the locale?',
        default: 'en_AU',
      },
      {
        type: 'input',
        name: 'image',
        message: 'Give a path to the social media card image (start with a "/").',
        default: '/social-image.png',
      },
      {
        type: 'input',
        name: 'googleAnalytics',
        message: 'What is your Google Analytics ID?',
      },
      {
        type: 'input',
        name: 'twitterCardType',
        message: 'What kind of Twitter card is this?',
        default: 'summary',
      },
      {
        type: 'input',
        name: 'twitterCreator',
        message: 'What is the username of the creator\'s Twitter account?',
      },
      {
        type: 'input',
        name: 'twitterPublisher',
        message: 'What is the username of the publisher\'s Twitter account?',
      },
      {
        type: 'input',
        name: 'ogType',
        message: 'What is the OpenGraph type?',
        default: 'website',
      },
      {
        type: 'input',
        name: 'colour',
        message: 'What is the preferred hex colour for the top loading bar?',
        default: '#000000',
      },
    ];

    return this.prompt(prompts).then(props => {
      this.props = props;
    });
  }

  writing() {
    this.fs.copy(this.templatePath("application"), this.destinationPath());

    this.fs.copyTpl(
      this.templatePath("README.md"),
      this.destinationPath("README.md"),
      {
        name: this.props.siteName,
        description: this.props.description,
      }
    );

    /* Write the JSON files. */

    const metaVars = {
      "title": this.props.title,
      "url": this.props.url,
      "lang": this.props.language,
      "locale": this.props.locale,
      "colour": this.props.colour,
      "image": this.props.image,
      "googleAnalytics": this.props.googleAnalytics,
      "twitter": {
        "cardType": this.props.twitterCardType,
        "creator": this.props.twitterCreator,
        "publisher": this.props.twitterPublisher,
      },
      "og": {
        "type": this.props.ogType,
        "siteName": this.props.siteName
      },
    };

    this.fs.writeJSON(this.destinationPath("metaVars.json"), metaVars);

    var pkg = this.fs.readJSON(this.templatePath("application/package.json"));

    pkg.name = this.props.siteName;
    pkg.description = this.props.description;
    pkg.author = this.props.author;

    this.fs.writeJSON(this.destinationPath("package.json"), pkg);
  }

  install() {
    this.installDependencies();
  }
};
