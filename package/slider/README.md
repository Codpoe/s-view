# slider

need:

- model

  Always a Number.

options:

- min

  The min value of the slider. It is a `Number`. The default is `0`.

- max

  The max value of the slider. It is a `Number`. The default is `100`.

- stepValue

  The value of one step. It is a `Number`. The default is `1`.


- trackWidth

  The width of the slider track. It is a `Number`, and the unit is `px`. The default is `100`.

- shouldShowStops

  Boolean. The default is `false`.

- disabled

  Boolean. The default is `false`.

> Note:<br>
In the HTML file, use `step-value`, `track-width` and `should-show-stops` instead of `stepValue`, `trackWidth` and `shouldShowStops`. Of course, there are always `v-bind` or `:` before the words. For more information, just read the Vue.js document.