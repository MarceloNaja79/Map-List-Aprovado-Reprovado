const students = [
    {name: 'Rodolfo', testGrade: 7 },
    {name: 'Marcelo', testGrade: 5 },
    {name: 'Maria', testGrade: 4 },
    {name: 'Rayssa', testGrade: 9 },
    {name: 'Jessica', testGrade: 10 },
    {name: 'João', testGrade: 2 },
    {name: 'Bruno', testGrade: 3},
    {name: 'Zara', testGrade: 6 },
    {name: 'Gabriel', testGrade: 7 },
    {name: 'Indianara Naja', testGrade: 9 },
];

const MIN_GRADE = 5;

const studentsWithStatus = students.map(student => {
    return {
        name: student.name,
        testGrade: student.testGrade,
        status: student.testGrade >= MIN_GRADE ? 'Aprovado' : 'Reprovado'
    };
});

console.log(studentsWithStatus);