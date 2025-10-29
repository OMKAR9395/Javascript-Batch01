  var students = [
            {roll:1,name:"Harry",marks:75},
            {roll:2,name:"Ravi",marks:60},
            {roll:3,name:"Spider Man",marks:78},
            {roll:4,name:"Omkar",marks:95}
        ]

        function loadStudent(){
            var body = document.getElementById("studentBody");
            body.innerText = "";
            for(let s of students){
                body.innerHTML += `
                <tr>
                    <td>${s.roll}</td>
                    <td>${s.name}</td>
                    <td>${s.marks}</td>
                    </tr>
                    `;
            }
        }
 let rollInput,nameInput,marksInput;

        function addStudent(){
            rollInput = document.getElementById("roll");
            nameInput = document.getElementById("name");
            marksInput = document.getElementById("marks");

            var newStudent = {
                roll:parseInt(rollInput.value),
                name:nameInput.value,
                marks:parseInt(marksInput.value)
            }
            students.push(newStudent);

            loadStudent();
            clearControls();
        }

        function clearControls(){
            rollInput.value = "";
            nameInput.value ="";
            marksInput.value ="";  
        }