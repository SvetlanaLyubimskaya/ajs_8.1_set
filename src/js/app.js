export default class Team {
    constructor() {
        this.members = new Set();
    }

    add(name){
        if(!this.members.has(name)) {
            throw new Error('Объект уже существует в команде');
        } else {
            this.members.add(name);
        }
    };

    addAll(...name){
        if (!this.members.has(name)) {
            throw new Error('Объект уже существует в команде');
        } else {
            this.members.name.forEach(name => result.add(name));
        }  
    };
    
    toArray() {
        const array = [...this.members];
        console.log(array);
    };

}