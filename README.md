<h1 align="center">
    <a href="https://push.org/#gh-light-mode-only">
    <img width='20%' height='10%' 
src="https://res.cloudinary.com/drdjegqln/image/upload/v1686227557/Push-Logo-Standard-Dark_xap7z5.png">
    </a>
    <a href="https://push.org/#gh-dark-mode-only">
    <img width='20%' height='10%' 
src="https://res.cloudinary.com/drdjegqln/image/upload/v1686227558/Push-Logo-Standard-White_dlvapc.png">
    </a>
</h1>

<p align="center">
  <i align="center">Push Protocol is a web3 communication network, enabling cross-chain notifications and messaging for 
dapps, wallets, and services.🚀</i>
</p>

<div>
<h2>
<br>
Push Analytics </h1>
<h3 align="center">This repository contains all the code behind the analytics part of Push Protocol.</h3>
  
<p align="center">
<img src="https://img.shields.io/badge/SVG-FFB13B.svg?style=for-the-badge&logo=SVG&logoColor=black" alt="SVG" />
<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black" alt="JavaScript" />
<img src="https://img.shields.io/badge/styledcomponents-DB7093.svg?style=for-the-badge&logo=styled-components&logoColor=white" alt="styledcomponents" />
<img src="https://img.shields.io/badge/React-61DAFB.svg?style=for-the-badge&logo=React&logoColor=black" alt="React" />
<img src="https://img.shields.io/badge/Axios-5A29E4.svg?style=for-the-badge&logo=Axios&logoColor=white" alt="Axios" />

<img src="https://img.shields.io/badge/ESLint-4B32C3.svg?style=for-the-badge&logo=ESLint&logoColor=white" alt="ESLint" />
<img src="https://img.shields.io/badge/Lodash-3492FF.svg?style=for-the-badge&logo=Lodash&logoColor=white" alt="Lodash" />
<img src="https://img.shields.io/badge/TypeScript-3178C6.svg?style=for-the-badge&logo=TypeScript&logoColor=white" alt="TypeScript" />
<img src="https://img.shields.io/badge/Markdown-000000.svg?style=for-the-badge&logo=Markdown&logoColor=white" alt="Markdown" />
<img src="https://img.shields.io/badge/JSON-000000.svg?style=for-the-badge&logo=JSON&logoColor=white" alt="JSON" />
</p>
</div>

---

