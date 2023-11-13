# A/V Client Wrapper Lib

![](https://img.shields.io/badge/Foundry-v11-informational)
[![Donate via Ko-Fi](https://img.shields.io/badge/donate-ko--fi-red.svg?logo=ko-fi)](https://ko-fi.com/darkmoor) [![Latest Version](https://img.shields.io/github/v/tag/patrickporto/avclientwrapper-lib?label=version)](https://github.com/patrickporto/avclientwrapper-lib/releases) [![Download Count](https://img.shields.io/github/downloads/patrickporto/avclientwrapper-lib/latest/avclientwrapper-lib.zip)](https://github.com/patrickporto/avclientwrapper-lib/releases)
![Forge Installs](https://img.shields.io/badge/dynamic/json?label=Forge%20Installs&query=package.installs&suffix=%25&url=https%3A%2F%2Fforge-vtt.com%2Fapi%2Fbazaar%2Fpackage%2Favclientwrapper-lib&colorB=4aa94a)

## About

This is a library for Foundry VTT that provides a wrapper for the A/V client. It allows you to easily create and manage audio and video streams. This module provides a library of functions to help developers to create modules for Foundry VTT.

## API

### Detecting the A/V client

You can detect if the A/V client is available by using the `game.modules.get('avclientwrapper-lib').api.detectAVClient()` function.

### Replace the stream tracks

You can replace the tracks of a stream by using the `game.modules.get('avclientwrapper-lib').api.replaceStreamTracks(stream)` function.
