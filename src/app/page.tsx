import styles from "@/styles/page.module.css";
import Link from 'next/link'

export default function Home() {
  return (
    <main className={styles.main}>
     <Link href="/mobilier"> hi anes </Link>
    </main>
  );
}
