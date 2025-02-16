import { FC } from 'react'
import Link from 'next/link'
import styles from './Breadcrumbs.module.scss'

interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
}

const backIcon = `<svg width="18.000000" height="18.000000" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
	<desc>
			Created with Pixso.
	</desc>
	<defs>
		<clipPath id="clip2_155">
			<rect id="left" rx="0.000000" width="17.000000" height="17.000000" transform="translate(0.500000 0.500000)" fill="white" fill-opacity="0"/>
		</clipPath>
	</defs>
	<rect id="left" rx="0.000000" width="17.000000" height="17.000000" transform="translate(0.500000 0.500000)" fill="#FFFFFF" fill-opacity="0"/>
	<g clip-path="url(#clip2_155)">
		<path id="vector" d="M12.63 15.62C12.28 15.98 11.71 15.98 11.36 15.62L5.36 9.48C5.01 9.12 5.01 8.53 5.36 8.17L11.03 2.36C11.38 2 11.95 2 12.3 2.36C12.65 2.73 12.65 3.31 12.3 3.67L7.27 8.82L12.63 14.32C12.98 14.68 12.98 15.26 12.63 15.62Z" fill="#B4B4B4" fill-opacity="1.000000" fill-rule="evenodd"/>
	</g>
</svg>
`

const Breadcrumbs: FC<BreadcrumbsProps> = ({ items }) => {
  return (
    <nav className={styles.breadcrumbs}>
      <button
        onClick={() => window.history.back()}
        className={styles.backButton}
        type="button"
      >
        <span className={styles.backButtonText}>Вернуться назад</span>
        <span className={styles.backButtonIcon} dangerouslySetInnerHTML={{ __html: backIcon }}></span>
      </button>
      <ul className={styles.list}>
        {items.map((item, index) => (
          <li key={index} className={styles.item}>
            {item.href ? (
              <Link href={item.href} className={styles.link}>
                {item.label}
              </Link>
            ) : (
              <span className={styles.text}>{item.label}</span>
            )}
            {index < items.length - 1 && (
              <span className={styles.separator}>/</span>
            )}
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Breadcrumbs 