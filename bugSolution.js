```javascript
// Correct usage of $inc operator in MongoDB update operation
db.collection('myCollection').updateOne({ _id: 1 }, { $inc: { field: 10 } });
// Or if you need to increment by a calculated value:
let incrementValue = 10; 
db.collection('myCollection').updateOne({ _id: 1 }, { $inc: { field: incrementValue } });
```