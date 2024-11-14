import {FC} from 'react'
import {PageTitle} from '../../../../_metronic/layout/core'

const UsersPermissions: FC = () => {
 return (
   <>
     <PageTitle>UsersPermissions</PageTitle>
     <div className='card'>
       <div className='card-header border-0 pt-5'>
         <h3 className='card-title align-items-start flex-column'>
           <span className='card-label fw-bold fs-3 mb-1'>{UsersPermissions}</span>
         </h3>
       </div>
       <div className='card-body'>
         {/* Content will be added later */}
       </div>
     </div>
   </>
 )
}

export default UsersPermissions