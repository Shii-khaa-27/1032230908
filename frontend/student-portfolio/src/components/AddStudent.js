import { useState } from "react";
import axios from "axios";

function AddStudent() {
    const [student, setStudent] = useState({
        name: "",
        email: "",
        course: ""
    });

    const handleChange = (e) => {
        setStudent({ ...student, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // VALIDATION
        if (!student.name || !student.email || !student.course) {
            alert("Please fill all fields!");
            return;
        }

        try {
            await axios.post("http://localhost:5000/student/add", student);
            alert("Student Added");

            setStudent({ name: "", email: "", course: "" });

            // refresh list
            window.location.reload(); // simple fix (works reliably)
        } catch (error) {
            console.log(error);
        }
    };

    return (
    <div className="box">
        <h2>Add Student</h2>

        <form onSubmit={handleSubmit}>
            <input name="name" placeholder="Name" value={student.name} onChange={handleChange} />
            <input name="email" placeholder="Email" value={student.email} onChange={handleChange} />
            <input name="course" placeholder="Course" value={student.course} onChange={handleChange} />

            <button type="submit">Add</button>
        </form>
    </div>
);
}

export default AddStudent;