// inserting data in mongodb 
use gagankart
db.items.insertOne({ name:"samsungm 34s", price:393999, rating:4.5, qty:233, Sold:145, category:"mobile"})
db.items.insertMany([
    { name:"vivo3s", price:390999, rating:4.5, qty:203, Sold:155, category:"mobile"},
    { name:"samsungm 34", price:303999, rating:4.5, qty:23, Sold:125, category:"mobile"},
    { name:"oneplus nord", price:293999, rating:4.5, qty:233, Sold:145, category:"mobile"},
    { name:"redmi note 12", price:193999, rating:4.5, qty:233, Sold:145, category:"mobile"},
    { name:"dell inspiron", price:593999, rating:4.5, qty:233, Sold:145, category:"laptop"}])