import styles from './about.module.css'

function About() {
  return (
    <div className={styles.container}>
      <div className={styles.subContainer}>
      <div className={styles.section1}>
      <h3>about the project</h3> 
      <p>that project is designed to be a simple to do list multipage to practise some essential ReactJS concepts like routing and state management</p>
      </div>
      <div className={styles.section2}>
        <h3>what I've learned ?</h3>
        <p>
          that project was a good practise for react-router-dom , state management with Redux/Redux-Toolkit , splitting bundle and lazy loading and we don't forget material 
          UI that helped me a lot . 
        </p>
      </div>
      <p className={styles.remark}>the dashboard section is empty for now and I will fill it when I learn plots in ReactJS . the design also is not so responsive but it will be updates soon</p>
      </div>
      <p className={styles.end}>
        if you have any suggeestions or something to improve don't hesitate to mail me on <a href="mailto:chihaadam137@gmail.com">chihaadam137@gmail.com</a> I really appreciate your help and your informations helps me a lot
      </p>
    </div>
  )
}

export default About
