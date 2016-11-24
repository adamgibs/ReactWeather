names = ['Bob', 'Sue', 'Mary'];



//var returnMe = (name) => name + '!';
//console.log(returnMe('Adam'));

var person = {
  name: 'Adam',
  greet: function(){
    names.forEach((name) => {
      console.log(this.name + ' says hi to ' + name)
    });
  }
};


var addStatement = (a,b) =>{
  return a + b;
};

var addExpression = (a, b) => a + b;

console.log(addExpression(2, 2));
