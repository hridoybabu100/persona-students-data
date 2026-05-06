

const StudentCard = ({ student }) => {
  return (
    <div className="bg-white rounded-2xl mb-10 shadow-md hover:shadow-xl transition duration-300 p-5 border border-gray-100 hover:-translate-y-2">
      
      {/* Avatar */}
      <div className="flex items-center gap-4 mb-4">
        <div className="w-14 h-14 rounded-full bg-linaer-to-r from-indigo-500 to-purple-500 flex items-center justify-center text-white text-xl font-bold">
          {student.name.charAt(0)}
        </div>

        <div>
          <h2 className="text-lg font-semibold text-gray-800">
            {student.name}
          </h2>
          <p className="text-sm text-gray-500">{student.department}</p>
        </div>
      </div>

      {/* Info */}
      <div className="space-y-2 text-sm text-gray-600">
        <p>📧 {student.email}</p>
        <p>📞 {student.phone}</p>
      </div>

      {/* GPA */}
      <div className="mt-4 flex justify-between items-center">
        <span className="text-sm text-gray-500">GPA</span>
        <span className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm font-medium">
          {student.gpa}
        </span>
      </div>

      {/* Button */}
      <button className="mt-5 w-full bg-linear-to-r from-indigo-500 to-purple-500 text-white py-2 rounded-xl hover:opacity-90 transition">
        View Details
      </button>
    </div>
  );
};

export default StudentCard;