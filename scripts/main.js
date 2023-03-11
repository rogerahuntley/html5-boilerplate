// here we can import and use global scripts
// can't think of any examples right now, but it's a good idea to have this file
// a lot of the time you'll want to tuck functionality into web components
// but sometimes you'll want to use a global script

console.log("hello world!")
console.log("type 'testFunction()' in the console run a global function")

const testFunction = () => {
  alert('nice!')
}