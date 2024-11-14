import {lazy, FC, Suspense} from 'react'
import {Route, Routes} from 'react-router-dom'
import TopBarProgress from 'react-topbar-progress-indicator'
import {WithChildren} from '../../_metronic/helpers'

// Dashboard
const Dashboard = lazy(() => import('../pages/saas/dashboard/dashboard'))
const Overview = lazy(() => import('../pages/saas/dashboard/overview/overview'))
const ActiveSubscriptions = lazy(() => import('../pages/saas/dashboard/active-subscriptions/active-subscriptions'))
const SubscriptionManagement = lazy(() => import('../pages/saas/dashboard/subscription-management/subscription-management'))
const CreateSubscription = lazy(() => import('../pages/saas/dashboard/subscription-management/create-subscription/create-subscription'))
const EditSubscription = lazy(() => import('../pages/saas/dashboard/subscription-management/edit-subscription/edit-subscription'))
const DisableSubscription = lazy(() => import('../pages/saas/dashboard/subscription-management/disable-subscription/disable-subscription'))

// Features Management
const FeaturesManagement = lazy(() => import('../pages/saas/features-management/features-management'))
const ManageFeaturesLaboratory = lazy(() => import('../pages/saas/features-management/manage-features-for-laboratory/manage-features-for-laboratory'))
const ManageFeaturesUser = lazy(() => import('../pages/saas/features-management/manage-features-for-user/manage-features-for-user'))

// Financial Reports
const FinancialReports = lazy(() => import('../pages/saas/financial-reports/financial-reports'))
const RevenueReports = lazy(() => import('../pages/saas/financial-reports/revenue-reports/revenue-reports'))
const PaidInvoices = lazy(() => import('../pages/saas/financial-reports/paid-invoices/paid-invoices'))
const PendingPayments = lazy(() => import('../pages/saas/financial-reports/pending-payments/pending-payments'))

// Laboratories Management
const LaboratoriesManagement = lazy(() => import('../pages/saas/laboratories-management/laboratories-management'))
const AddLaboratory = lazy(() => import('../pages/saas/laboratories-management/add-laboratory/add-laboratory'))
const ManageLaboratories = lazy(() => import('../pages/saas/laboratories-management/manage-laboratories/manage-laboratories'))
const BranchesPermissions = lazy(() => import('../pages/saas/laboratories-management/branches-permissions/branches-permissions'))

// Users & Permissions
const UsersPermissions = lazy(() => import('../pages/saas/users-permissions/users-permissions'))
const CreateUser = lazy(() => import('../pages/saas/users-permissions/create-user/create-user'))
const ManageUsers = lazy(() => import('../pages/saas/users-permissions/manage-users/manage-users'))
const RolePermissions = lazy(() => import('../pages/saas/users-permissions/role-permissions/role-permissions'))

// Settings
const Settings = lazy(() => import('../pages/saas/settings/settings'))
const GeneralSettings = lazy(() => import('../pages/saas/settings/general-settings/general-settings'))
const SecuritySettings = lazy(() => import('../pages/saas/settings/security-settings/security-settings'))
const NotificationSettings = lazy(() => import('../pages/saas/settings/notification-settings/notification-settings'))
const SystemLogs = lazy(() => import('../pages/saas/settings/system-logs/system-logs'))

const SaaSRoutes = () => {
 return (
   <Routes>
     {/* Dashboard Routes */}
     <Route path='dashboard'>
       <Route index element={<SuspensedView><Dashboard /></SuspensedView>} />
       <Route path='overview' element={<SuspensedView><Overview /></SuspensedView>} />
       <Route path='active-subscriptions' element={<SuspensedView><ActiveSubscriptions /></SuspensedView>} />
       <Route path='subscription-management'>
         <Route index element={<SuspensedView><SubscriptionManagement /></SuspensedView>} />
         <Route path='create' element={<SuspensedView><CreateSubscription /></SuspensedView>} />
         <Route path='edit' element={<SuspensedView><EditSubscription /></SuspensedView>} />
         <Route path='disable' element={<SuspensedView><DisableSubscription /></SuspensedView>} />
       </Route>
     </Route>

     {/* Features Management Routes */}
     <Route path='features-management'>
       <Route index element={<SuspensedView><FeaturesManagement /></SuspensedView>} />
       <Route path='manage-features-for-laboratory' element={<SuspensedView><ManageFeaturesLaboratory /></SuspensedView>} />
       <Route path='manage-features-for-user' element={<SuspensedView><ManageFeaturesUser /></SuspensedView>} />
     </Route>

     {/* Financial Reports Routes */}
     <Route path='financial-reports'>
       <Route index element={<SuspensedView><FinancialReports /></SuspensedView>} />
       <Route path='revenue-reports' element={<SuspensedView><RevenueReports /></SuspensedView>} />
       <Route path='paid-invoices' element={<SuspensedView><PaidInvoices /></SuspensedView>} />
       <Route path='pending-payments' element={<SuspensedView><PendingPayments /></SuspensedView>} />
     </Route>

     {/* Laboratories Management Routes */}
     <Route path='laboratories-management'>
       <Route index element={<SuspensedView><LaboratoriesManagement /></SuspensedView>} />
       <Route path='add-laboratory' element={<SuspensedView><AddLaboratory /></SuspensedView>} />
       <Route path='manage-laboratories' element={<SuspensedView><ManageLaboratories /></SuspensedView>} />
       <Route path='branches-permissions' element={<SuspensedView><BranchesPermissions /></SuspensedView>} />
     </Route>

     {/* Users & Permissions Routes */}
     <Route path='users-permissions'>
       <Route index element={<SuspensedView><UsersPermissions /></SuspensedView>} />
       <Route path='create-user' element={<SuspensedView><CreateUser /></SuspensedView>} />
       <Route path='manage-users' element={<SuspensedView><ManageUsers /></SuspensedView>} />
       <Route path='role-permissions' element={<SuspensedView><RolePermissions /></SuspensedView>} />
     </Route>

     {/* Settings Routes */}
     <Route path='settings'>
       <Route index element={<SuspensedView><Settings /></SuspensedView>} />
       <Route path='general-settings' element={<SuspensedView><GeneralSettings /></SuspensedView>} />
       <Route path='security-settings' element={<SuspensedView><SecuritySettings /></SuspensedView>} />
       <Route path='notification-settings' element={<SuspensedView><NotificationSettings /></SuspensedView>} />
       <Route path='system-logs' element={<SuspensedView><SystemLogs /></SuspensedView>} />
     </Route>
   </Routes>
 )
}

const SuspensedView: FC<WithChildren> = ({children}) => {
 return <Suspense fallback={<TopBarProgress />}>{children}</Suspense>
}

export {SaaSRoutes}
