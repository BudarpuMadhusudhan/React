# ComposingComponent

A reusable React class component that displays a counter with increment and delete functionality.

## Features
- Displays a numeric value (counter)
- Increment button to increase the value
- Delete button to remove the component (calls a parent handler)
- Dynamic badge styling based on value

## Props
| Prop      | Type     | Description                                      |
|-----------|----------|--------------------------------------------------|
| value     | number   | Initial value for the counter                    |
| id        | any      | Unique identifier for the component (for delete) |
| onDelete  | function | Callback to handle delete action                 |

## Usage
```jsx
import ComposingComponent from './ComposingComponent';

<ComposingComponent
  value={5}
  id={1}
  onDelete={handleDelete}
/>
```

## Methods
- `handleIncrement`: Increments the counter value
- `getStyle`: Returns badge class based on value
- `formatCount`: Returns formatted value (shows 'Zero' if value is 0)

## Example
```jsx
<ComposingComponent value={0} id={42} onDelete={id => alert(id)} />
```

---

> This component is designed for demonstration and learning purposes.
