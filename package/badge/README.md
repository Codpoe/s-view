# s-badge

need:

- `value`

  `Number`

- `max`

  `Number`. If `value > max`, the badge content will be the `max`.

option:

- `is-dot`

  `Boolean`. If `true`, the badge will be a red dot. The default is `false`.

- `hidden`

  `Boolean`. If `true`, the badge will be hidden. The default is `false`.

usage:

eg.

```
<s-badge :value="6" :max="99">
    <s-button type="hollow" >badge</s-button>
</s-badge>
```