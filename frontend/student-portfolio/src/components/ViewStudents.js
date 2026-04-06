import { useEffect, useState } from "react";
import axios from "axios";

function ViewStudents() {
    const [students, setStudents] = useState([]);
    const [editingStudent, setEditingStudent] = useState(null);

    useEffect(() => {
        fetchStudents();
    }, []);

    const fetchStudents = async () => {
        try {
            const res = await axios.get("http://localhost:5000/student/view");
            setStudents(res.data);
        } catch (error) {
            console.log(error);
        }
    };

    const deleteStudent = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/student/delete/${id}`);
            fetchStudents();
        } catch (error) {
            console.log(error);
        }
    };

    const updateStudent = async () => {
        try {
            await axios.put(
                `http://localhost:5000/student/update/${editingStudent._id}`,
                editingStudent
            );
            setEditingStudent(null);
            fetchStudents();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="box">
            <h2>Student List</h2>

            {students.map((s) => (
                <div key={s._id} className="student-item">

                    {/* LINE 1: DATA */}
                    <div className="student-info">
                        {s.name} | {s.email} | {s.course}
                    </div>

                    {/* LINE 2: BUTTONS */}
                    <div className="student-actions">
                        <button onClick={() => deleteStudent(s._id)}>
                            Delete
                        </button>

                        <button onClick={() => setEditingStudent(s)}>
                            Edit
                        </button>
                    </div>
                </div>
            ))}

            {/* EDIT SECTION */}
            {editingStudent && (
                <div style={{ marginTop: "20px" }}>
                    <h3>Edit Student</h3>

                    <input
                        value={editingStudent.name}
                        onChange={(e) =>
                            setEditingStudent({
                                ...editingStudent,
                                name: e.target.value
                            })
                        }
                    />

                    <input
                        value={editingStudent.email}
                        onChange={(e) =>
                            setEditingStudent({
                                ...editingStudent,
                                email: e.target.value
                            })
                        }
                    />

                    <input
                        value={editingStudent.course}
                        onChange={(e) =>
                            setEditingStudent({
                                ...editingStudent,
                                course: e.target.value
                            })
                        }
                    />

                    <button onClick={updateStudent}>
                        Update
                    </button>
                </div>
            )}
        </div>
    );
}

export default ViewStudents;