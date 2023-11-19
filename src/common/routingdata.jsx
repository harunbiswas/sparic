import React from "react";
const Cardsdesign = React.lazy(() =>
  import("../components/apps/cardsdesign/cardsdesign")
);
const Chat = React.lazy(() => import("../components/apps/chat/chat"));
const Contentscrollbar = React.lazy(() =>
  import("../components/apps/contentscrollbar/contentscrollbar")
);
const Counters = React.lazy(() =>
  import("../components/apps/counters/counters")
);
const Cryptocurrencies = React.lazy(() =>
  import("../components/apps/cryptocurrencies/cryptocurrencies")
);
const Defaultcalender = React.lazy(() =>
  import("../components/apps/defaultcalender/defaultcalender")
);
const Footers = React.lazy(() => import("../components/apps/footers/footers"));
const Loaders = React.lazy(() => import("../components/apps/loaders/loaders"));
const Notifications = React.lazy(() =>
  import("../components/apps/notifications/notifications")
);
const Rangeslider = React.lazy(() =>
  import("../components/apps/rangeslider/rangeslider")
);
const Ratings = React.lazy(() => import("../components/apps/rating/rating"));
const Search = React.lazy(() => import("../components/apps/search/search"));
const SweetAlerts = React.lazy(() =>
  import("../components/apps/sweetalerts/sweetalerts")
);
const Treeviews = React.lazy(() =>
  import("../components/apps/treeview/treeview")
);
const Userlist = React.lazy(() =>
  import("../components/apps/userlist/userlist")
);
const Widgets = React.lazy(() => import("../components/apps/widgets/widgets"));
const Alerts = React.lazy(() =>
  import("../components/bootstrap/alerts/alerts")
);
const AvatarRadius = React.lazy(() =>
  import("../components/bootstrap/avatarradius/avatarradius")
);
const AvatarRounded = React.lazy(() =>
  import("../components/bootstrap/avatarrounded/avatarrounded")
);
const Avatarsquare = React.lazy(() =>
  import("../components/bootstrap/avatarsquare/avatarsquare")
);
const Buttons = React.lazy(() =>
  import("../components/bootstrap/buttons/buttons")
);
const Colors = React.lazy(() =>
  import("../components/bootstrap/colors/colors")
);
const Dropdowns = React.lazy(() =>
  import("../components/bootstrap/dropdowns/dropdowns")
);
const ListGroups = React.lazy(() =>
  import("../components/bootstrap/listgroup/listgroup")
);
const Paginations = React.lazy(() =>
  import("../components/bootstrap/pagination/pagination")
);
const Tags = React.lazy(() => import("../components/bootstrap/tags/tags"));
const Analytics = React.lazy(() =>
  import("../components/dashboard/analytics/analytics")
);
const Crypto = React.lazy(() =>
  import("../components/dashboard/crypto/crypto")
);
const Ecommerce = React.lazy(() =>
  import("../components/dashboard/ecommerce/ecommerce")
);
const Medical = React.lazy(() =>
  import("../components/dashboard/medical/medical")
);
const Sales = React.lazy(() => import("../components/dashboard/sales/sales"));
const Fulcalender = React.lazy(() =>
  import("../components/apps/fullcalender/fullcalender")
);
const Typography = React.lazy(() =>
  import("../components/bootstrap/typography/typography")
);
const Breadcrumbs = React.lazy(() =>
  import("../components/bootstrap/breadcrumbs/breadcrumbs")
);
const BadgesPills = React.lazy(() =>
  import("../components/bootstrap/badgespills/badgespills")
);
const Thumbnails = React.lazy(() =>
  import("../components/bootstrap/thumbnails/thumbnails")
);
const Offcanva = React.lazy(() =>
  import("../components/bootstrap/offcanvas/offcanvas")
);
const Toasts = React.lazy(() => import("../components/bootstrap/toast/toast"));

