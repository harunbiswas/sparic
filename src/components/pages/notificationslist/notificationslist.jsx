import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { imagesData } from '../../../common/commomimages/imagedata'
import Pageheader from '../../../layouts/pageheader/pageheader'

export default function NotificationsList() {
  const breadcrumbs = ["Pages", "Notifications List"];
  return (
    <Fragment>

      <Pageheader items={breadcrumbs} />

      <div className="container">
        <ul className="notification">
          <li>
            <div className="notification-time">
              <span className="date">Today</span>
              <span className="time">02:31</span>
            </div>
            <div className="notification-icon">
              <Link to="#;"></Link>
            </div>
            <div className="notification-time-date mb-2 d-block d-md-none d-inline-flex">
              <span className="date">Today</span>
              <span className="time ms-2">02:31</span>
            </div>
            <div className="notification-body">
              <div className="media mt-0">
                <div className="main-avatar avatar-md">
                  <img alt="avatar" className="br-7"
                    src={imagesData('female1')} />
                </div>
                <div className="media-body ms-3 d-flex">
                  <div className="">
                    <p className="fs-15 text-dark fw-bold mb-0">Dennis Trexy</p>
                    <p className="mb-0 fs-13 text-dark">2 Members Accepted your Request.</p>
                  </div>
                  <div className="notify-time">
                    <p className="mb-0 text-muted fs-11">2 Hrs ago</p>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="notification-time">
              <span className="date">Yesterday</span>
              <span className="time">18:47</span>
            </div>
            <div className="notification-icon">
              <Link to="#;"></Link>
            </div>
            <div className="notification-time-date mb-2 d-block d-md-none d-inline-flex">
              <span className="date">Yesterday</span>
              <span className="time ms-2">18:47</span>
            </div>
            <div className="notification-body">
              <div className="media mt-0">
                <div className="main-avatar avatar-md">
                  <span className="avatar avatar-md bradius bg-pink me-3">ED</span>
                </div>
                <div className="media-body ms-3 d-flex">
                  <div className="">
                    <p className="fs-15 text-dark fw-bold mb-0">Eileen Dover</p>
                    <p className="mb-0 fs-13 text-dark">Created New Template for Designing
                      Department.</p>
                  </div>
                  <div className="notify-time">
                    <p className="mb-0 text-muted fs-11">18:47</p>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="notification-time">
              <span className="date">Yesterday</span>
              <span className="time">06:43</span>
            </div>
            <div className="notification-icon">
              <Link to="#;"></Link>
            </div>
            <div className="notification-time-date mb-2 d-block d-md-none d-inline-flex">
              <span className="date">Yesterday</span>
              <span className="time ms-2">06:43</span>
            </div>
            <div className="notification-body">
              <div className="media mt-0">
                <div className="main-avatar avatar-md">
                  <img alt="avatar" className="br-7"
                    src={imagesData('female20')} />
                </div>
                <div className="media-body ms-3 d-flex">
                  <div className="">
                    <p className="fs-15 text-dark fw-bold mb-0">Elida Distefa<span
                      className="badge bg-success ms-3 px-2 pb-1 mb-1">New Deal</span>
                    </p>
                    <p className="mb-0 fs-13 text-dark">Shipment is Out for Delivery.</p>
                  </div>
                  <div className="notify-time">
                    <p className="mb-0 text-muted fs-11">06:43</p>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="notification-time">
              <span className="date">23 Oct</span>
              <span className="time">03:15</span>
            </div>
            <div className="notification-icon">
              <Link to="#;"></Link>
            </div>
            <div className="notification-time-date mb-2 d-block d-md-none d-inline-flex">
              <span className="date">23 Oct</span>
              <span className="time ms-2">03:15</span>
            </div>
            <div className="notification-body">
              <div className="media mt-0">
                <div className="main-avatar avatar-md">
                  <img alt="avatar" className="br-7" src={imagesData('male11')} />
                </div>
                <div className="media-body ms-3 d-flex">
                  <div className="">
                    <p className="fs-15 text-dark fw-bold mb-0">Harvey Mattos</p>
                    <p className="mb-0 fs-13 text-dark">Mentioned you in a post.</p>
                  </div>
                  <div className="notify-time">
                    <p className="mb-0 text-muted fs-11">03:15</p>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="notification-time">
              <span className="date">15 Oct</span>
              <span className="time">12:14</span>
            </div>
            <div className="notification-icon">
              <Link to="#;"></Link>
            </div>
            <div className="notification-time-date mb-2 d-block d-md-none d-inline-flex">
              <span className="date">15 Oct</span>
              <span className="time ms-2">12:14</span>
            </div>
            <div className="notification-body">
              <div className="media mt-0">
                <div className="main-avatar avatar-md">
                  <span className="avatar avatar-md bradius me-3 bg-primary">IH</span>
                </div>
                <div className="media-body ms-3 d-flex">
                  <div className="">
                    <p className="fs-15 text-dark fw-bold mb-0">Catrice Doshier</p>
                    <p className="mb-0 fs-13 text-dark">2 Members Accepted your Request.</p>
                  </div>
                  <div className="notify-time">
                    <p className="mb-0 text-muted fs-11">12:14</p>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="notification-time">
              <span className="date">30 Sep</span>
              <span className="time">14:04</span>
            </div>
            <div className="notification-icon">
              <Link to="#;"></Link>
            </div>
            <div className="notification-time-date mb-2 d-block d-md-none d-inline-flex">
              <span className="date">30 Sep</span>
              <span className="time ms-2">14:04</span>
            </div>
            <div className="notification-body">
              <div className="media mt-0">
                <div className="main-avatar avatar-md">
                  <img alt="avatar" className="br-7" src={imagesData('male12')} />
                </div>
                <div className="media-body ms-3 d-flex">
                  <div className="">
                    <p className="fs-15 text-dark fw-bold mb-0">Mercy Ritia<span
                      className="badge bg-danger ms-3 px-2 pb-1 mb-1">Last Deal</span>
                    </p>
                    <p className="mb-0 fs-13 text-dark">Created New Template for Designing
                      Department.</p>
                  </div>
                  <div className="notify-time">
                    <p className="mb-0 text-muted fs-11">14:04</p>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="notification-time">
              <span className="date">18 Sep</span>
              <span className="time">12:26</span>
            </div>
            <div className="notification-icon">
              <Link to="#;"></Link>
            </div>
            <div className="notification-time-date mb-2 d-block d-md-none d-inline-flex">
              <span className="date">18 Sep</span>
              <span className="time ms-2">12:26</span>
            </div>
            <div className="notification-body">
              <div className="media mt-0">
                <div className="main-avatar avatar-md">
                  <img alt="avatar" className="br-7"
                    src={imagesData('female18')} />
                </div>
                <div className="media-body ms-3 d-flex">
                  <div className="">
                    <p className="fs-15 text-dark fw-bold mb-0">Mark Jhon</p>
                    <p className="mb-0 fs-13 text-dark">Shipment is Out for Delivery.</p>
                  </div>
                  <div className="notify-time">
                    <p className="mb-0 text-muted fs-11">12:26</p>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="notification-time">
              <span className="date">03 Sep</span>
              <span className="time">05:37</span>
            </div>
            <div className="notification-icon">
              <Link to="#;"></Link>
            </div>
            <div className="notification-time-date mb-2 d-block d-md-none d-inline-flex">
              <span className="date">03 Sep</span>
              <span className="time ms-2">05:37</span>
            </div>
            <div className="notification-body">
              <div className="media mt-0">
                <div className="main-avatar avatar-md">
                  <img alt="avatar" className="br-7" src={imagesData('male23')} />
                </div>
                <div className="media-body ms-3 d-flex">
                  <div className="">
                    <p className="fs-15 text-dark fw-bold mb-0">Benedict Vallone</p>
                    <p className="mb-0 fs-13 text-dark">Thanking you for Accepting Request.
                    </p>
                  </div>
                  <div className="notify-time">
                    <p className="mb-0 text-muted fs-11">05:37</p>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="notification-time">
              <span className="date">28 Aug</span>
              <span className="time">15:24</span>
            </div>
            <div className="notification-icon">
              <Link to="#;"></Link>
            </div>
            <div className="notification-time-date mb-2 d-block d-md-none d-inline-flex">
              <span className="date">28 Aug</span>
              <span className="time ms-2">15:24</span>
            </div>
            <div className="notification-body">
              <div className="media mt-0">
                <div className="main-avatar avatar-md">
                  <span className="avatar avatar-md bradius me-3 bg-secondary">IH</span>
                </div>
                <div className="media-body ms-3 d-flex">
                  <div className="">
                    <p className="fs-15 text-dark fw-bold mb-0">Paul Johny</p>
                    <p className="mb-0 fs-13 text-dark">Invited you to a Group.</p>
                  </div>
                  <div className="notify-time">
                    <p className="mb-0 text-muted fs-11">15:24</p>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
        <div className="text-center mb-4">
          <button className="btn ripple btn-primary w-md">Load more</button>
        </div>
      </div>

    </Fragment>
  )
}
