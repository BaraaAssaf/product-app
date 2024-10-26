import Link from 'next/link'
import { Button } from '@mui/material' 
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
   

      <main className={styles.main}>
      <Link href="/products" passHref>
          <Button variant="contained" color="primary">
            Go to Products
          </Button>
        </Link>
      </main>

    </div>
  )
}
