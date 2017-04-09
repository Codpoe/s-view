# input

need:

- model

  It is always a `String`.

option:

- type

  `text`or`password`. The default is `text`.

- size

  `small`, `normal`or`large`. The default is `normal`.

- placeholder

  Just placeholder. The default is ''.

- pendClickable

  `Boolean`, `true`or`false`. The default is `false`.

- readonly

  `Boolean`, `true`or`false`. If true, you will not allowed to input it by typing words. The default is false.

- disabled

  Just disabled. The default is `false`.

- validator

  `Object`. You can set five different validator at most in this object:
  
    - `required`
    
      `value`: `Boolean`, `error`: `String`.
      
    - `min`
    
      `value`: `Number`, `error`: `String`.
      
    - `max`
    
      `value`: `Number`, `error`: `String`.
      
    - `regexp`
    
      `value`: /type your regexp here/, `error`: `String`.
      
    - `custom`
    
      `fn`: `Function` with an argument, and it must return a `Boolean`. `error`: `String`.