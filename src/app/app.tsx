import styles from './app.module.css'
import Link from 'next/link'
const App = ({
    children,
}: Readonly<{
    children: React.ReactNode

}>) => {

    const header = <div className={styles.wrapper}>
        <h1>Dehustle Institute</h1>
        <Link href={'/programmes'}>Programmes</Link>
        <Link href={'/students'}>Students</Link>
        <Link href={'/invoices'}>Invoices</Link>
    </div>

    const sidebar = <h1>Sidebar</h1>

    return (
        <div>
            {header}
            {sidebar}
            {children}
        </div>
    )

}

export default App