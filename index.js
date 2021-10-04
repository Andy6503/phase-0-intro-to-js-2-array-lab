const cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(){
    cats.push("Ralph")
}
function destructivelyPrependCat(){
    cats.unshift("Bob")
}
function destructivelyRemoveLastCat(){
    cats.pop()
}
function destructivelyRemoveFirstCat(){
    cats.shift()
}
function appendCat(name) {
   let appendedCats = [...cats,name];
    return appendedCats;
}
function prependCat(name) {
    let prependedCat = [name,...cats];
    return prependedCat;
}
function removeLastCat() {
    let catsRemoved = cats.slice(0,-1)
    return catsRemoved
}
function removeFirstCat() {
    let catsRemovedFirst = cats.slice(1, cats.length)
    return catsRemovedFirst
}