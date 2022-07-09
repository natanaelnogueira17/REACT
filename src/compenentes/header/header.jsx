import styles from './header.module.css'
function Header ({children}){
  return(
    <header 
    className ={styles.header} 
    style ={{ 
    background: `url('https://sejadev-web-app-public-files.s3.amazonaws.com/courses/coffee1.jpg')`,
    backgroundPosition: `center`,
    backgroundRepeat: `no-repeat`
   }}
    >
     <div className = {styles.headerContent}>
      {children}
      </div>
    </header>
  )
}

export default Header