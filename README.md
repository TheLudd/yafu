# yafu
Yet another functional utility.

## Purpose
yafu is a functional programming library that supplies basic useful functions for JavaScript programming.
Very similar to [Ramda](http://ramdajs.com) but with a slightly different philosophy.

Key points:
  * [`curry`](https://github.com/TheLudd/yafu/blob/master/lib/curry.js) works a bit differently than in many other JavaScript libraries,
  specifically when it is the case that a curried function receives more agruments than it has declared
  * each function *really* only does one thing and one thing only
  * no checking of types inside functions
  * no varardic funtions
  * no inspection of `arguments` (exception is the `curry` function)
  * no return of `null` or `undefined`

The idea is to be strict on these rules for the sake of being strict. This in order to see if a library like
this results in better code in applications and programs where it is used.

## API
For now, check the `lib` folder for the available functions. Each file should contain documentation.
