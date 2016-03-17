# Textarea for mdl-form

## Start

Install package:
```
  npm install mdl-form mdl-form-textarea react jquery
```

You need to see [mdl-form](https://github.com/HsuTing/mdl-form.git).

## Parameter

- `style` -> change style
- `className` -> class
- `label` -> name of textarea
- `rows` -> rows of textarea
- `isNotRequire` -> if you use `isNotRequire: true`, it can be empty.
- `change`(function) -> you can do something when teatarea is changed. `1st` argument is this component value.

## Example

```
{   
  'id': 'component_id',
  'className': 'class',
  'label': 'Label',
  'style': {'color': 'red'},
  'rows': '10'
}
```
