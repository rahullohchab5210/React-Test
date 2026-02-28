import React from 'react'

function JavasriptTask() {


    return (
        <>
            {/* ########################################### Variables ####################################### */}
            <h1 className='text-2xl font-bold my-5'>Variables</h1>

            {/* ***var*** */}
            <p className='mt-5'>var {`=>`} var is function-scoped and can be redeclared and reassigned</p>
            <p >var name = "rahul";<br />
                var name = "vinay";<br />
                name = "sachin";
            </p>

            {/* ***let*** */}
            <p className='mt-5'>let {`=>`} let is block-scoped and can be reassigned but cannot be redeclared</p>
            <p>let name = "rahul";<br />
                name = "vinay";<br />
            </p>

            {/* ***const*** */}
            <p className='mt-5'>const {`=>`} const is block-scoped and cannot be redeclared or reassigned</p>
            <p>const name = "rahul";</p>




            {/* ########################################### Data-Types ####################################### */}
            <h2 className='text-2xl font-bold my-5'>Data-Types</h2>
            <h3>Two Types of Data-Types in JavaScript: Primitive and Non-Primitive</h3>
            <strong>primitives:-</strong>
            <ul>
                <li className='mt-3'>String = ""; <br />
                    example: let name = "rahul";
                </li>
                <li className='mt-3'>Number = 123; <br />
                    example: let age = 25;
                </li>
                <li className='mt-3'>Boolean = true/false; <br />
                    example: let isStudent = true;
                </li>
                <li className='mt-3'>Null = null; <br />
                    example: let emptyValue = null;
                </li>
                <li className='mt-3'>Undefined = undefined; <br />
                    example: let undefinedValue;
                </li>
                <li className='mt-3'>Symbol = Symbol(); <br />
                </li>
                <li className='mt-3 mb-4'>BigInt = 123n; <br />
                    example: let bigIntValue = 12383676827n;
                </li>
            </ul>
            <strong>  Non-Primitives:-</strong>
            <ul>
                <li className='mt-3'>Object = {`{}`}; <br />
                    example: {`let person = { name: "rahul", age: 18};`}
                </li>
                <li className='mt-3'>Array = []; <br />
                    example: let numbers = [1, 2, 3, 4, 5];
                    example: let fruits = ["apple", "banana", "orange"];
                </li>
                <li className='mt-3'>Function = {`  function(){};     `} <br />
                    example:{`   function greet() { console.log("Hello!"); }   `}
                </li>
            </ul>







            {/* ########################################### Objects ####################################### */}
            <h2 className='text-2xl font-bold my-5'>Objects</h2>

            <p>{`    let student = { name: "rahul", age: 18, course: "Front-End Development", isEnrolled: true };        `} <br />
                example: console.log(student.name);    Output: rahul; <br />
                {/* add grade in student */}
                {` let addGrade = {...student, grade: "A"} `}
            </p>




            {/* ########################################### Find Duplicate Numbers in an Array and Count them ####################################### */}
            <h2 className='text-2xl font-bold my-5'>Find Duplicate Numbers in an Array and Count them</h2>
            {/* <p>let numbers = [1, 2, 3, 2, 4, 5, 1, 3, 3]; 

const counts = numbers.reduce((acc, num) => {
                    acc[num] = (acc[num] || 0) + 1;
                return acc;
}, { });

const duplicates = Object.entries(counts).filter(([num, count]) => count > 1);

                console.log("Duplicate counts:", Object.fromEntries(duplicates));

duplicates.forEach(([num, count]) => {
                    console.log(Number ${ num } appears ${ count } times.);
});</p>
                */}






            {/* ###########################################  Find Factorial of a Number ####################################### */}
            {`function findFactorial(val) {
                let result = 1;
                for (let i = 1; i <= val; i++) {
                  result *= i;
                }
                return result;
                }
                console.log(findFactorial(5)); // 120
            `}

        </>
    )
}


export default JavasriptTask