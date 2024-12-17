import Link from "next/link"
import invoicesData from '../../../public/config/invoices.json'

import styles from './invoice.module.css'

const Invoice = () => {

    const renderInvoices = invoicesData.map((invoice, id) => {
        return (
            <div className={styles.card} key={id}>
                <p>{invoice.invoice_id}</p>
                <p>{invoice.paid_on}</p>
                <p>{invoice.programme.programme_name}</p>
                <p>{invoice.student_name}</p>
                <div className={styles.tools}>
                    <Link href={'/invoices/edit'}>
                        <button>
                            Edit Invoice
                        </button>
                    </Link>
                    <Link href={'/invoices/'}>
                        <button>
                            Delete Invoice
                        </button>
                    </Link>
                    <Link href={'/invoices/'}>
                        Download PDF
                    </Link>
                    <Link href={'/invoices/'}>
                        Email Invoice
                    </Link>
                    <Link href={'/invoices/'}>
                        SMS Invoice
                    </Link>
                    <Link href={'/invoices/'}>
                        Update Payment Status
                    </Link>
                </div>
            </div>
        )
    })

    return (
        <div>
            <h1>Invoices</h1>
            <Link href={'/'}>
                <button>
                    Go Back
                </button>
            </Link>
            <Link href={'/invoices/create'}>
                Create Invoice
            </Link>
            <div className={styles.wrapper}>
                {renderInvoices}
            </div>
        </div>
    )
}

export default Invoice