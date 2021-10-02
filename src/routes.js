import Station from "./components/station";
import Standard from "./components/standard";
import Province from "./components/province";
import ProductCategory from "./components/category";
import Product from "./components/product";
import BatchInspectionJobListDatatable from "./components/batchInspectionJobListDatatable";
import SampleSubmissionDatatable from "./components/iqmSampleSubmissionDatatable";
import BatchInspectionDetails from"./components/batchInspectionDetailForm";
import BatchInspectionSampleRequestsDatatable from "./components/batchInspectionSampleRequestsDatatable";
import BatchInspectionSampleRequestDetails from "./components/batchInspectionSampleRequestDetails";
import seniorDashIndex from "./components/seniorDashIndex";
import AscuydaApplications from "./components/batchInspectionApplicationJobListDatatable";
import BatchInspectionApplicationDetailForm from "./components/batchInspectionApplicationDetailForm";
import ConditionalRelease from "./components/conditionalRelease";
import FactoryInspectionNoticeOfInspection from "./components/factoryInspectionNoticeOfInspection";
import InspectionReport from "./components/inspectionReport";
import ManagerIQMInspectionReportDatatable from "./components/mgrIqmInspectionReportDatatable";
import ManagerIQMInspectionReportDetail from "./components/mgrIqmInspectionReportDetail";

export const adminRoutes = [
    {
        path: "/products",
        name: "Products",
        icon: "fas fa-box fa-sm",
        component: Product,
        layout: "/system-admin-dashboard",
    },
    {
        path: "/category",
        name: "Categories",
        icon: "fas fa-layer-group",
        component: ProductCategory,
        layout: "/system-admin-dashboard",
    },
    {
        path: "/station",
        name: "Stations",
        icon: "fas fa-location-arrow",
        component: Station,
        layout: "/system-admin-dashboard",
    },
    {
        path: "/province",
        name: "Provinces",
        icon: "fas fa-compass",
        component: Province,
        layout: "/system-admin-dashboard",
    },
    {
        path: "/",
        name: "Standards",
        icon: "fas fa-check-square",
        component: Standard,
        layout: "/system-admin-dashboard",
    },

];

export const seniorInspectorRoutes = [
    {
        path: "/senior-dashboard-index",
        name: "Home",
        icon: "fas fa-check-square",
        component: seniorDashIndex,
        layout: "/senior-inspector-dashboard",
    },
    {
        path: "/ascuyda-applications",
        icon: "fas fa-check-square",
        name: "ASCUDA",
        component: AscuydaApplications,
        layout: "/senior-inspector-dashboard",
    },
    {
        path: "/factory-inspection-notice-of-inspection",
        icon: "fas fa-check-square",
        name: "Factory Inspection",
        component: FactoryInspectionNoticeOfInspection,
        layout: "/senior-inspector-dashboard",
    },

    {
        path: "#",
        icon: "fas fa-check-square",
        name: "GSB Module",
        // component: AscuydaApplications,
        layout: "/senior-inspector-dashboard",
    },
    {
        path: "#",
        icon: "fas fa-check-square",
        name: "Reports",
        // component: AscuydaApplications,
        layout: "/senior-inspector-dashboard",
    },
    {
        path: "#",
        icon: "fas fa-check-square",
        name: "Approvals",
        // component: AscuydaApplications,
        layout: "/senior-inspector-dashboard",
    },
    {
        path: "#",
        icon: "fas fa-check-square",
        name: "Assigments",
        // component: AscuydaApplications,
        layout: "/senior-inspector-dashboard",
    },
    {
        path: "/asycuda-application-details/:applicationId",
        component: BatchInspectionApplicationDetailForm,
        layout: "/senior-inspector-dashboard",
    },
];

export const inspectorRoutes = [
    {
        path: "/batch-inspection-datatable",
        name: "Inspections",
        icon: "fas fa-check-square",
        component: BatchInspectionJobListDatatable,
        layout: "/inspector-dashboard",
    },
    {
        path: "/sample-form",
        name: "Sample Requests",
        icon: "fas fa-check-square",
        component: BatchInspectionSampleRequestsDatatable,
        layout: "/inspector-dashboard",
    },
    {
        path: "/sample-submission",
        name: "Sample Submissions",
        icon: "fas fa-check-square",
        component: SampleSubmissionDatatable,
        layout: "/inspector-dashboard",
    },
    {
        path: "/iqm-batch-inspection-report/:sampleSubmissionId",
        component: InspectionReport,
        layout: "/inspector-dashboard",
    },
    {
        path: "/batch-inspection-details/:batchInspectionId",
        component: BatchInspectionDetails,
        layout: "/inspector-dashboard",
    },
    {
        path: "/sample-request-details/:applicationId",
        component: BatchInspectionSampleRequestDetails,
        layout: "/inspector-dashboard",
    },
    {
        path: "/conditional-release/",
        component: ConditionalRelease,
        layout: "/inspector-dashboard",
    }

];

export const managerRoutes = [
    {
        path: "/manager-iqm-inspection-report-datatable",
        name: "IQM Reports",
        icon: "fas fa-check-square",
        component: ManagerIQMInspectionReportDatatable,
        layout: "/manager-dashboard",
    },
    {
        path: "/manager-dqm-inspection-report-datatable",
        name: "DQM Reports",
        icon: "fas fa-check-square",
        component: '#',
        layout: "/manager-dashboard",
    },
    {
        path: "/manager-iqm-inspection-report-detail/:reportId",
        component: ManagerIQMInspectionReportDetail,
        layout: "/manager-dashboard",
    },

];
