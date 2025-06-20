let places :string[] = ['Multan','Agra','Japan','China','Italy'];
// print ur [] in it's originol order.
console.log(places);
// print ur [] in alphabetical order without modifying actual list.
console.log([...places].sort());
// show ur [] is still in it's original order.
console.log(places);
// print ur [] in reverse alphabetical order without change the order of original list.
console.log([...places].sort().reverse());
// show ur list is still in it's original order by printing it again.
console.log(places);
// reverse order of ur list .print [] to show that it's order has changed.
console.log(places.reverse());
// reverse order of ur list again.print list to show it's back to it's original order.
console.log([...places].reverse());
// sort ur [] so it's stored in alphabetical order.print [] to show it's order has been changed.
console.log(places.sort());
// sort to changed ur [] so it's stored in reverse alphabetical order.print list to show that it's order has changed.
console.log(places.sort().reverse());
 