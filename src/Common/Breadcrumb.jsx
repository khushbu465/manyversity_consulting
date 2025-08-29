import React from 'react'

const Breadcrumb = ({title}) => {
  return (
    <>
      <section
        className="page-title"
        style={{ backgroundImage: "url(images/bg/page-title-bg.jpg)" }}
      >
        <div className="auto-container">
          <div className="title-outer">
            <ul className="page-breadcrumb">
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>{title}</li>
            </ul>
            <h1 className="title">{title}</h1>
          </div>
        </div>
      </section>

    </>
  )
}

export default Breadcrumb
