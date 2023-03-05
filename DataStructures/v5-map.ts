// Object vs Map
/**
 * Objects are unordered whereas maps are ordered
 * Keys in objects can only be string or symbol type whereas in maps,
 * they can be of any type
 * An object has a prototype and may contain a few default keys which may
 * collide with your own keys if you're not careful. A map on the other
 * hand does not contain any keys by default
 * Objects are not iterables whereas maps are iterables
 * The number of items in a map are readily available with size property
 * Apart from storing data, you can attach functionality to an object,
 * maps are restricted to storing data
 */

const map = new Map([
  ["a", 2],
  ["b", 3],
])

map.set("c", 3)
map.delete("c")
map.has("a") // true
map.size // 2
map.clear()

for (const [key, value] of map) {
  console.log(`${key}: ${value}`)
}