## 📚 Table of Contents
- [Modules](#-modules)
- [Getting Started](#getting-started)
- [Resources](#resources)
- [Contributing](#contributing)

---

## 🧩 Modules

<details closed><summary>Admin</summary>

| File            | Summary                                                                                                                                                                                                                                                                                                                                                                                                           | Module                          |
|:----------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:--------------------------------|
| index.tsx       | The provided code snippet is a React component that contains an administrative dashboard for the Push Protocol project, with various EditPanels displaying data from different aspects of the governance process. The component fetches data from an API using useEffect, with state hooks managing the various data fields. Functions and hooks for updating and submitting the data are also imported and used. | __pages__/admin/index.tsx       |
| admin.styled.ts | The provided code snippet contains styled-components that define the styling for various components used in an admin interface. The components include input fields, form containers, buttons, and various informational components. The styling includes responsive design for different screen sizes.                                                                                                           | __pages__/admin/admin.styled.ts |
| editModal.tsx   | The code defines a form dialog component in React using Material-UI components. The component takes in two props-'open' and'handleClose'-to control the dialog's visibility. The form contains various text fields for form input, handles user input changes, and submits form data upon form submission.                                                                                                        | __pages__/admin/editModal.tsx   |
| index.tsx       | The provided code is a React functional component that renders an admin dashboard. It imports and uses components like RequiresAuth, AdminView, Navbar, and Footer. RequiresAuth ensures that the user is authenticated before rendering the dashboard. The Head component sets the title of the dashboard.                                                                                                       | pages/admin/index.tsx           |

</details>

<details closed><summary>Charts</summary>

| File                   | Summary                                                                                                                                                                                                                                                                                                                                                                                                                  | Module                                                       |
|:-----------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-------------------------------------------------------------|
| BaseOptions.ts         | The code snippet exports a function that returns an object encapsulating various chart options for a visualization. It utilizes external and internal module imports, such as'styled-components' and a custom-defined'ThemeContext', to set chart styling attributes, colors, tooltips, and responsiveness. Overall, the code aims to provide a customizable, responsive, and consistent visualization theme.            | __pages__/dashboard/components/Charts/BaseOptions.ts         |
| Chart.tsx              | The code is a React component that renders a chart using the ApexCharts library. It takes props for title, value, label, max, and min values, as well as data and an optional isLoading boolean. It contains options for the chart's appearance and behavior, including colors, axis labels, and zooming. When the chart is loading, a spinner is displayed, and the chart is rendered when the isLoading prop is false. | __pages__/dashboard/components/Charts/Chart.tsx              |
| HorizontalBarChart.tsx | The provided code snippet is a React component that renders a Horizontal Bar Chart using the ApexCharts library. It takes in props such as title, label, category, value, isLoading and returns a styled card container with the bar chart as its content. The chart's style and options can be customized using the BaseOptions object and various other attributes.                                                    | __pages__/dashboard/components/Charts/HorizontalBarChart.tsx |

</details>

<details closed><summary>Components</summary>

| File              | Summary                                                                                                                                                                                                                                                                                                                                                                                                    | Module                                           |
|:------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-------------------------------------------------|
| RequestSent.tsx   | The code snippet imports React and an internal Chart component. It exports a function called RequestSent that takes in data, min, max, and total as props. The function returns the Chart component with the props passed in as parameters to display a chart of the number of requests sent.                                                                                                              | __pages__/dashboard/components/RequestSent.tsx   |
| Filters.tsx       | The code snippet is a React component that renders a filter section with dropdown menus and a search bar for selecting a channel and a chain. It also allows the user to filter data by time periods. The component uses styled-components and MUI components for styling and functionality.                                                                                                               | __pages__/dashboard/components/Filters.tsx       |
| Notifications.tsx | This code defines a React functional component called Notifications that takes in props such as data, min, max, total, and isLoading. It returns a Chart component displaying the number of notifications sent over time, with statistics on minimum, maximum, and overall numbers sent.                                                                                                                   | __pages__/dashboard/components/Notifications.tsx |
| ChatUsers.tsx     | This code is a React component that renders a chart of chat users with the specified data, minimum and maximum values, and total value. It imports a Chart component to display the chart and takes in these props to customize the display.                                                                                                                                                               | __pages__/dashboard/components/ChatUsers.tsx     |
| RecentlyAdded.tsx | This code snippet is a React component that fetches data from an internal API, using the imported function'getLeaderBoard', and displays it through another internal component called'LeaderBoard'. The data fetched consists of an array of'LeaderboardType' objects, and is limited to 5 items, sorted by creation date in descending order. The component also handles loading state using state hooks. | __pages__/dashboard/components/RecentlyAdded.tsx |
| TopChannels.tsx   | The code is a React component that retrieves data from an API using useEffect and useState hooks. It fetches the top 5 channels by subscribers and displays the data on a LeaderBoard component. The isLoading flag is set to true while data is being fetched and to false once the data is loaded.                                                                                                       | __pages__/dashboard/components/TopChannels.tsx   |
| Subscribers.tsx   | The code exports a React component called Subscribers that receives some data, min, max, total and isLoading as props, and passes them down to its Chart child component. The Chart component displays a chart/visualization of the provided data with some additional information, such as the title, label, min, max, and whether it is currently loading.                                               | __pages__/dashboard/components/Subscribers.tsx   |
| Trending.tsx      | This code snippet fetches data on current and previous week's subscribers for a list of channels, calculates the percentage change in subscribers, and filters the channels based on a minimum subscriber count. The top 5 channels with the highest percentage change are returned and displayed in a React component called LeaderBoard, titled "Trending".                                              | __pages__/dashboard/components/Trending.tsx      |

</details>

<details closed><summary>Contexts</summary>

| File             | Summary                                                                                                                                                                                                                                                                                                                                                                                                                                              | Module                    |
|:-----------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:--------------------------|
| DataContext.tsx  | The provided code snippet defines a DataProvider component that uses React's Context API to pass down shared state and functionality to its children components. The component leverages useState and useEffect hooks to manage stateful information such as login status, user tokens, and governance data, as well as to handle changes in the subscribed data. The useData hook facilitates access to the information stored in the DataProvider. | contexts/DataContext.tsx  |
| ThemeContext.tsx | The provided code snippet includes a custom hook and context to manage the theme of a Next.js application. The ThemeProvider component takes care of toggling between light and dark modes by setting and removing an item in localStorage, while useTheme hook is used to access the current theme status anywhere in the app.                                                                                                                      | contexts/ThemeContext.tsx |

</details>

<details closed><summary>Dashboard</summary>

| File                | Summary                                                                                                                                                                                                                                                                                                                                                                                       | Module                                  |
|:--------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------------------------------------|
| index.tsx           | This code snippet defines a React component that renders a dashboard view with multiple sub-components (such as Trending, RecentlyAdded, TopChannels, LineChartSet, OverViewSet, and GovernanceSet) displayed in a responsive grid layout using MUI's Grid and Box components. It also determines appropriate spacing and alignment based on the screen width using MUI's useMediaQuery hook. | __pages__/dashboard/index.tsx           |
| dashboard.styled.ts | The code snippet imports external libraries and internal components, and exports styled components: DashBoardContainer, Text, and HorizontalLine. DashBoardContainer and Text accept custom props for styling, while HorizontalLine includes responsive design features.                                                                                                                      | __pages__/dashboard/dashboard.styled.ts |
| index.tsx           | This code snippet is a React component that renders a dashboard view with a navbar, a footer, and the main dashboard content. It uses the external MUI Grid library to structure the layout. The component also includes a Head component to set the title of the web page.                                                                                                                   | pages/dashboard/index.tsx               |

</details>

<details closed><summary>Editpanels</summary>

| File                               | Summary                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | Module                                                                   |
|:-----------------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-------------------------------------------------------------------------|
| PushGrantsEditPanel.tsx            | The code snippet provides a React component'PushGrantsEditPanel' that renders a form for editing push grants data. It includes an input field for each data type, and buttons for saving and closing. The form is conditionally rendered based on the'showIndex' state.                                                                                                                                                                                                                                   | __pages__/admin/components/EditPanels/PushGrantsEditPanel.tsx            |
| GovernanceImprovementEditPanel.tsx | The provided code snippet contains a React component named "GovernanceImprovementEditPanel". It receives props such as "GraphData", "colorSet", "showIndex" and others, and renders a form with input fields for "Approved" and "Closed" values. It also includes buttons to save the data and close the form, as well as an information segment that provides a description of the input fields and an edit icon that opens the form. A "PushStatistics" component is also included for displaying data. | __pages__/admin/components/EditPanels/GovernanceImprovementEditPanel.tsx |
| PGPProposalsEditPanel.tsx          | The code exports a React component that renders a form for editing Push Grants Proposals data. It provides input fields for approved, open, and closed numbers of proposals and buttons to save and close the form. It also includes an information section with details about the data and an edit icon to toggle between the form and the information section.                                                                                                                                          | __pages__/admin/components/EditPanels/PGPProposalsEditPanel.tsx          |
| PushGrantsCategoriesEditPanel.tsx  | The provided code snippet is a React component that handles the editing of data related to Push Grants Proposal Categories. The component contains Input components for various categories and saves the data when the user clicks on the appropriate button. It also displays a graphical representation of the data using the PushStatistics component.                                                                                                                                                 | __pages__/admin/components/EditPanels/PushGrantsCategoriesEditPanel.tsx  |
| index.ts                           | The code snippet exports four components used for editing various governance-related features, namely the GovernanceImprovementEditPanel, PGPProposalsEditPanel, PushGrantsEditPanel, and PushGrantsCategoriesEditPanel components. These components are imported from their respective files and can be used in other parts of the project.                                                                                                                                                              | __pages__/admin/components/EditPanels/index.ts                           |

</details>

<details closed><summary>Footer</summary>

| File             | Summary                                                                                                                                                                                                                                                                                                                          | Module                             |
|:-----------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----------------------------------|
| index.tsx        | This code snippet defines a React component for a website footer, displaying the PushProtocol logo and links to terms of service, privacy policy and documentation, as well as social media links to Twitter, Github and Discord. The component imports styled-components for theming and external libraries for image handling. | components/Footer/index.tsx        |
| footer.styled.ts | This code snippet defines styled components for a website footer. It includes containers for links, left-aligned content, and right-aligned content, each with specified dimensions and alignment properties depending on screen size. It also imports a styled-components library and a shared styling component.               | components/Footer/footer.styled.ts |

</details>

<details closed><summary>Governancegraph</summary>

| File      | Summary                                                                                                                                                                                                                                                                                        | Module                                               |
|:----------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----------------------------------------------------|
| index.tsx | The provided code is a React component that renders a graph using the echarts-for-react library. It takes in data, title, label, value, and colorSet as props to construct the chart. The component also implements responsive design by adjusting the layout based on different screen sizes. | __pages__/admin/components/GovernanceGraph/index.tsx |

</details>

<details closed><summary>Governanceset</summary>

| File              | Summary                                                                                                                                                                                                                                                                                                                                                                         | Module                                                         |
|:------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:---------------------------------------------------------------|
| GovernanceSet.tsx | This code snippet is a React component that displays various graphs related to governance data fetched from an API. The component uses Material UI and Styled Components libraries for styling. The `useEffect` hook is used to fetch the data on mount and store it in session storage. The component also uses context to share data and update the state of the application. | __pages__/dashboard/components/GovernanceSet/GovernanceSet.tsx |

</details>

<details closed><summary>Hooks</summary>

| File                    | Summary                                                                                                                                                                                                                                                                                                                                                                                                                      | Module                        |
|:------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------------------|
| useModal.ts             | This code defines a custom React hook named `useModal` which provides various functions and state variables related to a form for updating governance data. It includes API calls to fetch and update the data, as well as functions for handling user input and displaying toast notifications.                                                                                                                             | hooks/useModal.ts             |
| useLogin.ts             | The provided code is a custom hook that exports various functions and values for handling user login. It uses Next.js' router hook and an external library called react-toastify to provide visual feedback in case of error. The hook also uses internal contexts and utilities to authenticate the user via the API and update state respectively.                                                                         | hooks/useLogin.ts             |
| useChannelStatistics.ts | The provided code snippet is a custom React hook that fetches data from an external API and processes it to provide channel statistics for a specific period. The hook retrieves and formats subscriber and notification data for a specified channel and chain type and returns the data as well as setting corresponding states for displaying in the application.                                                         | hooks/useChannelStatistics.ts |
| useStatisticData.ts     | The provided code snippet is a React hook that fetches and processes data related to notification and subscriber analytics using various internal and API modules. The hook takes in parameters such as selected channel and selected chain, and sets corresponding context data while toggling loading state. The final processed data for notifications and subscribers are also serialized and stored in session storage. | hooks/useStatisticData.ts     |

</details>

<details closed><summary>Leaderboard</summary>

| File            | Summary                                                                                                                                                                                                                                                                                                                                                                 | Module                                                     |
|:----------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----------------------------------------------------------|
| LeaderBoard.tsx | This code snippet is a React component that displays a leaderboard with data passed as props. It includes conditional rendering for loading state, media query for responsive design, and uses external and internal components and libraries. The leaderboard features have multiple customizable styles, such as font sizes and colors, tooltips, and avatar display. | __pages__/dashboard/components/LeaderBoard/LeaderBoard.tsx |

</details>

<details closed><summary>Linechartset</summary>

| File                  | Summary                                                                                                                                                                                                                                                                                                                                                                                                          | Module                                                            |
|:----------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------------------------------------------------------|
| LineChartSet.tsx      | The code snippet is a React component that renders different visualizations and statistics based on data obtained from several hooks and data contexts. It comprises filters to narrow down results based on time, channels, and chains. Finally, it renders Notification, Subscribers, RequestSent, ChatUsers, and HorizontalBarChart components, each displaying data and statistics for a specific data type. | __pages__/dashboard/components/LineChartSet/LineChartSet.tsx      |
| linchartset.styled.ts | The code snippet defines styled-components for a Select component, an OptionList, an individual Option, a TimeFilterContainer, and a TimeFilter button. These components are defined with various styling properties such as background color, border radius, and font size. The code also includes media queries for responsive styling.                                                                        | __pages__/dashboard/components/LineChartSet/linchartset.styled.ts |

</details>

<details closed><summary>Login</summary>

| File            | Summary                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Module                          |
|:----------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:--------------------------------|
| login.styled.ts | This code snippet defines two styled components using the'styled-components' library.'Input' is a styled input element that contains custom styling for its font size, color, padding, and background color.'InputContainer' is a styled container element that contains custom styling for its border, border radius, width, padding, and margin.                                                                                                                             | __pages__/login/login.styled.ts |
| index.tsx       | The code snippet is a React component for a login view that uses Material-UI icons and styled-components library. It also imports a custom hook named useLogin, and several other components for styling and structure. The component includes a form for accepting the user's username and password, which are handled by the handleChange function. The password field can be toggled between a visible and hidden state, and the submit button triggers the Login function. | __pages__/login/index.tsx       |
| index.tsx       | The provided code snippet is a React component that renders a login page. It imports necessary components from NextJS and internal components, which are then rendered in the return statement. It also sets the title of the page using the Head component.                                                                                                                                                                                                                   | pages/login/index.tsx           |

</details>

<details closed><summary>Logo</summary>

| File      | Summary                                                                                                                                                                                                                                                                                                                                                                     | Module                    |
|:----------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:--------------------------|
| index.tsx | This is a React component that renders a logo with the option to make it a link. It takes in parameters for styling, link disabling, and the logo image source, and uses the Box component from the Material UI library to render the image. If the link is disabled, it simply returns the logo, otherwise it wraps the logo in a Link component pointing to the homepage. | components/Logo/index.tsx |

</details>

<details closed><summary>Navbar</summary>

| File              | Summary                                                                                                                                                                                                                                                                                                                                                             | Module                              |
|:------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------------------------|
| index.tsx         | This code is a React NextJS Navbar component that provides users with the ability to switch between dark and light mode, log out, and navigate to different pages of the site. It also includes a hamburger menu for smaller screens, and a sidebar that displays when the menu is opened.                                                                          | components/Navbar/index.tsx         |
| NavBarButtons.tsx | The provided code snippet imports React, NextJS, and styled-components, and contains a NavBarButtons component that displays navigation buttons to a dashboard, admin panel, and a logout button if the user is logged in. The styled-components are used to apply custom styles to the buttons, including font size, font weight, border radius, and button color. | components/Navbar/NavBarButtons.tsx |
| navbar.styled.ts  | The code snippet defines styled components for a navbar container, hamburger line, and sidebar container. These components are given various properties such as width, height, padding, and position, and they make use of media queries to adjust their appearance based on screen size.                                                                           | components/Navbar/navbar.styled.ts  |

</details>

<details closed><summary>Overviewset</summary>

| File               | Summary                                                                                                                                                                                                                                                                                                                          | Module                                                        |
|:-------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:--------------------------------------------------------------|
| overview.styled.ts | The code snippet defines a custom styled component called "OverviewItem". It has specific styles and responsive behavior, and it can be used in a React application to render a container element with a predefined set of properties, such as border-radius, padding, display, and height.                                      | __pages__/dashboard/components/OverViewSet/overview.styled.ts |
| OverViewSet.tsx    | The provided code snippet is a React component that renders a dashboard overview containing statistics and icons for push integrations, chats sent, and notifications sent. The component fetches data using APIs and renders it with styling based on the current theme. The component is responsive to different screen sizes. | __pages__/dashboard/components/OverViewSet/OverViewSet.tsx    |

</details>

<details closed><summary>Pages</summary>

| File         | Summary                                                                                                                                                                                                                                                                                                                                                                                 | Module             |
|:-------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-------------------|
| index.tsx    | This code snippet is a home page component of a React NextJS app that automatically redirects the user to the dashboard route using the useRouter and useEffect hooks upon mounting. The constant ROUTES stores the application's route constants. The shallow flag is set to true to ensure only the URL is updated without performing a full page reload.                             | pages/index.tsx    |
| _document.js | The code snippet defines a Next.js Document component which renders an HTML document template with basic structure including a head and body section. The `Main` component renderes the main content of the page, while the `NextScript` component renders necessary scripts for the page to function properly. The `lang` attribute sets the language of the HTML document to English. | pages/_document.js |
| _app.tsx     | This code snippet is a React component that serves as an overall container for the app, incorporating global context providers and an external toast notification library. It also includes a Head component to manage meta tags and favicon.                                                                                                                                           | pages/_app.tsx     |

</details>

<details closed><summary>Requireauth</summary>

| File      | Summary                                                                                                                                                                                                                                                                                                                                                | Module                           |
|:----------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:---------------------------------|
| index.tsx | The provided code is a React functional component that uses NextJS and a custom context called "useData". It checks if the user is authenticated by verifying if they are logged in, and if not, it redirects them to the login page. The component is designed to be reusable and can wrap around other components as a higher-order component (HOC). | components/RequireAuth/index.tsx |

</details>

<details closed><summary>Root</summary>

| File           | Summary                                                                                                                                                                                                                                                                                                                                          | Module         |
|:---------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:---------------|
| CNAME          | Unfortunately, no code snippet was provided to me. Without access to the code snippet, I am unable to offer a comprehensive summary of its functionalities.                                                                                                                                                                                      | CNAME          |
| next.config.js | This code defines a Next.js configuration object with three properties: reactStrictMode, swcMinify, and devIndicators. The reactStrictMode and devIndicators properties are boolean values, while swcMinify is a setting used for minifying code. The configuration object is exported so that it can be used in other parts of the application. | next.config.js |

</details>

<details closed><summary>Sharedstyling</summary>

| File     | Summary                                                                                                                                                                                                                                                                                          | Module                            |
|:---------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------------------------------|
| index.ts | This code snippet provides a collection of styled components for various HTML elements with customizable props such as background, color, font, and layout. The components include section, item, h2, button, span, image, and a. These can be used for building and styling webpages with ease. | components/SharedStyling/index.ts |

</details>

<details closed><summary>Styles</summary>

| File        | Summary                                                                                                                                                                                                                                                                                                                                                               | Module             |
|:------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-------------------|
| globals.css | The provided code snippet sets up font faces for the "Strawford" font with different weights and styles. It also applies the font family to the website's HTML and body elements, with a fallback to Helvetica and sans-serif. Additionally, it includes some basic resetting of styles using the "*" selector and provides a dark mode option for supported devices. | styles/globals.css |

</details>

<details closed><summary>Theme</summary>

| File            | Summary                                                                                                                                                                                                                                                                                                                                                                                               | Module                |
|:----------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------------------|
| globalStyles.ts | This code snippet defines a global stylesheet with styled components, importing and setting custom fonts, defining website background and text color, and setting default font family with fallbacks. The stylesheet also includes a transition property and a wildcard CSS rule to apply to all elements on the page.                                                                                | theme/globalStyles.ts |
| Theme.tsx       | This code snippet includes a React component that imports a ThemeProvider from the styled-components library. Additionally, it imports a dark and light theme from a palette, uses a global style and consumes a custom ThemeContext hook to determine the state of the theme. Finally, the Theme component renders the child component wrapped with the ThemeProvider based on the determined theme. | theme/Theme.tsx       |
| palette.ts      | The provided code snippet defines two theme objects-"themeLight" and "themeDark"-that specify color schemes for various UI elements. Each theme includes default and secondary background colors, text colors, and specific color sets for various graphs and charts. These themes can be used to maintain consistent styling across a web application.                                               | theme/palette.ts      |

</details>

<details closed><summary>Types</summary>

| File             | Summary                                                                                                                                                                                                                                                                                                                                                                                                                              | Module                 |
|:-----------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----------------------|
| governance.ts    | The provided code snippet exports a type definition for a governance structure consisting of several nested objects. The Governance object contains information on PGIP, PGP amount, PGP categories and proposals. The Miscellaneous object contains information on Push Grants and Push Integrations. Each object contains specific keys and values with string or number data types.                                               | types/governance.ts    |
| otherStyled.ts   | The code provides interfaces for different types of style properties that can be used in UI components. There are interfaces for managing color, font, padding, and hover effects among others. These interfaces can be used to create and customize different UI components.                                                                                                                                                        | types/otherStyled.ts   |
| context.ts       | The provided code snippet defines various types used for data contexts and themes, including SubscriberType, NotificationType, ChannelType, ChainType, TimeFilterType, DataContextType, and ThemeContextType. These types are used to define data structure and bindings in the application.                                                                                                                                         | types/context.ts       |
| sharedStyling.ts | The provided code snippet consists of several TypeScript interfaces that define the different props used in styling components, such as sections, items, headings, buttons, spans, and images. These interfaces define the various properties that these components can have, such as background color, font size, padding, and more, to ensure consistency and maintainability in the styling of the application.                   | types/sharedStyling.ts |
| theme.ts         | The provided code consists of an interface that defines the properties of a theme, including color schemes for backgrounds, text, graphs, and more. The interface includes properties for primary and secondary colors as well as the colors for different graph and chart types.                                                                                                                                                    | types/theme.ts         |
| otherTypes.ts    | The provided code snippet defines a TypeScript type called LeaderboardType, which includes properties such as channel, icon, name, subscriber, timestamp, url, and trend. This type can be used to define the structure of objects that represent leaderboard data, including information about channels, subscribers, and trending content. The timestamp and url properties are optional, while the other properties are required. | types/otherTypes.ts    |

</details>

<details closed><summary>Utils</summary>

| File         | Summary                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Module             |
|:-------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-------------------|
| constants.js | The code snippet defines various constants such as routes, dapp links, data keys, and time filters. It also defines an array of supported chains with their respective icons, names, and values. These constants can be used in various parts of the application to maintain consistency and improve maintainability.                                                                                                                                                                 | utils/constants.js |
| helpers.ts   | The code snippet provides a set of utility functions for common date and number formatting and manipulation tasks. It also includes a function that generates an array of dates between a given start and end date, with a specified interval. The external libraries imported are date-fns, lodash, and numeral.                                                                                                                                                                     | utils/helpers.ts   |
| api.ts       | This code snippet exports a collection of async functions that make API calls to a certain backend API endpoint. These functions include login, fetching notifications, subscribers, analytics leaderboard, governance data, and chat-related data. It utilizes the `axios` library for making HTTP requests with methods that take in and return data as requested. Error handling is done through `try...catch` blocks, and console logging is employed for all errors encountered. | utils/api.ts       |

</details>

---

## Getting Started

### 🖥 Installation

1. Clone the push-analytics-dashboard repository:
```sh
git clone https://github.com/ethereum-push-notification-service/push-analytics-dashboard
```

2. Change to the project directory:
```sh
cd push-analytics-dashboard
```

3. Install the dependencies:
```sh
npm install
```

### 🤖 Using push-analytics-dashboard

```sh
npm run build && node dist/main.js
```

### 🧪 Running Tests
```sh
npm test
```

## Resources
- **[Website](https://push.org)** To checkout our Product.
- **[Docs](https://docs.push.org/developers/)** For comprehensive documentation.
- **[Blog](https://medium.com/push-protocol)** To learn more about our partners, new launches, etc.
- **[Discord](discord.gg/pushprotocol)** for support and discussions with the community and the team.
- **[GitHub](https://github.com/ethereum-push-notification-service)** for source code, project board, issues, and pull requests.
- **[Twitter](https://twitter.com/pushprotocol)** for the latest updates on the product and published blogs.


## Contributing

Push Protocol is an open source Project. We firmly believe in a completely transparent development process and value any contributions. We would love to have you as a member of the community, whether you are assisting us in bug fixes, suggesting new features, enhancing our documentation, or simply spreading the word. 

- Bug Report: Please create a bug report if you encounter any errors or problems while utilising the Push Protocol.
- Feature Request: Please submit a feature request if you have an idea or discover a capability that would make development simpler and more reliable.
- Documentation Request: If you're reading the Push documentation and believe that we're missing something, please create a docs request.


Read how you can contribute <a href="https://github.com/ethereum-push-notification-service/push-sdk/blob/main/contributing.md">HERE</a>

Not sure where to start? Join our discord and we will help you get started!


<a href="discord.gg/pushprotocol" title="Join Our Community"><img src="https://www.freepnglogos.com/uploads/discord-logo-png/playerunknown-battlegrounds-bgparty-15.png" width="200" alt="Discord" /></a>

## License
Check out our License <a href='https://github.com/ethereum-push-notification-service/push-sdk/blob/main/license-v1.md'>HERE </a>
