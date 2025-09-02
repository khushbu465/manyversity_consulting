
import { Link } from 'react-router-dom'

const Breadcrumb = ({ title }) => {
  return (
    <>
      <section
        className="page-title"
        style={{ backgroundImage: "url(https://www.globalcareercounsellor.com/blog/wp-content/uploads/2021/12/Start-an-Overseas-Education-Consultancy-1.jpg)" }}
      >
        <div className="auto-container">
          <div className="title-outer">
            <ul className="page-breadcrumb">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>{title}</li>
            </ul>
            <h1 className="title"  data-aos="fade-up">{title}</h1>
          </div>
        </div>
      </section>

    </>
  )
}

export default Breadcrumb
