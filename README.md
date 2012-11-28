## Part 3
Part 3 adds in gesture support and scolling.  Specifically, the following gestures are recognized:

* Double tap on an image to go fullscreen
* Pinch/zoom/rotate an image to manipulate it
* Ability to scroll through list of images

The key areas of the code to look at are:

* The addition of several microframeworks (overthrow and hammer) in the photos.html file
* The definition of the registerImageEventListeners function and the associated event handlers

## Overview

This is a simple, sample app showing the beginnings of a hybrid application for iOS and Android.  It demonstrates the following:

* Use of microframeworks (underscore, hammer.js, overthrow)
* Touch based gestures (double tap, rotate, scale)
* Accessing native functionality of device via JS


## Requirements

To fully run this example you will want to install the following:
* `Node`: Install a recent version of node so that you can start the demo web server.
* `App Cloud Workshop`: Install the workshop from the Google Play/Apple App Store.  This allows you to preview the app on your phone.

## Install

* Clone this repo git clone `https://github.com/roark31337/devcon-demo-app`
* Switch between branches to follow along with the creation progression of the site using the commands `git checkout part1`, `git checkout part2`...etc.
* To start the application run `node app.js`
* Navigate to `http://your.ip.address:3773/scan/devcon-demo-app`

# Note
In each remote branch, 'part1', 'part2'...the readme file updates with notes about that section.  You should be sure to checkout those notes for what to look for, along with some helpful tips.

