# Guide to Unpublish an Article in Sitecore and Reset from Cloudflare

## Locate the Article
- In the content tree on the left, navigate to the bucket where your articles are stored.
- Use the search functionality if necessary to locate the specific article you want to unpublish.

## 1. Unpublish the Article
- Once you've selected the article, go to the `Publish` tab in the ribbon at the top.
- Click on the `Change` button in the `Publishing` section.
- In the dialog that appears, select the Item tab and uncheck the `Publishable` checkbox.
- Click `OK` to save the changes.

### Publish the Changes (You need to publish this change to take effect)
- Still in the `Publish` tab, click on the `Publish` button.
- In the dialog that appears, ensure that the `Publish Mode` is set to `Smart Publish`.
- Click `Publish`. This will remove the article from the live website but keep it in the content editor for future use.


## 2. Resetting the Article from Cloudflare - To remove from server cache

After unpublishing from Sitecore, you need to reset to ensure users see the updated content.

### Navigate to the Reset Tool
- Open a browser and go to [https://reset.beda.systems/reset](https://reset.beda.systems/reset).

### Enter the Article's Link
- In the provided field, paste the full URL of the article you've unpublished.

### Initiate the Reset
- Click the `Reset`.
- Wait for a confirmation message to ensure it has been reset. 

## 3. Contact Senthil for Re-index 

!!! Info "Update"

    There was a bug which required Senthil to re-index and this is no longer required.

### Verification
- To verify that the article has been unpublished and the cache cleared, navigate to the article's URL in a new browser or incognito window. You should no longer be able to access the article.

<iframe src="https://scribehow.com/embed/Unpublish_Article__ueexhONlSPieoa6QzxRhaQ?as=scrollable&skipIntro=true" width="100%" height="640" allowfullscreen frameborder="0"></iframe>

!!! Note "FAQ"

    1. I unpublised my article from Sitecore but is stil showing on the website?
    2. Why is my article still showing in search after I unpublished?
    3. How do I view my changes immediately in the Frontend?
