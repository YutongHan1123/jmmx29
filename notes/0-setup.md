# Setup

This is a guide to setup your coding environment for the semester. 

## Terminal

The default command line app on mac is `Terminal.app`. You can find it in the Applications folder or you can search for it using Spotlight.

## XCode Command Line Tools

[XCode](https://developer.apple.com/xcode/) is an Integrated Development Environment (IDE) made by Apple. You can use it to make apps for the different Apple devices. Their command line tools are easy to install and are used as the basis of other command line software.

To install, copy and paste the following line into your preferred Terminal app.

```html
xcode-select --install
```

## Github

If you don't already have an account, sign up for an account on [github.com](https://github.com/). Github is a site where you can backup and share code. It's centered around `git`, an open-source version control system &mdash; a tool for keeping track of your code as it changes. `git` already comes installed on your Mac, but we'll install a newer version through Homebrew later.

## Homebrew

[Homebrew](https://brew.sh/) is a package manager for macOS. A package manager is something like an app store &mdash; except everything is free.

To setup homebrew, copy the code below and run it in a terminal:

```bash
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

We'll be using Homebrew to install the rest of the software we need. You can choose to run the code below for each item, or skip to the end to run it all at once. 

---

When you first open a terminal window, you should always run the following commands, line by line, to make sure Homebrew will install the most up-to-date version of whatever it is you want to work with:

```bash
brew update
brew upgrade
brew cleanup
```

The `update` command will make sure the links to all the homebrew packages are up to date.

The `upgrade` command will upgrade all the installed apps that have a newer version available through Homebrew. If you only want to upgrade one package, you can run `brew upgrade [package name here]`. For example, `brew upgrade git` will only upgrade the `git` package that's been installed via Homebrew.

The `cleanup` command will get rid of older versions and help keep your computer from getting too cluttered.

### Git

To install git via homebrew, run:

```bash
brew install git
```

Once installed, you should configure Git for your machine. The folks over at Gitlab ([Gitlab](https://about.gitlab.com/) is an alternative to Github.) have a short section that explains how to do this really nicely: [Add your Git username and set your email](https://docs.gitlab.com/ee/gitlab-basics/start-using-git.html#add-your-git-username-and-set-your-email).

Once you've set up your username and email, you should follow the following tutorials to set up SSH access to Github (you can read about the SSH protocol [here](https://help.github.com/en/github/authenticating-to-github/about-ssh)):

1. [Checking for Existing SSH keys](https://help.github.com/en/github/authenticating-to-github/checking-for-existing-ssh-keys)
1. [Generating a new SSH key and adding it to the ssh-agent](https://help.github.com/en/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)
1. [Adding a new SSH key to your GitHub account](https://help.github.com/en/github/authenticating-to-github/adding-a-new-ssh-key-to-your-github-account)
1. [Testing your SSH connection](https://help.github.com/en/github/authenticating-to-github/testing-your-ssh-connection)

you should follow the followign tutorials to add SSH key
### iTerm2

An alternative to the `Terminal.app` that offers some extra functionality.

To install with Homebrew:
```bash
brew cask install iterm2
```

You can also download it from their website: https://iterm2.com/

### Visual Studio Code

A text editor like Atom and Sublime Text. What text editor you use is up to you, but I prefer this one for its speed and variety of extensions.

You can download it from [here](https://code.visualstudio.com/download) or install using Homebrew:

```bash
brew cask install visual-studio-code
```

### Sourcetree

Using git from the command line can be scary at first. [Sourcetree](https://www.sourcetreeapp.com/) is a Git client &mdash; a GUI tool that lets you do everything you can do with git on the terminal but without touching the command line.

You can download it from their page above or install via Homebrew:

```bash
brew cask install sourcetree
```

### Node and NPM

We'll be making use of the node.js and the node package manager (npm) later on in the course. You should just install it via Homebrew for a quick and painless setup:

```bash
brew install node npm
```

## Visual Studio Code Extensions

These are some of the extensions I use to make coding easier for myself.

* [Night Owl](https://marketplace.visualstudio.com/items?itemName=sdras.night-owl)
* [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
* [Indenticator](https://marketplace.visualstudio.com/items?itemName=SirTori.indenticator)
* [Highlight Matching Tag](https://marketplace.visualstudio.com/items?itemName=vincaslt.highlight-matching-tag)
* [HTML CSS Support](https://marketplace.visualstudio.com/items?itemName=ecmel.vscode-html-css)
* [HTML Class Suggestions](https://marketplace.visualstudio.com/items?itemName=AndersEAndersen.html-class-suggestions)
* [Highlight Matching Tag](https://marketplace.visualstudio.com/items?itemName=vincaslt.highlight-matching-tag)
* [GitLens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)
* [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
* [CSS Peek](https://marketplace.visualstudio.com/items?itemName=pranaygp.vscode-css-peek)
* [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker)
* [Bracket Pair Colorizer 2](https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer-2)
* [Auto Rename Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag)
* [IntelliSense for CSS class names in HTML](https://marketplace.visualstudio.com/items?itemName=Zignd.html-css-class-completion)
* [JavaScript (ES6) code snippets](https://marketplace.visualstudio.com/items?itemName=xabikos.JavaScriptSnippets)

## Setup ESlint globally

Let's follow along with this together: [https://github.com/wesbos/eslint-config-wesbos](https://github.com/wesbos/eslint-config-wesbos)
