/*exports.world=function(){
    console.log('Hello World');
}*/
//封装模块
function Hello(){
    var name;
    this.setName=function(thyName){
        name=thyName;
    };
    this.sayHello=function(){
        console.log('Hello'+name);
    }
}
module.exports=Hello;