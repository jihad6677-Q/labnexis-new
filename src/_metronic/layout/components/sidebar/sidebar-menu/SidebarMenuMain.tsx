// SidebarMenuMain.js

import {useIntl} from 'react-intl'
import {KTIcon} from '../../../../helpers'
import {SidebarMenuItemWithSub} from './SidebarMenuItemWithSub'
import {SidebarMenuItem} from './SidebarMenuItem'

const SidebarMenuMain = () => {
  const intl = useIntl()

  return (
    <>
      {/* Separator */}
      <div className='menu-item'></div>

      {/* SaaS Management System */}
      <SidebarMenuItemWithSub
        to='/saas'
        title='SaaS Management'
        icon='abstract-28'
        fontIcon='bi-gear'
      >
        <SidebarMenuItemWithSub to='/saas/dashboard' title='Dashboard' hasBullet={true}>
          <SidebarMenuItem to='/saas/dashboard/overview' title='Overview' hasBullet={true} />
          <SidebarMenuItem to='/saas/dashboard/active-subscriptions' title='Active Subscriptions' hasBullet={true} />
          <SidebarMenuItemWithSub to='/saas/dashboard/subscription-management' title='Subscription Management' hasBullet={true}>
            <SidebarMenuItem to='/saas/dashboard/subscription-management/create' title='Create Subscription' hasBullet={true} />
            <SidebarMenuItem to='/saas/dashboard/subscription-management/edit' title='Edit Subscription' hasBullet={true} />
            <SidebarMenuItem to='/saas/dashboard/subscription-management/disable' title='Disable Subscription' hasBullet={true} />
          </SidebarMenuItemWithSub>
        </SidebarMenuItemWithSub>

        <SidebarMenuItemWithSub to='/saas/features' title='Features Management' hasBullet={true}>
          <SidebarMenuItem to='/saas/features/laboratory' title='Manage Features for Laboratory' hasBullet={true} />
          <SidebarMenuItem to='/saas/features/user' title='Manage Features for User' hasBullet={true} />
        </SidebarMenuItemWithSub>

        <SidebarMenuItemWithSub to='/saas/financial' title='Financial Reports' hasBullet={true}>
          <SidebarMenuItem to='/saas/financial/revenue' title='Revenue Reports' hasBullet={true} />
          <SidebarMenuItem to='/saas/financial/paid' title='Paid Invoices' hasBullet={true} />
          <SidebarMenuItem to='/saas/financial/pending' title='Pending Payments' hasBullet={true} />
        </SidebarMenuItemWithSub>

        <SidebarMenuItemWithSub to='/saas/laboratories' title='Laboratories Management' hasBullet={true}>
          <SidebarMenuItem to='/saas/laboratories/add' title='Add Laboratory' hasBullet={true} />
          <SidebarMenuItem to='/saas/laboratories/manage' title='Manage Laboratories' hasBullet={true} />
          <SidebarMenuItem to='/saas/laboratories/branches' title='Branches & Permissions' hasBullet={true} />
        </SidebarMenuItemWithSub>

        <SidebarMenuItemWithSub to='/saas/users' title='Users & Permissions' hasBullet={true}>
          <SidebarMenuItem to='/saas/users/create' title='Create User' hasBullet={true} />
          <SidebarMenuItem to='/saas/users/manage' title='Manage Users' hasBullet={true} />
          <SidebarMenuItem to='/saas/users/roles' title='Role & Permissions' hasBullet={true} />
        </SidebarMenuItemWithSub>

        <SidebarMenuItemWithSub to='/saas/settings' title='Settings' hasBullet={true}>
          <SidebarMenuItem to='/saas/settings/general' title='General Settings' hasBullet={true} />
          <SidebarMenuItem to='/saas/settings/security' title='Security Settings' hasBullet={true} />
          <SidebarMenuItem to='/saas/settings/notifications' title='Notification Settings' hasBullet={true} />
          <SidebarMenuItem to='/saas/settings/logs' title='System Logs' hasBullet={true} />
        </SidebarMenuItemWithSub>
      </SidebarMenuItemWithSub>

      {/* Separator */}
      <div className='menu-item'></div>

      {/* Laboratory Management System */}
      <SidebarMenuItemWithSub
        to='/laboratory'
        title='Laboratory Management'
        icon='flask'
        fontIcon='bi-flask'
      >
        <SidebarMenuItemWithSub to='/laboratory/dashboard' title='Dashboard' hasBullet={true}>
          <SidebarMenuItem to='/laboratory/dashboard/tests-summary' title='Daily Tests Summary' hasBullet={true} />
          <SidebarMenuItem to='/laboratory/dashboard/performance' title='Results & Performance Charts' hasBullet={true} />
        </SidebarMenuItemWithSub>

        <SidebarMenuItemWithSub to='/laboratory/overview' title='Overview' hasBullet={true}>
          <SidebarMenuItem to='/laboratory/overview/summary' title='Bookings, Samples, Results, Payments' hasBullet={true} />
        </SidebarMenuItemWithSub>

        <SidebarMenuItemWithSub to='/laboratory/booking' title='Booking Management' hasBullet={true}>
          <SidebarMenuItem to='/laboratory/booking/normal' title='Normal Booking' hasBullet={true} />
          <SidebarMenuItem to='/laboratory/booking/package' title='Package Booking' hasBullet={true} />
          <SidebarMenuItem to='/laboratory/booking/contract' title='Contract Booking' hasBullet={true} />
        </SidebarMenuItemWithSub>

        <SidebarMenuItemWithSub to='/laboratory/sample' title='Sample Operation' hasBullet={true}>
          <SidebarMenuItem to='/laboratory/sample/list' title='Samples List' hasBullet={true} />
        </SidebarMenuItemWithSub>

        <SidebarMenuItemWithSub to='/laboratory/batch' title='Batch Management' hasBullet={true}>
          <SidebarMenuItem to='/laboratory/batch/create' title='Create Batch' hasBullet={true} />
          <SidebarMenuItem to='/laboratory/batch/list' title='Batches List' hasBullet={true} />
        </SidebarMenuItemWithSub>

        <SidebarMenuItemWithSub to='/laboratory/test' title='Test Management' hasBullet={true}>
          <SidebarMenuItem to='/laboratory/test/create' title='Create Test' hasBullet={true} />
          <SidebarMenuItem to='/laboratory/test/list' title='Test List' hasBullet={true} />
          <SidebarMenuItem to='/laboratory/test/tat-dashboard' title='TAT Dashboard' hasBullet={true} />
          <SidebarMenuItem to='/laboratory/test/tat-performance' title='View TAT Performance' hasBullet={true} />
          <SidebarMenuItem to='/laboratory/test/tat-modify' title='Modify TAT' hasBullet={true} />
          <SidebarMenuItem to='/laboratory/test/tat-settings' title='TAT Settings' hasBullet={true} />
        </SidebarMenuItemWithSub>

        {/* Patients */}
        <SidebarMenuItemWithSub to='/laboratory/patients' title='Patients' hasBullet={true}>
          <SidebarMenuItem to='/laboratory/patients/create' title='Create New Patient' />
          <SidebarMenuItem to='/laboratory/patients/list' title='Patient List' />
        </SidebarMenuItemWithSub>

        {/* Devices */}
        <SidebarMenuItemWithSub to='/laboratory/devices' title='Devices' hasBullet={true}>
          <SidebarMenuItem to='/laboratory/devices/add' title='Add Device' />
          <SidebarMenuItem to='/laboratory/devices/manage' title='Manage Devices' />
          <SidebarMenuItem to='/laboratory/devices/status' title='Device Status' />
        </SidebarMenuItemWithSub>

        {/* Stock */}
        <SidebarMenuItemWithSub to='/laboratory/stock' title='Stock' hasBullet={true}>
          <SidebarMenuItem to='/laboratory/stock/view' title='View Stock' />
          <SidebarMenuItem to='/laboratory/stock/shipments' title='Track Shipments' />
          <SidebarMenuItem to='/laboratory/stock/damaged' title='Manage Damaged Items' />
        </SidebarMenuItemWithSub>

        {/* Sections */}
        <SidebarMenuItemWithSub to='/laboratory/sections' title='Sections' hasBullet={true}>
          <SidebarMenuItem to='/laboratory/sections/create' title='Create Section' />
          <SidebarMenuItem to='/laboratory/sections/view' title='View Sections' />
        </SidebarMenuItemWithSub>

        {/* Tubes */}
        <SidebarMenuItemWithSub to='/laboratory/tubes' title='Tubes' hasBullet={true}>
          <SidebarMenuItem to='/laboratory/tubes/add' title='Add Tube' />
          <SidebarMenuItem to='/laboratory/tubes/view' title='View Tubes' />
        </SidebarMenuItemWithSub>

        {/* Templates */}
        <SidebarMenuItemWithSub to='/laboratory/templates' title='Templates' hasBullet={true}>
          <SidebarMenuItem to='/laboratory/templates/sms' title='SMS Template' />
          <SidebarMenuItem to='/laboratory/templates/email' title='Email Template' />
          <SidebarMenuItem to='/laboratory/templates/preview' title='Preview Templates' />
        </SidebarMenuItemWithSub>

        {/* Packages */}
        <SidebarMenuItemWithSub to='/laboratory/packages' title='Packages' hasBullet={true}>
          <SidebarMenuItem to='/laboratory/packages/create' title='Create Package' />
          <SidebarMenuItem to='/laboratory/packages/manage' title='Manage Packages' />
        </SidebarMenuItemWithSub>

        {/* Driver */}
        <SidebarMenuItemWithSub to='/laboratory/driver' title='Driver' hasBullet={true}>
          <SidebarMenuItem to='/laboratory/driver/pickup' title='Pick Up' />
          <SidebarMenuItem to='/laboratory/driver/dropoff' title='Drop Off' />
        </SidebarMenuItemWithSub>

        {/* Settings */}
        <SidebarMenuItemWithSub to='/laboratory/settings' title='Settings' hasBullet={true}>
          <SidebarMenuItem to='/laboratory/settings/general' title='General Settings' />
          <SidebarMenuItem to='/laboratory/settings/user' title='User Settings' />
          <SidebarMenuItem to='/laboratory/settings/branches' title='Branches & Permissions' />
        </SidebarMenuItemWithSub>
      </SidebarMenuItemWithSub>

      {/* Separator */}
      <div className='menu-item'></div>

      {/* Financial Management System */}
      <SidebarMenuItemWithSub
        to='/financial'
        title='Financial Management'
        icon='dollar'
        fontIcon='bi-cash'
      >
        <SidebarMenuItem to='/financial/dashboard' title='Dashboard' hasBullet={true} />

        <SidebarMenuItemWithSub to='/financial/overview' title='Overview' hasBullet={true}>
          <SidebarMenuItem to='/financial/overview/totals' title='Totals Report' hasBullet={true} />
          <SidebarMenuItem to='/financial/overview/tax' title='Tax Report' hasBullet={true} />
        </SidebarMenuItemWithSub>

        <SidebarMenuItemWithSub to='/financial/invoices' title='Invoices Management' hasBullet={true}>
          <SidebarMenuItem to='/financial/invoices/generate' title='Generate Invoice' hasBullet={true} />
          <SidebarMenuItem to='/financial/invoices/discounts' title='Discounts & Offers' hasBullet={true} />
          <SidebarMenuItem to='/financial/invoices/manage' title='Manage All Invoices' hasBullet={true} />
        </SidebarMenuItemWithSub>

        <SidebarMenuItemWithSub to='/financial/confirmation' title='Financial Confirmation' hasBullet={true}>
          <SidebarMenuItem to='/financial/confirmation/scanner' title='Confirmation via Scanner' hasBullet={true} />
        </SidebarMenuItemWithSub>

        <SidebarMenuItemWithSub to='/financial/payments' title='Payments' hasBullet={true}>
          <SidebarMenuItem to='/financial/payments/manage' title='Manage Payments' hasBullet={true} />
          <SidebarMenuItem to='/financial/payments/report' title='Payment Report' hasBullet={true} />
        </SidebarMenuItemWithSub>

        <SidebarMenuItemWithSub to='/financial/contracts' title='Contracts & Organizations' hasBullet={true}>
          <SidebarMenuItem to='/financial/contracts/create' title='Create Contracts' hasBullet={true} />
          <SidebarMenuItem to='/financial/contracts/view' title='View Previous Contracts' hasBullet={true} />
          <SidebarMenuItem to='/financial/contracts/organizations' title='Manage Organizations' hasBullet={true} />
        </SidebarMenuItemWithSub>

        <SidebarMenuItemWithSub to='/financial/payment-methods' title='Payment Methods' hasBullet={true}>
          <SidebarMenuItem to='/financial/payment-methods/manage' title='Manage Payment Methods' hasBullet={true} />
        </SidebarMenuItemWithSub>

        <SidebarMenuItemWithSub to='/financial/qr' title='QR Scanner' hasBullet={true}>
          <SidebarMenuItem to='/financial/qr/patient' title='Scan Patient Code' hasBullet={true} />
          <SidebarMenuItem to='/financial//qr/sample' title='Scan Sample Barcode' hasBullet={true} />
        </SidebarMenuItemWithSub>
      </SidebarMenuItemWithSub>

      {/* Separator */}
      <div className='menu-item'></div>

      {/* Stock Management System */}
      <SidebarMenuItemWithSub
        to='/stock'
        title='Stock Management'
        icon='element-plus'
        fontIcon='bi-box'
      >
        <SidebarMenuItem to='/stock/dashboard' title='Dashboard' hasBullet={true} />
        <SidebarMenuItem to='/stock/overview' title='Overview' hasBullet={true} />

        <SidebarMenuItemWithSub to='/stock/operations' title='Stock Operations' hasBullet={true}>
          <SidebarMenuItem to='/stock/operations/add-item' title='Add Item' hasBullet={true} />
          <SidebarMenuItem to='/stock/operations/add-entry' title='Add Stock Entry' hasBullet={true} />
          <SidebarMenuItem to='/stock/operations/update' title='Update Stock Levels' hasBullet={true} />
          <SidebarMenuItem to='/stock/operations/remove' title='Remove Stock' hasBullet={true} />
          <SidebarMenuItem to='/stock/operations/movements' title='View Stock Movements' hasBullet={true} />
          <SidebarMenuItem to='/stock/operations/allocate' title='Allocate Stock' hasBullet={true} />
        </SidebarMenuItemWithSub>

        <SidebarMenuItemWithSub to='/stock/shipments' title='Shipments Management' hasBullet={true}>
          <SidebarMenuItem to='/stock/shipments/track' title='Track Shipments' hasBullet={true} />
          <SidebarMenuItem to='/stock/shipments/receive' title='Receive Shipments' hasBullet={true} />
          <SidebarMenuItem to='/stock/shipments/damaged' title='Record Damaged Items' hasBullet={true} />
          <SidebarMenuItem to='/stock/shipments/return' title='Return Damaged Stock' hasBullet={true} />
          <SidebarMenuItem to='/stock/shipments/barcodes' title='Generate Shipment Barcodes' hasBullet={true} />
        </SidebarMenuItemWithSub>

        <SidebarMenuItemWithSub to='/stock/inventory' title='Inventory Management' hasBullet={true}>
          <SidebarMenuItem to='/stock/inventory/audit' title='Perform Stock Audit' hasBullet={true} />
          <SidebarMenuItem to='/stock/inventory/reports' title='Generate Stock Reports' hasBullet={true} />
          <SidebarMenuItem to='/stock/inventory/history' title='View Stock History' hasBullet={true} />
          <SidebarMenuItem to='/stock/inventory/levels' title='Set Minimum/Maximum Stock Levels' hasBullet={true} />
        </SidebarMenuItemWithSub>
      </SidebarMenuItemWithSub>

      {/* Separator */}
      <div className='menu-item'></div>

      {/* HR Management System */}
      <SidebarMenuItemWithSub
        to='/hr'
        title='HR Management'
        icon='people'
        fontIcon='bi-people'
      >
        <SidebarMenuItem to='/hr/dashboard' title='Dashboard' hasBullet={true} />
        <SidebarMenuItem to='/hr/overview' title='Overview' hasBullet={true} />

        <SidebarMenuItemWithSub to='/hr/employee' title='Employee Management' hasBullet={true}>
          <SidebarMenuItem to='/hr/employee/list' title='Employee List' hasBullet={true} />
          <SidebarMenuItem to='/hr/employee/assign' title='Assign Employees to Departments' hasBullet={true} />
          <SidebarMenuItem to='/hr/employee/permissions' title='Modify Employee Permissions' hasBullet={true} />
          <SidebarMenuItem to='/hr/employee/settings' title='Employee Settings' hasBullet={true} />
        </SidebarMenuItemWithSub>

        <SidebarMenuItemWithSub to='/hr/roles' title='Roles & Permissions' hasBullet={true}>
          <SidebarMenuItem to='/hr/roles/manage' title='Manage Roles' hasBullet={true} />
          <SidebarMenuItem to='/hr/roles/assign' title='Assign Roles to Employees' hasBullet={true} />
          <SidebarMenuItem to='/hr/roles/permissions' title='Manage Permissions' hasBullet={true} />
        </SidebarMenuItemWithSub>

        <SidebarMenuItemWithSub to='/hr/attendance' title='Attendance & Performance' hasBullet={true}>
          <SidebarMenuItem to='/hr/attendance/track' title='Track Attendance' hasBullet={true} />
          <SidebarMenuItem to='/hr/attendance/performance' title='Employee Performance Review' hasBullet={true} />
        </SidebarMenuItemWithSub>

        <SidebarMenuItemWithSub to='/hr/payroll' title='Payroll Management' hasBullet={true}>
          <SidebarMenuItem to='/hr/payroll/manage' title='Manage Payroll' hasBullet={true} />
        </SidebarMenuItemWithSub>

        <SidebarMenuItemWithSub to='/hr/leave' title='Leave & Time Off Management' hasBullet={true}>
          <SidebarMenuItem to='/hr/leave/request' title='Request Leave' hasBullet={true} />
          <SidebarMenuItem to='/hr/leave/approve' title='Approve/Reject Leave' hasBullet={true} />
          <SidebarMenuItem to='/hr/leave/status' title='Track Leave Status' hasBullet={true} />
        </SidebarMenuItemWithSub>

        <SidebarMenuItemWithSub to='/hr/recruitment' title='Recruitment Management' hasBullet={true}>
          <SidebarMenuItem to='/hr/recruitment/jobs' title='Job Postings' hasBullet={true} />
          <SidebarMenuItem to='/hr/recruitment/applications' title='Applications' hasBullet={true} />
          <SidebarMenuItem to='/hr/recruitment/interviews' title='Candidate Interviews' hasBullet={true} />
        </SidebarMenuItemWithSub>
      </SidebarMenuItemWithSub>

      {/* Separator */}
      <div className='menu-item'></div>

      {/* Home Visit Management System */}
      <SidebarMenuItemWithSub
        to='/home-visit'
        title='Home Visit Management'
        icon='home'
        fontIcon='bi-house'
      >
        <SidebarMenuItem to='/home-visit/dashboard' title='Dashboard' hasBullet={true} />
        <SidebarMenuItem to='/home-visit/overview' title='Overview' hasBullet={true} />

        <SidebarMenuItemWithSub to='/home-visit/booking' title='Booking Home Visit' hasBullet={true}>
          <SidebarMenuItem to='/home-visit/booking/create' title='Create Booking' hasBullet={true} />
          <SidebarMenuItem to='/home-visit/booking/view' title='View Bookings' hasBullet={true} />
          <SidebarMenuItem to='/home-visit/booking/approve' title='Approve/Reject Booking' hasBullet={true} />
        </SidebarMenuItemWithSub>

        <SidebarMenuItemWithSub to='/home-visit/patient' title='Patient Management' hasBullet={true}>
          <SidebarMenuItem to='/home-visit/patient/add' title='Add Patient' hasBullet={true} />
          <SidebarMenuItem to='/home-visit/patient/manage' title='Manage Patients' hasBullet={true} />
        </SidebarMenuItemWithSub>

        <SidebarMenuItemWithSub to='/home-visit/team' title='Team Management' hasBullet={true}>
          <SidebarMenuItem to='/home-visit/team/assign' title='Assign Team' hasBullet={true} />
          <SidebarMenuItem to='/home-visit/team/manage' title='Manage Teams' hasBullet={true} />
        </SidebarMenuItemWithSub>

        <SidebarMenuItem to='/home-visit/route' title='Route Optimization' hasBullet={true} />

        <SidebarMenuItemWithSub to='/home-visit/confirmation' title='Visit Confirmation' hasBullet={true}>
          <SidebarMenuItem to='/home-visit/confirmation/confirm' title='Confirm Visit' hasBullet={true} />
          <SidebarMenuItem to='/home-visit/confirmation/cancel' title='Cancel Visit' hasBullet={true} />
        </SidebarMenuItemWithSub>

        <SidebarMenuItemWithSub to='/home-visit/billing' title='Billing & Payments' hasBullet={true}>
          <SidebarMenuItem to='/home-visit/billing/generate' title='Generate Invoice' hasBullet={true} />
          <SidebarMenuItem to='/home-visit/billing/manage' title='Manage Payments' hasBullet={true} />
          <SidebarMenuItem to='/home-visit/billing/status' title='Track Payment Status' hasBullet={true} />
        </SidebarMenuItemWithSub>
      </SidebarMenuItemWithSub>
    </>
  )
}

export {SidebarMenuMain}

