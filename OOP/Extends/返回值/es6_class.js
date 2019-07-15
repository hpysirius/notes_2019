class Parent{
	constructor(){
    	this.name = 'tom';
      	// return {
        // 	aa: 11
        // }
    }
}


class Child extends Parent {
  constructor(){
  	super();
    this.age = 18;
  }
}

var child = new Child();
console.log(child);