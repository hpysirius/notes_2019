var cat = {
    say(){
        console.log('meow~');
    },
    jump(){
        console.log('jump');
    }
}

var tiger = Object.create(cat, {
    say: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: () => {
            console.log('roar');
        }
    }
})

var anotherCat = Object.create(cat);
anotherCat.say();

var anotherTiger = Object.create(tiger);
anotherTiger.say();


function People(){
    this.name = 'hpysirius';
    this.getName = () => {
        console.log(this.name);
    }
}

const hpy = new People;
hpy.getName();

function People2(){
}

People2.prototype.name = 'hpysirius22';
People2.prototype.getName = function(){
    console.log(this.name);
}
// People2.prototype.getName = () => {
//     console.log(this);
//     console.log(this.name);
// }
const hpy2 = new People2;
hpy2.getName();