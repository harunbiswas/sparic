import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

export default function Error401() {
  return (
    <Fragment>




		<div className="page-content">
			<div className="container text-center text-dark">
				<div className="display-1  text-dark mb-2">401</div>
				<p className="h5 fw-normal mb-6 leading-normal">Sorry, an error has occured, Requested page not found!</p>
				<Link className="btn btn-primary" to={`${import.meta.env.BASE_URL}dashboard/sales`}>
					Back To Home
				</Link>
			</div>
		</div>
	


    </Fragment>
  )
}
