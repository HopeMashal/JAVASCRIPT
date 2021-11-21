const school = {
    teachers: [
    {
    id: 1,
    name: "Pinchas",
    subjects: ["chemistry", "biology", "physics"],
    students: [],
    capacityLeft: 3,
    },
    {
    id: 2,
    name: "Williams",
    subjects: ["history", "ethics"],
    students: [],
    capacityLeft: 2,
    },
    ],
    students: [
    {
    id: 10,
    name: "Jennifer",
    age: 20,
    },
    {
    id: 11,
    name: "Howard",
    age: 23,
    },
    {
    id: 12,
    name: "Old-Timmy",
    age: 86,
    },
    {
    id:13,
    name: "Houston",
    age: 21,
    },
    ],
    };


    function findPerson(type, id) {
        return school[type].find(person => person.id == id);
    }
    console.log(findPerson("teachers", 1));
    
    function assignStudent(id, subject) {
        const schoolTeachers = (school.teachers.filter(teacher => teacher.subjects.includes(subject))).filter(teacher => teacher.capacityLeft > 0);
        if (schoolTeachers.length != 0) {
            school.teachers.find(teacher => teacher.id == schoolTeachers[0].id).students.push(id);
            school.teachers.find(teacher => teacher.id == schoolTeachers[0].id).capacityLeft--;
        } else {
            console.log("Sorry, no available teachers left");
        }
    }
    assignStudent(13, "chemistry")
    console.log(school.teachers.find(p => p.subjects.includes("chemistry")));
    assignStudent(12, "english")
    
    function assignTeachersSubject(id, subject) {
        const teacherObj = school.teachers.find(teacher => teacher.id == id);
        if (!teacherObj.subjects.includes(subject)) {
            school.teachers.find(teacher => teacher.id == id).subjects.push(subject);
        }
    }
    assignTeachersSubject(1, "calculus")
    console.log(school.teachers.find(p => p.id == 1));
    
    function addTeacher(id, name, subjects, students,capacityLeft) {
        if (school.teachers.find(teacher => teacher.id == id)) {
            console.log("Please, choose a different ID, this ID is not available ");
        } else {
            school.teachers.push({id: id, name: name, subjects: [subjects], students: [students],capacityLeft: capacityLeft});
        }
    }
    addTeacher(5, "Hope", "japanese", 12, 4)
    console.log(school.teachers)
    addTeacher(2, "Amal", "math", 11, 3)
    