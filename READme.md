# Watchman

This package allows you to easily catch errors in your code with Watchman

NB: You need to have a Watchman account to use this package. Sign up at `https://www.trywatchman.com/`

## Installation

`npm i @trywatchman/watchman`

## Usage

```
import Watchman from '@trywatchman/watchman'

const watchman = new Watchman('your-api-key', 'your-environment')

async function doSomething() {
    try {
        // doing something
    } catch (error) {
        watchman.capture(error)
    }
}
```