const MediaObject = React.lazy(() =>
  import("../components/bootstrap/mediaobject/mediaobject")
);
const Accordions = React.lazy(() =>
  import("../components/bootstrap/accordion/accordion")
);
const Tabses = React.lazy(() => import("../components/bootstrap/tabs/tabs"));
const Modals = React.lazy(() => import("../components/bootstrap/modal/modal"));
const Tooltipandpopover = React.lazy(() =>
  import("../components/bootstrap/tooltipandpopover/tooltipandpopover")
);
const Progress = React.lazy(() =>
  import("../components/bootstrap/progress/progress")
);
const Carousels = React.lazy(() =>
  import("../components/bootstrap/carousels/carousels")
);
const FormElements = React.lazy(() =>
  import("../components/components/forms/formelements/formelements")
);
const FormLayouts = React.lazy(() =>
  import("../components/components/forms/formlayouts/formlayouts")
);
const FormAdvanced = React.lazy(() =>
  import("../components/components/forms/formadvanced/formadvanced")
);
const FormEditor = React.lazy(() =>
  import("../components/components/forms/formeditor/formeditor")
);
const FormWizard = React.lazy(() =>
  import("../components/components/forms/formwizard/formwizard")
);
const FormValidation = React.lazy(() =>
  import("../components/components/forms/formvalidation/formvalidation")
);
const DataTables = React.lazy(() =>
  import("../components/components/tables/datatables/datatables")
);
const DefaultTables = React.lazy(() =>
  import("../components/components/tables/defaultable/defaulttables")
);
const Filemanager = React.lazy(() =>
  import("../components/components/filemanager/filemanager/filemanager")
);
const FilemanagerList = React.lazy(() =>
  import("../components/components/filemanager/filemanagerlist/filemanagerlist")
);
const FileDetails = React.lazy(() =>
  import("../components/components/filemanager/filedetails/filedetails")
);
const FileAttachments = React.lazy(() =>
  import("../components/components/filemanager/fileattachments/fileattachments")
);
const Profile = React.lazy(() => import("../components/pages/profile/profile"));
const NotificationsList = React.lazy(() =>
  import("../components/pages/notificationslist/notificationslist")
);
const Timeline = React.lazy(() =>
  import("../components/pages/timeline/timeline")
);
const MailCompose = React.lazy(() =>
  import("../components/pages/mailcompose/mailcompose")
);
const MailInbox = React.lazy(() =>
  import("../components/pages/mailinbox/mailinbox")
);
const MailRead = React.lazy(() =>
  import("../components/pages/mailread/mailread")
);
const Gallery = React.lazy(() => import("../components/pages/gallery/gallery"));
const Aboutcompany = React.lazy(() =>
  import("../components/pages/extension/aboutcompany/aboutcompany")
);
const Services = React.lazy(() =>
  import("../components/pages/extension/services/services")
);
const Faqs = React.lazy(() =>
  import("../components/pages/extension/faqs/faqs")
);
const Terms = React.lazy(() =>
  import("../components/pages/extension/terms/terms")
);
const Invoice = React.lazy(() =>
  import("../components/pages/extension/invoice/invoice")
);
const Pricingtables = React.lazy(() =>
  import("../components/pages/extension/pricingtables/pricingtables")
);
const Settings = React.lazy(() =>
  import("../components/pages/extension/settings/settings")
);
const Blog = React.lazy(() =>
  import("../components/pages/extension/blog/blog")
);
const Blogdetails = React.lazy(() =>
  import("../components/pages/extension/blogdetails/blogdetails")
);
const Blogpost = React.lazy(() =>
  import("../components/pages/extension/blogpost/blogpost")
);
const Emptypage = React.lazy(() =>
  import("../components/pages/extension/emptypage/emptypage")
);
const Shop = React.lazy(() => import("../components/ecommerce/shop/shop"));
const ProductDetails = React.lazy(() =>
  import("../components/ecommerce/productdetails/productdetails")
);
const ShoppingCart = React.lazy(() =>
  import("../components/ecommerce/shoppingcart/shoppingcart")
);
const AddProduct = React.lazy(() =>
  import("../components/ecommerce/addproduct/addproduct")
);
const Wishlist = React.lazy(() =>
  import("../components/ecommerce/wishlist/wishlist")
);
const Checkout = React.lazy(() =>
  import("../components/ecommerce/checkout/checkout")
);
const LeafletMaps = React.lazy(() =>
  import("../components/maps/leafletmaps/leafletmaps")
);
const SimpleMaps = React.lazy(() =>
  import("../components/maps/simplemaps/simplemaps")
);
const ChartJS = React.lazy(() =>
  import("../components/charts/chartjs/chartjs")
);
const ECharts = React.lazy(() =>
  import("../components/charts/echarts/echarts")
);
const ApexCharts = React.lazy(() =>
  import("../components/charts/apexcharts/apexcharts")
);
const FontAwesome = React.lazy(() =>
  import("../components/icons/fontawesome/fontawesome")
);
const MaterialDesignIcons = React.lazy(() =>
  import("../components/icons/materialdesignicons/materialdesignicons")
);
const SimpleLineIcons = React.lazy(() =>
  import("../components/icons/simplelineicons/simplelineicons")
);
const FeatherIcons = React.lazy(() =>
  import("../components/icons/featherIcons/featherIcons")
);
const IconicIcons = React.lazy(() =>
  import("../components/icons/iconicicons/iconicicons")
);
const FlagIcons = React.lazy(() =>
  import("../components/icons/flagicons/flagicons")
);
const Pe7Icons = React.lazy(() =>
  import("../components/icons/pe7icons/pe7icons")
);
const ThemifyIcons = React.lazy(() =>
  import("../components/icons/themifyicons/themifyicons")
);
const TypiconsIcons = React.lazy(() =>
  import("../components/icons/typiconsicons/typiconsicons")
);
const WeatherIcons = React.lazy(() =>
  import("../components/icons/weathericons/weathericons")
);
const BootstrapIcons = React.lazy(() =>
  import("../components/icons/bootstrapIcons/bootstrapIcons")
);
const Navigation = React.lazy(() =>
  import("../components/bootstrap/navigation/navigation")
);
export const Routingdata = [
  /* Firebase Authetication */

  /* Dashboard page */
  { path: `${import.meta.env.BASE_URL}`, element: <Sales /> },
  {
    path: `${import.meta.env.BASE_URL}ecommerce`,
    element: <Ecommerce />,
  },
  {
    path: `${import.meta.env.BASE_URL}analytics`,
    element: <Analytics />,
  },
  {
    path: `${import.meta.env.BASE_URL}medical`,
    element: <Medical />,
  },
  { path: `${import.meta.env.BASE_URL}crypto`, element: <Crypto /> },

  /* App page */

  {
    path: `${import.meta.env.BASE_URL}apps/cardsdesign`,
    element: <Cardsdesign />,
  },
  {
    path: `${import.meta.env.BASE_URL}apps/defaultcalender`,
    element: <Defaultcalender />,
  },
  {
    path: `${import.meta.env.BASE_URL}apps/fulcalender`,
    element: <Fulcalender />,
  },
  { path: `${import.meta.env.BASE_URL}apps/chat`, element: <Chat /> },
  {
    path: `${import.meta.env.BASE_URL}apps/notifications`,
    element: <Notifications />,
  },
  {
    path: `${import.meta.env.BASE_URL}apps/sweetalerts`,
    element: <SweetAlerts />,
  },
  {
    path: `${import.meta.env.BASE_URL}apps/rangeslider`,
    element: <Rangeslider />,
  },
  {
    path: `${import.meta.env.BASE_URL}apps/contentscrollbar`,
    element: <Contentscrollbar />,
  },
  { path: `${import.meta.env.BASE_URL}apps/loaders`, element: <Loaders /> },
  { path: `${import.meta.env.BASE_URL}apps/counters`, element: <Counters /> },
  { path: `${import.meta.env.BASE_URL}apps/rating`, element: <Ratings /> },
  { path: `${import.meta.env.BASE_URL}apps/treeview`, element: <Treeviews /> },
  { path: `${import.meta.env.BASE_URL}apps/footers`, element: <Footers /> },
  { path: `${import.meta.env.BASE_URL}apps/userlist`, element: <Userlist /> },
  { path: `${import.meta.env.BASE_URL}apps/search`, element: <Search /> },
  {
    path: `${import.meta.env.BASE_URL}apps/cryptocurrencies`,
    element: <Cryptocurrencies />,
  },
  { path: `${import.meta.env.BASE_URL}apps/widgets`, element: <Widgets /> },

  /* Bootstrap page  */

  { path: `${import.meta.env.BASE_URL}bootstrap/alerts`, element: <Alerts /> },
  {
    path: `${import.meta.env.BASE_URL}bootstrap/buttons`,
    element: <Buttons />,
  },
  { path: `${import.meta.env.BASE_URL}bootstrap/colors`, element: <Colors /> },
  {
    path: `${import.meta.env.BASE_URL}bootstrap/avatarsquare`,
    element: <Avatarsquare />,
  },
  {
    path: `${import.meta.env.BASE_URL}bootstrap/avatarradius`,
    element: <AvatarRadius />,
  },
  {
    path: `${import.meta.env.BASE_URL}bootstrap/avatarrounded`,
    element: <AvatarRounded />,
  },
  {
    path: `${import.meta.env.BASE_URL}bootstrap/dropdowns`,
    element: <Dropdowns />,
  },
  {
    path: `${import.meta.env.BASE_URL}bootstrap/listgroup`,
    element: <ListGroups />,
  },
  { path: `${import.meta.env.BASE_URL}bootstrap/tags`, element: <Tags /> },
  {
    path: `${import.meta.env.BASE_URL}bootstrap/pagination`,
    element: <Paginations />,
  },
  {
    path: `${import.meta.env.BASE_URL}bootstrap/navigation`,
    element: <Navigation />,
  },
  {
    path: `${import.meta.env.BASE_URL}bootstrap/typography`,
    element: <Typography />,
  },
  {
    path: `${import.meta.env.BASE_URL}bootstrap/breadcrumbs`,
    element: <Breadcrumbs />,
  },
  {
    path: `${import.meta.env.BASE_URL}bootstrap/badgespills`,
    element: <BadgesPills />,
  },
  {
    path: `${import.meta.env.BASE_URL}bootstrap/thumbnails`,
    element: <Thumbnails />,
  },
  {
    path: `${import.meta.env.BASE_URL}bootstrap/offcanvas`,
    element: <Offcanva />,
  },
  { path: `${import.meta.env.BASE_URL}bootstrap/toast`, element: <Toasts /> },
  {
    path: `${import.meta.env.BASE_URL}bootstrap/mediaobject`,
    element: <MediaObject />,
  },
  {
    path: `${import.meta.env.BASE_URL}bootstrap/accordion`,
    element: <Accordions />,
  },
  { path: `${import.meta.env.BASE_URL}bootstrap/tabs`, element: <Tabses /> },
  { path: `${import.meta.env.BASE_URL}bootstrap/modal`, element: <Modals /> },
  {
    path: `${import.meta.env.BASE_URL}bootstrap/tooltipandpopover`,
    element: <Tooltipandpopover />,
  },
  {
    path: `${import.meta.env.BASE_URL}bootstrap/progress`,
    element: <Progress />,
  },
  {
    path: `${import.meta.env.BASE_URL}bootstrap/carousels`,
    element: <Carousels />,
  },

  /* Components */

  {
    path: `${import.meta.env.BASE_URL}components/forms/formelements`,
    element: <FormElements />,
  },
  {
    path: `${import.meta.env.BASE_URL}components/forms/formlayouts`,
    element: <FormLayouts />,
  },
  {
    path: `${import.meta.env.BASE_URL}components/forms/formadvanced`,
    element: <FormAdvanced />,
  },
  {
    path: `${import.meta.env.BASE_URL}components/forms/formeditor`,
    element: <FormEditor />,
  },
  {
    path: `${import.meta.env.BASE_URL}components/forms/formwizard`,
    element: <FormWizard />,
  },
  {
    path: `${import.meta.env.BASE_URL}components/forms/formvalidation`,
    element: <FormValidation />,
  },
  {
    path: `${import.meta.env.BASE_URL}components/tables/datatables`,
    element: <DataTables />,
  },
  {
    path: `${import.meta.env.BASE_URL}components/tables/defaulttable`,
    element: <DefaultTables />,
  },
  {
    path: `${import.meta.env.BASE_URL}components/filemanager/filemanager`,
    element: <Filemanager />,
  },
  {
    path: `${import.meta.env.BASE_URL}components/filemanager/filemanagerlist`,
    element: <FilemanagerList />,
  },
  {
    path: `${import.meta.env.BASE_URL}components/filemanager/filedetails`,
    element: <FileDetails />,
  },
  {
    path: `${import.meta.env.BASE_URL}components/filemanager/fileattachments`,
    element: <FileAttachments />,
  },

  /* Pages */

  { path: `${import.meta.env.BASE_URL}pages/profile`, element: <Profile /> },
  {
    path: `${import.meta.env.BASE_URL}pages/notificationslist`,
    element: <NotificationsList />,
  },
  { path: `${import.meta.env.BASE_URL}pages/timeline`, element: <Timeline /> },
  {
    path: `${import.meta.env.BASE_URL}pages/mailcompose`,
    element: <MailCompose />,
  },
  {
    path: `${import.meta.env.BASE_URL}pages/mailinbox`,
    element: <MailInbox />,
  },
  { path: `${import.meta.env.BASE_URL}pages/mailread`, element: <MailRead /> },
  { path: `${import.meta.env.BASE_URL}pages/gallery`, element: <Gallery /> },
  {
    path: `${import.meta.env.BASE_URL}pages/extension/aboutcompany`,
    element: <Aboutcompany />,
  },
  {
    path: `${import.meta.env.BASE_URL}pages/extension/services`,
    element: <Services />,
  },
  {
    path: `${import.meta.env.BASE_URL}pages/extension/faqs`,
    element: <Faqs />,
  },
  {
    path: `${import.meta.env.BASE_URL}pages/extension/terms`,
    element: <Terms />,
  },
  {
    path: `${import.meta.env.BASE_URL}pages/extension/invoice`,
    element: <Invoice />,
  },
  {
    path: `${import.meta.env.BASE_URL}pages/extension/pricingtables`,
    element: <Pricingtables />,
  },
  {
    path: `${import.meta.env.BASE_URL}pages/extension/settings`,
    element: <Settings />,
  },
  {
    path: `${import.meta.env.BASE_URL}pages/extension/blog`,
    element: <Blog />,
  },
  {
    path: `${import.meta.env.BASE_URL}pages/extension/blogdetails`,
    element: <Blogdetails />,
  },
  {
    path: `${import.meta.env.BASE_URL}pages/extension/blogpost`,
    element: <Blogpost />,
  },
  {
    path: `${import.meta.env.BASE_URL}pages/extension/emptypage`,
    element: <Emptypage />,
  },

  /* Ecommerce */

  { path: `${import.meta.env.BASE_URL}ecommerce/shop`, element: <Shop /> },
  {
    path: `${import.meta.env.BASE_URL}ecommerce/productdetails`,
    element: <ProductDetails />,
  },
  {
    path: `${import.meta.env.BASE_URL}ecommerce/productdetails/:id`,
    element: <ProductDetails />,
  },
  {
    path: `${import.meta.env.BASE_URL}ecommerce/shoppingcart`,
    element: <ShoppingCart />,
  },
  {
    path: `${import.meta.env.BASE_URL}ecommerce/addproduct`,
    element: <AddProduct />,
  },
  {
    path: `${import.meta.env.BASE_URL}ecommerce/wishlist`,
    element: <Wishlist />,
  },
  {
    path: `${import.meta.env.BASE_URL}ecommerce/checkout`,
    element: <Checkout />,
  },

  /* Maps */

  {
    path: `${import.meta.env.BASE_URL}maps/leafletmaps`,
    element: <LeafletMaps />,
  },
  {
    path: `${import.meta.env.BASE_URL}maps/simplemaps`,
    element: <SimpleMaps />,
  },

  /* Charts */

  { path: `${import.meta.env.BASE_URL}charts/chartjs`, element: <ChartJS /> },
  { path: `${import.meta.env.BASE_URL}charts/echarts`, element: <ECharts /> },
  {
    path: `${import.meta.env.BASE_URL}charts/apexcharts`,
    element: <ApexCharts />,
  },

  /* Icons */

  {
    path: `${import.meta.env.BASE_URL}icons/fontawesome`,
    element: <FontAwesome />,
  },
  {
    path: `${import.meta.env.BASE_URL}icons/materialdesignicons`,
    element: <MaterialDesignIcons />,
  },
  {
    path: `${import.meta.env.BASE_URL}icons/simplelineicons`,
    element: <SimpleLineIcons />,
  },
  {
    path: `${import.meta.env.BASE_URL}icons/feathericons`,
    element: <FeatherIcons />,
  },
  {
    path: `${import.meta.env.BASE_URL}icons/iconicicons`,
    element: <IconicIcons />,
  },
  {
    path: `${import.meta.env.BASE_URL}icons/flagicons`,
    element: <FlagIcons />,
  },
  { path: `${import.meta.env.BASE_URL}icons/pe7icons`, element: <Pe7Icons /> },
  {
    path: `${import.meta.env.BASE_URL}icons/themifyicons`,
    element: <ThemifyIcons />,
  },
  {
    path: `${import.meta.env.BASE_URL}icons/typiconsicons`,
    element: <TypiconsIcons />,
  },
  {
    path: `${import.meta.env.BASE_URL}icons/weathericons`,
    element: <WeatherIcons />,
  },
  {
    path: `${import.meta.env.BASE_URL}icons/bootstrapicons`,
    element: <BootstrapIcons />,
  },
];
