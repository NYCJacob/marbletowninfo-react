React version of marbletowninfo.org.  A local government information website.
- integrates mapbox map and tax parcel shape files from overlayed with custom borders showing zoning
- follows draft legislation changes
- lists local board resolutions and votes


-   Accordion for townboard component is based off react-responsive-accordion [repo](https://github.com/glennflanagan/react-responsive-accordion)
which depends on [react-collapsible](https://github.com/glennflanagan/react-collapsible)
Unfortunately not being maintained and not updated for React 16 and fontawesome icons are broken.  I forked it, made some changes and imported it.
The two files are in the reactrespaccordion directory.

- **changed accordion class to taken an additional prop optionalClassName to allow customized class names enabling per component styling such as
when nesting accordions.**

~~Accordion component adapted from Egghead.io tutorial by Trevor Miller~~ [repo](https://github.com/trevordmiller/example-react-accordion)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).