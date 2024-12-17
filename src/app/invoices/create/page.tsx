import styles from './create.module.css'
import Link from "next/link"

import programmesData from '../../../../public/config/programmes.json'
import studentsData from '../../../../public/config/students.json'

const CreateInvoice = () => {



    const renderStudentsData = studentsData.map((student, id) => {
        return (
            <option key={id}>{student.student_name}</option>
        )

    })

    const renderProgrammesData = programmesData.map((programme, id) => {
        return (
            <option key={id}>{programme.programme_name}</option>
        )

    })

    return (
        <div className={styles.wrapper}>
            <Link href={'/'}>
                <button>
                    Go Home
                </button>
            </Link>
            <h1>Create an Invoice</h1>
            <input placeholder='Student ID' />
            <div>
                <label>Select Student</label>
                <select>

                    {renderStudentsData}
                </select>
            </div>
            <div>
                <label>Select Programme</label>
                <select>

                    {renderProgrammesData}
                </select>
            </div>
            <button>Generate Bill</button>
        </div>
    )
}

export default CreateInvoice