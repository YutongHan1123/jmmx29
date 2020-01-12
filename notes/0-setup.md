# Setup

This is a guide to setup your coding environment for the semester. 

## Terminal

The default command line app on mac is `Terminal.app`. You can find it in the Applications folder or you can search for it using Spotlight.

## XCode Command Line Tools

[XCode](https://developer.apple.com/xcode/) is an Integrated Development Environment (IDE) made by Apple. You can use it to make apps for the different Apple devices. Their command line tools are easy to install and are used as the basis of other command line software.

To install, copy and paste the following line into your preferred Terminal app.

```bash
xcode-select —install
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

TODO add how to setup ssh keys.

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

These are some of the extensions and things I've done to make work easier for myself.

TODO add extensions I use
TODO add explanation of how to set up eslint and prettier to make code correct.
