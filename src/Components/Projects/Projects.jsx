
import Food from '/Images/food.png'
import Weather from '/Images/weather.png'
import Quiz from '/Images/quiz.png'
import './Project.css'


const Projects = () => {
  return (
    <section id='projects'>
        <h5>My Recent Works</h5>
        <h2>Projects</h2>

        <div className="container project_container">
            <article className='project_item'>
                <div className="project_item_image">
                    <img src={Quiz} alt="" />
                </div>
                <h3>Quiz-App</h3>
                <small className='text-light'>Frontend</small>
                <div className="project_item_btn">
                    <a href="https://github.com/SUNILKUMARPAND/Quiz-app" className='btn'>GitHub</a> {" "}
                    <a href="https://effervescent-moxie-2e53d0.netlify.app/" className='btn'>Demo</a>
                </div>
            </article>
            <article className='project_item'>
                <div className="project_item_image">
                    <img src={Weather} alt="" />
                </div>
                <h3>Weather-App</h3>
                <small className='text-light'>Frontend</small>
                <div className="project_item_btn">
                    <a href="https://github.com/SUNILKUMARPAND/Weather-app" className='btn'>GitHub</a> {"   "}
                    <a href="https://spontaneous-babka-c41513.netlify.app/" className='btn'>Demo</a>
                </div>
            </article>
            <article className='project_item'>
                <div className="project_item_image">
                    <img src={Food} alt="" />
                </div>
                <h3>Food-App</h3>
                <small className='text-light'>Frontend</small>
                <div className="project_item_btn">
                    <a href="https://github.com/SUNILKUMARPAND/Food-app" className='btn'>GitHub</a>{"   "}
                    <a href="https://imaginative-peony-55c592.netlify.app/" className='btn'>Demo</a>
                </div>
            </article>
        </div>

    </section>
  )
}

export default Projects