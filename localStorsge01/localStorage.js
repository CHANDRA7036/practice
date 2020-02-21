alert('connected');
localStorage.setItem('hero', 'thar');

localStorage.setItem('todo', 'playing cricket');

myHero = localStorage.getItem('hero');
console.log(myHero);
mytodo = localStorage.getItem('todo');
console.log(mytodo);
localStorage.setItem('hero', 'power');
console.log(localStorage.getItem('hero'));
localStorage.removeItem('todo');
myHero = localStorage.getItem('hero');
console.log(myHero);
localStorage.clear();