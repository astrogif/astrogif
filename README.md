# [AstroGif](https://astrogif.com)

![AstroGif](logo.png)

![Build status](https://travis-ci.org/astrogif/astrogif.svg?branch=master)

AstroGif is a simple menu bar app that easily lets you search for animated gifs and copy their URLs or their markdown quivalent, to the clipboard. It supports Mac, Windows, and various Linux flavours,

![](demo.gif)

## Using

Once installed you'll have an AstroGif icon in your taskbar that, when clicked, will open up the app in the center of the screen. Alternatively you can use the globally registered keyboard shortcut - this is `Control + Alt + Space` by default, but this can be modified. Pressing `Enter` once you have found a gif will copy the URL to the clipboard. Pressing `Escape` will close the window.

## Settings

### Global shortcut

If you don't like the current global shortcut (or it interferes with another app you use) then you can change it here.

### Copying

By default AstroGif will copy the gif's URL but can also surround it with the appropriate markdown syntax.

### On hide

Will reset back to the search box once the app hides by default, but you can optionally set it so that the next time the app shows the last search is still visible.

### Previews

Will embed the `.gif` by default, but you can optionally choose to embed a `.mp4` version of the image which generally has a smaller filesize so is quicker to load fully (altough chosing `.gif` tends to load the initial frame quicker, even if the rest of the file hasn't downloaded). The `.gif` URL will still be copied, even if you chose to preview the image as a `.mp4`.

## Bugs

If you find any issues with AstroGif (it's still a young project!) then please [file an issue](https://github.com/jamesmacfie/astrogif/issues). PRs are also welcome :)

## Updates

I've updated _some_ packages, like the Electron ones, but a bunch of this app is wildly out of date. Shouldn't take too much effort to update them all (well, except Webpack no doubt), I just haven't been bothered yet.

## Running locally

After cloning the project run `yarn install` followed by `API_KEY={your_giphy_api_key_here} yarn dev`. A local server will be spun up on port 8000 for hot reloading the app as you develop. If you want to build the app then, depending on your OS, you can run the release script. These are `release-mac`, `release-win`, and `release-linux` (so, if you're on a mac, for example, you would run `yarn release-mac`). These won't have the API Key embedded in them so you'll need to hard code that reference (I need to sort this bit out, I know). There are also a few other linux distro specific release scripts too - check `package.json` for these. The packaged apps are built into a `release` folder.

### Icons are from [Dale Humphries](http://www.dalehumphries.com/space-icon-set)
