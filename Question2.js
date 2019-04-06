var student ={
    "FName" : "Dilanka",
    "LName" : "Wijesekera",
    "Age"  :  22,
    "School": "MGCK",
    "getFullName" : function( ){
        return this.FName + " "+ this.LName;
    }
};

console.log(student);
console.log(student.getFullName());
