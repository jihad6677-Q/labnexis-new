import {FC} from 'react'
import {PageTitle} from '../../../../../_metronic/layout/core'
import {
  StatisticsWidget5,
  TablesWidget5,
  ChartsWidget1
} from '../../../../../_metronic/partials/widgets'
import {KTCard} from '../../../../../_metronic/helpers/components/KTCard'

const Overview: FC = () => {
  return (
    <>
      <PageTitle breadcrumbs={[]}>Dashboard</PageTitle>
      
      {/* Statistics Cards */}
      <div className='row gy-5 gx-xl-8'>
        <div className='col-xl-3'>
          <StatisticsWidget5
            className='card-xl-stretch mb-5 mb-xl-8'
            svgIcon='element-11'
            color='success'
            iconColor='white'
            title='Active Labs'
            titleColor='white'
            description='150 Labs'
            descriptionColor='white'
          />
        </div>

        <div className='col-xl-3'>
          <StatisticsWidget5
            className='card-xl-stretch mb-5 mb-xl-8'
            svgIcon='arrow-right'
            color='primary'
            iconColor='white'
            title='Active Subscriptions'
            titleColor='white'
            description='450 Subs'
            descriptionColor='white'
          />
        </div>

        <div className='col-xl-3'>
          <StatisticsWidget5
            className='card-xl-stretch mb-5 mb-xl-8'
            svgIcon='dollar'
            color='info'
            iconColor='white'
            title='Monthly Revenue'
            titleColor='white'
            description='$75,000'
            descriptionColor='white'
          />
        </div>

        <div className='col-xl-3'>
          <StatisticsWidget5
            className='card-xl-stretch mb-5 mb-xl-8'
            svgIcon='notification'
            color='warning'
            iconColor='white'
            title='Notifications'
            titleColor='white'
            description='5 Active'
            descriptionColor='white'
          />
        </div>
      </div>

      {/* Growth Analysis Chart */}
      <div className='row g-5 gx-xl-8 mb-5 mb-xl-8'>
        <div className='col-xl-12'>
          <ChartsWidget1 
            className='card-xl-stretch mb-xl-8'
          />
        </div>
      </div>

      {/* Recent Activities */}
      <div className='row g-5 gx-xl-8'>
        <div className='col-xl-12'>
          <KTCard className='card-xl-stretch mb-5 mb-xl-8'>
            <div className='card-header border-0 pt-5'>
              <h3 className='card-title align-items-start flex-column'>
                <span className='card-label fw-bold fs-3 mb-1'>Recent Activities</span>
              </h3>
            </div>
            <div className='card-body py-3'>
              <div className='table-responsive'>
                <table className='table table-row-bordered table-row-gray-100 align-middle gs-0 gy-3'>
                  <thead>
                    <tr className='fw-bold text-muted bg-light'>
                      <th className='ps-4 min-w-300px rounded-start'>Laboratory</th>
                      <th className='min-w-120px'>Type</th>
                      <th className='min-w-120px'>Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div className='d-flex align-items-center'>
                          <div className='symbol symbol-45px me-5'>
                            <span className='symbol-label bg-light-success'>
                              <i className='ki-duotone ki-abstract-24 fs-2x text-success'></i>
                            </span>
                          </div>
                          <div className='d-flex justify-content-start flex-column'>
                            <span className='text-dark fw-bold text-hover-primary mb-1 fs-6'>
                              Alshifa Lab
                            </span>
                            <span className='text-muted fw-semibold text-muted d-block fs-7'>
                              Riyadh, Saudi Arabia
                            </span>
                          </div>
                        </div>
                      </td>
                      <td>
                        <span className='badge badge-light-success fs-7 fw-bold'>New</span>
                      </td>
                      <td>
                        <span className='text-muted fw-semibold'>2024-03-13</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </KTCard>
        </div>
      </div>
    </>
  )
}

export default Overview