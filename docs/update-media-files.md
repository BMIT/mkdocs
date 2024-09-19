# Best Practices for Updating Media Items in Sitecore

Updating media items in Sitecore, such as images , videos or PDFs, is a straightforward process. However, please remember these items are cached in a Content Delivery Network (CDN) or in clients' browsers, immediate reflection of these changes can be a challenge if the steps are not followed. 

## Understanding Sitecore's Media Item Update

When you replace a media file in the Sitecore Media Library by detaching and attaching the media while keeping the same Item ID, Sitecore automatically updates all the references to this item across the site. This means you don't need to manually update individual links.

## Why rename the Sitecore name of the media item

We use CDN to speed up loading of pages and media. CDNs cache content based on URLs. A renamed file has a new URL, which isn't cached yet. This helps it deliver the changed files immediately. 

!!! Note "FAQ" 

    FAQ answered in this page

    1. What is the process for updating a media item in Sitecore?
    2. How does updating a media file in Sitecore affect its links on various pages?
    3. Is it necessary to rename a media item in Sitecore when updating it? (Attaching and Detaching)
    4. I updated PDF / Image / Video in Media Library and published but I can't see it on the front end?

