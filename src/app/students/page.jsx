import StudentCard from "@/components/StudentsCard/StudentCard";


const Studentspage = async() => {

    const res = await fetch("http://localhost:1200/students");
    const students = await res.json();
    // console.log("all students", students);
    
    
    return (
        <div className="w-[85%] mx-auto">
            <h1 className="text-4xl my-10 font-bold"> All students : </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    students.map((student) => <StudentCard key={student.id} student={student}></StudentCard>)
                }
            </div>
        </div>
    );
};

export default Studentspage;